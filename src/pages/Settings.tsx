import React, {useEffect, useState} from 'react';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption,
    IonTitle, IonToolbar} from '@ionic/react';
import './Settings.css';
import {getCameraList} from '../hooks/VideoCapture'

const Settings: React.FC = () => {

    const [cameras, setCamera] = useState([]);

    useEffect(() => {
        async function getCameras() {
            let cameraList= []
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
                        <IonSelect interface="popover" value={cameras} placeholder="Select Camera"
                                   onIonChange={e => setCamera(e.detail.value)}>
                            {cameras.map(camera => (
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
