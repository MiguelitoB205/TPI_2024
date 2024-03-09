import Header from "../components/Header";
import Footer from "../components/Footer";
    const productos=[{
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
    const Detalle4 =()=>{
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

export default Detalle4;