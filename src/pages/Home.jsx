import imgSec2 from '../images/img_sec2.jpg'

export default function Home() {
  return (
    <section className="main-section">
      <img
        className="section-about__img"
        src={imgSec2}
        alt="Autor"
      />
      <div className="section-about__text">
        <h2>Acerca del autor</h2>
        <p>
          Este bloque describe al autor del proyecto. Aquí debe indicar tu
          nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
          También puedes hablar de tu experiencia con Practicum, de lo que
          aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
        </p>
      </div>
    </section>
  )
}