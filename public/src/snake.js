import {
  bigBang,
  toDraw,
  onTick,
  onMouse,
  onKey,
  emptyScene,
  placeImage,
  stopWhen,
  circle,
  posn,
  posnX,
  posnY,
} from "./htdp/modules/js-wrapper.rkt.js";


/*
 * DATA DEFINITIONS / CONSTRUCTORS
 * */

function Posn(x, y) {
  this.x = x;
  this.y = y;
}

function World(snake, food) {
  this.snake = snake;
  this.food = food;
}

function Snake(segs, dir) {
  this.segs = segs;
  this.dir = dir;
}


/*
 * ------------------------------------------------
 * CONSTANTS
 *
 * */

const CELL_SIZE = 10;
const SNAKE_COLOR = "red";
const FOOD_COLOR = "green";
const TICK_PERIOD = .3;
const GRID_ROWS = 30;
const GRID_COLS = 30;

const SEG_IMAGE = circle(CELL_SIZE / 2, "solid", SNAKE_COLOR);
const FOOD_IMAGE = circle(CELL_SIZE / 2, "solid", FOOD_COLOR);
const BACKGROUND = emptyScene(GRID_COLS * CELL_SIZE, GRID_ROWS * CELL_SIZE);

const INITIAL_WORLD = new World(
  new Snake([new Posn(2, 6)], 'right'),
  new Posn(15, 15)
);


/*
 * ------------------------------------------------
 * WISH LIST
 *
 * */

// rendering funcitons
// worldToScene: World -> Image
// snakePlusImage: Snake Image -> Image
// foodPlusImage: Food Image -> Image

// game logic
// nextWorld: World -> World
// keyHandler: World Key -> World

// snake motion
// snakeGrow: Snake -> Snake
// snakeSlither: Snake -> Snake

// collision detection
// isEating: World -> Boolean
// hasSelfCollision: World -> Boolean
// hasWorldCollision: World -> Boolean


/*
 * ------------------------------------------------
 * TEST DATA
 *
 * */

const food1 = new Posn(2, 5);
const segs1 = [new Posn(2, 6)]; // one-segment snake
const segs2 = [new Posn(2, 5), new Posn(3, 5)]; // two-segment snake
const snake1 = new Snake(segs1, "up");
const snake2 = new Snake(segs2, "up");
const world1 = new World(snake1, food1);
const world2 = new World(snake2, food1);


/*
 * ------------------------------------------------
 * RENDERING
 *
 * */

function worldToScene(world){
  return snakePlusImage(world.snake, foodPlusImage(world.food), BACKGROUND)
}

function placeImageAtCell(img1, gridX, gridY, img2){
  return placeImage(
    img1,
    CELL_SIZE * 1.5,
    CELL_SIZE * (GRID_ROWS * 3.5),
    BACKGROUND
  );
}

function snakePlusImage(snake, img){
  return segsPlusImage(snake.segs, img);
}

function segsPlusImage(segsList, img){
  if (segsList.length === 0) return img;
  return placeImageAtCell(
    SEG_IMAGE,
    segsList[0].x, segsList[0].y,
    segsList.slice(1)
  );
}

function foodPlusImage(food, img){
  return placeImageAtCell(FOOD_IMAGE, food.x, food.y, img)
}


/*
 * ------------------------------------------------
 * SNAKE MOTION
 *
 * */

function snakeGrow(snake){
  return new Snake([newSeg(snake.segs[0], snake.dir)] + snake.segs, snake.dir);
}

function newSeg(seg, dir){
  if (dir === 'up') {
    return new Posn(seg.x, seg.y + 1);
  } else if (dir === 'down') {
    return new Posn(seg.x, seg.y - 1);
  } else if (dir === 'left') {
    return new Posn(seg.x - 1, seg.y);
  } else {
    return new Posn(seg.x + 1, seg.y);
  }
}



