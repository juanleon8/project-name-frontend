export default function Card({ title, subtitle, children, footer, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card__title">{title}</h3>}
      {subtitle && <p className="card__subtitle">{subtitle}</p>}
      <div className="card__body">{children}</div>
      {footer && <div className="card__footer">{footer}</div>}
    </div>
  )
}