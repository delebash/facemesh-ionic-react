import React, { useState } from 'react';
import { IonLabel, IonListHeader, IonList, IonItem, IonSelectOption, IonSelect, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Settings.css';

import { camera, trash, close } from 'ionicons/icons';
import {IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
    IonCol, IonImg, IonActionSheet } from '@ionic/react';

//import { VideoCapture } from '../hooks/VideoCapture';

const users = [
    {
        id: 1,
        first: 'Alice',
        last: 'Smith'
    },
    {
        id: 2,
        first: 'Bob',
        last: 'Davis'
    },
    {
        id: 3,
        first: 'Charlie',
        last: 'Rosenburg',
    }
];

const FaceRecorder: React.FC = () => {
    const [cameras, setCamera] = useState<string>();

    //const [hairColor, setHairColor] = useState<string>('brown');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Face Recorder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList>
              <IonItem>
                  <IonLabel>Select Camera</IonLabel>
                  <IonSelect interface="popover" value={cameras} placeholder="Select Camera" onIonChange={e => setCamera(e.detail.value)}>
                      {users.map(user => (
                          <IonSelectOption key={user.id} value={user}>
                              {user.first} {user.last}
                          </IonSelectOption>
                      ))}
                  </IonSelect>
              </IonItem>
          </IonList>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton onClick={() => alert('test')}>
                  <IonIcon icon={camera}></IonIcon>
              </IonFabButton>
          </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default FaceRecorder;
