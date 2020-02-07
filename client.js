

        /* Video Chat */
// Prefer camera resolution nearest to 1280x720.
var constraints = { audio: true, video: true }; 

navigator.mediaDevices.getUserMedia(constraints)
  .then(function(mediaStream) {
    const video = document.querySelector("#lVideo");
    video.srcObject = mediaStream;
    video.onloadedmetadata = function(e) {
      video.play();
    };


        // get the local video and display it with permission
    const peer = new Peer({ key: "lwjd5qra8257b9" }); 

        // create a peer connection with peer obj
    peer.on('open', () => {
      document.getElementById("displayId").innerHTML = peer.id;
    })
  })
  .catch(function(err) { alert("starting Error"); console.log(err.name + ": " + err.message); }); // always check for errors at the end.
    // display the peer id on the DOM

    // onclick with the connection butt = exposes ice info

    // call on click (offer and answer is exchanged)

    // ask to call

    // accpet the call

    // dispaly the remote video and local video on the client