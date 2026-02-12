function myFunction() {
  alert("Hello! I am an alert box!");
}
function openMember() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("memberBox").style.display = "block";
}

function closeMember() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("memberBox").style.display = "none";
}