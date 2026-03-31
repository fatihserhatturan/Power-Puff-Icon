import { useState, useMemo, useRef } from 'react'
import type { IconSize, IconFlip, IconVariant, AnimationSpeed } from '@power-puff/core'
import { SearchIcon, CheckIcon } from '@power-puff/react'
import { icons } from '../data/iconRegistry'
import type { IconEntry } from '../data/iconRegistry'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toPascalCase(str: string): string {
  return str.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
}

interface PropState {
  variant?: IconVariant
  size: IconSize
  color: string
  fill: string
  strokeWidth: number
  strokeLinecap: 'butt' | 'round' | 'square'
  strokeLinejoin: 'miter' | 'round' | 'bevel'
  rotate: number
  flip?: IconFlip
  spin: boolean
  pulse: boolean
  speed: AnimationSpeed
}

const DEFAULTS: PropState = {
  variant: undefined,
  size: '2xl',
  color: 'currentColor',
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rotate: 0,
  flip: undefined,
  spin: false,
  pulse: false,
  speed: 'normal',
}

function buildSnippet(name: string, s: PropState): string {
  const attrs: string[] = []
  if (s.variant) attrs.push(`variant="${s.variant}"`)
  if (s.size !== 'md') attrs.push(`size="${s.size}"`)
  if (s.color !== 'currentColor') attrs.push(`color="${s.color}"`)
  if (s.fill !== 'none') attrs.push(`fill="${s.fill}"`)
  if (s.strokeWidth !== 2) attrs.push(`strokeWidth={${s.strokeWidth}}`)
  if (s.strokeLinecap !== 'round') attrs.push(`strokeLinecap="${s.strokeLinecap}"`)
  if (s.strokeLinejoin !== 'round') attrs.push(`strokeLinejoin="${s.strokeLinejoin}"`)
  if (s.rotate !== 0) attrs.push(`rotate={${s.rotate}}`)
  if (s.flip) attrs.push(`flip="${s.flip}"`)
  if (s.spin) attrs.push('spin')
  if (s.pulse) attrs.push('pulse')
  if ((s.spin || s.pulse) && s.speed !== 'normal') attrs.push(`speed="${s.speed}"`)

  if (attrs.length === 0) return `<${name} />`
  if (attrs.length <= 2) return `<${name} ${attrs.join(' ')} />`
  return `<${name}\n  ${attrs.join('\n  ')}\n/>`
}

