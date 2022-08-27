import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import MapadeMultas from "../components/MapadeMultas";
const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mapa de Multas</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Mapa de Multas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MapadeMultas/>
      </IonContent>
    </IonPage>
  );
};

export default Page;
