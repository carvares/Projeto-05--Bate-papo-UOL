let userName = prompt('insira um nome de usuário');

let nameSend = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', {name: userName});

nameSend.then(setInterval(mantainUser, 5000));
nameSend.catch(verifyName);

function verifyName(){
        userName = prompt('Nome já usado, escolha outro nome de usuário');
        nameSend = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', {name: userName});
        nameSend.then(setInterval(mantainUser, 5000));
        nameSend.catch(verifyName);

}
function mantainUser(){
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status',{name: userName});
}


let messages = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages');
messages.then(printMessages);


function printMessages(content){
    let bodyChat = document.querySelector(".chat");


    for(i = 0; i < content.data.length; i++){
    var messageContent;
    if (content.data[i].type === "status"){
    messageContent = 
    `<div class="message status">
    <div class="time">(${content.data[i].time})</div>
    <strong class ="userNameStyle">${content.data[i].from}</strong> ${content.data[i].text}
    </div>`
    }
    if (content.data[i].type === "private_message"){
    messageContent = 
    `<div class="message private">
    <div class="time">(${content.data[i].time})</div>
    <strong class ="userNameStyle">${content.data[i].from}</strong> ${content.data[i].text}
    </div>`
    }
    if (content.data[i].type === "message"){
    messageContent = 
    `<div class="message public">
    <div class="time">(${content.data[i].time})</div>
    <strong class ="userNameStyle">${content.data[i].from}</strong> ${content.data[i].text}
    </div>`
    }
    bodyChat.innerHTML += messageContent;
    }
}