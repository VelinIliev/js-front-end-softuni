function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelector('#main div:nth-child(1) button');
    const decodeBtn = document.querySelector('#main div:nth-child(2) button');
    const encodeMessage = document.querySelector('#main div:nth-child(1) textarea');
    const decodeMessage = document.querySelector('#main div:nth-child(2) textarea');

    function encodeMsg() {
        let text = encodeMessage.value;
        let codedMsg = ''
        for (let i = 0; i < text.length; i++) {
            codedMsg += String.fromCharCode(text[i].charCodeAt(0) + 1);
        }
        encodeMessage.value = ''
        decodeMessage.value = codedMsg
    }
    function decodeMsg() {
        let codedMsg = decodeMessage.value;
        let text = ''
        for (let i = 0; i < codedMsg.length; i++) {
            text += String.fromCharCode(codedMsg[i].charCodeAt(0) - 1);
        }
        decodeMessage.value = text
    }

    encodeBtn.addEventListener('click', encodeMsg);
    decodeBtn.addEventListener('click', decodeMsg);
}