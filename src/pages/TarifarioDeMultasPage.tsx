import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import TarifarioDeMultas from '../components/TarifarioDeMultas';
import './Page.css';

const TarifarioDeMultasPage: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tarifario de multa</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tarifario de multa</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TarifarioDeMultas/>
      </IonContent>
    </IonPage>
  );
};

export default TarifarioDeMultasPage;
