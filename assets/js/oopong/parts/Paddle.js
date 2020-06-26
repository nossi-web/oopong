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

    _width;
    _height;
    _color;

    _upKeyCode;
    _downKeyCode;

    // when the paddle is constructed, we'll accept parameters to dictate its starting place on the canvas, 
    // as well as it's initial color.
    // we'll also have to pass in a reference to the particular canvas element upon which we want it drawn. 
    constructor(xPos, yPos, yVel, width, height, color, upKeyCode, downKeyCode) {

        this._xPos = xPos;
        this._yPos = yPos;
        this._yVel = yVel;
        this._width = width;
        this._height = height;
        this._color = color;
        this._upKeyCode = upKeyCode;
        this._downKeyCode = downKeyCode;

        this.render();

        // Making sure I did things right
        console.log("Paddles done... yep!")
    }

    update() {

        // check to see which keys are being pressed to control the paddle

        // console.log(Pong._keyMap[this._upKeyCode]);
        // console.log(Pong._keyMap[this._downKeyCode]);

        this.clear();

        if (Pong._keyMap[this._upKeyCode]) {
            console.log("up is pressed");
            this._yPos -= this._yVel;
        }
        if (Pong._keyMap[this._downKeyCode]) {
            console.log("down is pressed");
            this._yPos += this._yVel;
        }

        this.render();

    }

    render() {

        // console.log("this.render called");

        // draw a paddle on the canvas. 
        Pong._ctx.beginPath();
        Pong._ctx.fillStyle = this._color;
        Pong._ctx.fillRect(this._xPos, this._yPos, this._width, this._height);
        Pong._ctx.closePath();

    }

    clear() {
        //console.log("this.clear called");
        Pong._ctx.clearRect(this._xPos, this._yPos, this._width, this._height);
    }

}