import Header from "../components/Header";
import Footer from "../components/Footer";
    const productos=[{
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
    }]
    const Detalle6 =()=>{
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

export default Detalle6;