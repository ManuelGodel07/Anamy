import React, { useState } from "react";
import "../styles/Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Categorías con selección múltiple
  const categorias = {
    Quesos: [
      { id: "queso-brie", label: "Brie francés", icon: "🧀" },
      { id: "jamon-serrano", label: "Camembert", icon: "🧈" },
      { id: "aceitunas", label: "Manchego curado", icon: "🫒" },
      { id: "gouda", label: "Gouda ahumado", icon: "🧀" },
      { id: "roquefort", label: "Roquefort", icon: "🧀" },
      { id: "parmigiano", label: "Parmigiano Reggiano", icon: "🧀" },
      { id: "cabra", label: "Queso de cabra con miel", icon: "🐐" },
    ],
    Embutidos: [
      { id: "serrano", label: "Jamón serrano ibérico", icon: "🥩" },
      { id: "salami", label: "Salami italiano", icon: "🍖" },
      { id: "prosciutto", label: "Prosciutto di Parma", icon: "🥓" },
      { id: "lomo", label: "Lomo embuchado", icon: "🍗" },
      { id: "capocollo", label: "Capocollo", icon: "🍖" },
      { id: "chorizo", label: "Chorizo español", icon: "🌶️" },
      { id: "mortadela", label: "Mortadela trufada", icon: "🥪" },
    ],
    Frutas: [
      { id: "uvas", label: "Uvas verdes", icon: "🍇" },
      { id: "fresas", label: "Fresas", icon: "🍓" },
      { id: "frambuesas", label: "Frambuesas", icon: "🫐" },
      { id: "higos", label: "Higos frescos", icon: "🍈" },
      { id: "datiles", label: "Dátiles rellenos", icon: "🌰" },
      { id: "naranjas", label: "Naranjas", icon: "🍊" },
      { id: "arandanos", label: "Arándanos secos", icon: "🍒" },
      { id: "almendras", label: "Almendras", icon: "🥜" },
    ],
    Bebidas: [
      { id: "brindis", label: "Brindis Rosé", icon: "🥂" },
      { id: "moet", label: "Moet & Chandon", icon: "🍾" },
      { id: "chardonnay", label: "Chardonnay", icon: "🍷" },
      { id: "malbec", label: "Malbec Nocturno", icon: "🍷" },
      { id: "sangria", label: "Sangría Artesanal", icon: "🍹" },
      { id: "gin", label: "Gin Tonic Mediterráneo", icon: "🍸" },
      { id: "kombucha", label: "Kombucha Dorada", icon: "🧃" },
      { id: "cold", label: "Cold Brew de la Casa", icon: "☕" },
    ],
  };

  // Estado de seleccionados
  const [seleccionadas, setSeleccionadas] = useState({
    Quesos: [],
    Embutidos: [],
    Frutas: [],
    Bebidas: [],
  });

  // Estado de dropdown abierto
  const [menuAbierto, setMenuAbierto] = useState(null);

  // Toggle selección múltiple
  const toggleSeleccion = (categoria, id) => {
    setSeleccionadas((prev) => ({
      ...prev,
      [categoria]: prev[categoria].includes(id)
        ? prev[categoria].filter((i) => i !== id)
        : [...prev[categoria], id],
    }));
  };

  // Toggle dropdown
  const toggleMenu = (categoria) => {
    setMenuAbierto(menuAbierto === categoria ? null : categoria);
  };

  // Manejar envío
  const handleForm = (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    console.log("Pedido enviado:", { name, description, seleccionadas });
    alert(`Pedido enviado:\n${JSON.stringify(seleccionadas, null, 2)}`);
  };

  return (
    <div>
      <div className="My-Header">
        <h2>Crea tu tabla de charcutería</h2>
        <button onClick={handleForm}>Comprar</button>
      </div>

      <div className="Container">
        <div className="Maker">
          {/* Detalles de la tabla */}
          <div className="Details-Board">
            <h3>Detalles de tabla</h3>
            <form onSubmit={handleForm}>
              <label>Nombre de tabla:</label>
              <input
                type="text"
                placeholder="Escribe el nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <label>Descripción:</label>
              <input
                type="text"
                placeholder="Describe tu tabla"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </form>
          </div>

          {/* Ingredientes con dropdown */}
          <div className="Details-Ingredients">
            <h3>Selecciona ingredientes</h3>
            {Object.entries(categorias).map(([categoria, items]) => (
              <div key={categoria} className="mb-2">
                <button
                  className="w-full bg-gray-100 p-2 rounded-lg flex justify-between items-center"
                  onClick={() => toggleMenu(categoria)}
                >
                  <span>{categoria}</span>
                  <span>{menuAbierto === categoria ? "▲" : "▼"}</span>
                </button>
                {menuAbierto === categoria && (
                  <div className="mt-2 pl-4">
                    {items.map((item) => (
                      <label key={item.id} className="block text-sm mb-1">
                        <input
                          type="checkbox"
                          checked={seleccionadas[categoria].includes(item.id)}
                          onChange={() => toggleSeleccion(categoria, item.id)}
                          className="mr-2"
                        />
                        {item.label}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vista preliminar */}
        <div className="Preview">
          <div className="Preview-Board">
            <h3>Vista preliminar de pedido</h3>
            <p><b>{name}</b></p>
            <p>{description}</p>
            <div className="Preview-Icons flex flex-wrap gap-2 mt-2">
              {Object.entries(seleccionadas).map(([categoria, ids]) =>
                ids.map((id) => {
                  const item = categorias[categoria].find((i) => i.id === id);
                  return (
                    <div key={id} className="icon-item flex flex-col items-center p-1 border rounded">
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-xs">{item.label}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;