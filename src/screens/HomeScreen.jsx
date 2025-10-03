import React from "react";

const HomeScreen = () => {

  const handleView =()=>{
    console.log('hola view')
  }

  return (
    <div>
        <div className="Experiences">
          <h1>Charcutería gourmet Anamy.</h1>
          <h3>La experiencia gourmet que tu día merece.</h3>
          <button onClick={handleView}>Experiencias</button>
      </div>
      <div className="Section-Cards">
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/web%2Fcharcuteria.jpg?alt=media&token=370656c2-63bd-4f32-a17b-0483cbbd9e5a'} />
          <h2>Picnic</h2>
          <p>Celebracion al estilo frances con flores y musica amena.</p>
          <p>2 personas</p>
        </div>
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/web%2Fcharcuteria.jpg?alt=media&token=370656c2-63bd-4f32-a17b-0483cbbd9e5a'} />
          <h2>Classic French Evening</h2>
          <p>4 personas</p>
          <p>Una seleccion elegante que resalta la finura de los quesos tradicionales franceses.</p>
        </div>
        <div className="My-Card">
          <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/web%2Fcharcuteria.jpg?alt=media&token=370656c2-63bd-4f32-a17b-0483cbbd9e5a'} />
          <h2>Mesas de Charcutería para Bodas y Celebraciones</h2>
          <p>Para aquellos que aman la intensidad y sabores robustos</p>
          <p>100 personas</p>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;