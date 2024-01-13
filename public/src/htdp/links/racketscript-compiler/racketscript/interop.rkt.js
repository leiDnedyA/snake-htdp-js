import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./private/interop.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "../../../runtime/kernel.rkt.js";
var __eq__gt_$ = function(lam_expr1418) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Marks.wrapWithContext(lam_expr1418);
};
var js_string = function(e1419) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return e1419.toString();
};
var js_string__gt_string = function(e1420) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.makeImmutable(e1420);
};
var js_array__gt_list = function(e1421) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.Pair.listFromArray(e1421);
};
var assoc__gt_object = function(pairs1422) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1423 = {};
    var loop1424 = function(pairs1425) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.null_p(pairs1425) !== false) {
            var if_res537 = result1423;
        } else {
            var p1426 = M2.car(pairs1425);
            var k1428 = M2.car(p1426);
            var or_part1429 = typeof(k1428) === "string";
            if (or_part1429 !== false) {
                var if_res534 = or_part1429;
            } else {
                var if_res534 = M2.string_p(k1428);
            }
            if (if_res534 !== false) {
                var if_res536 = k1428;
            } else {
                if (M2.symbol_p(k1428) !== false) {
                    var if_res535 = M2.symbol__gt_string(k1428);
                } else {
                    var if_res535 = M2.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                }
                var if_res536 = if_res535;
            }
            var key1427 = if_res536;
            result1423[key1427] = M2.car(M2.cdr(p1426));
            var if_res537 = loop1424(M2.cdr(pairs1425));
        }
        return if_res537;
    };
    return loop1424(pairs1422);
};
var js_array_p = function(v1430) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Array.isArray(v1430);
};
var in_js_array = function(arr1431) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_array(arr1431);
    var arr1432 = arr1431;
    if (js_array_p(arr1432) !== false) {
        var if_res538 = M2.rvoid();
    } else {
        var if_res538 = in_js_array(arr1432);
    }
    if_res538;
    var for_loop1433 = function(fold_var1434, i1435) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1435, arr1432.length) !== false) {
            var v1436 = arr1432[i1435];
            if (true !== false) {
                var fold_var1438 = fold_var1434;
                var fold_var1439 = M2.cons(v1436, fold_var1438);
                var fold_var1437 = M2.values(fold_var1439);
                if (true !== false) {
                    var if_res539 = M2.not(false);
                } else {
                    var if_res539 = false;
                }
                if (if_res539 !== false) {
                    var if_res540 = for_loop1433(fold_var1437, i1435 + 1);
                } else {
                    var if_res540 = fold_var1437;
                }
                var if_res541 = if_res540;
            } else {
                var if_res541 = fold_var1434;
            }
            var if_res542 = if_res541;
        } else {
            var if_res542 = fold_var1434;
        }
        return if_res542;
    };
    return M1.alt_reverse(for_loop1433(M2.rnull, 0));
};
var check_array = function(v1440) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_array_p(v1440) !== false) {
        var if_res543 = M2.rvoid();
    } else {
        var if_res543 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v1440);
    }
    return if_res543;
};
var in_js_obect = function(obj1441) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_object(obj1441);
    var obj1442 = obj1441;
    var keys1443 = Object.keys(obj1441);
    if (js_object_p(obj1442) !== false) {
        var if_res544 = M2.rvoid();
    } else {
        var if_res544 = in_js_array(obj1442);
    }
    if_res544;
    var for_loop1444 = function(fold_var1445, i1446) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M2.__lt_(i1446, keys1443.length) !== false) {
            var k1447 = keys1443[i1446];
            var v1448 = obj1442[keys1443[i1446]];
            if (true !== false) {
                var fold_var1450 = fold_var1445;
                var fold_var1451 = M2.cons(M2.values(k1447, v1448), fold_var1450);
                var fold_var1449 = M2.values(fold_var1451);
                if (true !== false) {
                    var if_res545 = M2.not(false);
                } else {
                    var if_res545 = false;
                }
                if (if_res545 !== false) {
                    var if_res546 = for_loop1444(fold_var1449, i1446 + 1);
                } else {
                    var if_res546 = fold_var1449;
                }
                var if_res547 = if_res546;
            } else {
                var if_res547 = fold_var1445;
            }
            var if_res548 = if_res547;
        } else {
            var if_res548 = fold_var1445;
        }
        return if_res548;
    };
    return M1.alt_reverse(for_loop1444(M2.rnull, 0));
};
var js_object_p = function(v1452) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return ((typeof(v1452) === "object") && (v1452 !== null)) && M2.not($rjs_core.Primitive.check(v1452));
};
var check_object = function(v1453) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (js_object_p(v1453) !== false) {
        var if_res549 = M2.rvoid();
    } else {
        var if_res549 = M2.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v1453);
    }
    return if_res549;
};
var __rjs_quoted__ = {};
__rjs_quoted__.js_object_p = js_object_p;
__rjs_quoted__.js_array_p = js_array_p;
__rjs_quoted__.in_js_array = in_js_array;
__rjs_quoted__.js_string = js_string;
export {
    __rjs_quoted__,
    js_object_p,
    js_array_p,
    assoc__gt_object,
    js_array__gt_list,
    js_string__gt_string,
    js_string,
    __eq__gt_$
};