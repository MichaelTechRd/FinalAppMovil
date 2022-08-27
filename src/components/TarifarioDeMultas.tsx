import "./ExploreContainer.css";
import "./TarifarioDeMultas.css";
import Multas from "../helpers/multas.json";
import { useState } from "react";

const TarifarioDeMultas = () => {
  const [estado, setEstado] = useState(true);
  const [multaId, setMultaId] = useState("");

  const mostrarUnaMultaEspecifica = (id: any) => {
    setMultaId(id);
    setEstado(false);
  };

  const revertirEstado = () => {
    setEstado(true);
  };

  let laMulta = Multas.filter((multa) => multa.id === multaId).shift();

  console.log(laMulta);

  return (
    <div className="container">
      <h1 className="titulo">Tarifario de las multas</h1>

      {estado ? (
          <table className="multas">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cedula</th>
                <th>Placa del vehiculo</th>
                <th>motivo de la multa</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody className="">
              {Multas.map((multa) => (
                <tr
                  key={multa.id}
                  onClick={() => {
                    mostrarUnaMultaEspecifica(multa.id);
                  }}
                >
                  <td>{multa.id}</td>
                  <td>{multa.cedula}</td>
                  <td>{multa.cedula}</td>
                  <td>{multa.motivo}</td>
                  <td>{multa.hora}</td>
                </tr>
              ))}
            </tbody>
          </table>
      ) : (
        <div className="multaEspecifica">
          <div className="carta">
            <img
              src={laMulta?.foto}
              alt="imagen_del_la_multa"
            />

            <div className="contenidoCarta">
              <p className="">
                {" "}
                <strong className="subtitulo">
                  multa causada por {laMulta?.motivo}
                </strong>
                La persona con el numero de identidad {laMulta?.cedula}, con la licencia 8888sa86 y con la placa del automovil ASKTUTORIAL , fue
                multado la fecha {laMulta?.fecha}, en la hora {laMulta?.hora},
                debido a {laMulta?.motivo}, en la latitud {laMulta?.latitud} y
                longitud {laMulta?.longitud}
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

export default TarifarioDeMultas;
