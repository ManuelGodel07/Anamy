import React from "react";
import '../styles/HomeScreen.css'

const HomeScreen = () => {

  const handleView =()=>{
    console.log('hola view')
  }

  return (
    <div className="Home-Section">
      <div className="Experiences">
          <h1>Charcutería gourmet Anamy.</h1>
          <h3>La experiencia gourmet que tu día merece.</h3>
          <button onClick={handleView}>Experiencias</button>
      </div>
      <div className="Section-Cards">
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/FCMImages%2Fch1.jfif?alt=media&token=5850d5b9-6357-4564-8a0b-1b0796771f75'} />
          <h2>Picnic</h2>
          <p>2 personas</p>
          <p>Celebracion al estilo frances con flores y musica amena.</p>
        </div>
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/FCMImages%2Fch2.jfif?alt=media&token=0214bdd1-4663-4a9e-b81d-580c7b992207'} />
          <h2>Atardecer rustico</h2>
          <p>4 personas</p>
          <p>Una seleccion elegante que resalta la finura de lo rustico con frutas y carnes rojas.</p>
        </div>
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/FCMImages%2Fch4.jpeg?alt=media&token=3710d00d-59ae-4631-a955-a9efc0575dc6'} />
          <h2>Mesas de Charcutería para Bodas y Celebraciones</h2>
          <p>100 personas</p>
          <p>Para aquellos que aman la intensidad y sabores robustos</p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;