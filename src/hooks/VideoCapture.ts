export async function getCameraList() {


    let cameraList = [];

    let mediaDevices = await navigator.mediaDevices.enumerateDevices()

    mediaDevices.forEach(mediaDevice => {
        let camera ={};
        if (mediaDevice.kind === 'videoinput') {
            camera.id ='mediaDevice.deviceId;'
            camera.label = mediaDevice.label
            cameraList.push(camera)
        }
    });
    return cameraList
}
