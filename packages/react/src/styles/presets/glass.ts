export const className = 'ppi-style-glass'
export const css = `
.ppi-style-glass {
  border-radius: 18px;
  padding: 14px;
  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.18) 0%,
      rgba(255,255,255,0.04) 100%
    ),
    color-mix(in srgb, currentColor 5%, transparent);
  backdrop-filter: blur(12px) saturate(1.5);
  -webkit-backdrop-filter: blur(12px) saturate(1.5);
  border: 1px solid color-mix(in srgb, currentColor 12%, rgba(255,255,255,0.35));
}
`
