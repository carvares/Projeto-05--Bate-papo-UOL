let userName = prompt('insira um nome de usuário');

let nameSend = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', {name: userName});

nameSend.then(setInterval(mantainUser, 5000));
nameSend.catch(verifyName);

function verifyName(){
        userName = prompt('Nome já usado, escolha outro nome de usuário');
        nameSend = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/participants', {name: userName});

}
function mantainUser(){
    const correctName = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/status',{name: userName});
}


let messages = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/uol/messages');
messages.then(printMessages);


function printMessages(content){
    let bodyChat = document.querySelector(".chat");


    for(i = 0; i < content.data.length; i++){
        
    let messageContent = 
    `<div class="message">
    <div class="time">(${content.data[i].time})</div>
    <strong>${content.data[i].from}</strong> ${content.data[i].text}
    </div>`
    
    bodyChat.innerHTML += messageContent;
    }
   
}