

        /* Video Chat */
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: { width: 1280, height: 720 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  const video = document.querySelector("#rVideo");
  console.log(video);
  video.srcObject = mediaStream;
  video.onloadedmetadata = function(e) {
    video.play();
  };
})
.catch(function(err) { alert("starting Error"); console.log(err.name + ": " + err.message); }); // always check for errors at the end.


    // get the local video and display it with permission

    // create a peer connection with peer obj

    // display the peer id on the DOM

    // onclick with the connection butt = exposes ice info

    // call on click (offer and answer is exchanged)

    // ask to call

    // accpet the call

    // dispaly the remote video and local video on the client