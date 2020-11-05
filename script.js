const VIDEO_ELEMENT = document.getElementById("video");
const PIP_BUTTON = document.getElementById("button");

// Prompt to select a media stream
// Pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        VIDEO_ELEMENT.srcObject = mediaStream;
        VIDEO_ELEMENT.onloadedmetadata = () => {
            VIDEO_ELEMENT.play();
        };
    } catch (error) {
        console.log("Whoops, we've got an error here:", error);
    }
}

// Event Listeners
PIP_BUTTON.addEventListener("click", async () => {
    // Disable PIP button
    PIP_BUTTON.disabled = true;

    // Start Picture in Picture
    await VIDEO_ELEMENT.requestPictureInPicture();

    // Reset PIP button
    PIP_BUTTON.disabled = false;
});

// On load
selectMediaStream();