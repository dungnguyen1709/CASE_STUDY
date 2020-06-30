class Chip {
    constructor(img1, img2, img3, img4, img5, img6) {
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;

        this.getImg1 = function () {
            return this.img1 = 50;
        }
        this.getImg2 = function () {
            return this.img2 = 100;
        }
        this.getImg3 = function () {
            return this.img3 = 200;
        }
        this.getImg4 = function () {
            return this.img4 = 500;
        }
        this.getImg5 = function () {
            return this.img5 = 1000;
        }
        this.getImg6 = function () {
            return this.img6 = 2000;
        }
    }
}

let chipImg1 = document.getElementById("chip50");
let chipImg2 = document.getElementById("chip100");
let chipImg3 = document.getElementById("chip200");
let chipImg4 = document.getElementById("chip500");
let chipImg5 = document.getElementById("chip1000");
let chipImg6 = document.getElementById("chip2000");

let chipCoin = new Chip (chipImg1, chipImg2, chipImg3, chipImg4, chipImg5, chipImg6);

let chipCoinNai = 0;
let chipCoinCua = 0;
let chipCoinGa = 0;
let chipCoinCa = 0;
let chipCoinBau = 0;
let chipCoinTom = 0;
let tobi = 0;

function checkMoney(m) {
    return totalM >= m;
}

function chip1() {
    let isMoney = checkMoney();
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else if (isMoney = checkMoney(50)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg1();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg1();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg1();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg1();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg1();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg1();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 50;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }
}

function chip2() {
    let isMoney = checkMoney();
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else if (isMoney = checkMoney(100)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg2();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg2();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg2();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg2();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg2();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg2();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 100;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }

}

function chip3() {
    let isMoney = checkMoney();
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else if (isMoney = checkMoney(200)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg3();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg3();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg3();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg3();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg3();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg3();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 200;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }
}

function chip4() {
    let isMoney = checkMoney();
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else if (isMoney = checkMoney(500)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg4();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg4();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg4();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg4();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg4();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg4();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 500;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }
}

function chip5() {
    let isMoney = checkMoney();
    for (let i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === false) {
        } else if (isMoney = checkMoney(1000)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg5();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg5();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg5();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg5();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg5();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg5();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 1000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }
}

function chip6() {

    for (let i = 0; i < arrayObj.length; i++) {
        let isMoney = checkMoney();
        if (arrayObj[i].status === false) {
        } else if(isMoney = checkMoney(2000)) {
            if (arrayObj[i].name === "nai") {
                chipCoinNai += chipCoin.getImg6();
                document.getElementById("stakesNai").innerHTML = chipCoinNai;
                coinNaiNum = chipCoinNai;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "cua") {
                chipCoinCua += chipCoin.getImg6();
                document.getElementById("stakesCua").innerHTML = chipCoinCua;
                coinCuaNum = chipCoinCua;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ga") {
                chipCoinGa += chipCoin.getImg6();
                document.getElementById("stakesGa").innerHTML = chipCoinGa;
                coinGaNum = chipCoinGa;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "ca") {
                chipCoinCa += chipCoin.getImg6();
                document.getElementById("stakesCa").innerHTML = chipCoinCa;
                coinCaNum = chipCoinCa;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "bau") {
                chipCoinBau += chipCoin.getImg6();
                document.getElementById("stakesBau").innerHTML = chipCoinBau;
                coinBauNum = chipCoinBau;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            } else if (arrayObj[i].name === "tom") {
                chipCoinTom += chipCoin.getImg6();
                document.getElementById("stakesTom").innerHTML = chipCoinTom;
                coinTomNum = chipCoinTom;
                totalM = totalM - 2000;
                tobi = totalM;
                document.getElementById("money").innerHTML = tobi;
                break;
            }
        }
    }
}





