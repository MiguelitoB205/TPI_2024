import Header from "../components/Header";
import Footer from "../components/Footer";
    const productos=[{
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
    }  
    ]
    const Detalle7 =()=>{
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

export default Detalle7;