/**
 * Classes: Static Methods and Fields
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
export class Point {
    height = 0;
    width;    
    constructor(x, y) {
        // constructor
        this.x = x;
        this.y = y;
    }    

    static displayName = 'Point'
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}