;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-abbr-reader.ss" "lang")((modname snake-full) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #f #t none #f ())))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; SNAKE GAME
; full version from Vona's section
; 10/19/12

(require 2htdp/image)
(require 2htdp/universe)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; DATA DEFS

; the grid coordinate frame has origin at lower left
; rows increase upwards
; and columns increase to the right

; a World is a (make-world Snake Food)
(define-struct world (snake food))

#;
(define (world-template world)
  ... (world-snake world) ... (world-food world))

; a Food is a Posn in grid coordinates

; a Snake is a (make-snake LOS Dir)
(define-struct snake (segs dir))

#;
(define (snake-template snake)
  ... (snake-segs snake) ... (snake-dir snake) ...)

; a Dir is one of: 'up, 'down, 'left, 'right

#;
(define (dir-template dir)
  (cond [(symbol=? dir 'up) ...]
        [(symbol=? dir 'down) ...]
        [(symbol=? dir 'left) ...]
        [else ...])) ; right

; a LOS (list of segments) is one of
; - empty
; - (cons Seg LOS)

#;
(define (loseg-template loseg)
  (cond [(empty? loseg) ...]
        [else ... (first loseg) ... (loseg-template (rest loseg))]))

; a NELOS (list of segments) is one of
; - (cons Seg empty)
; - (cons Seg NELOS)

#;
(define (neloseg-template neloseg)
  (cond [(empty? (rest neloseg)) ...]
        [else ... (first neloseg) ... (neloseg-template (rest neloseg))]))

; a Seg is a Posn in grid coordinates

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; CONSTANTS

(define CELL-SIZE 10)     ; pixels
(define SNAKE-COLOR 'red)
(define FOOD-COLOR 'green)
(define TICK-PERIOD 0.3)  ; seconds
(define GRID-ROWS 30)     ; cells
(define GRID-COLS 30)     ; cells

(define SEG-IMAGE (circle (/ CELL-SIZE 2) 'solid SNAKE-COLOR))
(define FOOD-IMAGE (circle (/ CELL-SIZE 2) 'solid FOOD-COLOR))
(define BACKGROUND (empty-scene (* GRID-COLS CELL-SIZE)
                                (* GRID-ROWS CELL-SIZE)))

(define INITIAL-WORLD
  (make-world
   (make-snake (list (make-posn 2 6)) 'right)
   (make-posn 15 15)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; WISH LIST

; rendering functions
; world->scene: World -> Image
; snake+img: Snake Image -> Image
; food+img: Food Imge -> Image

; game logic
; next-world: World -> World
; key-handler: World Key -> World

; snake motion
; snake-grow: Snake -> Snake
; snake-slither: Snake -> Snake

; collision detection
; eating?: World -> Boolean
; self-collision?: World -> Boolean
; world-collision?: World -> Boolean

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; TEST DATA

(define food1 (make-posn 2 5))
(define segs1 (list (make-posn 2 6))) ; one-segment snake
(define segs2 (list (make-posn 2 5) (make-posn 3 5))) ; two-segment snake
(define snake1 (make-snake segs1 'up))
(define snake2 (make-snake segs2 'up))
(define world1 (make-world snake1 food1))
(define world2 (make-world snake2 food1)) ; eating
  
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; RENDERING

; world->scene: World -> Image
; draw one frame of the game world
(check-expect (world->scene world1)
              (place-image-at-cell FOOD-IMAGE 2 5
                                   (place-image-at-cell SEG-IMAGE 2 6
                                                        BACKGROUND)))
(define (world->scene world)
  (snake+img (world-snake world)
             (food+img (world-food world)
                       BACKGROUND)))

; place-image-at-cell: Image Number Number Image -> Image
; draw img1 centered at given grid coords on img2
(check-expect (place-image-at-cell FOOD-IMAGE 1 3 BACKGROUND)
              (place-image FOOD-IMAGE
                           (* CELL-SIZE (+ 1 0.5))               ; X 
                           (* CELL-SIZE (- GRID-ROWS (+ 3 0.5))) ; Y
                           BACKGROUND))

(define (place-image-at-cell img1 grid-x grid-y img2)
  (place-image img1
               (* CELL-SIZE (+ grid-x 0.5))               ; X 
               (* CELL-SIZE (- GRID-ROWS (+ grid-y 0.5))) ; Y
               img2))

; snake+img: Snake Image -> Image
; draw the snake
(check-expect (snake+img snake1 BACKGROUND)
              (place-image-at-cell SEG-IMAGE 2 6 BACKGROUND))

(define (snake+img snake img)
  (segs+img (snake-segs snake) img))

; segs+img: LOS Image -> Image
; draw all segments
(check-expect (segs+img segs1 BACKGROUND)
              (place-image-at-cell SEG-IMAGE 2 6 BACKGROUND))

(define (segs+img loseg img)
  (cond [(empty? loseg) img]
        [else (place-image-at-cell
               SEG-IMAGE
               (posn-x (first loseg)) (posn-y (first loseg))
               (segs+img (rest loseg) img))]))

; food+img: Food Image -> Image
; draw the food
(check-expect (food+img (make-posn 1 2) BACKGROUND)
              (place-image-at-cell FOOD-IMAGE 1 2 BACKGROUND))

(define (food+img food img)
  (place-image-at-cell FOOD-IMAGE (posn-x food) (posn-y food) img))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; SNAKE MOTION

; snake-grow: Snake -> Snake
; grow snake by adding on a new head in current direction
;(define segs2 (list (make-posn 2 5) (make-posn 3 5)))
;(define snake2 (make-snake segs2 'up))
(check-expect (snake-grow snake2)
              (make-snake
               (list (make-posn 2 6) (make-posn 2 5) (make-posn 3 5))
               'up))

(define (snake-grow snake)
  (make-snake (cons (new-seg (first (snake-segs snake)) (snake-dir snake))
                    (snake-segs snake))
              (snake-dir snake)))

; new-seg: Segment Dir -> Segment
; make a new segment by ofsetting an existing one
(check-expect (new-seg (make-posn 2 5) 'up) (make-posn 2 6))
(check-expect (new-seg (make-posn 2 5) 'down) (make-posn 2 4))
(check-expect (new-seg (make-posn 2 5) 'left) (make-posn 1 5))
(check-expect (new-seg (make-posn 2 5) 'right) (make-posn 3 5))

(define (new-seg seg dir)
   (cond [(symbol=? dir 'up) (make-posn (posn-x seg) (+ 1 (posn-y seg)))]
         [(symbol=? dir 'down) (make-posn (posn-x seg) (- (posn-y seg) 1))]
         [(symbol=? dir 'left) (make-posn (- (posn-x seg) 1) (posn-y seg))]
         [else (make-posn (+ 1 (posn-x seg)) (posn-y seg))])) ; right
 
; snake-slither: Snake -> Snake
; move snake head in current direction and make all
; remaining segments follow along.  Actually implemented
; by making a new head and deleting the old tail.

;(define segs2 (list (make-posn 2 5) (make-posn 3 5)))
;(define snake2 (make-snake segs2 'up))
(check-expect (snake-slither snake2)
              (make-snake (list (make-posn 2 6) (make-posn 2 5)) 'up))

(define (snake-slither snake)
  (make-snake (cons (new-seg (first (snake-segs snake)) (snake-dir snake))
                    (nuke-last (snake-segs snake)))
              (snake-dir snake)))

; nuke-last: NELOS -> LOS
; return all segments except the last
(define segs3 (list (make-posn 2 5) (make-posn 1 2) (make-posn 3 5)))
(check-expect (nuke-last segs3) (list (make-posn 2 5) (make-posn 1 2)))
; error! (check-expect (nuke-last empty) ???)

(define (nuke-last loseg)
  (cond [(empty? (rest loseg)) empty]
        [else (cons (first loseg) (nuke-last (rest loseg)))]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; COLLISION DETECTION

; eating?: World -> Boolean
; is the snake eating right now?
; eating means the head of the snake is on the food
(check-expect (eating? world2) true)
(check-expect (eating? world1) false)
(define (eating? w)
  (posn=? (first (snake-segs (world-snake w))) (world-food w)))

; posn=?: Posn Posn -> Boolean
; are the coordinates the same?
(check-expect (posn=? (make-posn 1 2) (make-posn 1 2)) true)
(check-expect (posn=? (make-posn 1 2) (make-posn 3 4)) false)

(define (posn=? a b)
  (and (= (posn-x a) (posn-x b)) (= (posn-y a) (posn-y b))))

; self-collision?: World -> Boolean
; is the snake colliding with itself?
(check-expect (self-collision? world1) false)
(check-expect (self-collision?
               (make-world
                (make-snake (list (make-posn 1 2) (make-posn 1 2)) 'up) food1))
              true)

(define (self-collision? w)
  (seg-collision? (first (snake-segs (world-snake w))) (rest (snake-segs (world-snake w)))))

; seg-collision?: Seg LOS -> Boolean
; is the given segment in the same place as any in the list?
;(define segs2 (list (make-posn 2 5) (make-posn 3 5)))
(check-expect (seg-collision? (make-posn 2 5) segs2) true)
(check-expect (seg-collision? (make-posn 10 10) segs2) false)

(define (seg-collision? s los)
  (cond [(empty? los) false]
        [else (or (posn=? s (first los)) (seg-collision? s (rest los)))]))

; world-collision?: World -> Boolean
; is the snake colliding with a border of the grid?
(check-expect (world-collision? world1) false)
(check-expect (world-collision?
               (make-world (make-snake (list (make-posn -1 2)) 'up) food1))
              true)

(define (world-collision? w)
  (not (in-bounds? (first (snake-segs (world-snake w))))))

; in-bounds? Posn -> Boolean
; are the given grid cell coords in bounds?
(check-expect (in-bounds? (make-posn 1 1)) true)
(check-expect (in-bounds? (make-posn -1 1)) false)
(check-expect (in-bounds? (make-posn 1 -1)) false)
(check-expect (in-bounds? (make-posn GRID-COLS 1)) false)
(check-expect (in-bounds? (make-posn 1 GRID-ROWS)) false)

(define (in-bounds? p)
  (and (>= (posn-x p) 0) (< (posn-x p) GRID-COLS)
       (>= (posn-y p) 0) (< (posn-y p) GRID-ROWS)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; GAME LOGIC

; next-world: World -> World
; compute the new state of the game after a clock tick
(define (next-world w)
  (cond [(world-collision? w) INITIAL-WORLD]
        [(self-collision? w) INITIAL-WORLD]
        [(eating? w) (make-world (snake-grow (world-snake w))
                                 (make-posn (random GRID-COLS)
                                            (random GRID-ROWS)))]
        [else (make-world (snake-slither (world-snake w))
                          (world-food w))]))

; key-handler: World Key -> World
; compute the new state of the world after a key press
(define (key-handler w k)
  (cond [(or (key=? k "up")
             (key=? k "down")
             (key=? k "left")
             (key=? k "right"))
         (make-world (make-snake (snake-segs (world-snake w))
                                 (string->symbol k))
                     (world-food w))]
        [(key=? k "n") INITIAL-WORLD] ; new game
        [else w]))

(big-bang INITIAL-WORLD
          (on-draw world->scene)
          (on-tick next-world TICK-PERIOD)
          (on-key key-handler))


