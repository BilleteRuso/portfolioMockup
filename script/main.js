// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    width: '100%',
    videoId: 'RhlQvbvMg-0',
    playerVars: { 'autoplay': 1, 'playsinline': 1 },
    events: {
        'onReady': onPlayerReady
    }
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}


/***********************************************
 *********** FORMULARIO ************************
 **********************************************/


function send(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    console.log(name, email, subject, message)

    if(name, email, subject, message){
    let popUp = document.getElementById("popUp")
    let sendMessage = document.createElement("div")
    let sendP = document.createElement("div")
    sendMessage.setAttribute("id", "sendMessage")

    let sendText = document.createElement("p")
    sendText.setAttribute("class", "sendText")
    sendText.textContent = `¡Hi ${name}!`

    let sendText1 = document.createElement("p")
    sendText1.setAttribute("class", "sendText")
    sendText1.textContent = `Your message has been succesfully send.`

    let sendText2 = document.createElement("p")
    sendText2.setAttribute("class", "sendText")
    sendText2.textContent = `Tanks for geting in touch.`

    let sendText3 = document.createElement("p")
    sendText3.setAttribute("class", "sendText")
    sendText3.textContent = `I will get back to you in a bit.`

    let cancel = document.createElement("p")
    cancel.setAttribute("id", "cancel")
    cancel.textContent = `X`

    sendP.appendChild(sendText)
    sendP.appendChild(sendText1)
    sendP.appendChild(sendText2)
    sendP.appendChild(sendText3)
    sendMessage.appendChild(sendP)
    popUp.appendChild(sendMessage)
    }
}

