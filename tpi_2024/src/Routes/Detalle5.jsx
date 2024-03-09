import Header from "../components/Header";
import Footer from "../components/Footer";
    const productos=[{
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
    const Detalle5 =()=>{
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
            <Footer />
        
                </nav>
            </div>
                )
            }

export default Detalle5;