import React from 'react'
import { Card } from 'react-bootstrap'
import Menu from './Menu'

export default function Fotos

  () {
  const Fotos = [{
    link: "Fotos/cartel.png",
    nombre: "Festival Mirador Sur",
    desc: "Nuestro cartel que simboliza nuestra union, desde aquella noche que somos inseparables"
  },
    {
    link: "Fotos/AnaDraw.jpg",
    nombre: "Ana's Draw",
    desc: "Primera vez que te vi, ame tanto esa foto que me queria guardarla como una pintura"
  },
  {
    link: "Fotos/FirstCorte.jpg",
    nombre: "Corte de Pelo",
    desc: "Primera vez que me fui a cortar el cabello a esas super peluquerias de gente moderna"
  },
  {
    link: "Fotos/HolaIvi.jpg",
    nombre: "Hola Ivi <3",
    desc: "Siempre recuerdo la primera sorpresa que me hiciste, el video con el cartel con mi nombre, por estar captado con la camara delantera sale invertido pero amo igual ese video"
  },
  {
    link: "Fotos/IvanDraw.jpg",
    nombre: "Ivan Draw by Anita",
    desc: "Nunca olvidare la primera carta por mi cumpleaños, siempre siendo tan unica y bella. Amé mi representacion jajaja"
  },
  {
    link: "Fotos/alfajor.jpg",
    nombre: "Primer Alfajor en tu Honor",
    desc: "Un dia me regalaron en casa un alfajor y decidí compartirlo contigo"
  },
  {
    link: "Fotos/AnaDraw2.jpg",
    nombre: "Ana's Draw 2.0",
    desc: "Una foto que es donde mas bella te he vista y que tambien quise pasar a su version pintura"
  },
  {
    link: "Fotos/vaca.jpg",
    nombre: "Nuestra Vaquita",
    desc: "La referencia mas bonita para pensar en una vida juntos, nuestra Vaca <3"
  },{
    link: "Fotos/pastelivan.jpg",
    nombre: "Mi torta 2022 ",
    desc: "Nunca voy a olvidar este maravilloso presente amor de mi vida, eternamente agradecido"
  },{
    link: "Fotos/SomosHombres.jpg",
    nombre: "Ahora somos Hombres",
    desc: "Bigote de alga de papel hecho para el cumpleaños de Caro"
  },{
    link: "Fotos/exitosIvan.jpg",
    nombre: "Primer Cartel",
    desc: "Nunca voy a olvidar esa tarde donde me inspire para escribir esta obra de arte jajaja Lo mas importante, aprobaste jeje"
  },{
    link: "Fotos/robot.jpg",
    nombre: "Acuarela de Robot",
    desc: "Cuando me mostraste tu arte y entre ellas salio esta belleza, la amé demasiado "
  },{
    link: "Fotos/TeoDiseño.jpg",
    nombre: "Teo",
    desc: "Prototipo final de Teo, el niño hongo vampiro <3"
  },{
    link: "Fotos/TeoAniver.jpg",
    nombre: "Teo version 1er Aniversario",
    desc: "El regalo por nuestro primer aniversario de conocernos, una linda cosita"
  },{
    link: "Fotos/cartalientos.jpg",
    nombre: "Primera Carta Oficial",
    desc: "La primera version de carta para aquellos dias dificiles en la universidad que supimos superar"
  }
  ]

  return (
    <div>
      <Menu />
      <h1 className="titGal"> Galeria de Fotos</h1>
      <div className="gridfotos" >
        {Fotos.map((foto) => {
          return (
            <Card style={{ width: '20rem'}} >
              <Card.Img variant="top" src={foto.link} />
              <Card.Body>
                <Card.Title>{foto.nombre}</Card.Title>
                <Card.Text>
                  <i> {foto.desc}</i>
                </Card.Text>
              </Card.Body>
            </Card>

          )

        })

        }
      </div>


    </div>
  )
}
