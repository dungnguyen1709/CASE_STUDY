class ImageObj {
    constructor(name, image, status, coin) {
        this.name = name;
        this.image = image;
        this.status = status;
        this.coin = coin;

        this.getStatus = function () {
            return this.status = false;
        };

    }
}