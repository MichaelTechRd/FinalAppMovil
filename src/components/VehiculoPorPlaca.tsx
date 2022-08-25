import "./ExploreContainer.css";
import "./VehiculoPorPlaca.css";
import Vehiculos from "../helpers/vehiculo.json";
import { useState } from "react";

const VehiculoPorPlaca = () => {
  const [estado, setEstado] = useState(true);
  const [error, setError] = useState({
    estatus: false,
    mensaje: "",
  });
  const [placa, setPlaca] = useState("");

  const { estatus, mensaje } = error;

  const mostrarUnVehiculoEspecifico = (e: any) => {
    e.preventDefault();

    if (!placa.trim()) {
      setError({
        ...error,
        estatus: true,
        mensaje: "Todos los campos son obligatorio",
      });
      setTimeout(() => {
        setError({
          ...error,
          estatus: false,
        });
      }, 3500);
      return;
    }

    if (ElvehiculoPorPlaca === undefined) {
      setError({
        ...error,
        estatus: true,
        mensaje: "El vehiculo no fue encontrado",
      });
      setTimeout(() => {
        setError({
          ...error,
          estatus: false,
        });
      }, 3500);
      return;
    }

    setEstado(false);
  };

  const cambiarPlaca = (e: any) => {
    setPlaca(e.target.value);
  };

  const revertirEstado = () => {
    setEstado(true);
  };

  let ElvehiculoPorPlaca = Vehiculos.filter(
    (vehiculo) => vehiculo.placa === placa
  ).shift();

  return (
    <div className="container">
      <h1 className="titulo">Vehiculo por placa</h1>

      {estado ? (
        <div className="formularioContenedor">
          <form action="" className="formularioPlaca">
            <div className="campo">
              <label htmlFor="">Placa</label>

              {estatus ? <p id="alerta-error">{mensaje}</p> : null}

              <input
                name="placa"
                type="text"
                onChange={cambiarPlaca}
                placeholder="Coloca tu placa"
              />
            </div>

            <input
              onClick={mostrarUnVehiculoEspecifico}
              type="submit"
              className="boton"
              value={"Buscar Vehiculo"}
            />
          </form>
        </div>
      ) : (
        <div className="formularioContenedor">
          <div className="contenidoCarta">
            <ul>
              <li><strong>Dueño: </strong>{ElvehiculoPorPlaca?.Dueño}</li>
              <li><strong>Modelo: </strong>{ElvehiculoPorPlaca?.modelo}</li>
              <li><strong>Año:</strong> {ElvehiculoPorPlaca?.Año}</li>
              <li><strong>placa: </strong>{ElvehiculoPorPlaca?.placa}</li>
            </ul>
            <button className="boton" onClick={revertirEstado}>
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiculoPorPlaca;
