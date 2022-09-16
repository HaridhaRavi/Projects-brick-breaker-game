console.log("js file loaded")

//Creating bottom paddle class
class Paddle{
    constructor(){
        this.width = 16;
        this.height = 5;
        this.positionX = 40 - (this.width/2);
        this.positionY = 0;
        this.paddleElm = null;
        this.createPaddle();
    }
    createPaddle(){
        //child
        this.paddleElm = document.createElement('div');
        this.paddleElm.id = "paddle";
        this.paddleElm.style.width = this.width +"vw";
        this.paddleElm.style.height = this.height+"vh";

        this.paddleElm.style.bottom = this.positionY+"vh";
        this.paddleElm.style.left = this.positionX+"vw";

        //parent 
        const outerGridElm = document.getElementById('outer-grid');
        outerGridElm.appendChild(this.paddleElm);
    }


}

//ball
class Ball{
    constructor(){
        this.ball =null;
        this.createBall();
    }
    createBall(){
        this.ball = document.createElement('div');
        this.ball.id = 'ball';

        //parent div 
        outerGridElm.appendChild(this.ball);

    }

}

//create blocks
class Block{
    constructor(){
        
    }
}

const paddle = new Paddle();