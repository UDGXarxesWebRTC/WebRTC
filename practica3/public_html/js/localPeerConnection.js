
document.addEventListener('DOMContentLoaded', function () {
	log('init');
	init();
});

function init() {
	// JavaScript variables associated with HTML5 video elements in the page
	var localVideo = document.getElementById("localVideo"); // html5 <video> element
	var remoteVideo = document.getElementById("remoteVideo"); // html5 <video> element

	// JavaScript variables assciated with call management buttons in the page
	var startButton = document.getElementById("startButton");
	var sendButton = document.getElementById("sendButton");	
	var callButton = document.getElementById("callButton");
	var hangupButton = document.getElementById("hangupButton");

	//On startup, just the 'Start' button must be enabled
	startButton.disabled  = false;
	sendButton.disabled   = true;
	callButton.disabled   = true;
	hangupButton.disabled = true;

	// Associate JavaScript handlers with click events on the buttons
	startButton.onclick  = start;
	sendButton.onclick 	 = sendData;
	callButton.onclick   = call;
	hangupButton.onclick = hangup;
}

function getTheCall(stream){
  log("getting the stream");
  if (window.URL) {
    localVideo.src = URL.createObjectURL(stream);
  } else {
    localVideo.src = stream;
  }

  localStream = stream;
  callButton.disabled = false;
}

/* Aquesta funció està associada al botó "start"
	Ha de fer el següent:
	- Deshabilitar el botó "start"
	- obtenir la funció navigator.getUserMedia pels diferents navegadors que soporten webRTC
	- Ha de cridar amb els paràmetres corresponents la funció del punt antenrior
*/
function start() {
  log("Requesting local stream");
  // disable the 'Start' button on the page
  xxxx
  // Get ready to deal with different browser vendors...
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  // Now, call getUserMedia()
  xxxx;
}


/* Aquesta funció està associada al botó "call"
	Ha de fer el següent:
	- Desactivar el botó "call"
	- Activar el botó "HangUp"
	- Obtenir els objectes "RTCPeerConnection", "RTCSessionDescription" i "RTCIceCandidate" pels diferents navegadors que soporten webRTC
	- Establir les 2 conexions (local i remota) amb les variables pc_contraints i servers que ja estan definides
	- Establir el canal de dades
*/
function call() {
	log("Starting call");
	// Desactivar botó "call" i activar el botó "hangUp"
 	xxxx
 	xxxx
	// Obtenir els objectes "RTCPeerConnection", "RTCSessionDescription" i "RTCIceCandidate" pels diferents navegadors que soporten webRTC
	if (navigator.webkitGetUserMedia) {
	          // Log info about video and audio device in use
	          if (localStream.getVideoTracks().length > 0) {
	            log('Using video device: ' + localStream.getVideoTracks()[0].label);
	          }
	          if (localStream.getAudioTracks().length > 0) {
	            log('Using audio device: ' + localStream.getAudioTracks()[0].label);
	          }
	  }

	// Chrome
	if (navigator.webkitGetUserMedia) {
         xxxx
	// Firefox
	} else if(navigator.mozGetUserMedia){
	        xxxx
	        xxxx
	        xxxx
	 }
	log("RTCPeerConnection object: " + RTCPeerConnection);
	// variables ja definides per establir la conexió remota i la conexió local
	var pc_constraints = { 'optional': [ { 'DtlsSrtpKeyAgreement': true } ] }; // JavaScript var associated with proper config. of an RTCPeerConnection object: use DTLS/SRTP
	var servers = null;	// This is an optional configuration string, associated with NAT traversal setup
	//Establir la conexió local i la conexió remota
	localPeerConnection = xxxx;
  	log("Created local peer connection object localPeerConnection");
	try {
	        sendChannel = xxxx;
	            log('Created reliable send data channel');
	        } catch (e) {
	            alert('Failed to create data channel!');
	            log('createDataChannel() failed with following message: ' + e.message);
	        }
 	localPeerConnection.onicecandidate = xxxx;
    sendChannel.onopen = xxxx;
    sendChannel.onclose = xxxx;
	window.remotePeerConnection = xxxx;
	log("Created remote peer connection object remotePeerConnection");
	// Add a handler associated with ICE protocol events...
	remotePeerConnection.onicecandidate = xxxx;
	// ...and a second handler to be activated as soon as the remote
	// stream becomes available.
	remotePeerConnection.onaddstream = xxxx;
	localPeerConnection.addStream(localStream);
	log("Added localStream to localPeerConnection");
	remotePeerConnection.ondatachannel = xxxx;
	// En aquest punt tot hauria d'estar a punt, es crea un 'Offer' per acabar d'establir la trucada
	localPeerConnection.createOffer(obtenirDescripcioLocal, senyalitzarError);
}

/* Aquesta funció està associada al botó "send"
	Ha de fer el següent:
	- Obtenir el text que hi hagi dins l'element HTML amb id 'dataChannelSend'
	- Enviar el text del punt anterior mitjançant el 'sendChannel' */
function sendData() {
	// variable per guardar el text
	//obtenir el text del 'dataChannelSend'
    var data = xxxx;
	// enviar el text amb el 'sendChannel'
	xxxx;
	log('Sent data: ' + data);
}

/* Aquesta funció està associada al botó "HangUp"
	Ha de fer el següent:	
	- Tancar les connexions local i remota
	- Resetejar les conexions local i remota
	- Desactivar el botó 'hangUp' i activar el botó 'call'
	- Tancar el sendChannel i el receiveChannel */
function hangup() {
	log("Ending call");
	// Tancar conexions local i remota
	xxxx
 	xxxx
	// Resetejar les conexions local i remota
	xxxx
	xxxx
	// Desactivar el botó 'hangUp' i activar el botó 'call'	
	xxxx
	xxxx
	// Tancar el sendChannel i el receiveChannel
	xxxx
	xxxx
	// Deixem la pàgina HTML tal i com estava al principi
	sendButton.disabled = true;
	dataChannelSend.value = "";
	dataChannelReceive.value = "";
	dataChannelSend.disabled = true;
	dataChannelSend.placeholder = "1: Press Call; 2: Enter text; 3: Press Send.";
	remoteVideo.src = "";
}

