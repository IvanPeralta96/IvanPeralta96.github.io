import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Menu from './Menu'

export default function Inicio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Menu />
      <div className='inicio'>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carrusel">
          <Carousel.Item>
            <img
              className="libroOBA"
              src="Gral/libro.png"
              alt="First slide"
            />
            <Carousel.Caption className='textoCarru'>
              <h3>Nuestro Libro de Aventuras</h3>
              <p>Vamos para comenzar a escribir la historia más bonita que hayamos vivido, aquí irán todas aquellas que soñemos y vayamos haciendo juntos</p>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="libroOBA"
              src="Gral/CyE.png"
              alt="First slide"
            />
            <Carousel.Caption className='textoCarru'>
              <h3>Vivir Nuestros Sueños</h3>
              <p>Soñar es lo más bello que podemos hacer juntos, dándonos la oportunidad de crecer y vivirlos uno a la par del otro</p>
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="libroOBA"
              src="Gral/end.png"
              alt="First slide"
            />
            <Carousel.Caption className='textoCarru'>
              <h3>Mirar Atras y Sonreir</h3>
              <p>Hasta el último día que pueda quiero disfrutarlo contigo, anhelar que todo lo que hayamos deseado se haya vuelto realidad y estar en paz por si un día nos toca separarnos podamos seguir con lo aprendimos uno del otro, ser mejores y felices </p>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>

      </div>
      <div className='videoIn'>

        <h2 className='textoIni'  ><i>"Este es un pequeño intento para comenzar a materializar todo eso que nos confiamos desde el día que decidimos juntar nuestros caminos, mi meta será siempre poder sacarte una sonrisa y verte feliz porque sin dudas es las grandes dichas que Dios me ha dado hasta el día de hoy. Ansioso por seguir creando cosas juntos mi amor y cumplir con todo eso que nos prometimos. Te amo mucho amor de mi vida"</i> atte. Piedrota</h2>
      </div>

    </>

  );
}
