import React from "react";
import { Exportcontext } from "../context/PokemonContext";
const Filterb = () => {
  const { active, handChecknox } = Exportcontext();

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-by-type">
        <span>Tipo</span>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="grass"
            id="grass"
          />
          <label htmlFor="grass">Planta</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="fire"
            id="fire"
          />
          <label htmlFor="fire">Fuego</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="bug" id="bug" />
          <label htmlFor="bug">Bicho</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="fairy" id="fairy" />
          <label htmlFor="fairy">Hada</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="dragon" id="dragon" />
          <label htmlFor="dragon">Dragón</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="shadow" id="shadow" />
          <label htmlFor="shadow">Fantasma</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="ground" id="ground" />
          <label htmlFor="ground">Tierra</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="normal"
            id="normal"
          />
          <label htmlFor="normal">Normal</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="psychic"
            id="psychic"
          />
          <label htmlFor="psychic">Psíquico</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="steel"
            id="steel"
          />
          <label htmlFor="steel">Acero</label>
        </div>
        <div className="group-type">
          <input type="checkbox" name="dark" id="dark" />
          <label htmlFor="dark">Siniestro</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="electric"
            id="electric"
          />
          <label htmlFor="electric">Eléctrico</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="fighting"
            id="fighting"
          />
          <label htmlFor="fighting">Lucha</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="flying"
            id="flying"
          />
          <label htmlFor="flying">Volador</label>
        </div>
        <div className="group-type">
          <input type="checkbox" onChange={handChecknox} name="ice" id="ice" />
          <label htmlFor="ice">Hielo</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="poison"
            id="poison"
          />
          <label htmlFor="poison">Veneno</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="rock"
            id="rock"
          />
          <label htmlFor="rock">Roca</label>
        </div>
        <div className="group-type">
          <input
            type="checkbox"
            onChange={handChecknox}
            name="water"
            id="water"
          />
          <label htmlFor="water">Agua</label>
        </div>
      </div>
    </div>
  );
};

export default Filterb;
