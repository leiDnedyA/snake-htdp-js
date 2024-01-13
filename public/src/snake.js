import {
  bigBang,
  toDraw,
  onTick,
  onMouse,
  onKey,
  emptyScene,
  stopWhen,
  circle,
  posn,
  posnX,
  posnY,
} from "./js-build/modules/js-wrapper.rkt.js";


/*
 * DATA DEFINITIONS / CONSTRUCTORS
 * */

function world(snake, food) {
  return {
    "snake": snake,
    "food": food
  }
}

function snake(segs, dir) {
  return {
    "segs": segs,
    "dir": dir
  }
}


/*
 * CONSTANTS
 * */

const CELL_SIZE = 10;
const SNAKE_COLOR = "red";
const FOOD_COLOR = "green";
const TICK_PERIOD = .3;
const GRID_ROWS = 30;
const GRID_COLS = 30;

const SEG_IMAGE = circle(CELL_SIZE / 2, "solid", SNAKE_COLOR);

