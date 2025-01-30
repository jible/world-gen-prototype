class Vector2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    add(other) {
      return new Vector2(this.x + other.x, this.y + other.y);
    }
  
    set(x, y) {
      this.x = x;
      this.y = y;
    }
  
    dupe() {
      return new Vector2(this.x, this.y);
    }
}
  
  
class World {
    constructor(width, height, currentLevel) {
        this.width = width;
        this.height = height;
        this.matrix = Array.from({ length: this.height }, () => Array.from({ length: this.width }, () => Math.floor(Math.random() * 100)));
        this.currentLevel = currentLevel
    } 


    generateWorld(seed){
        this.currentLevel.generate(this,seed)
    }

    getValue(pos) {
        return this.matrix[pos.y][pos.x];
    }

    setValue(pos, value = 0) {
        this.matrix[pos.y][pos.x] = value;
    }

    incrementValue(pos, add) {
        this.matrix[pos.y][pos.x] += add;
    }

    fill(value){
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                this.matrix[x][y] = value;
            }
        }
    }

    applyNoise(seed){
        const noiseScale = 0.1;
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                const noiseValue = noise(x * noiseScale + seed, y * noiseScale + seed);
                this.matrix[x][y] = noiseValue;
            }
        }

    }
            

    applyRandomWalk(seed, steps = this.width* this.height / 2){
        this.fill(1)
        let directions = [
            new Vector2(0,1),
            new Vector2(0,-1),
            new Vector2(-1,0),
            new Vector2(1,0)
        ]
        let start = new Vector2(Math.floor(this.width/2) , Math.floor(this.height/2))
        let pos = start.dupe()
        for ( let step = 0; step < steps; step++){
            this.setValue(pos, .3)
            let look = pos.add( directions [ Math.floor(Math.random(seed + pos.x + pos.y + step) * 4) ])
            if ( look.x == 0 || look.x == this.width - 1 || look.y == 0 || look.y == this.length - 1){
                pos = start.dupe()
            } else pos = look.dupe()
        }

    }

    applySmooth() {
        const newMat = this.matrix.map((row, y) => row.map((cell, x) => {
        let total = 0, count = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
            const coord = new Vector2(x + i, y + j);
            if (coord.x < 0 || coord.x >= this.width || coord.y < 0 || coord.y >= this.height) continue;
            total += this.matrix[coord.y][coord.x];
            count++;
            }
        }
        return total / count;
        }));
        this.matrix = newMat;
    }

    

    applyGradient(radius = (this.width + this.height)/2) {
        let radiusMult = radius/100 
        const center = new Vector2(this.width / 2, this.height / 2);
        const maxDistance = Math.sqrt(center.x ** 2 + center.y ** 2);

        for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
            const distance = Math.sqrt((x - center.x) ** 2 + (y - center.y) ** 2);
            const gradient =  radiusMult * distance/maxDistance;
            this.matrix[x][y] = (this.matrix[x][y] * gradient);
        }
        }
    }

    applyPerimeter(){
        for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            const value = this.getValue(new Vector2(x, y));
            let offset = get_offset(x,y, this.height, this.width) 
            let mult = 10 / ( offset )
            this.matrix[y][x]  = value * mult
        }
        }

        function get_offset(x,y, width, height){
            return Math.min(x,y, width - x, height - y)
        }
    }

    render() {
        const tileWidth = width / this.width;
        const tileHeight = height / this.height;

        for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
            const value = this.getValue(new Vector2(x, y));
            fill(this.getTileColor(value));
            noStroke();
            rect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
        }
    }

    getTileColor(value) {
        let currentPalette = this.currentLevel.palette
        // if (value > 0.60) return currentPalette['wall'];
        if (value > 0.50) return currentPalette['wall'];
        if (value > 0.1) return currentPalette['floor'];
        return currentPalette['water'];
    }
}




