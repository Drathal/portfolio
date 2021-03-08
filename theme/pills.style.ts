interface IStyle {
  [key: string]: string
}

export const pillsStyle = (): IStyle => ({
  fontSize: '0.85rem',
  background: '#0a7500aa',
  padding: '0.25rem 0.8rem 0.3rem',
  borderRadius: '2rem',
  color: '#fff',
  lineHeight: '2rem',
  whiteSpace: 'nowrap'
})

export const replacePills = (text: string, className: string): string =>
  text
    .split('{{')
    .join(`<span class="${className}">`)
    .split('}}')
    .join('</span>')
