import "./ConductorPorLicencia.css";
import Conductores from "../helpers/conductor.json";
import { useState } from "react";

const ConductorPorLicencia = () => {
  const [estado, setEstado] = useState(true);
  const [error, setError] = useState({
    estatus: false,
    mensaje: "",
  });
  const [licencia, setLicencia] = useState("");

  const { estatus, mensaje } = error;

  const mostrarUnConductorPorLicencia = (e: any) => {
    e.preventDefault();

    if (!licencia.trim()) {
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

    if (ElConductorPorLaLicencia === undefined) {
      setError({
        ...error,
        estatus: true,
        mensaje: "El conductor no fue encontrado",
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

  const cambiarLicencia = (e: any) => {
    setLicencia(e.target.value);
  };

  const revertirEstado = () => {
    setEstado(true);
  };

  let ElConductorPorLaLicencia = Conductores.filter(
    (conductor) => conductor.licencia === licencia
  ).shift();

  return (
    <div className="container">
      <h1 className="titulo">Conductor por licencia</h1>

      {estado ? (
        <div className="formularioContenedor">
          <form action="" className="formularioPlaca">
            <div className="campo">
              <label htmlFor="">Placa</label>

              {estatus ? <p id="alerta-error">{mensaje}</p> : null}

              <input
                name="licencia"
                type="text"
                onChange={cambiarLicencia}
                placeholder="Coloca tu placa"
              />
            </div>

            <input
              onClick={mostrarUnConductorPorLicencia}
              type="submit"
              className="boton"
              value={"Buscar Vehiculo"}
            />
          </form>
        </div>
      ) : (
        <div className="conductorEspecifico">
          <div className="carta">
            <img
              src={ElConductorPorLaLicencia?.foto}
              alt="imagen_del_la_multa"
            />

            <div className="contenidoCarta">
              <p className="">
                {" "}
                <strong className="subtitulo">
                  {ElConductorPorLaLicencia?.nombre + ' ' + ElConductorPorLaLicencia?.apellido}
                </strong>

                Conductor nacido la fecha {ElConductorPorLaLicencia?.fechaDeNacimiento}, con, el telefono { ElConductorPorLaLicencia?.telefono }, tiene la direccion: {ElConductorPorLaLicencia?.direccion}
              </p>
              <button className="boton" onClick={revertirEstado}>
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConductorPorLicencia;
