/*
 * filename: app.js
 * author:  Aly
 * description:  javascript file for  pong stuff
 * 
 */

import Pong from "./oopong/Pong.js";

let pong = new Pong();

pong._setInterval = window.setInterval(function() { pong.update() }, 10);