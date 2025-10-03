import React from "react";
import '../styles/Create.css'

const Create = () => {

  const handleChange = () =>{
    return(
      console.log('manuel ruiz')
    )
  }

  const handleForm= () => {
    return(
      console.log('hola form')
    )
  }

  return (
    <div>
      <div className="My-Header">
        <h2>Crea tu tabla de charcuteria</h2>
        <button onClick={handleForm}>Comprar</button>
      </div>
        <div className="Container">
          <div className="Maker">
            <div className="Details-Board">
              <h3>Detalles de tabla</h3>
              <form>
                <label htmlFor="nombre">Nombre de tabla:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Escribe el nombre para tu charola" />
                <br /><br />
                <label htmlFor="description">Descripcion:</label>
                <input type="text" id="description" name="description" placeholder="Escribe una descripcion para tu charola" />
              </form>
            </div>
            <div className="Details-Ingredients">
              <h3>Selecciona ingredientes</h3>
              <select name='Algo' value='hola' onChange={handleChange}>
                <option value="">Selecciona una opción</option>
              </select>
            </div>
          </div>
          <div className="Preview">
            <div className="Preview-Board">
              <h3>Vista preliminar de pedido</h3>
              <img src={'https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/web%2Fcharcuteria.jpg?alt=media&token=370656c2-63bd-4f32-a17b-0483cbbd9e5a'} />
            </div>
            <div className="Suggestions">

            </div>
          </div>
        </div>
    </div>
  );
}

export default Create;