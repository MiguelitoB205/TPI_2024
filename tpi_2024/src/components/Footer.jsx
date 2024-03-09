import React from "react";

const Footer=()=>{
    const frase = 'Síguenos en : '
    const instagram = "https://www.svgrepo.com/show/30539/instagram-logo.svg"
    const facebook = 'https://www.svgrepo.com/show/506477/facebook.svg'
    const tiktok = 'https://www.svgrepo.com/show/324169/tik-tok-brand-assets-video-socialnetwork-oneline.svg'
    const twitter = 'https://www.svgrepo.com/show/509274/twitter.svg'
    const width='30px';
    const height = '30px'
    
    return(
        <div class='footer'>
            <h4>{frase}</h4>
            <img src={instagram} alt="" width={width} height={height} />
            <img src={facebook} alt="" width={width} height={height} />
            <img src={tiktok} alt="" width={width} height={height} />
            <img src={twitter} alt=""  width={width} height={height}/>

        </div>
    )
}

export default Footer;