export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

    }

    // -------------------------GETTERS Y SETTERS-------------------------

    public setX(x: number): void {
        this.x = x;
    }
    public getX() {
        return this.x;
    }
    public setY(y: number): void {
        this.y = y;
    }
    public getY() {
        return this.x;
    }
    // -------------------------METHODS----------------------------
    public toString(): string {
        return "(" + this.x + " , " + this.y + ")"

    }

    public distanceToOrigin(): number {

        let sumCuadrados: number = (this.x * this.x) + (this.y * this.y);
        let distance: number = Math.sqrt(sumCuadrados);
        return distance;
    }

    public calculateDistance(anotherPoint: Point): number {
        let alfa: number = (anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x);
        let beta: number = (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y);
        let distance: number = Math.sqrt(alfa + beta);
        return distance;
    }

    public calcularQuadrant(): number {
        let cuadrante: number = 0;
        if (this.getX() == 0 && this.getY() == 0) {
            cuadrante = 0
        }
        else if (this.getX() > 0 && this.getY() > 0) {
            cuadrante = 1
        }
        else if (this.getX() < 0 && this.getY() > 0) {
            cuadrante = 2
        }
        else if (this.getX() < 0 && this.getY() < 0) {
            cuadrante = 3
        }
        else if (this.getX() > 0 && this.getY() < 0) {
            cuadrante = 4
        }

        return cuadrante;
    }
    public calculateNearest(points: Point[]): Point {
        let waitPoint: Point = points[0];
        for (let i = 0; i < points.length; i++) {
            if (points[i].calculateDistance(this) < waitPoint.calculateDistance(this)) {

                waitPoint = points[i]
            }
        }
        return waitPoint;



    }
}
