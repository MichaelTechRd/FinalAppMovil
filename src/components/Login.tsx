import { useState } from "react";
import "./ExploreContainer.css";
import "./Login.css";
// import './Page.css';

interface ContainerProps {
  setLogeado: (value: React.SetStateAction<boolean>) => void
}

const Login: React.FC<ContainerProps> = ({setLogeado}) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const { email, password } = login;

  const actualizarState = (e: any) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });

  };

  const submitLogin = (e: any) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3500);
      return;
    }

    setError(false);

    console.log("Iniciando Sesion...");
    setLogeado(true);
  };

  return (
    <div className="container mb-1">
      <form action="" className="login">

        {error ? (
          <p id="alerta-error">Todos los campos son obligatorio</p>
        ) : null}

        <div className="campo">
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={actualizarState}
            type="text"
            id="email"
            name="email"
            placeholder="Tu email"
            value={email}
          />
        </div>

        <div className="campo">
          <label htmlFor="password">PASSWORD</label>
          <input
            onChange={actualizarState}
            type="password"
            id="password"
            name="password"
            placeholder="Tu password"
          />
        </div>

        <div className="flex mb-1">
          <input type="checkbox" />
          <p>Mantener mi sesión abierta</p>
        </div>

        <input
          onClick={submitLogin}
          type="submit"
          value={"Iniciar Sesion"}
          className="boton"
        />
      </form>
    </div>
  );
};

export default Login;
