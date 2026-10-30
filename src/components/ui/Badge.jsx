export default function Badge({ children, variant, className = '' }) {
  const classes = ['badge', variant ? `badge--${variant}` : '', className]
    .filter(Boolean)
    .join(' ')
  return <span className={classes}>{children}</span>
}