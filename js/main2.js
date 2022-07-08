const keySup = document.getElementById('keySupport');
const windowSup = document.getElementById('windowSup');
const closeWin = document.getElementById('closeWin');

keySup.onclick = windowClk;
closeWin.onclick = closeW;

function windowClk() {
    windowSup.style.display = 'block';
}

function closeW() {
    windowSup.style.display = 'none';
}