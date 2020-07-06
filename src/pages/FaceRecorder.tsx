import React, { useState } from 'react';
import {
    IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabButton, IonTabBar,IonIcon,
    useIonViewDidLeave, useIonViewDidEnter
} from '@ionic/react';
import './FaceRecorder.css';

import {recording, stop} from 'ionicons/icons';

const FaceRecorder: React.FC = () => {
if  (document.getElementById("camera")){
    let selectedCamera = (document.getElementById("camera") as HTMLInputElement).value
     console.log(selectedCamera);
}

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
