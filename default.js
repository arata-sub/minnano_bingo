let bingoArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52 ,53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75);

let button = document.querySelector('#button1');
button.addEventListener('click', bingoStart);

let id;
function bingoStart() {
    document.getElementById('sound-file').play();
    id = setInterval(dispRandomNumber, 180);
    setTimeout(renderingBingo, 3400);
}

/**
 * レンダリングをし続ける
 */
let renderingBox = document.querySelector('.renderingBox');
function dispRandomNumber() {
    renderingBox.textContent = roulette();
}

/**
 * レンダリングを終了し数字を表示させる
 */
function renderingBingo() {
    clearInterval(id);
    b_i = roulette();
    renderingBox.textContent = bingoArray[b_i];
    renderingOutputedBingo('.b' + bingoArray[b_i]);
    bingoArray.splice(b_i,1);
}

/**
 * ビンゴに出た数字の表示
 */
function renderingOutputedBingo(number) {
    let liNumber = document.querySelector(number);
    liNumber.setAttribute('class', 'outputedNumber');
}

/**
 *  ビンゴ配列のlength分のランダムな数字を返す
 *  return Number
 */
function roulette() {
    return Math.floor(Math.random() * bingoArray.length);
}
