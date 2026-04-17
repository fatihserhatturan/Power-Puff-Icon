export const className = 'ppi-style-shadow'
export const css = `
.ppi-style-shadow {
  border-radius: 14px;
  padding: 14px;
  background: color-mix(in srgb, currentColor 5%, Canvas);
  border: 1px solid color-mix(in srgb, currentColor 12%, rgba(0,0,0,0.06));
  box-shadow:
    0 1px 2px color-mix(in srgb, currentColor 8%, rgba(0,0,0,0.05)),
    0 4px 8px color-mix(in srgb, currentColor 10%, rgba(0,0,0,0.07)),
    0 12px 24px color-mix(in srgb, currentColor 12%, rgba(0,0,0,0.06));
}

@media (prefers-color-scheme: dark) {
  .ppi-style-shadow {
    border-color: color-mix(in srgb, currentColor 12%, rgba(255,255,255,0.06));
    box-shadow:
      0 1px 2px color-mix(in srgb, currentColor 15%, rgba(0,0,0,0.3)),
      0 4px 8px color-mix(in srgb, currentColor 18%, rgba(0,0,0,0.35)),
      0 12px 24px color-mix(in srgb, currentColor 20%, rgba(0,0,0,0.4));
  }
}
`
