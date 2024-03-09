import Header from "../components/Header";
import Footer from "../components/Footer";
    const productos=[{
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
    const Detalle10 =()=>{
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
                    <Header />
                <nav>
                <div className="productos">
               
               <ul class='biblioteca'>{biblioteca}</ul>
            </div>
        
                </nav>
                <Footer />
            </div>
                )
            }
        
        export default Detalle10;