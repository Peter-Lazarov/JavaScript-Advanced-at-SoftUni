function encodeAndDecodeMessages() {
    let divFirst = document.querySelectorAll("div main div")[0];
    let divSecond = document.querySelectorAll("div main div")[1];

    function readAndEncode(){
        let textAreaWrite = divFirst.querySelector("textarea").value;
        let textEncoded = [];
        for (let i = 0; i < textAreaWrite.length; i++) {
            let code = textAreaWrite.charCodeAt(i);
            textEncoded.push(String.fromCharCode(code + 1));
        }
        //console.log(textEncoded);
        
        divSecond.querySelector("textarea").value = textEncoded.join("");
        divFirst.querySelector("textarea").value = "";
    }

    function decodeAndShow(){
        let textAreaRead = divSecond.querySelector("textarea").value;
        let textEncoded = [];
        for (let i = 0; i < textAreaRead.length; i++) {
            let code = textAreaRead.charCodeAt(i);
            textEncoded.push(String.fromCharCode(code - 1));
        }
        //console.log(textEncoded);
        divSecond.querySelector("textarea").value = textEncoded.join("");
    }
    
    divFirst.querySelector("button").addEventListener("click", readAndEncode);
    divSecond.querySelector("button").addEventListener("click", decodeAndShow);
}
