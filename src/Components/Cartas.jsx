import React from 'react'
import Menu from './Menu'

export default function Cartas() {

  const Letters = [{
    name: "Carta Feliz Cumpleaños 2022 (Ana)",
    imag: "Cartas/fcAna2022.png"
  },{
    name: "Carta Feliz Cumpleaños 2021 (Ana)",
    imag: "Cartas/FcAna2021.png"
  },
  {
    name: "Carta Oso Pardo",
    imag: "Cartas/Pardo.png"
  },
  {
    name: "Carta para Mami",
    imag: "Cartas/Kenia.png"
  },
  {
    name: "Carta Feliz Cumpleaños 2022 (Iván)",
    imag: "Cartas/Ivan2022.png"
  },
  {
    name: "Carta Feliz Cumpleaños 2021 (Iván)",
    imag: "Cartas/Ivan2021.png"
  }
  ]
  return (

    <>
      <Menu />
      <div className='letters'>
        {Letters.map((letter) => {
          return (
            <p>
              <p> {letter.name}</p> 
              <img src={letter.imag} alt="letter" ></img>
            </p>
          )
        })
        }{"  "}
      </div>

    </>
  )
}