const SIZES: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Playground() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<IconEntry>(icons[0])
  const [state, setState] = useState<PropState>(DEFAULTS)
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  function set<K extends keyof PropState>(key: K, value: PropState[K]) {
    setState(prev => ({ ...prev, [key]: value }))
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return icons
    return icons.filter(i =>
      i.meta.name.includes(q) ||
      i.meta.category.includes(q) ||
      i.meta.tags.some(t => t.includes(q))
    )
  }, [search])

  const iconName = `${toPascalCase(selected.meta.name)}Icon`
  const snippet = buildSnippet(iconName, state)
  const IconComponent = selected.component

  function handleCopy() {
    navigator.clipboard.writeText(snippet).catch(() => {})
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 1400)
  }

  return (
    <div className="playground">

      {/* ── Icon Picker ─────────────────────────────── */}
      <div className="pg-picker">
        <div className="pg-picker-top">
          <div className="pg-search-wrap">
            <div className="pg-search-icon-wrap">
              <SearchIcon size="xs" />
            </div>
            <input
              className="pg-search-input"
              placeholder="Search icons…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <span className="pg-picker-count">{filtered.length} of {icons.length}</span>
        </div>

        <div className="pg-picker-grid">
          {filtered.map(entry => {
            const Ic = entry.component
            const active = entry.meta.name === selected.meta.name
            return (
              <button
                key={entry.meta.name}
                className={`pg-picker-item${active ? ' active' : ''}`}
                onClick={() => setSelected(entry)}
                title={entry.meta.name}
              >
                <Ic size="sm" />
                <span className="pg-picker-name">{entry.meta.name}</span>
              </button>
            )
          })}
          {filtered.length === 0 && (
            <p className="pg-picker-empty">No icons found</p>
          )}
        </div>
      </div>

      {/* ── Panel ───────────────────────────────────── */}
      <div className="pg-panel">

        {/* Preview */}
        <div className="pg-preview">
          <div className="pg-preview-icon">
            <IconComponent
              size={state.size}
              color={state.color !== 'currentColor' ? state.color : undefined}
              fill={state.fill !== 'none' ? state.fill : undefined}
              strokeWidth={state.strokeWidth}
              strokeLinecap={state.strokeLinecap}
              strokeLinejoin={state.strokeLinejoin}
              rotate={state.rotate !== 0 ? state.rotate : undefined}
              flip={state.flip}
              variant={state.variant}
              spin={state.spin || undefined}
              pulse={state.pulse || undefined}
              speed={state.speed}
            />
          </div>
          <div className="pg-preview-meta">
            <span className="pg-preview-name">{iconName}</span>
            <span className="pg-preview-cat">{selected.meta.category}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="pg-controls">

          {/* Variant */}
          <div className="pg-group">
            <span className="pg-label">Variant</span>
            <div className="pg-row">
              {(['outline', 'bold', 'sharp'] as IconVariant[]).map(v => (
                <button
                  key={v}
                  className={`pg-btn${(state.variant ?? 'outline') === v ? ' active' : ''}`}
                  onClick={() => set('variant', v === 'outline' ? undefined : v)}
                >{v}</button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="pg-group">
            <span className="pg-label">Size</span>
            <div className="pg-row">
              {SIZES.map(s => (
                <button
                  key={String(s)}
                  className={`pg-btn${state.size === s ? ' active' : ''}`}
                  onClick={() => set('size', s)}
                >{s}</button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="pg-group">
            <span className="pg-label">Color</span>
            <div className="pg-color-row">
              <input
                type="color"
                className="pg-color-swatch"
                value={state.color === 'currentColor' ? '#000000' : state.color}
                onChange={e => set('color', e.target.value)}
              />
              <input
                type="text"
                className="pg-color-text"
                value={state.color}
                onChange={e => set('color', e.target.value)}
              />
              <button
                className={`pg-btn${state.color === 'currentColor' ? ' active' : ''}`}
                onClick={() => set('color', 'currentColor')}
              >inherit</button>
            </div>
          </div>

          {/* Fill */}
          <div className="pg-group">
            <span className="pg-label">Fill</span>
            <div className="pg-color-row">
              <input
                type="color"
                className="pg-color-swatch"
                style={{ opacity: state.fill === 'none' ? 0.4 : 1 }}
                value={state.fill === 'none' ? '#ff4444' : state.fill}
                onChange={e => set('fill', e.target.value)}
              />
              <input
                type="text"
                className="pg-color-text"
                value={state.fill}
                onChange={e => set('fill', e.target.value)}
              />
              <button
                className={`pg-btn${state.fill === 'none' ? ' active' : ''}`}
                onClick={() => set('fill', state.fill === 'none' ? '#ff4444' : 'none')}
              >none</button>
            </div>
          </div>

          {/* Stroke Width */}
          <div className="pg-group">
            <span className="pg-label">
              Stroke Width <em className="pg-value">{state.strokeWidth}</em>
            </span>
            <input
              type="range"
              className="stroke-slider"
              min={0.5} max={4} step={0.25}
              value={state.strokeWidth}
              onChange={e => set('strokeWidth', parseFloat(e.target.value))}
            />
          </div>

          {/* Rotate */}
          <div className="pg-group">
            <span className="pg-label">
              Rotate <em className="pg-value">{state.rotate}°</em>
            </span>
            <input
              type="range"
              className="stroke-slider"
              min={0} max={359} step={1}
              value={state.rotate}
              onChange={e => set('rotate', parseInt(e.target.value, 10))}
            />
          </div>

          {/* Linecap */}
          <div className="pg-group">
            <span className="pg-label">Linecap</span>
            <div className="pg-row">
              {(['round', 'butt', 'square'] as const).map(v => (
                <button
                  key={v}
                  className={`pg-btn${state.strokeLinecap === v ? ' active' : ''}`}
                  onClick={() => set('strokeLinecap', v)}
                >{v}</button>
              ))}
            </div>
          </div>

          {/* Linejoin */}
          <div className="pg-group">
            <span className="pg-label">Linejoin</span>
            <div className="pg-row">
              {(['round', 'miter', 'bevel'] as const).map(v => (
                <button
                  key={v}
                  className={`pg-btn${state.strokeLinejoin === v ? ' active' : ''}`}
                  onClick={() => set('strokeLinejoin', v)}
                >{v}</button>
              ))}
            </div>
          </div>

          {/* Flip */}
          <div className="pg-group pg-group--full">
            <span className="pg-label">Flip</span>
            <div className="pg-row">
              {(['none', 'horizontal', 'vertical', 'both'] as const).map(v => (
                <button
                  key={v}
                  className={`pg-btn${(!state.flip && v === 'none') || state.flip === v ? ' active' : ''}`}
                  onClick={() => set('flip', v === 'none' ? undefined : v as IconFlip)}
                >{v}</button>
              ))}
            </div>
          </div>

          {/* Animation */}
          <div className="pg-group pg-group--full">
            <span className="pg-label">Animation</span>
            <div className="pg-anim-row">
              <button
                className={`pg-toggle${state.spin ? ' active' : ''}`}
                onClick={() => {
                  const next = !state.spin
                  setState(p => ({ ...p, spin: next, pulse: next ? false : p.pulse }))
                }}
              >
                <span className="pg-toggle-track"><span className="pg-toggle-thumb" /></span>
                Spin
              </button>
              <button
                className={`pg-toggle${state.pulse ? ' active' : ''}`}
                onClick={() => {
                  const next = !state.pulse
                  setState(p => ({ ...p, pulse: next, spin: next ? false : p.spin }))
                }}
              >
                <span className="pg-toggle-track"><span className="pg-toggle-thumb" /></span>
                Pulse
              </button>

              {(state.spin || state.pulse) && (
                <>
                  <span className="pg-anim-sep" />
                  <div className="pg-row">
                    {(['slow', 'normal', 'fast'] as AnimationSpeed[]).map(v => (
                      <button
                        key={v}
                        className={`pg-btn${state.speed === v ? ' active' : ''}`}
                        onClick={() => set('speed', v)}
                      >{v}</button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Code snippet */}
        <div className="pg-code-wrap">
          <div className="pg-code-header">
            <span className="pg-code-label">JSX</span>
            <button className="pg-copy-btn" onClick={handleCopy}>
              {copied && <CheckIcon size="xs" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="pg-code"><code>{snippet}</code></pre>
        </div>

      </div>
    </div>
  )
}
