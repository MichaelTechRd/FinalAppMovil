import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VehiculoPorPlaca from '../components/VehiculoPorPlaca';
import './Page.css';

const VehiculoPorPlacaPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Vehiculo por placa</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Vehiculo por placa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <VehiculoPorPlaca/>
      </IonContent>
    </IonPage>
  );
};

export default VehiculoPorPlacaPage;