function encrypt() {
    let inputText = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let outputText = caesarCipher(inputText, shift);
    document.getElementById('outputText').value = outputText;
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let outputText = caesarCipher(inputText, -shift);
    document.getElementById('outputText').value = outputText;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt();
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}
