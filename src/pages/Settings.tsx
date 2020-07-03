import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SampleComponent from '../components/SampleComponent';
import './Settings.css';

import { camera, trash, close } from 'ionicons/icons';
import {IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
    IonCol, IonImg, IonActionSheet } from '@ionic/react';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>

        </IonHeader>
          <SampleComponent name="Settings" />
      </IonContent>
    </IonPage>
  );
};

export default Settings;
