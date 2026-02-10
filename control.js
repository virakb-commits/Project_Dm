function encryptCaesar() {
    let text = document.getElementById('caesarText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (c.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            c = String.fromCharCode(((code - base + shift) % 26) + base);
        }

        result += c;
    }

    document.getElementById('caesarResult').value = result;
}



function decryptCaesar() {
    let text = document.getElementById('caesarText').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let c = text[i];

        if (c.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            c = String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }

        result += c;
    }

    document.getElementById('caesarResult').value = result;
}
