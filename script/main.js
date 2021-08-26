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

    const isEmpty = str => !str.trim().length;

    if (name && email && subject && message){
        let gridConacto = document.getElementById("gridConacto")
        let sendMessage = document.createElement("div")
        sendMessage.setAttribute("id", "sendMessage")
        let sendP = document.createElement("div")

        let cancel = document.createElement("p")
        cancel.setAttribute("class", "sendText")
        cancel.setAttribute("id", "cancel")
        cancel.setAttribute("onclick", "cancel()")
        cancel.textContent = `X`

        let sendText = document.createElement("p")
        sendText.setAttribute("class", "sendText")
        sendText.textContent = `¡Hi ${name}!`
    
        let sendText1 = document.createElement("p")
        sendText1.setAttribute("class", "sendText")
        sendText1.textContent = `Your message has been successfully sent.`
    
        let sendText2 = document.createElement("p")
        sendText2.setAttribute("class", "sendText")
        sendText2.textContent = `Thanks for getting in touch, I will be sure to follow-up soon.`
    
        sendP.appendChild(cancel)
        sendP.appendChild(sendText)
        sendP.appendChild(sendText1)
        sendP.appendChild(sendText2)
        sendMessage.appendChild(sendP)
        gridConacto.appendChild(sendMessage)

        document.getElementById("send").removeAttribute("onclick");

    } else if (isEmpty(name)){
        let gridConacto = document.getElementById("gridConacto")
        let sendMessage = document.createElement("div")
        sendMessage.setAttribute("id", "nameNeed")
        let fondo = document.createElement("div")
        fondo.setAttribute("id", "nameNeedFondo")

        let sendP = document.createElement("div")

        let sendText = document.createElement("p")
        sendText.setAttribute("class", "alert")
        sendText.textContent = `Name required`

        sendP.appendChild(sendText)
        sendMessage.appendChild(sendP)
        gridConacto.appendChild(fondo)
        gridConacto.appendChild(sendMessage)


        document.body.onmousedown = function() { 
            document.getElementById("gridConacto").removeChild(sendMessage);
            document.getElementById("gridConacto").removeChild(fondo);
        }

    } else if (isEmpty(email)){
        let gridConacto = document.getElementById("gridConacto")
        let sendMessage = document.createElement("div")
        sendMessage.setAttribute("id", "emailNeed")
        let fondo = document.createElement("div")
        fondo.setAttribute("id", "emailNeedFondo")

        let sendP = document.createElement("div")

        let sendText = document.createElement("p")
        sendText.setAttribute("class", "alert")
        sendText.textContent = `Email required`

        sendP.appendChild(sendText)
        sendMessage.appendChild(sendP)
        gridConacto.appendChild(fondo)
        gridConacto.appendChild(sendMessage)

        document.body.onmousedown = function() { 
            document.getElementById("gridConacto").removeChild(sendMessage);
            document.getElementById("gridConacto").removeChild(fondo);
        }
    } else if (isEmpty(subject)){
        let gridConacto = document.getElementById("gridConacto")
        let sendMessage = document.createElement("div")
        sendMessage.setAttribute("id", "subjetNeed")
        let fondo = document.createElement("div")
        fondo.setAttribute("id", "subjectNeedFondo")

        let sendP = document.createElement("div")

        let sendText = document.createElement("p")
        sendText.setAttribute("class", "alert")
        sendText.textContent = `Subjet required to contact back`

        sendP.appendChild(sendText)
        sendMessage.appendChild(sendP)
        gridConacto.appendChild(fondo)
        gridConacto.appendChild(sendMessage)

        document.body.onmousedown = function() { 
            document.getElementById("gridConacto").removeChild(sendMessage);
            document.getElementById("gridConacto").removeChild(fondo);
        }
    } else if (message == "" || name == null){
        let gridConacto = document.getElementById("gridConacto")
        let sendMessage = document.createElement("div")
        sendMessage.setAttribute("id", "messageNeed")
        let fondo = document.createElement("div")
        fondo.setAttribute("id", "messageNeedFondo")

        let sendP = document.createElement("div")

        let sendText = document.createElement("p")
        sendText.setAttribute("class", "alert")
        sendText.textContent = `Message required to contact back`

        sendP.appendChild(sendText)
        sendMessage.appendChild(sendP)
        gridConacto.appendChild(fondo)
        gridConacto.appendChild(sendMessage)

        document.body.onmousedown = function() { 
            document.getElementById("gridConacto").removeChild(sendMessage);
            document.getElementById("gridConacto").removeChild(fondo);
    } 
    }
}

function cancel(){
    document.getElementById("send").setAttribute("onclick", "send()");
    document.getElementById("gridConacto").removeChild(sendMessage);
}

