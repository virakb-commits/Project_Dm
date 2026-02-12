function encryptShift() {
  let text = document.getElementById("shiftText").value;
  let shift = parseInt(document.getElementById("shiftKey").value);
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char.match(/[a-z]/i)) {
      let code = text.charCodeAt(i);
      let base = (code >= 65 && code <= 90) ? 65 : 97;

      char = String.fromCharCode(
        ((code - base + shift) % 26) + base
      );
    }

    result += char;
  }

  document.getElementById("shiftResult").value = result;
}

function decryptShift() {
  let shift = parseInt(document.getElementById("shiftKey").value);
  document.getElementById("shiftKey").value = (26 - shift) % 26;
  encryptShift();
  document.getElementById("shiftKey").value = shift;
}