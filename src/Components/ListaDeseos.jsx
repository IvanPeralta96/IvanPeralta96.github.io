import React from 'react'
import { ListGroup } from 'react-bootstrap';


import Menu from './Menu'
function ListaDeseos() {
  const Deseos = [
    { wish: "Lograr comprar nuestra casita" },
    { wish: "Poder viajar por casi todos los paises del mundo" },
    { wish: "Tener nuestro primer perrito (o Vaca)" },
    { wish: "Poder ser grandes profesionales" },
    { wish: "Poder hacer nuestro Tour de comida probando lo mejor de lo mejor" },
    { wish: "Tener nuestra sala en casa donde podamos jugar y ver peliculas como un cine" },
    { wish: "Tener nuestra casa estilo victoriana" },
    { wish: "Tener niños sanos y hermosos" },
    { wish: "Disfrutar uno del otro, de las virtudes que tenemos" },
    { wish: "Crear un legado juntos, formar nuestra familia" },
    { wish: "Ayudar a nuestras familias y cuidarlos para que siempre estén bien" },
    { wish: "Ir a ver Cold Play" },
    { wish: "Ir a Disneyland" },
    { wish: "Ir a acampar en medio de la naturaleza" },
    { wish: "Seguir soñando juntos y continuar escribiendo nuestra historia" }
  ]
  return (
<>

      <Menu />
      <div >
      <div className='titDeseo'>Caja de Deseos</div>
      <ListGroup variant="flush" className=''>
        {Deseos.map((deseo) => {
          return (
            <ListGroup.Item as='li' className='deseo'><object data="Gral/deseo.svg"   aria-label="letter"  width={"24px"}/>{" "}{deseo.wish}</ListGroup.Item>
          )
        })
        }
      </ListGroup>

    </div>

</>
    

  );
}

export default ListaDeseos;