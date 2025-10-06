import React from 'react'

const Catering =()=>{

    return(
        <div>
            <div>
                <h1>Event Catering</h1>
                <p>Buscando impresionar a tus invitados? Nosotros traemos bellez y deliciosas mesas de charcuteria a cualquier celebracion - Bodas, baby showers, cumpleanos, eventos corporativos y mas.</p>
            </div>
            <div className='Section-Cards'>
                <div className='My-Card'>
                    <h2>Mesa de picoteo plana</h2>
                    <p>Nuestras mesas de picoteo son perfectas para crear un banquete acogedor que encantará a todos. En cada mesa interactua una variedad de quesos, embutidos, frutas frescas de temporada, aceitunas, frutos secos, galletas, panes, mermeladas, miel y dulces cuidadosamente colocados para que el comensal disfrute de esta experiencia.</p>
                    <img src='https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/FCMImages%2FWhatsApp%20Image%202025-10-06%20at%2011.58.07.jpeg?alt=media&token=072c035d-7a90-4435-9d1d-5c4758bcc22f'/>
                </div>
                <div className='My-Card'>
                    <h2>Mesa de brunch</h2>
                    <p>¡Nuestra mesa de brunch es la manera perfecta de empezar el día o celebrar algo especial! Está repleta de todo: quesos artesanales, fruta fresca de temporada, bollería variada, mini croissants, gofres y bagels frescos con queso crema batido, mermelada y untable.</p>
                    <img src='https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/FCMImages%2Fbrunch2.jfif?alt=media&token=a998185d-6b1a-4ccf-b09e-d718240a701d'/>
                </div>
            </div>
        </div>
    )
}

export default Catering;