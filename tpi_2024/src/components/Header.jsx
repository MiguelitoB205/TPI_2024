import React from "react";
import Navbar from "./Navbar";

const Header = ()=>{
    const logo = 'https://i.pinimg.com/236x/55/17/b0/5517b08808eae175aedea67ba3314c75.jpg'
    const altura = '70px';
    const anchura = '120px';
    const container = 'container'
    const caja_1 = 'caja_1'
    const caja_2 = 'caja_2'
    const caja_3 = 'caja_3'
    

    return(
        <div class={container}>
            <div class={caja_1}> 
                <img src={logo} alt="logo" width={anchura} height={altura} />
            </div>
            <div className={caja_2}>
                <h1>La Sabiduría Mundial</h1>
            </div>
            <div className={caja_3}>
                <Navbar/>
            </div>
            
        </div>
    )
}

export default Header;