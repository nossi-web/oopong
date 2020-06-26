/**********************
 * filename: Ball.js
 * author: walker
 * description: base ball class for OOPong
 * 
 */

import Pong from "../Pong.js";

export default class Ball {
    static _xPos;
    static _yPos;
    static _xVel;
    static _yVel;

    constructor(xPos, yPos, radius, color) {
        console.log("ball has begun existing");

        // now draw the ball in the center of the canvas. 
        Pong._ctx.beginPath();
        Pong._ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI);
        //Pong._ctx.stroke();
        Pong._ctx.fillStyle = color;
        Pong._ctx.fill();
    }

    booped() {

    }

    update() {

        // console.log("ball updated");

    }
}