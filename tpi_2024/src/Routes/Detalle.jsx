import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


        const productos =[{
                id: 1,
                imagen: 'https://media.rainpos.com/11928/MGS2154.jpg',
                nombre: 'Sagrada Biblia Latinoamericana',
                descripcion: {
                    titulo: 'Sagrada Biblia Latinoamericana',
                    autor: 'Varios autores',
                    editorial: 'Editorial Verbo',
                    categoria: 'Filosofía y religión',
                    anio_de_publicacion: 2004
                }
            }]

            const Detalle =()=>{
                const miPrimerJSON = JSON.stringify(productos)
                console.log(miPrimerJSON);
                let biblioteca = productos.map((
                    producto)=>
                    <div>
                        <div className="imagenes">
                        
                        <img src={producto.imagen} width="200px" height="200px" alt="" />
                        
                        
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
        
            
   

export default Detalle;