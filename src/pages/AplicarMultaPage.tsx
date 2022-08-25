import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AplicarMulta from '../components/AplicarMulta';
import './Page.css';

const AplicarMultaPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Aplicar Multa</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aplicar Multa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AplicarMulta/>
      </IonContent>
    </IonPage>
  );
};

export default AplicarMultaPage;