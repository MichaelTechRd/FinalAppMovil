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
  import Clima from "../components/Clima";
  const MapadeMultasPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Clima</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Clima</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Clima/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default MapadeMultasPage;
  