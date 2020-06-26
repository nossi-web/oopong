/**********************
 * filename: Pong.js
 * author: norris
 * description: base game class for OOPong
 * 
 */

// import dependent classes
import Ball from "./parts/Ball.js";
import Paddle from "./parts/Paddle.js";
import ScoreBoard from "./parts/ScoreBoard.js";

export default class Pong {

    // class props
    _playerOneScore;
    _playerTwoScore;
    static _scoreBoard = {};
    static _ball = {};

    // player properties
    static _playerOnePaddle = {};
    static _playerTwoPaddle = {};
    static _playerOneUpKey = 87;
    static _playerOneDownKey = 83;
    static _playerTwoUpKey = 79;
    static _playerTwoDownKey = 76;

    // paddle props
    static _paddleWidth = 8;
    static _paddleHeight = 64;
    static _paddleVelocity = 10;
    static _playerOneColor = "#5298E9";
    static _playerTwoColor = "#F25C5C";

    // ball props
    static _ballColor = "#FFF";
    static _ballRadius = 8;

    static _canvas;
    static _ctx;

    static _keyMap = {};

    static _setInterval;

    constructor() {

        // create instances of the parts
        console.log("pong is being constructed");

        // first up, we need a reference to the canvas element we're going to be working with. 
        // this could actually be added to the dom via JS, but we're going to just hard code it into the index.html.
        Pong._canvas = document.getElementById("canvas");
        Pong._ctx = Pong._canvas.getContext("2d");

        // create and place a new board of scoring on the table
        Pong._scoreBoard = new ScoreBoard();

        // we're going to make our paddle class accept an x and a y parameter that allows us to place them on the board. 
        // we'll also pass in params to assign them the keys that will control them.
        // heck, while we're at it we may as well pass in a color parameter as well. 

        // we want the system to be as dynamic as possible. The player's paddles should probably always start centered in the middle, 
        // a certain percentage from the side they start on. 
        // the xPosition of the paddle will be 10% of the width of the canvas for player 1, and 90% of the canvas width for player 2. 
        Pong._playerOnePaddle = new Paddle(
            (Pong._canvas.width * .1) - (Pong._paddleWidth / 2),
            (Pong._canvas.height / 2) - (Pong._paddleHeight / 2),
            Pong._paddleVelocity,
            Pong._paddleWidth,
            Pong._paddleHeight,
            Pong._playerOneColor,
            Pong._playerOneUpKey,
            Pong._playerOneDownKey
        );

        Pong._playerTwoPaddle = new Paddle(
            (Pong._canvas.width * .9) - (Pong._paddleWidth / 2),
            (Pong._canvas.height / 2) - (Pong._paddleHeight / 2),
            Pong._paddleVelocity,
            Pong._paddleWidth,
            Pong._paddleHeight,
            Pong._playerTwoColor,
            Pong._playerTwoUpKey,
            Pong._playerTwoDownKey
        );


        // xPos and yPos are calculated in the same way to get the center of the game board
        Pong._ball = new Ball(
            (Pong._canvas.width / 2),
            (Pong._canvas.height / 2),
            Pong._ballRadius,
            Pong._ballColor
        );

        // populate the keymap with the correct values
        Pong._keyMap[Pong._playerOneUpKey] = false;
        Pong._keyMap[Pong._playerOneDownKey] = false;
        Pong._keyMap[Pong._playerTwoUpKey] = false;
        Pong._keyMap[Pong._playerTwoDownKey] = false;

        // an event listener to check for keypresses
        Pong._canvas.addEventListener('keydown', e => this.updateKeyMap(e), false);
        Pong._canvas.addEventListener('keyup', e => this.updateKeyMap(e), false);

        Pong._canvas.focus();

    }

    updateKeyMap(e) {

        // console.log(e.keyCode);
        // console.log(e.type);

        if (e.type == "keydown") Pong._keyMap[e.keyCode] = true;
        if (e.type == "keyup") Pong._keyMap[e.keyCode] = false;

        // console.log(Pong._keyMap);

    }


    // position the parts on the canvas
    _setTable() {


    }

    // positions the ball in the table center and gives it x & y velocity
    _serveBall() {

    }

    update() {

        console.log("==================================");
        console.log(Pong._keyMap);
        Pong._ball.update();
        Pong._playerOnePaddle.update();
        Pong._playerTwoPaddle.update();

    }

}