import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M3 from "./kernel.rkt.js";
var fl_times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var fl_by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var fl_plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var fl_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var fl_lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var fl_gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var fl_lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var fl_gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var fl_eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var flabs = Math.abs;
var flmin = Math.min;
var flmax = Math.max;
var flround = Math.round;
var flfloor = Math.floor;
var flceiling = Math.ceil;
var fltruncate = Math.trunc;
var flsin = Math.sin;
var flcos = Math.cos;
var fltan = Math.tan;
var flasin = Math.asin;
var flacos = Math.acos;
var flatan = Math.atan;
var fllog = Math.log;
var flexp = Math.exp;
var flsqrt = Math.sqrt;
var flexpt = Math.pow;
var fx_plus_ = function(a893, b894) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a893 + b894) | 0;
};
var fx_ = function(a895, b896) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a895 - b896) | 0;
};
var fx_times_ = function(a897, b898) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a897 * b898) | 0;
};
var fxquotient = function(a899, b900) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a899 / b900) | 0;
};
var fxremainder = function(a901, b902) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a901 % b902) | 0;
};
var fxmodulo = function(a903, b904) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder905 = a903 % b904;
    if ((remainder905 >= 0) !== false) {
        var if_res417 = remainder905;
    } else {
        var if_res417 = remainder905 + b904;
    }
    return Math.floor(if_res417);
};
var fxabs = function(a906) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a906);
};
var fx_eq_ = function(a907, b908) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a907 === b908;
};
var fx_lt_ = function(a909, b910) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a909 < b910;
};
var fx_lt__eq_ = function(a911, b912) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a911 <= b912;
};
var fx_gt_ = function(a913, b914) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a913 > b914;
};
var fx_gt__eq_ = function(a915, b916) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a915 >= b916;
};
var fxmin = function(a917, b918) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a917 < b918) !== false) {
        var if_res418 = a917;
    } else {
        var if_res418 = b918;
    }
    return if_res418;
};
var fxmax = function(a919, b920) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a919 > b920) !== false) {
        var if_res419 = b920;
    } else {
        var if_res419 = a919;
    }
    return if_res419;
};
var fxrshift = function(a921, b922) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a921 >> b922) | 0;
};
var fxlshift = function(a923, b924) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a923 << b924) | 0;
};
var fxand = function(a925, b926) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a925 && b926) | 0;
};
var fxior = function(a927, b928) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a927 || b928) | 0;
};
var fxxor = function(a929, b930) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a929 ^ b930) | 0;
};
var fxnot = M1.Core.bitwiseNot;
var flvector = Array.from;
var flvector_p = Array.isArray;
var fxvector = Array.from;
var fxvector_p = Array.isArray;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    fl_times_,
    fl_by_,
    fl_plus_,
    fl_,
    fl_lt_,
    fl_gt_,
    fl_lt__eq_,
    fl_gt__eq_,
    fl_eq_,
    flabs,
    flmin,
    flmax,
    flround,
    flfloor,
    flceiling,
    fltruncate,
    flsin,
    flcos,
    fltan,
    flasin,
    flacos,
    flatan,
    fllog,
    flexp,
    flsqrt,
    flexpt,
    fx_plus_,
    fx_,
    fx_times_,
    fxquotient,
    fxremainder,
    fxmodulo,
    fxabs,
    fx_eq_,
    fx_lt_,
    fx_lt__eq_,
    fx_gt_,
    fx_gt__eq_,
    fxmin,
    fxmax,
    fxrshift,
    fxlshift,
    fxand,
    fxior,
    fxxor,
    fxnot,
    flvector,
    flvector_p,
    fxvector,
    fxvector_p
};