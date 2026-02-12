
function encryptTrans() {
  let text = document.getElementById("transText").value.replace(/\s/g, "");
  let key = parseInt(document.getElementById("transKey").value);
  let result = "";

  for (let i = 0; i < key; i++) {
    for (let j = i; j < text.length; j += key) {
      result += text[j];
    }
  }

  document.getElementById("transResult").value = result;
}

function decryptTrans() {
  let cipher = document.getElementById("transText").value;
  let key = parseInt(document.getElementById("transKey").value);
  let cols = Math.ceil(cipher.length / key);
  let result = "";
  let index = 0;

  let table = Array.from({ length: key }, () => []);

  for (let i = 0; i < key; i++) {
    for (let j = 0; j < cols && index < cipher.length; j++) {
      table[i][j] = cipher[index++];
    }
  }

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < key; i++) {
      if (table[i][j]) result += table[i][j];
    }
  }

  document.getElementById("transResult").value = result;
}

