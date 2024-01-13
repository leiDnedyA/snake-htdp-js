import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../runtime/kernel.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "./wrapper-utils/type-conversions.rkt.js";
import * as M3 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M4 from "../links/racketscript-extras/racketscript/htdp/image.rkt.js";
import * as M5 from "../links/racketscript-extras/racketscript/htdp/universe.rkt.js";
import * as M6 from "../runtime/unsafe.rkt.js";
var bigBang = $rjs_core.attachProcedureArity(function(init_world1, ...handlers21) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers2 = $rjs_core.Pair.listFromArray(handlers21);
    var old_requestAnimationFrame3 = window.requestAnimationFrame;
    window.requestAnimationFrame = function(cb4) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        old_requestAnimationFrame3(function(_5) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return cb4();
        });
        return undefined;
    };
    return M0.apply(M5.big_bang, M2.js_arguments__gt_list(arguments));
});
var toDraw = M5.to_draw;
var onTick6 = function(cb27, rate18) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var cb9 = cb27;
    if (false !== false) {
        var if_res2 = 28;
    } else {
        var if_res2 = rate18;
    }
    var rate10 = if_res2;
    return M5.on_tick(cb9, rate10);
};
var cl3 = function(cb11) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return onTick6(cb11, 28);
};
var cl4 = function(cb12, rate113) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return onTick6(cb12, rate113);
};
var onTick = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5 = {
        '1': cl3,
        '2': cl4
    } [arguments.length];
    if (fixed_lam5 !== undefined) {
        return fixed_lam5.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var onMouse = M5.on_mouse;
var onKey = function(cb14) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M5.on_key(function(ws15, key16) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return cb14(ws15, M1.js_string(key16));
    });
};
var stopWhen = M5.stop_when;
var emptyScene17 = function(width418, height519, color320) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width21 = width418;
    var height22 = height519;
    if (M0.eq_p(color320, M6.unsafe_undefined) !== false) {
        var if_res6 = M1.js_string($rjs_core.UString.make("white"));
    } else {
        var if_res6 = color320;
    }
    var color23 = if_res6;
    return M4.empty_scene(width21, height22, M1.js_string__gt_string(color23));
};
var cl7 = function(width24, height25) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return emptyScene17(width24, height25, M6.unsafe_undefined);
};
var cl8 = function(width26, height27, color328) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return emptyScene17(width26, height27, color328);
};
var emptyScene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam9 = {
        '2': cl7,
        '3': cl8
    } [arguments.length];
    if (fixed_lam9 !== undefined) {
        return fixed_lam9.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text0 = function(txt29, size30, color31) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.text(M1.js_string__gt_string(txt29), size30, M1.js_string__gt_string(color31));
};
var line0 = function(x32, y33, pen_or_color34) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.line(x32, y33, M1.js_string__gt_string(pen_or_color34));
};
var rectangle0 = function(w35, h36, m37, c38) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.rectangle(w35, h36, M2.js_string__gt_symbol(m37), M1.js_string__gt_string(c38));
};
var square0 = function(s39, m40, c41) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.square(s39, M2.js_string__gt_symbol(m40), M1.js_string__gt_string(c41));
};
var circle0 = function(r42, m43, c44) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.circle(r42, M2.js_string__gt_symbol(m43), M1.js_string__gt_string(c44));
};
var triangle0 = function(side45, mode46, color47) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.triangle(side45, M2.js_string__gt_symbol(mode46), M1.js_string__gt_string(color47));
};
var frame0 = M4.frame;
var colorFrame = function(color48, img49) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.color_frame(M1.js_string__gt_string(color48), img49);
};
var placeImage = M4.place_image;
var placeImages = function(images50, posns51, scene52) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_images(M2.js_list__gt_list(images50), M2.js_list__gt_list(posns51), scene52);
};
var placeImageAlign = function(image53, x54, y55, x_place56, y_place57, scene58) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_image_by_align(image53, x54, y55, M1.js_string__gt_string(x_place56), M1.js_string__gt_string(y_place57), scene58);
};
var placeImagesAlign = function(images59, posns60, x_place61, y_place62, scene63) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M4.place_images_by_align(M2.js_list__gt_list(images59), M2.js_list__gt_list(posns60), M1.js_string__gt_string(x_place61), M1.js_string__gt_string(y_place62), scene63);
};
var overlayAlign = $rjs_core.attachProcedureArity(function(xPlace64, yPlace65, ...images6610) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var images66 = $rjs_core.Pair.listFromArray(images6610);
    var args_list67 = M0.append(M0.list(M1.js_string__gt_string(xPlace64), M1.js_string__gt_string(yPlace65)), images66);
    return M0.apply(M4.overlay_by_align, args_list67);
});
var overlayXY = M4.overlay_by_xy;
var overlay0 = M4.overlay;
var underlay0 = M4.underlay;
var underlayXY = M4.underlay_by_xy;
var aboveAlign = $rjs_core.attachProcedureArity(function(x_place68, ...imgs6911) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imgs69 = $rjs_core.Pair.listFromArray(imgs6911);
    return M0.apply(M4.above_by_align, M0.append(M0.list(M1.js_string__gt_string(x_place68)), imgs69));
});
var above0 = M4.above;
var besideAlign = $rjs_core.attachProcedureArity(function(y_place70, ...imgs7112) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imgs71 = $rjs_core.Pair.listFromArray(imgs7112);
    return M0.apply(M4.beside_by_align, M0.append(M0.list(M1.js_string__gt_string(y_place70)), imgs71));
});
var beside0 = M4.beside;
var posn0 = M4.make_posn;
var posnX = M4.posn_x;
var posnY = M4.posn_y;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    posnY,
    posnX,
    posn0 as posn,
    beside0 as beside,
    besideAlign,
    above0 as above,
    aboveAlign,
    underlayXY,
    underlay0 as underlay,
    overlay0 as overlay,
    overlayXY,
    overlayAlign,
    placeImagesAlign,
    placeImageAlign,
    placeImages,
    placeImage,
    colorFrame,
    frame0 as frame,
    triangle0 as triangle,
    text0 as text,
    circle0 as circle,
    square0 as square,
    rectangle0 as rectangle,
    line0 as line,
    emptyScene,
    stopWhen,
    onKey,
    onMouse,
    onTick,
    toDraw,
    bigBang
};