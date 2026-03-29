/**
 * generate-icons.ts
 *
 * Reads SVG files from /svgs and generates:
 *   - packages/react/src/icons/<Name>.tsx    (React component)
 *   - packages/react/src/icons/index.ts      (barrel export)
 *
 * Usage:
 *   npm run generate
 *
 * SVG files should be named in kebab-case (e.g. arrow-up.svg).
 * Each SVG must use a 24x24 viewBox.
 */

import fs from 'node:fs'
import path from 'node:path'

const SVG_DIR = path.resolve('svgs')
const REACT_ICONS_DIR = path.resolve('packages/react/src/icons')

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('')
}

/**
 * Strip the outer <svg …> wrapper and return only the inner elements.
 * Also removes XML declarations, comments, and title/desc tags.
 */
function extractSvgInner(svgContent: string): string {
  return svgContent
    .replace(/<\?xml[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')
    .replace(/<desc[^>]*>[\s\S]*?<\/desc>/gi, '')
    .replace(/<svg[^>]*>/i, '')
    .replace(/<\/svg>/i, '')
    .trim()
}

/**
 * Convert SVG attribute names to JSX-compatible camelCase/React names.
 */
function svgToJsx(inner: string): string {
  return inner
    .replace(/\bclass=/g, 'className=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bstroke-dasharray=/g, 'strokeDasharray=')
    .replace(/\bstroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(/\bclip-path=/g, 'clipPath=')
    .replace(/\bfont-size=/g, 'fontSize=')
    .replace(/\bfont-family=/g, 'fontFamily=')
    .replace(/\btext-anchor=/g, 'textAnchor=')
    .replace(/\bxlink:href=/g, 'xlinkHref=')
    .replace(/\bstop-color=/g, 'stopColor=')
    .replace(/\bstop-opacity=/g, 'stopOpacity=')
}

function generateReactComponent(name: string, svgFile: string, jsxInner: string): string {
  const componentName = `${name}Icon`
  return `// This file is auto-generated. Do not edit manually.
// Source: svgs/${svgFile}
import { forwardRef } from 'react'
import { Icon } from '../components/Icon'
import type { IconProps } from '../components/Icon'

export const ${componentName} = forwardRef<SVGSVGElement, IconProps>(function ${componentName}(props, ref) {
  return (
    <Icon ref={ref} {...props}>
      ${jsxInner}
    </Icon>
  )
})

${componentName}.displayName = '${componentName}'
`
}

function generateBarrelExport(names: string[]): string {
  const lines = names.map((n) => `export { ${n}Icon } from './${n}'`)
  return `// This file is auto-generated. Do not edit manually.\n${lines.join('\n')}\n`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (!fs.existsSync(SVG_DIR)) {
    console.log('⚠  No svgs/ directory found. Create it and add SVG files.')
    process.exit(0)
  }

  const svgFiles = fs.readdirSync(SVG_DIR).filter((f) => f.endsWith('.svg'))

  if (svgFiles.length === 0) {
    console.log('⚠  No SVG files found in svgs/. Nothing to generate.')
    process.exit(0)
  }

  fs.mkdirSync(REACT_ICONS_DIR, { recursive: true })

  const generatedNames: string[] = []

  for (const file of svgFiles) {
    const baseName = path.basename(file, '.svg')
    const pascalName = toPascalCase(baseName)
    const svgContent = fs.readFileSync(path.join(SVG_DIR, file), 'utf-8')
    const inner = svgToJsx(extractSvgInner(svgContent))

    if (!inner) {
      console.warn(`  ⚠ Skipping ${file} — could not extract SVG content`)
      continue
    }

    const componentCode = generateReactComponent(pascalName, file, inner)
    fs.writeFileSync(path.join(REACT_ICONS_DIR, `${pascalName}.tsx`), componentCode, 'utf-8')
    generatedNames.push(pascalName)
    console.log(`  ✓ Generated ${pascalName}Icon`)
  }

  // Write barrel index
  fs.writeFileSync(
    path.join(REACT_ICONS_DIR, 'index.ts'),
    generateBarrelExport(generatedNames),
    'utf-8',
  )

  console.log(`\n✅ Generated ${generatedNames.length} icon(s) → packages/react/src/icons/`)
}

main()
