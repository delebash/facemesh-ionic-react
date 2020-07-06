import React, {useEffect, useState} from 'react';
import {
    IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption,
    IonTitle, IonToolbar
} from '@ionic/react';
import './Settings.css';
import {getCameraList} from '../hooks/GetVideoDevice'

let cameraList = []
const Settings: React.FC = () => {

    const [cameras, setCamera] = useState([]);

    useEffect(() => {
        async function getCameras() {
            cameraList = await getCameraList();
            setCamera(cameraList);
        }

        getCameras()
    }, []);

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
                        <IonSelect id="camera" interface="popover" value={cameras} placeholder="Select Camera"
                                   onIonChange={e => setCamera(e.detail.value)}>
                            {cameraList.map(camera => (
                                <IonSelectOption key={camera.id} value={camera.label}>
                                    {camera.label}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Settings;
