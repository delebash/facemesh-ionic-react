import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SampleComponent from '../components/SampleComponent';
import './Settings.css';

const FaceRecorder: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Face Recorder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Face Recorder</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SampleComponent name="Face Recorder" />
      </IonContent>
    </IonPage>
  );
};

export default FaceRecorder;
