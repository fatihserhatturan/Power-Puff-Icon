import { useState } from 'react'
import type { IconSize } from '@power-puff/core'
import { SearchBar } from './components/SearchBar'
import { PropControls } from './components/PropControls'
import { IconGrid } from './components/IconGrid'
import { useIconSearch } from './hooks/useIconSearch'
import { icons } from './data/iconRegistry'

export function App() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [size, setSize] = useState<IconSize>('lg')
  const [color, setColor] = useState('#18181b')
  const [strokeWidth, setStrokeWidth] = useState(2)
  const [dark, setDark] = useState(false)

  const results = useIconSearch(query, category)

  return (
    <div className={`app ${dark ? 'dark' : ''}`}>
      <header className="header">
        <div className="header-inner">
          <div className="header-brand">
            <span className="header-logo">⚡</span>
            <div>
              <h1 className="header-title">Power Puff Icon</h1>
              <p className="header-subtitle">{icons.length} icons · 8 categories · React</p>
            </div>
          </div>

          <div className="header-actions">
            <a
              href="https://www.npmjs.com/package/@power-puff/react"
              className="header-badge"
              target="_blank"
              rel="noreferrer"
            >
              npm
            </a>
            <button
              className="theme-toggle"
              onClick={() => {
                setDark((d) => !d)
                setColor(dark ? '#18181b' : '#f4f4f5')
              }}
              aria-label="Toggle dark mode"
            >
              {dark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        <aside className="sidebar">
          <PropControls
            size={size}
            color={color}
            strokeWidth={strokeWidth}
            onSizeChange={setSize}
            onColorChange={setColor}
            onStrokeWidthChange={setStrokeWidth}
          />

          <div className="install-box">
            <p className="install-label">Install</p>
            <code className="install-code">npm i @power-puff/react</code>
          </div>

          <div className="install-box">
            <p className="install-label">Usage</p>
            <code className="install-code">
              {'import { SearchIcon }'}
              <br />
              {"from '@power-puff/react'"}
            </code>
          </div>

          <p className="click-hint">Click any icon to copy its import statement.</p>
        </aside>

        <section className="content">
          <SearchBar
            query={query}
            category={category}
            onQueryChange={setQuery}
            onCategoryChange={setCategory}
          />

          <p className="result-count">
            {results.length} of {icons.length} icons
          </p>

          <IconGrid
            icons={results}
            size={size}
            color={color}
            strokeWidth={strokeWidth}
          />
        </section>
      </main>
    </div>
  )
}
