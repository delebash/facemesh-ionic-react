export async function getCameraList() {


    let cameraList = [];
    await navigator.mediaDevices.getUserMedia({video: true})
    let mediaDevices = await navigator.mediaDevices.enumerateDevices()

    mediaDevices.forEach(mediaDevice => {
        let camera ={
            id: undefined,
            label: undefined
        };

        if (mediaDevice.kind === 'videoinput') {
            camera.id =mediaDevice.deviceId
            camera.label = mediaDevice.label
            cameraList.push(camera)
        }
    });
    return cameraList
}
