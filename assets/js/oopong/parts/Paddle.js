/*
 *
 * filename: Paddle.js
 * author:  Aly
 * description:  javascript file for the players' paddles
 * 
 */

import Pong from "../Pong.js";

export default class Paddle {

    // class props
    _ctx; // a reference to the canvas element context element, used for drawing the paddle on the canvas. 
    _xPos = {};
    _yPos = {};
    _yVel = {};

    // when the paddle is constructed, we'll accept parameters to dictate its starting place on the canvas, 
    // as well as it's initial color.
    // we'll also have to pass in a reference to the particular canvas element upon which we want it drawn. 
    constructor(xPos, yPos, width, height, color) {

        // draw a paddle on the canvas. 
        Pong._ctx.fillStyle = color;
        Pong._ctx.fillRect(xPos, yPos, width, height);

        // Making sure I did things right
        console.log("Paddles done... maybe")
    }

    // position the parts on the canvas
    _upKeyHandler() {


    }

    // positions the ball in the table center and gives it x & y velocity
    _downKeyHandler() {

    }

}