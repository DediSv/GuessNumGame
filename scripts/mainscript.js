//Script for difficulty//
function addclass(butname) {
    var buttons = document.getElementsByClassName('active');
    for(var i = 0; i < buttons.length; i++)
        buttons[i].classList.remove('active');
    butname.classList.add('active');
}
//Changing dif lvls
var maxNum; //max size
var comChoice; //computer choice
var count = 0; //Tries
function difficultyJS(par) {
    if (par === 'ez') {
        document.querySelector('.js-diff').innerHTML = `between <br><span>1 and 50</span>`;
        maxNum = 50;
        pickComputer();
        document.querySelector('#pict').innerHTML = '<img src="styles/images/ez.png">';
    }
    if (par === 'norm') {
        document.querySelector('.js-diff').innerHTML = `between <br><span>1 and 100</span>`;
        maxNum = 100;
        pickComputer();
        document.querySelector('#pict').innerHTML = '<img src="styles/images/norm.png">';
    }
    if (par === 'hard') {
        document.querySelector('.js-diff').innerHTML = `between <br><span>1 and 1000</span>`;
        maxNum = 1000;
        pickComputer();
        document.querySelector('#pict').innerHTML = '<img src="styles/images/hard.png">';
    }
    document.querySelector('.status').innerHTML = `Computer picked a number.`;
    count = 0;
    document.querySelector('.tries').classList.add('hidden');
    var hidd = document.getElementsByClassName('toggleHi');
    for (var i = 0; i < hidd.length; i++)
        hidd[i].classList.remove('hidden');
}
//Middle scripts
function pickComputer(){
    const randomNum = Math.floor(Math.random() * maxNum) + 1;
    comChoice = randomNum;
}

function result() {
    const inputElem = document.querySelector('#guess');
    let guess= Number(inputElem.value);
    if (guess === comChoice){
        document.querySelector('.status').innerHTML = "THAT'S IT!";
        var hidd = document.getElementsByClassName('toggleHi');
        for (var i = 0; i < hidd.length; i++)
            hidd[i].classList.add('hidden');
        document.querySelector('.tries').innerHTML = `Your tries: ${count}`;
        document.querySelector('#pict').innerHTML = '<img src="styles/images/Final.gif">';
    }
    if (guess < comChoice){
        document.querySelector('.status').innerHTML = "Bigger...";
        count ++;
        document.querySelector('.tries').innerHTML = `Tries: ${count}`;
    }
    if (guess > comChoice) {
        document.querySelector('.status').innerHTML = "Smaller...";
        count ++;
        document.querySelector('.tries').innerHTML = `Tries: ${count}`;
    }
}

function guessJS(event){
    if (event.key ==="Enter") {
        document.querySelector('.tries').classList.remove('hidden');
        result();
        document.querySelector('#guess').value = "";
    }
}

