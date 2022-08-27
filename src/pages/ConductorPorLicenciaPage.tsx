import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ConductorPorLicencia from '../components/ConductorPorLicencia';
import './Page.css';

const ConductorPorLicenciaPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Conductor Por Licencia</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Conductor Por Licencia</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ConductorPorLicencia/>
      </IonContent>
    </IonPage>
  );
};

export default ConductorPorLicenciaPage;