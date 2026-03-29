import { useMemo } from 'react'
import { icons } from '../data/iconRegistry'
import type { IconEntry } from '../data/iconRegistry'

export function useIconSearch(query: string, category: string): IconEntry[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase()
    return icons.filter((entry) => {
      const matchesCategory = category === 'all' || entry.meta.category === category
      if (!matchesCategory) return false
      if (!q) return true
      return (
        entry.meta.name.includes(q) ||
        entry.meta.category.includes(q) ||
        entry.meta.tags.some((tag) => tag.includes(q))
      )
    })
  }, [query, category])
}
