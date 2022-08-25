import "./ExploreContainer.css";
import "./TarifarioDeMultas.css";
import "./Login.css";
import "./AplicarMulta.css";
import Multas from "../helpers/multas.json";
import { useState } from "react";
// import { v4 as uuid } from "uuid";
import uuid from "react-uuid";

const AplicarMulta = () => {
  const [multas, setAllMultas] = useState(Multas);
  const [error, setError] = useState(false);
  const [multa, setMulta] = useState({
    id: "",
    cedula: "",
    placa: "",
    motivo: "",
    foto: "",
    latitud: "",
    longitud: "",
    fecha: "",
    hora: "",
  });

  const actualizarMulta = (e: any) => {
    setMulta({
      ...multa,
      [e.target.name]: e.target.value,
    });
  };

  const { cedula, placa, motivo, foto, latitud, longitud, fecha, hora } = multa;

  const submitMulta = (e: any) => {
    e.preventDefault();

    if (
      !cedula.trim() ||
      !placa.trim() ||
      !motivo.trim() ||
      !foto.trim() ||
      !latitud.trim() ||
      !longitud.trim() ||
      !fecha.trim() ||
      !hora.trim()
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3500);
      return;
    }
    setAllMultas([...multas, multa]);
  };

  return (
    <div className="container">
      <h1 className="titulo">agregar una multa</h1>

      <div className="">
        <form action="" className="formulario-crear">
          {error ? (
            <p id="alerta-error">Todos los campos son obligatorio</p>
          ) : null}

          <div className="grip">
            <div className="campo">
              <label htmlFor="cedula">Cedula</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="cedula"
                id="cedula"
                placeholder="Tu cedula"
              />
            </div>

            <div className="campo">
              <label htmlFor="placa">Placa</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="placa"
                id="placa"
                placeholder="Tu placa"
              />
            </div>

            <div className="campo">
              <label htmlFor="motivo">Motivo</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="motivo"
                id="motivo"
                placeholder="Motivos de la multa"
              />
            </div>

            <div className="campo">
              <label htmlFor="foto">Foto</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="foto"
                id="foto"
                placeholder="Foto del suceso"
              />
            </div>

            <div className="campo">
              <label htmlFor="latitud">Latitud</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="latitud"
                id="latitud"
                placeholder="Latitud del lugar"
              />
            </div>

            <div className="campo">
              <label htmlFor="longitud">Longitud</label>
              <input
                onChange={actualizarMulta}
                type="text"
                placeholder="Longitud del lugar"
                name="longitud"
                id="longitud"
              />
            </div>

            <div className="campo">
              <label htmlFor="">Fecha</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="fecha"
                placeholder="Fecha de la multa"
                id="fecha"
              />
            </div>

            <div className="campo">
              <label htmlFor="">Hora</label>
              <input
                onChange={actualizarMulta}
                type="text"
                name="hora"
                placeholder="Hora de la multa"
                id="hora"
              />
            </div>
          </div>

          <input
            onClick={submitMulta}
            type="submit"
            value={"guardar multa"}
            className="boton"
          />
        </form>
      </div>

      <table className="multa">
        <thead>
          <tr>
            <th>Cedula</th>
            <th>Placa del vehiculo</th>
            <th>motivo de la multa</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody className="">
          {multas.map((multa) => (
            <tr key={uuid()}>
              <td>{multa.cedula}</td>
              <td>{multa.placa}</td>
              <td>{multa.motivo}</td>
              <td>{multa.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AplicarMulta;
