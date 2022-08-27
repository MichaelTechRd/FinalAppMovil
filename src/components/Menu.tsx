import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  warningOutline,
  warningSharp,
  car,
  addCircle,
  cloudyNight,
  newspaper,
  earth,
  cash,
  speedometer,
  apps,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface ContainerProps {
  setLogeado: (value: React.SetStateAction<boolean>) => void;
}

const appPages: AppPage[] = [
  {
    title: "Tarifario de multa",
    url: "/page/Tarifario",
    iosIcon: cash,
    mdIcon: cash,
  },
  {
    title: "Vehiculo por placa",
    url: "/page/Vehiculo",
    iosIcon: car,
    mdIcon: car,
  },
  {
    title: "Conductor por licencia",
    url: "/page/Conductor",
    iosIcon: speedometer,
    mdIcon: speedometer,
  },
  {
    title: "Aplicar Multa",
    url: "/page/Aplicar",
    iosIcon: addCircle,
    mdIcon: addCircle,
  },
  {
    title: "Multas registradas",
    url: "/page/Registro-de-multa",
    iosIcon: apps,
    mdIcon: apps,
  },
  {
    title: "Mapa de multas",
    url: "/page/Mapa",
    iosIcon: earth,
    mdIcon: earth,
  },
  {
    title: "Noticias",
    url: "/page/Noticias",
    iosIcon: newspaper,
    mdIcon: newspaper,
  },

  {
    title: "Estado del clima",
    url: "/page/Clima",
    iosIcon: cloudyNight,
    mdIcon: cloudyNight,
  },
  {
    title: "Horoscopo del Amet",
    url: "/page/Horoscopo",
    iosIcon: warningOutline,
    mdIcon: warningSharp,
  },
];

const Menu: React.FC<ContainerProps> = ({ setLogeado }) => {
  const location = useLocation();

  const deslogearse = () => {
    setLogeado(false);
  };

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" class="mb-1-2 border">
          <IonListHeader>App de Agentes</IonListHeader>
          <IonNote>-- Administra tus agentes --</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <input
          className="boton mt-2"
          type="submit"
          value={"Cerrar Sesion"}
          onClick={deslogearse}
        />
      </IonContent>
    </IonMenu>
  );
};
interface ContainerProps {
  setLogeado: (value: React.SetStateAction<boolean>) => void;
}
export default Menu;
