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

    normalize(){
        let magnitude = Math.sqrt( (this.x ** 2) + (this.y**2) )
        this.x = this.x/magnitude
        this.y = this.y/magnitude
    }
}