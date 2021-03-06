const clickBtn = document.getElementById('clickBtn');
const closeBar = document.getElementById('closeBar');
const bar = document.getElementById('bar');
const background = document.getElementById('background');

clickBtn.onclick = sideBar;
background.onclick = sideBar;

function sideBar() {
    if (background.style.display == 'block') {
        background.style.display = 'none';
    }  else {
        background.style.display = 'block';
    }
    bar.classList.toggle('active');
    clickBtn.classList.toggle('change');
    if (clickBtn.className == 'change') {
        closeBar.style.opacity = "1";
        closeBar.style.transform = "rotate(-180deg)";
    } else {
        closeBar.style.opacity = "0";
        closeBar.style.transform = "rotate(180deg)";
    }
}

let counterL = +localStorage.getItem("likes") || 0;
let counterC = +localStorage.getItem("comments") || 0;
let counterR = +localStorage.getItem("reposts") || 0;

const like = document.getElementById('counterL');
const comment = document.getElementById('counterC');
const repost = document.getElementById('counterR');

like.onclick = counterLike;
comment.onclick = counterComment;
repost.onclick = counterRepost;

like.innerHTML = '♡' +' '+ counterL;
comment.innerHTML = '⌨' +' '+ counterC;
repost.innerHTML = '&#9166;' +' '+ counterR;

function counterLike() {
    counterL++;
    like.innerHTML = '♡' +' '+ counterL;
    localStorage.setItem("likes", counterL);
    like.style.borderColor = '#ff4800';
}

function counterComment() {
    counterC++;
    comment.innerHTML = '⌨' +' '+ counterC;
    localStorage.setItem("comments", counterC);
    comment.style.borderColor = '#ff4800';
}

function counterRepost() {
    counterR++;
    repost.innerHTML = '&#9166;' +' '+ counterR;
    localStorage.setItem("reposts", counterR);
    repost.style.borderColor = '#ff4800';
}