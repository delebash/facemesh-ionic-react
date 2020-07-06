import React, { useState } from 'react';
import {
    IonLabel,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonTabButton, IonTabBar,IonIcon
} from '@ionic/react';
import './FaceRecorder.css';

import {recording, stop} from 'ionicons/icons';


const FaceRecorder: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Face Recorder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

              <IonTabBar>
                  <IonTabButton  tab="FaceRecorder" href="/FaceRecorder">
                      <IonIcon icon={recording} class="recording" />
                      <IonLabel>Record</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="FaceRecorder" href="/FaceRecorder">
                      <IonIcon icon={stop} class="stop"/>
                      <IonLabel>Stop</IonLabel>
                  </IonTabButton>
              </IonTabBar>
          <video id="gum"></video>
      </IonContent>
    </IonPage>
  );
};

export default FaceRecorder;
