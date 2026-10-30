export default function Input({ label, hint, error, className = '', ...props }) {
  return (
    <div className={`field ${className}`}>
      {label && <label className="field__label">{label}</label>}
      {props.textarea ? (
        <textarea className="field__textarea" {...props} />
      ) : (
        <input className="field__input" {...props} />
      )}
      {error ? (
        <span className="field__error">{error}</span>
      ) : hint ? (
        <span className="field__hint">{hint}</span>
      ) : null}
    </div>
  )
}