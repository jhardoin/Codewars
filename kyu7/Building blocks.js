class Block {
    constructor(dimensions) {
        this.width = dimensions[0];
        this.length = dimensions[1];
        this.height = dimensions[2];
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height;
    }

    getSurfaceArea() {
        return 2 * (this.width * this.length + this.length * this.height + this.height * this.width);
    }
}