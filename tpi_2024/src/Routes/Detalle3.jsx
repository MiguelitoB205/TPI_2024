import Header from '../components/Header'
import Footer from '../components/Footer'
import React from 'react'
    
    const productos=[
        {
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
        }

    ]
    const Detalle3 =()=>{
        const miPrimerJSON = JSON.stringify(productos)
        console.log(miPrimerJSON);
        let biblioteca = productos.map((
            producto)=>
            <div>
                <div className="imagenes">
               
                <img src={producto.imagen} width="120px" height="120px" alt="" />
            
                
                <p class='producto_nombre'><strong>{producto.nombre}</strong></p>
                <br/> 
                </div>
           
                <p><strong>Título:</strong> {producto.descripcion.titulo}</p>
                <p><strong>Autor:</strong> {producto.descripcion.autor}</p>
                <p><strong>Editorial:</strong> {producto.descripcion.editorial}</p>
                <p><strong>Categoría:</strong> {producto.descripcion.categoria}</p>
                <p><strong>Año de publicación:</strong> {producto.descripcion.anio_de_publicacion}</p>
                <br/>
                <div className="descripcion">
                </div>
                </div>
        
        
        
        
        
        )
        
            return(
        
                <div>
                    <Header/>
                <nav>
                <div className="productos">
                
               <ul class='biblioteca'>{biblioteca}</ul>
            </div>
        
                </nav>
                <Footer/>
            </div>
                )
         }


export default Detalle3;