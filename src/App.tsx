import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
// import Page from "./pages/AplicarMultaPage";
import TarifarioDeMultasPage from "./pages/TarifarioDeMultasPage";
import VehiculoPorPlacaPage from "./pages/VehiculoPorPlacaPage";
import ConductorPorLicenciaPage from "./pages/ConductorPorLicenciaPage";
import AplicarMultaPage from "./pages/AplicarMultaPage";
import MapadeMultasPage from "./pages/MapadeMultasPage";
import NoticiasPage from "./pages/NoticiasPage";
import HoroscopoPage from "./pages/HoroscopoPage";

import Login from "./components/Login";
import { Fragment, useState } from "react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [logeado, setLogeado] = useState(false);

  return (
    <Fragment>
      {logeado ? (
        <IonApp>
          <IonReactRouter>
            <IonSplitPane contentId="main">
              <Menu setLogeado={setLogeado} />
              <IonRouterOutlet id="main">
                <Route path="/page/Tarifario" exact={true}>
                  <TarifarioDeMultasPage />
                </Route>

                <Route path="/page/Conductor" exact={true}>
                  <ConductorPorLicenciaPage />
                </Route>

                <Route path="/page/Vehiculo" exact={true}>
                  <VehiculoPorPlacaPage />
                </Route>

                <Route path="/page/Aplicar" exact={true}>
                  <AplicarMultaPage />
                </Route>

                <Route path="/page/Registro-de-multa" exact={true}>
                  <TarifarioDeMultasPage />
                </Route>


                <Route path="/" exact={true}>
                  <TarifarioDeMultasPage />
                </Route>

                <Route path="/page/Mapa" exact={true}>
                  <MapadeMultasPage />
                </Route>

                <Route path="/page/Noticias" exact={true}>
                  <NoticiasPage />
                </Route>

                <Route path="/page/Horoscopo" exact={true}>
                  <HoroscopoPage />
                </Route>

                {/* <Route path="/page/:name" exact={true}>
                    <Page />
                  </Route> */}
              </IonRouterOutlet>
            </IonSplitPane>
          </IonReactRouter>
        </IonApp>
      ) : (
        <Login setLogeado={setLogeado} />
      )}
    </Fragment>
  );
};

export default App;
