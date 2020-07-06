import React, {useState} from 'react';
import {
    IonLabel, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabButton, IonTabBar, IonIcon,
    useIonViewDidEnter
} from '@ionic/react';
import './FaceRecorder.css';

import {recording, stop} from 'ionicons/icons';
import {TRIANGULATION} from '../hooks/triangulation'

import * as facemesh from '@tensorflow-models/facemesh';
import '@tensorflow/tfjs'
//import '@tensorflow/tfjs-node-gpu';

const FaceRecorder: React.FC = () => {
    let currentStream;
    let stream;
    let selectedCamera
    let model, ctx, videoWidth, videoHeight, video, canvas
    const VIDEO_SIZE = 500;
    const triangulateMesh = true;

    function drawPath(ctx, points, closePath) {
        const region = new Path2D();
        region.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) {
            const point = points[i];
            region.lineTo(point[0], point[1]);
        }

        if (closePath) {
            region.closePath();
        }
        ctx.stroke(region);
    }

    function stopMediaTracks(stream) {
        stream.getTracks().forEach(track => {
            track.stop();
        });
        video.srcObject = null;
    }

    async function stopCamera() {
        if (typeof currentStream !== 'undefined') {
            stopMediaTracks(currentStream);
        }
    }

    async function setupCamera() {

        stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                facingMode: 'user',
                deviceId: {exact: selectedCamera}
                // // Only setting the video to a specified size in order to accommodate a
                // // point cloud, so on mobile devices accept the default size.
                // width: VIDEO_SIZE,
                // height: VIDEO_SIZE
            },
        })

        video.srcObject = stream;

        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve(video);
            };
        });
    }

    async function renderPrediction() {
        const predictions = await model.estimateFaces(video);
        ctx.drawImage(
            video, 0, 0, videoWidth, videoHeight, 0, 0, canvas.width, canvas.height);

        if (predictions.length > 0) {
            predictions.forEach(prediction => {
                const keypoints = prediction.scaledMesh;

                if (triangulateMesh === true) {
                    for (let i = 0; i < TRIANGULATION.length / 3; i++) {
                        const points = [
                            TRIANGULATION[i * 3], TRIANGULATION[i * 3 + 1],
                            TRIANGULATION[i * 3 + 2]
                        ].map(index => keypoints[index]);

                        drawPath(ctx, points, true);
                    }
                } else {
                    for (let i = 0; i < keypoints.length; i++) {
                        const x = keypoints[i][0];
                        const y = keypoints[i][1];

                        ctx.beginPath();
                        ctx.arc(x, y, 1 /* radius */, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }
            });
        }
        requestAnimationFrame(renderPrediction);
    }

    async function main() {
        video = document.getElementById('video');
        await setupCamera();
        video.play();
        videoWidth = video.videoWidth;
        videoHeight = video.videoHeight;
        video.width = videoWidth;
        video.height = videoHeight;

        canvas = document.getElementById('output');
        canvas.width = videoWidth;
        canvas.height = videoHeight;
        //const canvasContainer = document.querySelector('.canvas-wrapper');
        //  canvasContainer.style = `width: ${videoWidth}px; height: ${videoHeight}px`;

        ctx = canvas.getContext('2d');
        ctx.translate(canvas.width, 0);
        ctx.scale(-1, 1);
        ctx.fillStyle = '#32EEDB';
        ctx.strokeStyle = '#32EEDB';
        ctx.lineWidth = 0.5;

        model = await facemesh.load({maxFaces: 1});
        renderPrediction();
    }

    useIonViewDidEnter(() => {
        if (document.getElementById("camera")) {
            selectedCamera = (document.getElementById("camera") as HTMLInputElement).value
            if (Array.isArray(selectedCamera) === false) {
                console.log(selectedCamera);
                main()
            }
        } else {
            console.log('Select Camera on Settings Page')
        }

    })

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Face Recorder</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonTabBar>
                    <IonTabButton tab="FaceRecorder">
                        <IonIcon icon={recording} class="recording"/>
                        <IonLabel>Record</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="FaceRecorder" onClick={() => stopCamera()}>
                        <IonIcon icon={stop} class="stop"/>
                        <IonLabel>Stop</IonLabel>
                    </IonTabButton>
                </IonTabBar>
                <canvas id="output"></canvas>
                <video id="video">
                </video>
            </IonContent>
        </IonPage>
    );
};

export default FaceRecorder;
