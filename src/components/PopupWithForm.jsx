import { useEffect } from 'react'

export default function PopupWithForm({
  isOpen,
  title,
  children,
  submitText = 'Guardar',
  onClose,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose && onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  )
}