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
  import Horoscopo from '../components/Horoscopo';
  import "./Page.css";
  
  const Page: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar class="">
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Horoscopo del Dia</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Horoscopo</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Horoscopo />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Page;
  