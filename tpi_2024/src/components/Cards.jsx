import React from "react";
import { Outlet, Link } from "react-router-dom";

const productos1 =[{
    id: 1,
    imagen: 'https://media.rainpos.com/11928/MGS2154.jpg',
    nombre: 'Sagrada Biblia Latinoamericana',
    descripcion: {
        titulo: 'Sagrada Biblia Latinoamericana',
        autor: 'Varios autores',
        editorial: 'Editorial Verbo',
        categoria: 'Filosofía y religión',
        anio_de_publicacion: 2004
       }   }
]
const productos2=[{
    id: 2,
    imagen: 'https://m.media-amazon.com/images/I/51KHoyNXPgL._SL500_.jpg',
    nombre: 'El gato bandido',
    descripcion: {
        titulo: 'El gato bandido',
        autor: 'Rafael Pombo',
        editorial: 'Colihue',
        categoria: 'Infantil',
        anio_de_publicacion: 2003
    }
}]
const productos3=[{
    id: 3,
    imagen: 'https://i.ebayimg.com/images/g/6HQAAOSwWxRl4MXI/s-l960.jpg',
    nombre: 'Pinocho',
    descripcion: {
        titulo: 'Pinocho',
        autor: 'Carlo Collodi',
        editorial: 'Latinbooks',
        categoria: 'Infantil',
        anio_de_publicacion: 2012
        
    }
}]
const productos4=[{
    id: 4,
    imagen: 'https://storage.googleapis.com/catalogo-libros/extralarge/ebfc757f-5f38-89c2-a1ca-5d7a5a3cbdad_imagen.JPG',
    nombre: 'Historia de las civilizaciones',
    descripcion: {
        titulo: 'Historia de las civilizaciones',
        autor: 'Diana Uribe',
        editorial: 'Panamericana',
        categoria: 'Historia',
        anio_de_publicacion: 2010
    }
}]
const productos5=[{
    id: 5,
    imagen: 'https://i.ebayimg.com/images/g/NvoAAOSwZI1exLdS/s-l1600.jpg',
    nombre: 'El Corán',
    descripcion: {
        titulo: 'El Coran',
        autor: 'Mahoma',
        editorial: 'Sociedades islámicas',
        categoria: 'Filosofía y religión',
        anio_de_publicacion: 600
    }
}]
const productos6=[{
    id: 6,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/ab/14/ab14089932eaa01c3f186246e3a5ea27.jpg',
    nombre: 'Historia de la filosofía. Sin temor ni temblor',
    descripcion: {
        titulo: 'Historia de la filosofía. Sin temor ni temblor.',
        autor: 'Fernando Savater',
        editorial: 'Booket',
        categoria: 'Filosofía y religión',
        anio_de_publicacion: 2015
    }  
  }
]
const productos7=[{
    id: 7,
    imagen: 'https://www.rae.es/sites/default/files/styles/obra_portada_ficha/public/portada_cien_anos_de_soledad_0.jpg?itok=DDV1xNqg',
    nombre: 'Cien años de soledas',
    descripcion: {
        titulo:'Cien años de soledad',
        autor: 'Gabriel García Márquez',
        editorial: 'Debolsillo',
        categoria: 'Novelas',
        anio_de_publicacion: 2014
    }

}]
const productos8=[{
    id: 8,
    imagen: 'https://i.ebayimg.com/images/g/HGMAAOSwko5lVEJa/s-l960.jpg',
    nombre: 'La hojarasca',
    descripcion: {
        titulo: 'La hojarasca',
        autor: 'Gabriel García Marquez',
        editorial: 'Debolsillo',
        categoria: 'Novelas',
        anio_de_publicaion: 2014
    }
}]
const productos9=[{
    id: 9,
    imagen: 'https://images.cdn1.buscalibre.com/fit-in/360x360/c6/a3/c6a3626ac3e500a55834e97cf8a52569.jpg',
    nombre: 'Antigüedades de los Judíos',
    descripcion: {
        titulo: 'Antigüedades de los Judíos',
        autor: 'Flavio Josefo',
        editorial: 'Vida Publishers',
        categoria: 'Historia',
        anio_de_publicacion: 2013
    }
}]
const productos10=[{
    id: 10,
    imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/04/e8/04e84ba2f9d7e16611c8f96dec434831.jpg',
    nombre: 'Romeo y Julieta',
    descripcion: {
        titulo: 'Romeo y Julieta',
        autor: 'William Shakespeare',
        editorial: 'Mestas',
        categoria: 'Novelas',
        anio_de_publicacion: 2019
    }
}]



 const Cards =()=>{


const miPrimerJSON = JSON.stringify(productos1)
console.log(miPrimerJSON);
const width='200px'
const height='200px'

const grupo1=productos1.map((producto1)=>
    <div>
    <img src={producto1.imagen} width={width} height={height} />
    <p><strong>{producto1.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto1.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto1.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto1.descripcion.editorial}</p>
    <Link to='/detalle'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br />
    </div>
)
const grupo2=productos2.map((producto2)=>
    <>
    <img src={producto2.imagen} width={width} height={height} />
    <p><strong>{producto2.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto2.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto2.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto2.descripcion.editorial}</p>
    <Link to='/detalle2'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br /><br />
    </>
)
const grupo3=productos3.map((producto3)=>
    <>
    <img src={producto3.imagen} width={width} height={height} />
    <p><strong>{producto3.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto3.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto3.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto3.descripcion.editorial}</p>
    <Link to='/detalle3'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br /><br />
    </>
)
const grupo4=productos4.map((producto4)=>
    <>
    <img src={producto4.imagen} width={width} height={height} />
    <p><strong>{producto4.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto4.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto4.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto4.descripcion.editorial}</p>
    <Link to='/detalle4'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br />
    </>
)
const grupo5=productos5.map((producto5)=>
    <>
    <img src={producto5.imagen} width={width} height={height} />
    <p><strong>{producto5.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto5.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto5.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto5.descripcion.editorial}</p>
    <Link to='/detalle5'>
    <button>Ver más</button>
    </Link>
    <br /> <br /> <br />
    </>
)
const grupo6=productos6.map((producto6)=>
    <>
    <img src={producto6.imagen} width={width} height={height} />
    <p><strong>{producto6.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto6.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto6.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto6.descripcion.editorial}</p>
    <Link to='/detalle6'>
    <button>Ver más</button>
    </Link>
    <br />
    <br />
    </>
)
const grupo7=productos7.map((producto7)=>
    <>
    <img src={producto7.imagen} width={width} height={height} />
    <p><strong>{producto7.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto7.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto7.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto7.descripcion.editorial}</p>
    <Link to='/detalle7'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br />
    </>
)
const grupo8=productos8.map((producto8)=>
    <>
    <img src={producto8.imagen} width={width} height={height} />
    <p><strong>{producto8.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto8.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto8.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto8.descripcion.editorial}</p>
    <Link to='/detalle8'>
    <button>Ver más</button>
    </Link><br /><br /><br />
    </>
)
const grupo9=productos9.map((producto9)=>
    <>
    <img src={producto9.imagen} width={width} height={height} />
    <p><strong>{producto9.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto9.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto9.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto9.descripcion.editorial}</p>
    <Link to='/detalle9'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br />
    </>
)
const grupo10=productos10.map((producto10)=>
    <>
    <img src={producto10.imagen} width={width} height={height} />
    <p><strong>{producto10.nombre}</strong></p><br />
    <p><strong>Título : </strong>{producto10.descripcion.titulo}</p>
    <p><strong>Autor: </strong>{producto10.descripcion.autor}</p>
    <p><strong>Editorial: </strong>{producto10.descripcion.editorial}</p>
    <Link to='/detalle10'>
    <button>Ver más</button>
    </Link>
    <br /><br /><br /><br />
    </>
)

        
        
    
    return(
        <>
        <ul className="imagen">
        <div className="a">{grupo1}</div>
        <div className="b">{grupo2}</div>
        <div className="c">{grupo3}</div>
        <div className="d">{grupo4}</div>
        <div className="e">{grupo5}</div>
       <div className="f" >{grupo6}</div>
        <div className="g"> {grupo7}</div>
        <div className="h">{grupo8}</div>
        <div className="i">{grupo9}</div>
       <div className="j"> {grupo10}</div>
        </ul>
          
        <br/> 
      <Outlet/>
</>
        )
    }
    
export default Cards;

