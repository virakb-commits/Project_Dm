
function modInverse(a, m) {
  for (let i = 1; i < m; i++) {
    if ((a * i) % m === 1) return i;
  }
  return null;
}

function encryptAffine() {
  let text = document.getElementById("affineText").value;
  let a = parseInt(document.getElementById("keyA").value);
  let b = parseInt(document.getElementById("keyB").value);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (c.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let base = (code >= 65 && code <= 90) ? 65 : 97;
      let x = code - base;
      c = String.fromCharCode(((a * x + b) % 26) + base);
    }
    result += c;
  }
  document.getElementById("affineResult").value = result;
}

function decryptAffine() {
  let text = document.getElementById("affineText").value;
  let a = parseInt(document.getElementById("keyA").value);
  let b = parseInt(document.getElementById("keyB").value);
  let aInv = modInverse(a, 26);
  let result = "";

  if (aInv === null) {
    alert("Key 'a' has no modular inverse!");
    return;
  }

  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (c.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let base = (code >= 65 && code <= 90) ? 65 : 97;
      let y = code - base;
      c = String.fromCharCode(((aInv * (y - b + 26)) % 26) + base);
    }
    result += c;
  }
  document.getElementById("affineResult").value = result;
}
