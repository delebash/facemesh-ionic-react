import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SampleComponent from '../components/SampleComponent';
import './Settings.css';

import { camera, trash, close } from 'ionicons/icons';
import {IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
    IonCol, IonImg, IonActionSheet } from '@ionic/react';

import { PreviewCamera } from '../hooks/previewCamera';

const FaceRecorder: React.FC = () => {
    const { startPreview  } = PreviewCamera ();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Face Recorder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton onClick={() => startPreview()}>
                  <IonIcon icon={camera}></IonIcon>
              </IonFabButton>
          </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default FaceRecorder;
