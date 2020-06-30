let imgNai = document.getElementById("nai");
let imgCua = document.getElementById("cua");
let imgGa = document.getElementById("ga");
let imgCa = document.getElementById("ca");
let imgBau = document.getElementById("bau");
let imgTom = document.getElementById("tom");

let coinNai = document.getElementById("stakesNai").textContent;
let coinNaiNum = parseInt(coinNai);
let coinCua = document.getElementById("stakesCua").textContent;
let coinCuaNum = parseInt(coinCua);
let coinGa = document.getElementById("stakesGa").textContent;
let coinGaNum = parseInt(coinGa);
let coinCa = document.getElementById("stakesCa").textContent;
let coinCaNum = parseInt(coinCa);
let coinBau = document.getElementById("stakesBau").textContent;
let coinBauNum = parseInt(coinBau);
let coinTom = document.getElementById("stakesTom").textContent;
let coinTomNum = parseInt(coinTom);


let checkImgNai = new ImageObj("nai", imgNai, status, coinNaiNum);
let checkImgCua = new ImageObj("cua", imgCua, status, coinCuaNum);
let checkImgGa = new ImageObj("ga", imgGa, status, coinGaNum);
let checkImgCa = new ImageObj("ca", imgCa, status, coinCaNum);
let checkImgBau = new ImageObj("bau", imgBau, status, coinBauNum);
let checkImgTom = new ImageObj("tom", imgTom, status, coinTomNum);

checkImgNai.value = 1;
checkImgCua.value = 2;
checkImgGa.value = 3;
checkImgCa.value = 4;
checkImgBau.value = 5;
checkImgTom.value = 6;

let arrayObj = [checkImgNai, checkImgCua, checkImgGa, checkImgCa, checkImgBau, checkImgTom];

function statusImg(value) {
    for (let i = 0; i < arrayObj.length; i++) {
        if (value === arrayObj[i].name) {
            arrayObj[i].status = true;
        } else {
            arrayObj[i].getStatus();
        }
    }
}

let dice1 = new Dice();
let dice2 = new Dice();
let dice3 = new Dice();

function rollDice() {
    let time = 34;
    let image = ["image/nai.jpg", "image/cua.jpg", "image/ga.jpg",
        "image/ca.jpg", "image/bau.jpg", "image/tom.jpg"];

    let timeValue = setInterval(function () {
        dice1.getRanNum();
        document.getElementById("dice1").src = image [dice1.ranNum];
        dice2.getRanNum();
        document.getElementById("dice2").src = image [dice2.ranNum];
        dice3.getRanNum();
        document.getElementById("dice3").src = image [dice3.ranNum];
        time = time - 1;
        if (time <= 0) {
            clearInterval(timeValue);
            checkWin(0, coinNaiNum);
            checkWin(1, coinCuaNum);
            checkWin(2, coinGaNum);
            checkWin(3, coinCaNum);
            checkWin(4, coinBauNum);
            checkWin(5, coinTomNum);
        }
    }, 34);
}


function checkWin(obj, coin) {
    let duplicate = 0;
    if (dice1.ranNum === obj){
        console.log('Dice 1', dice1.ranNum, obj);
        duplicate++;
    }
    if (dice2.ranNum === obj){
        console.log('Dice 2', dice2.ranNum, obj);
        duplicate++;
    }
    if (dice3.ranNum === obj){
        console.log('Dice 3', dice3.ranNum, obj);
        duplicate++;
    }

    totalM += (coin * duplicate);
    console.log(totalM);
    document.getElementById("money").innerHTML = totalM;

    if ((dice1.ranNum !== obj)  && (dice2.ranNum !== obj)  && (dice3.ranNum !== obj)){
    }

}





function showCoin() {
    chipCoinNai = 0;
    chipCoinCua = 0;
    chipCoinGa = 0;
    chipCoinCa = 0;
    chipCoinBau = 0;
    chipCoinTom = 0;
    document.getElementById("stakesNai").innerHTML = "0";
    document.getElementById("stakesCua").innerHTML = "0";
    document.getElementById("stakesGa").innerHTML = "0";
    document.getElementById("stakesCa").innerHTML = "0";
    document.getElementById("stakesBau").innerHTML = "0";
    document.getElementById("stakesTom").innerHTML = "0";

}
function refresh() {
    location.reload();
}