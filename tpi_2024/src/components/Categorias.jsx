import React from "react";

const Categorias = ()=>{
    const mini_imagenes = [
        {
            id: 1,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNES7n6_VATcE-XoX3dnoJZZMCzRfvdYArzrIiMc_L4PJY9cu9wxDOLdt-MKswVExd2j0&usqp=CAU',
            nombre: 'Filosofía y religión'
        },
        {
            id: 2,
            imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/5e/89/5e899a5b4756ca0ee77a118bdf96adbf.jpg',
            nombre: 'Historia'
        },
        {
            id: 3,
            imagen: 'https://static.clccolombia.com/_CLCColombia/images/products/original/38156.jpg',
            nombre: 'Infantil'
        },
        {
            id: 4,
            imagen: 'https://m.media-amazon.com/images/I/51y1xuLBnYL._SL500_.jpg',
            nombre: 'Novelas'
        }
    ]
    let agrupacion = mini_imagenes.map((
        mini_imagen)=><div>
            <img src={mini_imagen.imagen} width='60px' height='60px'>
            </img>
            <p>{mini_imagen.nombre}</p>
        </div>

    )
    return(
    <div className="categorias">
        <div className="titulo_categorias"><h3>Categorías</h3></div>
       <ul class='mini_imagenes'>{agrupacion}</ul>
    </div>
        )
}
export default Categorias;