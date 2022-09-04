import React from "react";
import Menu from "./Menu";

const Canciones = () => {
  const Songs = [{
    titulo: "Pensando em você",
    artista:"Paulinho Moska",
    link: "https://www.youtube.com/embed/9Jm5bu_hT20"
  }, {
    titulo: "Until I Found You",
    artista:"Stephen Sanchez",
    link: "https://www.youtube.com/embed/GxldQ9eX2wo"

  },
  {
    titulo: "A Sky Full Of Stars",
    artista:"Coldplay",
    link: "https://www.youtube.com/embed/VPRjCeoBqrI"

  },
  {
    titulo: "Can't Take My Eyes Off You",
    artista:"Shawn Mendes",
    link: "https://www.youtube.com/embed/Dv9iLR5Cqio"

  },
  {
    titulo: "Un vestido y un amor",
    artista:"Fito Páez",
    link: "https://www.youtube.com/embed/8F3TjBVFxhQ"

  },
  {
    titulo: "Mi corazón encantado ",
    artista:"Aaron Montalvo",
    link: "https://www.youtube.com/embed/9NXIo6PIb5I" 

  },
  {
    titulo: "Just The Way You Are ",
    artista:"Bruno Mars",
    link: "https://www.youtube.com/embed/craAcv415FM" 

  },  {
    titulo: "Love Never Felt So Good ",
    artista:"Michael Jackson, Justin Timberlake ",
    link: "https://www.youtube.com/embed/FkxEE7wZ83c" 

  }
  ]


  return (
    <>
      <Menu />
   
      <div className="gridCanciones">
      {Songs.map((song) => {
          return (
            <div className="songs" >
             {song.titulo}
             <h5>{song.artista} </h5>
              <iframe width="660" height="415"  src={song.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

          )
        })

        }
      </div>
    
     
        
     
       




    </>
  )
}

export default Canciones