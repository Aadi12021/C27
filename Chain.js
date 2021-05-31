class Chain {
    constructor(A, B){
        var options = {bodyA:A, bodyB:B, length:100, stiffness: 0.2}
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain)


    }

    display(){
        
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position

        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
}
