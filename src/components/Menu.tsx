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
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  car,
  addCircle,
  cloudyNight,
  newspaper,
  earth,
  cash,
  speedometer,
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
    url: "/page/Inbox",
    iosIcon: cash,
    mdIcon: cash,
  },
  {
    title: "Vehiculo por placa",
    url: "/page/Outbox",
    iosIcon: car,
    mdIcon: car,
  },
  {
    title: "Conductor por licencia",
    url: "/page/Favorites",
    iosIcon: speedometer,
    mdIcon: speedometer,
  },
  {
    title: "Aplicar Multa",
    url: "/page/Archived",
    iosIcon: addCircle,
    mdIcon: addCircle,
  },
  {
    title: "Multas registradas",
    url: "/page/Trash",
    iosIcon: trashOutline,
    mdIcon: trashSharp,
  },
  {
    title: "Mapa de multas",
    url: "/page/Spam",
    iosIcon: earth,
    mdIcon: earth,
  },
  {
    title: "Noticias",
    url: "/page/Spam",
    iosIcon: newspaper,
    mdIcon: newspaper,
  },

  {
    title: "Estado del clima",
    url: "/page/Spam",
    iosIcon: cloudyNight,
    mdIcon: cloudyNight,
  },
  {
    title: "Horoscopo del Amet",
    url: "/page/Spam",
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
        <IonList id="inbox-list" class="mb-1">
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
          className="boton"
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
