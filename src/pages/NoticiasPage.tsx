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
  import Noticias from "../components/Noticias";
  import "./Page.css";
  
  const Page: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Noticias</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Noticias</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Noticias />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Page;
  