import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "../links/racketscript-compiler/racketscript/compiler/directive.rkt.js";
import * as M4 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals1455 = M1.Core.argumentsToArray(arguments);
    if ((vals1455.length === 1) !== false) {
        var if_res551 = vals1455[0];
    } else {
        var if_res551 = M1.Values.make(vals1455);
    }
    return if_res551;
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator1456, receiver1457) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var vals1458 = generator1456();
    if (M1.Values.check(vals1458) !== false) {
        var if_res553 = receiver1457.apply(this, vals1458.getAll());
    } else {
        if (not(eq_p(vals1458, undefined) || eq_p(vals1458, null)) !== false) {
            var if_res552 = receiver1457.apply(this, [vals1458]);
        } else {
            var if_res552 = rvoid();
        }
        var if_res553 = if_res552;
    }
    return if_res553;
};
var immutable_p = function(v1459) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.isImmutable(v1459);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._1460554) {
    var _1460 = $rjs_core.Pair.listFromArray(_1460554);
    return null;
});
var void_p = function(v1461) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1461 === null) || (v1461 === undefined);
};
var number_p = M1.Core.Number.JS.check;
var real_p = M1.Core.Number.JS.check;
var integer_p = Number.isInteger;
var complex_p = $rjs_core.attachProcedureArity(function(..._1462555) {
    var _1462 = $rjs_core.Pair.listFromArray(_1462555);
    return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
});
var zero_p = function(v1463) {
    if (number_p(v1463) !== false) {
        var if_res556 = rvoid();
    } else {
        var if_res556 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v1463));
    }
    if_res556;
    return v1463 === 0;
};
var positive_p = function(v1464) {
    if (real_p(v1464) !== false) {
        var if_res557 = rvoid();
    } else {
        var if_res557 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v1464));
    }
    if_res557;
    return v1464 > 0;
};
var negative_p = function(v1465) {
    if (real_p(v1465) !== false) {
        var if_res558 = rvoid();
    } else {
        var if_res558 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v1465));
    }
    if_res558;
    return v1465 < 0;
};
var add1 = function(v1466) {
    if (number_p(v1466) !== false) {
        var if_res559 = rvoid();
    } else {
        var if_res559 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v1466));
    }
    if_res559;
    return v1466 + 1;
};
var sub1 = function(v1467) {
    if (number_p(v1467) !== false) {
        var if_res560 = rvoid();
    } else {
        var if_res560 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v1467));
    }
    if_res560;
    return v1467 - 1;
};
var quotient = function(dividend1468, divisor1469) {
    if (integer_p(dividend1468) !== false) {
        var if_res561 = rvoid();
    } else {
        var if_res561 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend1468));
    }
    if_res561;
    if (integer_p(divisor1469) !== false) {
        var if_res562 = rvoid();
    } else {
        var if_res562 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor1469));
    }
    if_res562;
    return (dividend1468 / divisor1469) | 0;
};
var even_p = function(v1470) {
    if (integer_p(v1470) !== false) {
        var if_res563 = rvoid();
    } else {
        var if_res563 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v1470));
    }
    if_res563;
    return (v1470 % 2) === 0;
};
var odd_p = function(v1471) {
    if (integer_p(v1471) !== false) {
        var if_res564 = rvoid();
    } else {
        var if_res564 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v1471));
    }
    if_res564;
    return not(even_p(v1471));
};
var exact_nonnegative_integer_p = function(v1472) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1472) && (v1472 >= 0);
};
var exact_integer_p = function(v1473) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1473);
};
var exact_p = function(v1474) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Number.isInteger(v1474);
};
var inexact_p = function(v1475) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(exact_p(v1475));
};
var single_flonum_available_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var single_flonum_p = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var real__gt_single_flonum = function(v1476) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1476;
};
var __times_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.mul, 0);
var __by_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.div, 1);
var __plus_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.add, 0);
var __ = M1.Core.attachProcedureArity(M1.Core.Number.JS.sub, 1);
var __lt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lt, 1);
var __gt_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gt, 1);
var __lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.lte, 1);
var __gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.gte, 1);
var __eq_ = M1.Core.attachProcedureArity(M1.Core.Number.JS.equals, 1);
var floor = function(v1490) {
    if (real_p(v1490) !== false) {
        var if_res565 = rvoid();
    } else {
        var if_res565 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v1490));
    }
    if_res565;
    return Math.floor(v1490);
};
var abs = function(v1491) {
    if (real_p(v1491) !== false) {
        var if_res566 = rvoid();
    } else {
        var if_res566 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v1491));
    }
    if_res566;
    return Math.abs(v1491);
};
var sin = function(v1492) {
    if (number_p(v1492) !== false) {
        var if_res567 = rvoid();
    } else {
        var if_res567 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("number?"), v1492));
    }
    if_res567;
    return Math.sin(v1492);
};
var cos = function(v1493) {
    if (number_p(v1493) !== false) {
        var if_res568 = rvoid();
    } else {
        var if_res568 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("number?"), v1493));
    }
    if_res568;
    return Math.cos(v1493);
};
var tan = function(v1494) {
    if (number_p(v1494) !== false) {
        var if_res569 = rvoid();
    } else {
        var if_res569 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("number?"), v1494));
    }
    if_res569;
    return Math.tan(v1494);
};
var asin = function(v1495) {
    if (number_p(v1495) !== false) {
        var if_res570 = rvoid();
    } else {
        var if_res570 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("number?"), v1495));
    }
    if_res570;
    return Math.asin(v1495);
};
var acos = function(v1496) {
    if (number_p(v1496) !== false) {
        var if_res571 = rvoid();
    } else {
        var if_res571 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("number?"), v1496));
    }
    if_res571;
    return Math.acos(v1496);
};
var cl572 = function(v1500) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan(v1500);
};
var cl573 = function(x1501, y1502) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.atan2(x1501, y1502);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam574 = {
        '1': cl572,
        '2': cl573
    } [arguments.length];
    if (fixed_lam574 !== undefined) {
        return fixed_lam574.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v1503) {
    if (real_p(v1503) !== false) {
        var if_res575 = rvoid();
    } else {
        var if_res575 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v1503));
    }
    if_res575;
    return Math.ceil(v1503);
};
var round = function(v1504) {
    if (real_p(v1504) !== false) {
        var if_res576 = rvoid();
    } else {
        var if_res576 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v1504));
    }
    if_res576;
    return Math.round(v1504);
};
var min = function(a1505, b1506) {
    if (real_p(a1505) !== false) {
        var if_res577 = rvoid();
    } else {
        var if_res577 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a1505));
    }
    if_res577;
    if (real_p(b1506) !== false) {
        var if_res578 = rvoid();
    } else {
        var if_res578 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b1506));
    }
    if_res578;
    return Math.min(a1505, b1506);
};
var max = function(a1507, b1508) {
    if (real_p(a1507) !== false) {
        var if_res579 = rvoid();
    } else {
        var if_res579 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a1507));
    }
    if_res579;
    if (real_p(b1508) !== false) {
        var if_res580 = rvoid();
    } else {
        var if_res580 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b1508));
    }
    if_res580;
    return Math.max(a1507, b1508);
};
var log = function(v1509) {
    if (number_p(v1509) !== false) {
        var if_res581 = rvoid();
    } else {
        var if_res581 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("number?"), v1509));
    }
    if_res581;
    return Math.log(v1509);
};
var exp = function(w1510) {
    if (number_p(w1510) !== false) {
        var if_res582 = rvoid();
    } else {
        var if_res582 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w1510));
    }
    if_res582;
    return Math.exp(w1510);
};
var expt = function(w1511, z1512) {
    if (number_p(w1511) !== false) {
        var if_res583 = rvoid();
    } else {
        var if_res583 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w1511));
    }
    if_res583;
    if (number_p(z1512) !== false) {
        var if_res584 = rvoid();
    } else {
        var if_res584 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z1512));
    }
    if_res584;
    return Math.pow(w1511, z1512);
};
var sqrt = function(v1513) {
    if (number_p(v1513) !== false) {
        var if_res585 = rvoid();
    } else {
        var if_res585 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v1513));
    }
    if_res585;
    return Math.sqrt(v1513);
};
var sqr = function(v1514) {
    if (number_p(v1514) !== false) {
        var if_res586 = rvoid();
    } else {
        var if_res586 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v1514));
    }
    if_res586;
    return __times_(v1514, v1514);
};
var truncate = function(v1515) {
    if (number_p(v1515) !== false) {
        var if_res587 = rvoid();
    } else {
        var if_res587 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v1515));
    }
    if_res587;
    return Math.trunc(v1515);
};
var remainder = function(a1516, b1517) {
    if (integer_p(a1516) !== false) {
        var if_res588 = rvoid();
    } else {
        var if_res588 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a1516));
    }
    if_res588;
    if (integer_p(b1517) !== false) {
        var if_res589 = rvoid();
    } else {
        var if_res589 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b1517));
    }
    if_res589;
    return a1516 % b1517;
};
var number__gt_string = function(n1518) {
    if (number_p(n1518) !== false) {
        var if_res590 = rvoid();
    } else {
        var if_res590 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n1518));
    }
    if_res590;
    return M1.Core.UString.makeMutable(n1518.toString());
};
var arithmetic_shift = function(n1519, m1520) {
    if (integer_p(n1519) !== false) {
        var if_res591 = rvoid();
    } else {
        var if_res591 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n1519));
    }
    if_res591;
    if (integer_p(m1520) !== false) {
        var if_res592 = rvoid();
    } else {
        var if_res592 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m1520));
    }
    if_res592;
    if (negative_p(m1520) !== false) {
        var if_res593 = n1519 >> __(m1520);
    } else {
        var if_res593 = n1519 << m1520;
    }
    return if_res593;
};
var inexact__gt_exact = function(v1521) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1521;
};
var exact__gt_inexact = function(v1522) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1522;
};
var make_rectangular = function(x1523, y1524) {
    if (real_p(x1523) !== false) {
        var if_res594 = rvoid();
    } else {
        var if_res594 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x1523));
    }
    if_res594;
    if (real_p(y1524) !== false) {
        var if_res595 = rvoid();
    } else {
        var if_res595 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y1524));
    }
    if_res595;
    return M1.Core.Pair.make(x1523, y1524);
};
var make_polar = function(m1525, a1526) {
    if (real_p(m1525) !== false) {
        var if_res596 = rvoid();
    } else {
        var if_res596 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), m1525));
    }
    if_res596;
    if (real_p(a1526) !== false) {
        var if_res597 = rvoid();
    } else {
        var if_res597 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-polar"), $rjs_core.UString.make("real?"), a1526));
    }
    if_res597;
    return error($rjs_core.UString.make("Complex numbers not supported with JS numerber semantics"));
};
var real_part = function(z1527) {
    if (pair_p(z1527) !== false) {
        var if_res598 = rvoid();
    } else {
        var if_res598 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1527));
    }
    if_res598;
    return z1527.hd(z1527);
};
var imag_part = function(z1528) {
    if (pair_p(z1528) !== false) {
        var if_res599 = rvoid();
    } else {
        var if_res599 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("(if-scheme-numbers number? pair?)"), z1528));
    }
    if_res599;
    return z1528.tl(z1528);
};
var magnitude = function(x1529) {
    if (number_p(x1529) !== false) {
        var if_res600 = rvoid();
    } else {
        var if_res600 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("magnitude"), $rjs_core.UString.make("number?"), x1529));
    }
    if_res600;
    return $rjs_core.attachProcedureArity(function(..._1530601) {
        var _1530 = $rjs_core.Pair.listFromArray(_1530601);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var conjugate = function(x1531) {
    if (number_p(x1531) !== false) {
        var if_res602 = rvoid();
    } else {
        var if_res602 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("conjugate"), $rjs_core.UString.make("number?"), x1531));
    }
    if_res602;
    return $rjs_core.attachProcedureArity(function(..._1532603) {
        var _1532 = $rjs_core.Pair.listFromArray(_1532603);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var angle = function(x1533) {
    if (number_p(x1533) !== false) {
        var if_res604 = rvoid();
    } else {
        var if_res604 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("angle"), $rjs_core.UString.make("number?"), x1533));
    }
    if_res604;
    return $rjs_core.attachProcedureArity(function(..._1534605) {
        var _1534 = $rjs_core.Pair.listFromArray(_1534605);
        return M1.Core.racketCoreError($rjs_core.UString.make("Not supported with JS number semantics"));
    });
};
var rational_p = Number.isInteger;
var numerator = function(x1535) {
    if (number_p(x1535) !== false) {
        var if_res606 = rvoid();
    } else {
        var if_res606 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x1535));
    }
    if_res606;
    return x1535;
};
var denominator = function(x1536) {
    if (number_p(x1536) !== false) {
        var if_res607 = rvoid();
    } else {
        var if_res607 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x1536));
    }
    if_res607;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.JS.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v1537) {
    if (number_p(v1537) !== false) {
        var if_res608 = rvoid();
    } else {
        var if_res608 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v1537));
    }
    if_res608;
    return M1.Core.Number.JS.bitwiseNot(v1537);
};
var bitwise_bit_set_p = function(n1538, m1539) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return not(zero_p(bitwise_and(n1538, arithmetic_shift(1, m1539))));
};
var not = function(v1540) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return equal_p(v1540, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v1541) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1541 === false;
};
var boolean_p = function(v1542) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (v1542 === true) || (v1542 === false);
};
var car = function(pair1543) {
    if (pair_p(pair1543) !== false) {
        var if_res609 = rvoid();
    } else {
        var if_res609 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair1543));
    }
    if_res609;
    return pair1543.hd;
};
var cdr = function(pair1544) {
    if (pair_p(pair1544) !== false) {
        var if_res610 = rvoid();
    } else {
        var if_res610 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair1544));
    }
    if_res610;
    return pair1544.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v1545) {
    if ((function(v1546) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1546) && pair_p(v1546.hd);
        })(v1545) !== false) {
        var if_res611 = rvoid();
    } else {
        var if_res611 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1545));
    }
    if_res611;
    return v1545.hd.hd;
};
var cadr = function(v1547) {
    if ((function(v1548) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1548) && pair_p(v1548.tl);
        })(v1547) !== false) {
        var if_res612 = rvoid();
    } else {
        var if_res612 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1547));
    }
    if_res612;
    return v1547.tl.hd;
};
var cdar = function(v1549) {
    if ((function(v1550) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1550) && pair_p(v1550.hd);
        })(v1549) !== false) {
        var if_res613 = rvoid();
    } else {
        var if_res613 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v1549));
    }
    if_res613;
    return v1549.hd.tl;
};
var cddr = function(v1551) {
    if ((function(v1552) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1552) && pair_p(v1552.tl);
        })(v1551) !== false) {
        var if_res614 = rvoid();
    } else {
        var if_res614 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v1551));
    }
    if_res614;
    return v1551.tl.tl;
};
var cdddr = function(v1553) {
    if ((function(v1554) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1554) && (function(v1555) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1555) && pair_p(v1555.tl);
            })(v1554.tl);
        })(v1553) !== false) {
        var if_res615 = rvoid();
    } else {
        var if_res615 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1553));
    }
    if_res615;
    return v1553.tl.tl.tl;
};
var caddr = function(v1556) {
    if ((function(v1557) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1557) && (function(v1558) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1558) && pair_p(v1558.tl);
            })(v1557.tl);
        })(v1556) !== false) {
        var if_res616 = rvoid();
    } else {
        var if_res616 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v1556));
    }
    if_res616;
    return v1556.tl.tl.hd;
};
var cadddr = function(v1559) {
    if ((function(v1560) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1560) && (function(v1561) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1561) && (function(v1562) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1562) && pair_p(v1562.tl);
                })(v1561.tl);
            })(v1560.tl);
        })(v1559) !== false) {
        var if_res617 = rvoid();
    } else {
        var if_res617 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1559));
    }
    if_res617;
    return v1559.tl.tl.tl.hd;
};
var cddddr = function(v1563) {
    if ((function(v1564) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M1.Core.Pair.check(v1564) && (function(v1565) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.Core.Pair.check(v1565) && (function(v1566) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.Core.Pair.check(v1566) && pair_p(v1566.tl);
                })(v1565.tl);
            })(v1564.tl);
        })(v1563) !== false) {
        var if_res618 = rvoid();
    } else {
        var if_res618 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v1563));
    }
    if_res618;
    return v1563.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v1567) {
    if (list_p(v1567) !== false) {
        var if_res619 = rvoid();
    } else {
        var if_res619 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v1567));
    }
    if_res619;
    return v1567.length;
};
var reverse = function(lst1568) {
    if (list_p(lst1568) !== false) {
        var if_res620 = rvoid();
    } else {
        var if_res620 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst1568));
    }
    if_res620;
    var loop1569 = function(lst1570, result1571) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1570) !== false) {
            var if_res621 = result1571;
        } else {
            var if_res621 = loop1569(lst1570.tl, M1.Core.Pair.make(lst1570.hd, result1571));
        }
        return if_res621;
    };
    return loop1569(lst1568, $rjs_core.Pair.EMPTY);
};
var list_times_ = function() {
    var let_result622 = values();
    var n_args1572 = arguments.length;
    var top_arguments1573 = arguments;
    var loop1574 = function(ii1575, result1576) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((ii1575 === 0) !== false) {
            var if_res623 = result1576;
        } else {
            var next_ii1577 = ii1575 - 1;
            var if_res623 = loop1574(next_ii1577, M1.Core.Pair.make(top_arguments1573[next_ii1577], result1576));
        }
        return if_res623;
    };
    return loop1574(n_args1572 - 1, arguments[n_args1572 - 1]);
};
var append = function() {
    var let_result624 = values();
    var result1578 = $rjs_core.Pair.EMPTY;
    var lsts1579 = arguments;
    var loop1580 = function(i1581) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1581 < lsts1579.length) !== false) {
            var lst1582 = lsts1579[i1581];
            result1578 = foldr(M1.Core.Pair.make, lst1582, result1578);
            var if_res625 = loop1580(i1581 + 1);
        } else {
            var if_res625 = rvoid();
        }
        return if_res625;
    };
    loop1580(0);
    return result1578;
};
var for_each = function(lam1583) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res626 = null;
    } else {
        var if_res626 = rvoid();
    }
    if_res626;
    var let_result627 = values();
    var lsts1584 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam1583) !== false) {
        var if_res628 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam1583, $rjs_core.UString.make(", at:"), 0);
        var if_res628 = null;
    }
    if_res628;
    map.apply(null, [lam1583].concat(lsts1584));
    return null;
};
var mcons = function(hd1585, tl1586) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.make(hd1585, tl1586);
};
var mpair_p = function(v1587) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.MPair.check(v1587);
};
var mcar = function(p1588) {
    if (mpair_p(p1588) !== false) {
        var if_res629 = rvoid();
    } else {
        var if_res629 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p1588));
    }
    if_res629;
    return p1588.car();
};
var mcdr = function(p1589) {
    if (mpair_p(p1589) !== false) {
        var if_res630 = rvoid();
    } else {
        var if_res630 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p1589));
    }
    if_res630;
    return p1589.cdr();
};
var set_mcar_bang_ = function(p1590, v1591) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1590) !== false) {
        var if_res631 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1590, $rjs_core.UString.make(", at:"), 0);
        var if_res631 = null;
    }
    if_res631;
    return p1590.setCar(v1591);
};
var set_mcdr_bang_ = function(p1592, v1593) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (mpair_p(p1592) !== false) {
        var if_res632 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p1592, $rjs_core.UString.make(", at:"), 0);
        var if_res632 = null;
    }
    if_res632;
    return p1592.setCdr(v1593);
};
var make_struct_type = function(name1594, super_type1595, init_field_count1596, auto_field_count1597, auto_v1598, props1599, inspector1600, proc_spec1601, immutables1602, guard1603, constructor_name1604) {
    return M1.Core.Struct.makeStructType({
        'name': name1594.toString(),
        'superType': super_type1595,
        'initFieldCount': init_field_count1596,
        'autoFieldCount': auto_field_count1597,
        'autoV': auto_v1598,
        'props': props1599,
        'inspector': inspector1600,
        'procSpec': proc_spec1601,
        'immutables': immutables1602,
        'guard': guard1603,
        'constructorName': constructor_name1604
    });
};
var make_struct_field_accessor = function(ref1605, index1606, field_name1607) {
    return function(s1608) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res633 = null;
        } else {
            var if_res633 = rvoid();
        }
        if_res633;
        return ref1605(s1608, index1606);
    };
};
var make_struct_field_mutator = function(set1609, index1610, fieldName1611) {
    return function(s1612, v1613) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res634 = null;
        } else {
            var if_res634 = rvoid();
        }
        if_res634;
        return set1609(s1612, index1610, v1613);
    };
};
var make_struct_type_property = function(name1614, guard1615, supers1616, can_impersonate_p1617) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name1614,
        'guard': guard1615,
        'supers': supers1616,
        'canImpersonate': can_impersonate_p1617
    });
};
var check_struct_type = function(name1618, what1619) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (what1619 !== false) {
        if (M1.Core.Struct.isStructType(what1619) !== false) {
            var if_res635 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res635 = null;
        }
        if_res635;
        var if_res636 = what1619;
    } else {
        var if_res636 = rvoid();
    }
    return if_res636;
};
var struct_type_p = function(v1620) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Struct.isStructType(v1620);
};
var struct_type_info = function(desc1621) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc1621));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size1622, v1623) {
    if (integer_p(size1622) !== false) {
        var if_res637 = rvoid();
    } else {
        var if_res637 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size1622));
    }
    if_res637;
    if (eq_p(v1623, undefined) !== false) {
        var if_res638 = 0;
    } else {
        var if_res638 = v1623;
    }
    return M1.Core.Vector.makeInit(size1622, if_res638);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v1624) {
    if (vector_p(v1624) !== false) {
        var if_res639 = rvoid();
    } else {
        var if_res639 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v1624));
    }
    if_res639;
    return v1624.length();
};
var vector_ref = function(vec1625, i1626) {
    if (vector_p(vec1625) !== false) {
        var if_res640 = rvoid();
    } else {
        var if_res640 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec1625));
    }
    if_res640;
    if (integer_p(i1626) !== false) {
        var if_res641 = rvoid();
    } else {
        var if_res641 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i1626));
    }
    if_res641;
    return vec1625.ref(i1626);
};
var vector_set_bang_ = function(vec1627, i1628, v1629) {
    if (vector(vec1627) !== false) {
        var if_res642 = rvoid();
    } else {
        var if_res642 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec1627));
    }
    if_res642;
    if (integer_p(i1628) !== false) {
        var if_res643 = rvoid();
    } else {
        var if_res643 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i1628));
    }
    if_res643;
    return vec1627.set(i1628, v1629);
};
var vector__gt_list = function(vec1630) {
    if (vector_p(vec1630) !== false) {
        var if_res644 = rvoid();
    } else {
        var if_res644 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec1630));
    }
    if_res644;
    return M1.Core.Pair.listFromArray(vec1630.items);
};
var list__gt_vector = function(lst1631) {
    if (list_p(lst1631) !== false) {
        var if_res645 = rvoid();
    } else {
        var if_res645 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst1631));
    }
    if_res645;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst1631), true);
};
var vector__gt_immutable_vector = function(vec1632) {
    if (vector_p(vec1632) !== false) {
        var if_res646 = rvoid();
    } else {
        var if_res646 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec1632));
    }
    if_res646;
    return M1.Core.Vector.copy(vec1632, false);
};
var vector_copy = function(vec1633) {
    if (vector_p(vec1633) !== false) {
        var if_res647 = rvoid();
    } else {
        var if_res647 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec1633));
    }
    if_res647;
    return M1.Core.Vector.copy(vec1633, true);
};
var vector_copy_bang_ = function(dest1634, dest_start1635, src1636, src_start1637, src_end1638) {
    if (vector_p(dest1634) !== false) {
        var if_res648 = rvoid();
    } else {
        var if_res648 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest1634));
    }
    if_res648;
    if (integer_p(dest_start1635) !== false) {
        var if_res649 = rvoid();
    } else {
        var if_res649 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start1635));
    }
    if_res649;
    if (vector_p(src1636) !== false) {
        var if_res650 = rvoid();
    } else {
        var if_res650 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src1636));
    }
    if_res650;
    if (integer_p(src_start1637) !== false) {
        var if_res651 = rvoid();
    } else {
        var if_res651 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start1637));
    }
    if_res651;
    if (integer_p(src_end1638) !== false) {
        var if_res652 = rvoid();
    } else {
        var if_res652 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end1638));
    }
    if_res652;
    return dest1634.copy(dest_start1635, src1636, src_start1637, src_end1638);
};
var hash = function() {
    var let_result653 = values();
    var kv_times_1639 = arguments;
    if (((kv_times_1639.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res654 = null;
    } else {
        var if_res654 = rvoid();
    }
    if_res654;
    var items1640 = [];
    var loop1641 = function(i1642) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1642 < kv_times_1639.length) !== false) {
            items1640.push([kv_times_1639[i1642], kv_times_1639[__plus_(i1642, 1)]]);
            var if_res655 = loop1641(i1642 + 2);
        } else {
            var if_res655 = rvoid();
        }
        return if_res655;
    };
    loop1641(0);
    return M1.Core.Hash.makeEqual(items1640, false);
};
var hasheqv = function() {
    var let_result656 = values();
    var kv_times_1643 = arguments;
    if (((kv_times_1643.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res657 = null;
    } else {
        var if_res657 = rvoid();
    }
    if_res657;
    var items1644 = [];
    var loop1645 = function(i1646) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1646 < kv_times_1643.length) !== false) {
            items1644.push([kv_times_1643[i1646], kv_times_1643[__plus_(i1646, 1)]]);
            var if_res658 = loop1645(i1646 + 2);
        } else {
            var if_res658 = rvoid();
        }
        return if_res658;
    };
    loop1645(0);
    return M1.Core.Hash.makeEqv(items1644, false);
};
var hasheq = function() {
    var let_result659 = values();
    var kv_times_1647 = arguments;
    if (((kv_times_1647.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res660 = null;
    } else {
        var if_res660 = rvoid();
    }
    if_res660;
    var items1648 = [];
    var loop1649 = function(i1650) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1650 < kv_times_1647.length) !== false) {
            items1648.push([kv_times_1647[i1650], kv_times_1647[__plus_(i1650, 1)]]);
            var if_res661 = loop1649(i1650 + 2);
        } else {
            var if_res661 = rvoid();
        }
        return if_res661;
    };
    loop1649(0);
    return M1.Core.Hash.makeEq(items1648, false);
};
var make_hash = function(assocs1651) {
    var let_result662 = values();
    var assocs_times_1652 = assocs1651 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1652, true);
};
var make_hasheqv = function(assocs1653) {
    var let_result663 = values();
    var assocs_times_1654 = assocs1653 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1654, true);
};
var make_hasheq = function(assocs1655) {
    var let_result664 = values();
    var assocs_times_1656 = assocs1655 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1656, true);
};
var make_immutable_hash = function(assocs1657) {
    var let_result665 = values();
    var assocs_times_1658 = assocs1657 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_1658, false);
};
var make_immutable_hasheqv = function(assocs1659) {
    var let_result666 = values();
    var assocs_times_1660 = assocs1659 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_1660, false);
};
var make_immutable_hasheq = function(assocs1661) {
    var let_result667 = values();
    var assocs_times_1662 = assocs1661 || $rjs_core.Pair.EMPTY;
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_1662, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl668 = function(h1663, k1664) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1663.hasKey(k1664) !== false) {
        var if_res671 = h1663._h.get(k1664);
    } else {
        var if_res671 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k1664));
    }
    return if_res671;
};
var cl669 = function(h1665, k1666, fail1667) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1665.ref(k1666, fail1667);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam670 = {
        '2': cl668,
        '3': cl669
    } [arguments.length];
    if (fixed_lam670 !== undefined) {
        return fixed_lam670.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h1668, k1669) {
    return h1668.hasKey(k1669);
};
var cl672 = function(h1670, k1671) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1670.hasKey(k1671) !== false) {
        var if_res675 = h1670.refKey(k1671);
    } else {
        var if_res675 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k1671));
    }
    return if_res675;
};
var cl673 = function(h1672, k1673, fail1674) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1672.refKey(k1673, fail1674);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam674 = {
        '2': cl672,
        '3': cl673
    } [arguments.length];
    if (fixed_lam674 !== undefined) {
        return fixed_lam674.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h1675, k1676, v1677) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1675.isImmutable() !== false) {
        var if_res676 = h1675.set(k1676, v1677);
    } else {
        var if_res676 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1675, k1676, v1677));
    }
    return if_res676;
};
var hash_remove = function(h1678, k1679) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1678.isImmutable() !== false) {
        var if_res677 = h1678.remove(k1679);
    } else {
        var if_res677 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h1678, k1679));
    }
    return if_res677;
};
var cl678 = function(h1680, proc1681) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1680, proc1681);
};
var cl679 = function(h1682, proc1683, try_order_p1684) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Hash.map(h1682, proc1683);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam680 = {
        '2': cl678,
        '3': cl679
    } [arguments.length];
    if (fixed_lam680 !== undefined) {
        return fixed_lam680.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h1685) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1685.size();
};
var hash_remove_bang_ = function(h1686, k1687) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1686.isImmutable(h1686) !== false) {
        var if_res681 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1686, k1687));
    } else {
        var if_res681 = h1686.doremove(k1687);
    }
    return if_res681;
};
var hash_set_bang_ = function(h1688, k1689, v1690) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (h1688.isImmutable(h1688) !== false) {
        var if_res682 = raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h1688, k1689, v1690));
    } else {
        var if_res682 = h1688.doset(k1689, v1690);
    }
    return if_res682;
};
var hash_iterate_first = function(h1691) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1691.iterateFirst();
};
var hash_iterate_next = function(h1692, i1693) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1692.iterateNext(i1693);
};
var hash_iterate_key = function(h1694, i1695) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1694.iterateKey(i1695);
};
var hash_iterate_value = function(h1696, i1697) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1696.iterateValue(i1697);
};
var hash_iterate_key_plus_value = function(h1698, i1699) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1698.iterateKeyValue(i1699);
};
var hash_iterate_pair = function(h1700, i1701) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h1700.iteratePair(i1701);
};
var hash_keys_subset_p = function(h11702, h21703) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Hash.check(h11702) && M1.Core.Hash.check(h21703)) !== false) {
        if (h11702.isSameType(h21703) !== false) {
            var if_res683 = h11702.isKeysSubset(h21703);
        } else {
            var if_res683 = raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h11702, $rjs_core.UString.make("second table"), h21703));
        }
        var if_res684 = if_res683;
    } else {
        var if_res684 = false;
    }
    return if_res684;
};
var hash_union = function(h11704, h21705) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h11704.union(h21705);
};
var hash_strong_p = function(h1706) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var apply = function(lam1707) {
    var let_result685 = values();
    var args1708 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam1707) !== false) {
        var if_res686 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam1707, $rjs_core.UString.make(", at:"), 0);
        var if_res686 = null;
    }
    if_res686;
    var let_result687 = values();
    if (zero_p(args1708.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res691 = null;
    } else {
        if (equal_p(args1708.length, 1) !== false) {
            if (null_p(args1708[0]) !== false) {
                var if_res689 = rvoid();
            } else {
                if (M1.Core.Pair.check(args1708[0]) !== false) {
                    var if_res688 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args1708[0]);
                    var if_res688 = null;
                }
                var if_res689 = if_res688;
            }
            if_res689;
            var if_res690 = M1.Core.Pair.listToArray(args1708[0]);
        } else {
            var if_res690 = args1708.concat(M1.Core.Pair.listToArray(args1708.pop()));
        }
        var if_res691 = if_res690;
    }
    var final_args1709 = if_res691;
    return lam1707.apply(null, final_args1709);
};
var map = function(fn1710) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res692 = null;
    } else {
        var if_res692 = rvoid();
    }
    if_res692;
    var let_result693 = values();
    var lists1711 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn1710) !== false) {
        var if_res694 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1710, $rjs_core.UString.make(", at:"), 0);
        var if_res694 = null;
    }
    if_res694;
    var let_result695 = values();
    if (__lt__eq_(lists1711.length, 0) !== false) {
        var if_res696 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res696 = rvoid();
    }
    if_res696;
    var let_result697 = values();
    var lst_len1712 = length(lists1711[0]);
    var loop1713 = function(i1714) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1714 < lists1711.length) !== false) {
            var v1715 = lists1711[i1714];
            if (eq_p(length(v1715), lst_len1712) !== false) {
                var if_res698 = rvoid();
            } else {
                var if_res698 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res698;
            var if_res699 = loop1713(i1714 + 1);
        } else {
            var if_res699 = rvoid();
        }
        return if_res699;
    };
    loop1713(1);
    var let_result700 = values();
    var result1716 = Array(lst_len1712);
    var args1717 = Array(lists1711.length);
    var loop1718 = function(result_i1719) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i1719 < lst_len1712) !== false) {
            var loop1720 = function(lst_j1721) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j1721 < lists1711.length) !== false) {
                    var lst1722 = lists1711[lst_j1721];
                    args1717[lst_j1721] = lst1722.hd;
                    lists1711[lst_j1721] = lst1722.tl;
                    var if_res701 = loop1720(lst_j1721 + 1);
                } else {
                    var if_res701 = rvoid();
                }
                return if_res701;
            };
            loop1720(0);
            result1716[result_i1719] = fn1710.apply(null, args1717);
            var if_res702 = loop1718(result_i1719 + 1);
        } else {
            var if_res702 = rvoid();
        }
        return if_res702;
    };
    loop1718(0);
    return M1.Core.Pair.listFromArray(result1716);
};
var foldl = function(fn1723, init1724) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res703 = null;
    } else {
        var if_res703 = rvoid();
    }
    if_res703;
    var let_result704 = values();
    var lists1725 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn1723) !== false) {
        var if_res705 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1723, $rjs_core.UString.make(", at:"), 0);
        var if_res705 = null;
    }
    if_res705;
    var let_result706 = values();
    if (__lt__eq_(lists1725.length, 0) !== false) {
        var if_res707 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res707 = rvoid();
    }
    if_res707;
    var let_result708 = values();
    var lst_len1726 = length(lists1725[0]);
    var loop1727 = function(i1728) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1728 < lists1725.length) !== false) {
            var v1729 = lists1725[i1728];
            if (eq_p(length(v1729), lst_len1726) !== false) {
                var if_res709 = rvoid();
            } else {
                var if_res709 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res709;
            var if_res710 = loop1727(i1728 + 1);
        } else {
            var if_res710 = rvoid();
        }
        return if_res710;
    };
    loop1727(1);
    var let_result711 = values();
    var result1730 = init1724;
    var args1731 = Array(lists1725.length + 1);
    var loop1732 = function(result_i1733) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((result_i1733 < lst_len1726) !== false) {
            var loop1734 = function(lst_j1735) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((lst_j1735 < lists1725.length) !== false) {
                    var lst1736 = lists1725[lst_j1735];
                    args1731[lst_j1735] = lst1736.hd;
                    lists1725[lst_j1735] = lst1736.tl;
                    var if_res712 = loop1734(lst_j1735 + 1);
                } else {
                    var if_res712 = rvoid();
                }
                return if_res712;
            };
            loop1734(0);
            args1731[lists1725.length] = result1730;
            result1730 = fn1723.apply(null, args1731);
            var if_res713 = loop1732(result_i1733 + 1);
        } else {
            var if_res713 = rvoid();
        }
        return if_res713;
    };
    loop1732(0);
    return result1730;
};
var _foldr = function(fn1737, init1738, lists1739) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lists1739[0]) !== false) {
        var if_res715 = init1738;
    } else {
        var args1740 = Array(add1(lists1739.length));
        var loop1741 = function(ii1742) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((ii1742 < lists1739.length) !== false) {
                var lst1743 = lists1739[ii1742];
                args1740[ii1742] = lst1743.hd;
                lists1739[ii1742] = lst1743.tl;
                var if_res714 = loop1741(ii1742 + 1);
            } else {
                var if_res714 = rvoid();
            }
            return if_res714;
        };
        loop1741(0);
        args1740[lists1739.length] = _foldr(fn1737, init1738, lists1739);
        var if_res715 = fn1737.apply(null, args1740);
    }
    return if_res715;
};
var foldr = function(fn1744, init1745) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res716 = null;
    } else {
        var if_res716 = rvoid();
    }
    if_res716;
    var let_result717 = values();
    var lists1746 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn1744) !== false) {
        var if_res718 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn1744, $rjs_core.UString.make(", at:"), 0);
        var if_res718 = null;
    }
    if_res718;
    var let_result719 = values();
    if (__lt__eq_(lists1746.length, 0) !== false) {
        var if_res720 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res720 = rvoid();
    }
    if_res720;
    var let_result721 = values();
    var lst_len1747 = length(lists1746[0]);
    var loop1748 = function(i1749) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1749 < lists1746.length) !== false) {
            var v1750 = lists1746[i1749];
            if (eq_p(length(v1750), lst_len1747) !== false) {
                var if_res722 = rvoid();
            } else {
                var if_res722 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
            }
            if_res722;
            var if_res723 = loop1748(i1749 + 1);
        } else {
            var if_res723 = rvoid();
        }
        return if_res723;
    };
    loop1748(1);
    return _foldr(fn1744, init1745, lists1746);
};
var cl724 = function(end1751) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return range(0, end1751, 1);
};
var cl725 = function(start1752, end1753) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (__lt_(start1752, end1753) !== false) {
        var if_res728 = 1;
    } else {
        var if_res728 = -1;
    }
    return range(start1752, end1753, if_res728);
};
var cl726 = function(start1754, end1755, step1756) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var result1757 = [];
    if ((__gt__eq_(step1756, 0) && __lt_(step1756, end1755)) !== false) {
        var loop1758 = function(i1759) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1759 < end1755) !== false) {
                result1757.push(i1759);
                var if_res729 = loop1758(i1759 + step1756);
            } else {
                var if_res729 = rvoid();
            }
            return if_res729;
        };
        var if_res732 = loop1758(start1754);
    } else {
        if ((__lt__eq_(step1756, 0) && __lt_(end1755, start1754)) !== false) {
            var loop1760 = function(i1761) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if ((i1761 < __(end1755)) !== false) {
                    result1757.push(__(i1761));
                    var if_res730 = loop1760(i1761 + __(step1756));
                } else {
                    var if_res730 = rvoid();
                }
                return if_res730;
            };
            var if_res731 = loop1760(__(start1754));
        } else {
            var if_res731 = rvoid();
        }
        var if_res732 = if_res731;
    }
    if_res732;
    return M1.Core.Pair.listFromArray(result1757);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam727 = {
        '1': cl724,
        '2': cl725,
        '3': cl726
    } [arguments.length];
    if (fixed_lam727 !== undefined) {
        return fixed_lam727.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v1762, lst1763, proc1764) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(proc1764, undefined) !== false) {
        proc1764 = M1.Core.isEqual;
        var if_res733 = null;
    } else {
        var if_res733 = rvoid();
    }
    if_res733;
    var loop1765 = function(result1766, lst1767) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1767) !== false) {
            var if_res735 = reverse(result1766);
        } else {
            if (proc1764(v1762, car(lst1767)) !== false) {
                var if_res734 = append(reverse(result1766), cdr(lst1767));
            } else {
                var if_res734 = rvoid();
            }
            if_res734;
            var if_res735 = loop1765(cons(car(lst1767), result1766), cdr(lst1767));
        }
        return if_res735;
    };
    return loop1765($rjs_core.Pair.EMPTY, lst1763);
};
var filter = function(fn1768, lst1769) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1770 = function(result1771, lst1772) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1772) !== false) {
            var if_res737 = reverse(result1771);
        } else {
            if (fn1768(lst1772.hd) !== false) {
                var if_res736 = loop1770(M1.Core.Pair.make(lst1772.hd, result1771), lst1772.tl);
            } else {
                var if_res736 = loop1770(result1771, lst1772.tl);
            }
            var if_res737 = if_res736;
        }
        return if_res737;
    };
    return loop1770($rjs_core.Pair.EMPTY, lst1769);
};
var ormap = function(fn1773) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res738 = null;
    } else {
        var if_res738 = rvoid();
    }
    if_res738;
    var let_result739 = values();
    var lists1774 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args1775 = M1.Core.argumentsToArray(arguments);
        var final_arg1776 = args1775.pop();
        return (final_arg1776 || fn1773.apply(null, args1775)) && true;
    }, false].concat(lists1774));
};
var andmap = function(fn1777) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res740 = null;
    } else {
        var if_res740 = rvoid();
    }
    if_res740;
    var let_result741 = values();
    var lists1778 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args1779 = M1.Core.argumentsToArray(arguments);
        var final_arg1780 = args1779.pop();
        return (final_arg1780 && fn1777.apply(null, args1779)) && true;
    }, true].concat(lists1778));
};
var member = function(v1781, lst1782) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1783 = function(lst1784) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1784) !== false) {
            var if_res743 = false;
        } else {
            if (M1.Core.isEqual(v1781, lst1784.hd) !== false) {
                var if_res742 = lst1784;
            } else {
                var if_res742 = loop1783(lst1784.tl);
            }
            var if_res743 = if_res742;
        }
        return if_res743;
    };
    return loop1783(lst1782);
};
var compose = function() {
    var procs1785 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result744 = values();
        var result1786 = M1.Core.argumentsToArray(arguments);
        var procs_times_1787 = procs1785.reverse();
        var loop1788 = function(i1789) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1789 < procs_times_1787.length) !== false) {
                var p1790 = procs_times_1787[i1789];
                result1786 = p1790.apply(null, result1786);
                if (M1.Core.Values.check(result1786) !== false) {
                    result1786 = result1786.getAll();
                    var if_res745 = null;
                } else {
                    result1786 = [result1786];
                    var if_res745 = null;
                }
                if_res745;
                var if_res746 = loop1788(i1789 + 1);
            } else {
                var if_res746 = rvoid();
            }
            return if_res746;
        };
        loop1788(0);
        if ((result1786.length === 1) !== false) {
            var if_res747 = result1786[0];
        } else {
            var if_res747 = M1.Core.Values.make(result1786);
        }
        return if_res747;
    };
};
var compose1 = function() {
    var procs1791 = M1.Core.argumentsToArray(arguments);
    return function(v1792) {
        var let_result748 = values();
        var result1793 = v1792;
        var procs_times_1794 = procs1791.reverse();
        var loop1795 = function(i1796) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if ((i1796 < procs_times_1794.length) !== false) {
                var p1797 = procs_times_1794[i1796];
                result1793 = p1797(result1793);
                var if_res749 = loop1795(i1796 + 1);
            } else {
                var if_res749 = rvoid();
            }
            return if_res749;
        };
        loop1795(0);
        return result1793;
    };
};
var list_ref = function(lst1798, pos1799) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1800 = function(i1801, lst1802) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1802) !== false) {
            var if_res751 = error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
        } else {
            if ((i1801 === pos1799) !== false) {
                var if_res750 = lst1802.hd;
            } else {
                var if_res750 = loop1800(i1801 + 1, lst1802.tl);
            }
            var if_res751 = if_res750;
        }
        return if_res751;
    };
    return loop1800(0, lst1798);
};
var build_list = function(n1803, proc1804) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arr1805 = Array(n1803);
    var loop1806 = function(i1807) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1807 < n1803) !== false) {
            arr1805[i1807] = proc1804(i1807);
            var if_res752 = loop1806(i1807 + 1);
        } else {
            var if_res752 = rvoid();
        }
        return if_res752;
    };
    loop1806(0);
    return M1.Core.Pair.listFromArray(arr1805);
};
var make_list = function(n1808, v1809) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1810 = function(result1811, i1812) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if ((i1812 === n1808) !== false) {
            var if_res753 = result1811;
        } else {
            var if_res753 = loop1810(M1.Core.Pair.make(v1809, result1811), i1812 + 1);
        }
        return if_res753;
    };
    return loop1810($rjs_core.Pair.EMPTY, 0);
};
var flatten = function(lst1813) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (null_p(lst1813) !== false) {
        var if_res755 = lst1813;
    } else {
        if (pair_p(lst1813) !== false) {
            var if_res754 = append(flatten(lst1813.hd), flatten(lst1813.tl));
        } else {
            var if_res754 = list(lst1813);
        }
        var if_res755 = if_res754;
    }
    return if_res755;
};
var assoc = function(k1814, lst1815) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop1816 = function(lst1817) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (null_p(lst1817) !== false) {
            var if_res757 = false;
        } else {
            if (M1.Core.isEqual(k1814, lst1817.hd.hd) !== false) {
                var if_res756 = lst1817.hd;
            } else {
                var if_res756 = loop1816(lst1817.tl);
            }
            var if_res757 = if_res756;
        }
        return if_res757;
    };
    return loop1816(lst1815);
};
var memv = M1.Kernel.memv;
var memq = M1.Kernel.memq;
var memf = M1.Kernel.memf;
var findf = M1.Kernel.findf;
var assv = M1.Kernel.assv;
var assq = M1.Kernel.assq;
var assf = M1.Kernel.assf;
var alt_reverse = reverse;
var string = M1.Core.attachProcedureName(M1.Core.UString.makeMutableFromCharsVarArgs, $rjs_core.UString.make("string"));
var string_append = M1.Core.attachProcedureName(M1.Core.UString.stringAppend, $rjs_core.UString.make("string-append"));
var string_ref = function(s1818, i1819) {
    if (string_p(s1818) !== false) {
        var if_res758 = rvoid();
    } else {
        var if_res758 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s1818));
    }
    if_res758;
    if (exact_nonnegative_integer_p(i1819) !== false) {
        var if_res759 = rvoid();
    } else {
        var if_res759 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i1819));
    }
    if_res759;
    if (s1818.isValidIndex(i1819) !== false) {
        var if_res760 = s1818.charAt(i1819);
    } else {
        var if_res760 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s1818, s1818.length, i1819));
    }
    return if_res760;
};
var string_eq__p = function(sa1820, sb1821) {
    if (string_p(sa1820) !== false) {
        var if_res761 = rvoid();
    } else {
        var if_res761 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa1820));
    }
    if_res761;
    if (string_p(sb1821) !== false) {
        var if_res762 = rvoid();
    } else {
        var if_res762 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb1821));
    }
    if_res762;
    return M1.Core.UString.eq(sa1820, sb1821);
};
var string_lt__p = function(sa1822, sb1823) {
    if (string_p(sa1822) !== false) {
        var if_res763 = rvoid();
    } else {
        var if_res763 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa1822));
    }
    if_res763;
    if (string_p(sb1823) !== false) {
        var if_res764 = rvoid();
    } else {
        var if_res764 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb1823));
    }
    if_res764;
    return M1.Core.UString.lt(sa1822, sb1823);
};
var string_lt__eq__p = function(sa1824, sb1825) {
    if (string_p(sa1824) !== false) {
        var if_res765 = rvoid();
    } else {
        var if_res765 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa1824));
    }
    if_res765;
    if (string_p(sb1825) !== false) {
        var if_res766 = rvoid();
    } else {
        var if_res766 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb1825));
    }
    if_res766;
    return M1.Core.UString.lte(sa1824, sb1825);
};
var string_gt__p = function(sa1826, sb1827) {
    if (string_p(sa1826) !== false) {
        var if_res767 = rvoid();
    } else {
        var if_res767 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa1826));
    }
    if_res767;
    if (string_p(sb1827) !== false) {
        var if_res768 = rvoid();
    } else {
        var if_res768 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb1827));
    }
    if_res768;
    return M1.Core.UString.gt(sa1826, sb1827);
};
var string_gt__eq__p = function(sa1828, sb1829) {
    if (string_p(sa1828) !== false) {
        var if_res769 = rvoid();
    } else {
        var if_res769 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa1828));
    }
    if_res769;
    if (string_p(sb1829) !== false) {
        var if_res770 = rvoid();
    } else {
        var if_res770 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb1829));
    }
    if_res770;
    return M1.Core.UString.gte(sa1828, sb1829);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out1830, form1831, ...args1832771) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1832 = $rjs_core.Pair.listFromArray(args1832771);
    return apply(M1.Kernel.fprintf, print_as_expression(), out1830, form1831, args1832);
});
var eprintf = $rjs_core.attachProcedureArity(function(form1833, ...args1834772) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1834 = $rjs_core.Pair.listFromArray(args1834772);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form1833, args1834);
});
var printf = $rjs_core.attachProcedureArity(function(form1835, ...args1836773) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1836 = $rjs_core.Pair.listFromArray(args1836773);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form1835, args1836);
});
var format = $rjs_core.attachProcedureArity(function(form1837, ...args1838774) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args1838 = $rjs_core.Pair.listFromArray(args1838774);
    var out1839 = open_output_string();
    apply(fprintf, out1839, form1837, args1838);
    return get_output_string(out1839);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string1840 = function(k21841, c11842) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k1843 = k21841;
    if (false !== false) {
        var if_res775 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res775 = c11842;
    }
    var c1844 = if_res775;
    return M1.Core.UString.repeatChar(k1843, c1844);
};
var cl776 = function(k1845) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string1840(k1845, $rjs_core.Char.charFromCodepoint(0));
};
var cl777 = function(k1846, c11847) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_string1840(k1846, c11847);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam778 = {
        '1': cl776,
        '2': cl777
    } [arguments.length];
    if (fixed_lam778 !== undefined) {
        return fixed_lam778.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst1848) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Kernel.listToString(lst1848);
};
var string__gt_list1849 = function(str31850) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(str31850, M4.unsafe_undefined) !== false) {
        var if_res779 = string_p;
    } else {
        var if_res779 = str31850;
    }
    var str1851 = if_res779;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str1851));
};
var cl780 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list1849(M4.unsafe_undefined);
};
var cl781 = function(str31852) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_list1849(str31852);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam782 = {
        '0': cl780,
        '1': cl781
    } [arguments.length];
    if (fixed_lam782 !== undefined) {
        return fixed_lam782.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string1853 = function(s41854) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(s41854, M4.unsafe_undefined) !== false) {
        var if_res783 = string_p;
    } else {
        var if_res783 = s41854;
    }
    var s1855 = if_res783;
    return M1.Core.UString.stringToImmutableString(s1855);
};
var cl784 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string1853(M4.unsafe_undefined);
};
var cl785 = function(s41856) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_immutable_string1853(s41856);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam786 = {
        '0': cl784,
        '1': cl785
    } [arguments.length];
    if (fixed_lam786 !== undefined) {
        return fixed_lam786.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v1857) {
    if (symbol_p(v1857) !== false) {
        var if_res787 = rvoid();
    } else {
        var if_res787 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v1857));
    }
    if_res787;
    return M1.Core.UString.makeMutable(v1857.toString());
};
var string__gt_symbol = function(s1858) {
    if (string_p(s1858) !== false) {
        var if_res788 = rvoid();
    } else {
        var if_res788 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s1858));
    }
    if_res788;
    return M1.Core.PrimitiveSymbol.make(s1858);
};
var string__gt_uninterned_symbol = function(s1859) {
    if (string_p(s1859) !== false) {
        var if_res789 = rvoid();
    } else {
        var if_res789 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s1859));
    }
    if_res789;
    return M1.Core.PrimitiveSymbol.makeUninterned(s1859);
};
var string__gt_unreadable_symbol = function(s1860) {
    if (string_p(s1860) !== false) {
        var if_res790 = rvoid();
    } else {
        var if_res790 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s1860));
    }
    if_res790;
    return M1.Core.PrimitiveSymbol.make(s1860);
};
var string__gt_number1861 = function(s61862, radix51863) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var s1864 = s61862;
    if (false !== false) {
        var if_res791 = 10;
    } else {
        var if_res791 = radix51863;
    }
    var radix1865 = if_res791;
    var integer_in1866 = function(lo1867, hi1868) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return function(v1869) {
            return (exact_integer_p(v1869) && __gt__eq_(v1869, 2)) && __lt__eq_(v1869, 16);
        };
    };
    if (string_p(s1864) !== false) {
        var if_res792 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s1864, $rjs_core.UString.make(", at:"), 0);
        var if_res792 = null;
    }
    if_res792;
    var let_result793 = values();
    if (integer_in1866(2, 16)(radix1865) !== false) {
        var if_res794 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix1865, $rjs_core.UString.make(", at:"), 1);
        var if_res794 = null;
    }
    if_res794;
    var let_result795 = values();
    var js_string__gt_number1870 = function() {
        if (arguments.length !== 0) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var result1871 = parseInt(s1864, radix1865);
        if ((isNaN(result1871) || not(s1864.isValidInteger(radix1865))) !== false) {
            var if_res796 = false;
        } else {
            var if_res796 = result1871;
        }
        return if_res796;
    };
    return js_string__gt_number1870();
};
var cl797 = function(s1873) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number1861(s1873, 10);
};
var cl798 = function(s1874, radix51875) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_number1861(s1874, radix51875);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam799 = {
        '1': cl797,
        '2': cl798
    } [arguments.length];
    if (fixed_lam799 !== undefined) {
        return fixed_lam799.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym1876) {
    if (symbol_p(sym1876) !== false) {
        var if_res800 = rvoid();
    } else {
        var if_res800 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym1876));
    }
    if_res800;
    return M1.Core.PrimitiveSymbol.isInterned(sym1876);
};
var symbol_eq__p = function(s1877, v1878) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1877.equals(v1878);
};
var symbol_lt__p = function(s1879, v1880) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1879.lt(v1880);
};
var keyword_lt__p = function(s1881, v1882) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s1881.lt(v1882);
};
var string_length = function(s1883) {
    if (string_p(s1883) !== false) {
        var if_res801 = rvoid();
    } else {
        var if_res801 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s1883));
    }
    if_res801;
    return s1883.length;
};
var string_downcase = function(s1884) {
    if (string_p(s1884) !== false) {
        var if_res802 = rvoid();
    } else {
        var if_res802 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s1884));
    }
    if_res802;
    return s1884.toLowerCase();
};
var string_upcase = function(s1885) {
    if (string_p(s1885) !== false) {
        var if_res803 = rvoid();
    } else {
        var if_res803 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s1885));
    }
    if_res803;
    return s1885.toUpperCase();
};
var substring1886 = function(str81887, start91888, end71889) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str1890 = str81887;
    var start1891 = start91888;
    if (false !== false) {
        var if_res804 = false;
    } else {
        var if_res804 = end71889;
    }
    var end1892 = if_res804;
    if (not(M1.Core.UString.check(str1890)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res808 = null;
    } else {
        if ((start1891 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res807 = null;
        } else {
            if (((end1892 !== false) && (((end1892 < 0) || (end1892 > str1890.length)) || (end1892 < start1891))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res806 = null;
            } else {
                if ((end1892 === false) !== false) {
                    end1892 = str1890.length;
                    var if_res805 = null;
                } else {
                    var if_res805 = rvoid();
                }
                var if_res806 = if_res805;
            }
            var if_res807 = if_res806;
        }
        var if_res808 = if_res807;
    }
    if_res808;
    return str1890.substring(start1891, end1892);
};
var cl809 = function(str1893, start1894) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring1886(str1893, start1894, false);
};
var cl810 = function(str1895, start1896, end71897) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return substring1886(str1895, start1896, end71897);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam811 = {
        '2': cl809,
        '3': cl810
    } [arguments.length];
    if (fixed_lam811 !== undefined) {
        return fixed_lam811.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str1898, sep1899) {
    if (string_p(str1898) !== false) {
        var if_res812 = rvoid();
    } else {
        var if_res812 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str1898));
    }
    if_res812;
    if ((function(v1900) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v1900) || regexp_p(v1900);
        })(sep1899) !== false) {
        var if_res813 = rvoid();
    } else {
        var if_res813 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep1899));
    }
    if_res813;
    return M1.Core.Pair.listFromArray(str1898.split(sep1899));
};
var string_set_bang_ = function(str1901, k1902, char1903) {
    if ((function(v1904) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return string_p(v1904) && (function(v1905) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return not(immutable_p(v1905));
            })(v1904);
        })(str1901) !== false) {
        var if_res814 = rvoid();
    } else {
        var if_res814 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str1901));
    }
    if_res814;
    if (exact_nonnegative_integer_p(k1902) !== false) {
        var if_res815 = rvoid();
    } else {
        var if_res815 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k1902));
    }
    if_res815;
    if (char_p(char1903) !== false) {
        var if_res816 = rvoid();
    } else {
        var if_res816 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char1903));
    }
    if_res816;
    if (str1901.isValidIndex(k1902) !== false) {
        var if_res817 = str1901.setCharAt(k1902, char1903);
    } else {
        var if_res817 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str1901, str1901.length, k1902));
    }
    return if_res817;
};
var char_p = function(c1906) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Char.check(c1906);
};
var char__gt_integer = function(c1907) {
    if (char_p(c1907) !== false) {
        var if_res818 = rvoid();
    } else {
        var if_res818 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c1907));
    }
    if_res818;
    return M1.Core.Char.charToInteger(c1907);
};
var integer__gt_char = function(k1908) {
    if (exact_nonnegative_integer_p(k1908) !== false) {
        var if_res819 = rvoid();
    } else {
        var if_res819 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k1908));
    }
    if_res819;
    return M1.Core.Char.integerToChar(k1908);
};
var char_utf_8_length = function(c1909) {
    if (char_p(c1909) !== false) {
        var if_res820 = rvoid();
    } else {
        var if_res820 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c1909));
    }
    if_res820;
    return M1.Core.Char.charUtf8Length(c1909);
};
var char_upcase = function(c1910) {
    if (char_p(c1910) !== false) {
        var if_res821 = rvoid();
    } else {
        var if_res821 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c1910));
    }
    if_res821;
    return M1.Core.Char.upcase(c1910);
};
var char_downcase = function(c1911) {
    if (char_p(c1911) !== false) {
        var if_res822 = rvoid();
    } else {
        var if_res822 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c1911));
    }
    if_res822;
    return M1.Core.Char.downcase(c1911);
};
var char_alphabetic_p = function(c1912) {
    if (char_p(c1912) !== false) {
        var if_res823 = rvoid();
    } else {
        var if_res823 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c1912));
    }
    if_res823;
    return M1.Core.Char.isAlphabetic(c1912);
};
var char_lower_case_p = function(c1913) {
    if (char_p(c1913) !== false) {
        var if_res824 = rvoid();
    } else {
        var if_res824 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c1913));
    }
    if_res824;
    return M1.Core.Char.isLowerCase(c1913);
};
var char_upper_case_p = function(c1914) {
    if (char_p(c1914) !== false) {
        var if_res825 = rvoid();
    } else {
        var if_res825 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c1914));
    }
    if_res825;
    return M1.Core.Char.isUpperCase(c1914);
};
var char_title_case_p = function(c1915) {
    if (char_p(c1915) !== false) {
        var if_res826 = rvoid();
    } else {
        var if_res826 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c1915));
    }
    if_res826;
    return M1.Core.Char.isTitleCase(c1915);
};
var char_numeric_p = function(c1916) {
    if (char_p(c1916) !== false) {
        var if_res827 = rvoid();
    } else {
        var if_res827 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c1916));
    }
    if_res827;
    return M1.Core.Char.isNumeric(c1916);
};
var char_symbolic_p = function(c1917) {
    if (char_p(c1917) !== false) {
        var if_res828 = rvoid();
    } else {
        var if_res828 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c1917));
    }
    if_res828;
    return M1.Core.Char.isSymbolic(c1917);
};
var char_punctuation_p = function(c1918) {
    if (char_p(c1918) !== false) {
        var if_res829 = rvoid();
    } else {
        var if_res829 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c1918));
    }
    if_res829;
    return M1.Core.Char.isPunctuation(c1918);
};
var char_graphic_p = function(c1919) {
    if (char_p(c1919) !== false) {
        var if_res830 = rvoid();
    } else {
        var if_res830 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c1919));
    }
    if_res830;
    return M1.Core.Char.isGraphic(c1919);
};
var char_whitespace_p = function(c1920) {
    if (char_p(c1920) !== false) {
        var if_res831 = rvoid();
    } else {
        var if_res831 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c1920));
    }
    if_res831;
    return M1.Core.Char.isWhitespace(c1920);
};
var char_blank_p = function(c1921) {
    if (char_p(c1921) !== false) {
        var if_res832 = rvoid();
    } else {
        var if_res832 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c1921));
    }
    if_res832;
    return M1.Core.Char.isBlank(c1921);
};
var char_iso_control_p = function(c1922) {
    if (char_p(c1922) !== false) {
        var if_res833 = rvoid();
    } else {
        var if_res833 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c1922));
    }
    if_res833;
    return M1.Core.Char.isIsoControl(c1922);
};
var char_lt__p = function(a1923, b1924) {
    if (char_p(a1923) !== false) {
        var if_res834 = rvoid();
    } else {
        var if_res834 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a1923));
    }
    if_res834;
    if (char_p(b1924) !== false) {
        var if_res835 = rvoid();
    } else {
        var if_res835 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b1924));
    }
    if_res835;
    return a1923 < b1924;
};
var char_lt__eq__p = function(a1925, b1926) {
    if (char_p(a1925) !== false) {
        var if_res836 = rvoid();
    } else {
        var if_res836 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a1925));
    }
    if_res836;
    if (char_p(b1926) !== false) {
        var if_res837 = rvoid();
    } else {
        var if_res837 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b1926));
    }
    if_res837;
    return a1925 <= b1926;
};
var char_gt__p = function(a1927, b1928) {
    if (char_p(a1927) !== false) {
        var if_res838 = rvoid();
    } else {
        var if_res838 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a1927));
    }
    if_res838;
    if (char_p(b1928) !== false) {
        var if_res839 = rvoid();
    } else {
        var if_res839 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b1928));
    }
    if_res839;
    return a1927 > b1928;
};
var char_gt__eq__p = function(a1929, b1930) {
    if (char_p(a1929) !== false) {
        var if_res840 = rvoid();
    } else {
        var if_res840 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a1929));
    }
    if_res840;
    if (char_p(b1930) !== false) {
        var if_res841 = rvoid();
    } else {
        var if_res841 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b1930));
    }
    if_res841;
    return a1929 >= b1930;
};
var char_eq__p = function(a1931, b1932) {
    if (char_p(a1931) !== false) {
        var if_res842 = rvoid();
    } else {
        var if_res842 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a1931));
    }
    if_res842;
    if (char_p(b1932) !== false) {
        var if_res843 = rvoid();
    } else {
        var if_res843 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b1932));
    }
    if_res843;
    return M1.Core.Char.eq(a1931, b1932);
};
var box = M1.Core.Box.make;
var unbox = function(v1933) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1933.get();
};
var set_box_bang_ = function(b1934, v1935) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b1934.set(v1935);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc1936, old1937, new1938) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (eq_p(old1937, unbox(loc1936)) && set_box_bang_(loc1936, new1938)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v1939) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1939.get();
};
var set_box_times__bang_ = function(b1940, v1941) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b1940.set(v1941);
};
var unbox_times_ = function(v1942) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v1942.get();
};
var let_result844 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result844.getAt(0);
var evt_p = let_result844.getAt(1);
var prop_checked_procedure = make_struct_type_property($rjs_core.UString.make("prop:checked-procedure")).getAt(0);
var prop_impersonator_of = make_struct_type_property($rjs_core.UString.make("prop:impersonator-of")).getAt(0);
var prop_arity_string = make_struct_type_property($rjs_core.UString.make("prop:arity-string")).getAt(0);
var prop_incomplete_arity = make_struct_type_property($rjs_core.UString.make("prop:incomplete-arity")).getAt(0);
var prop_method_arity_error = make_struct_type_property($rjs_core.UString.make("prop:method-arity-error")).getAt(0);
var prop_exn_srclocs = make_struct_type_property($rjs_core.UString.make("prop:exn:srclocs")).getAt(0);
var prop_authentic = make_struct_type_property($rjs_core.UString.make("prop:authentic")).getAt(0);
var prop_serialize = make_struct_type_property($rjs_core.UString.make("prop:serialize")).getAt(0);
var prop_custom_write = make_struct_type_property($rjs_core.UString.make("prop:custom-write")).getAt(0);
var prop_sealed = make_struct_type_property($rjs_core.UString.make("prop:sealed")).getAt(0);
var prop_object_name = make_struct_type_property($rjs_core.UString.make("prop:object-name")).getAt(0);
var prop_procedure = M1.Core.Struct.propProcedure;
var prop_equal_plus_hash = M1.Core.Struct.propEqualHash;
var equal_hash_code = function(v1943) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 0;
};
var equal_secondary_hash_code = function(v1944) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 1;
};
var error = M1.Kernel.error;
var raise_argument_error = M1.Kernel.argerror;
var raise_arguments_error = M1.Kernel.argserror;
var raise_result_error = M1.Kernel.resulterror;
var raise_mismatch_error = M1.Kernel.mismatcherror;
var bytes_p = function(bs1945) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Bytes.check(bs1945);
};
var make_bytes1946 = function(len111947, b101948) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var len1949 = len111947;
    if (false !== false) {
        var if_res845 = 0;
    } else {
        var if_res845 = b101948;
    }
    var b1950 = if_res845;
    return M1.Core.Bytes.make(len1949, b1950);
};
var cl846 = function(len1951) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes1946(len1951, 0);
};
var cl847 = function(len1952, b101953) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return make_bytes1946(len1952, b101953);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam848 = {
        '1': cl846,
        '2': cl847
    } [arguments.length];
    if (fixed_lam848 !== undefined) {
        return fixed_lam848.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs1954, i1955) {
    if (bytes_p(bs1954) !== false) {
        var if_res849 = rvoid();
    } else {
        var if_res849 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs1954));
    }
    if_res849;
    if (integer_p(i1955) !== false) {
        var if_res850 = rvoid();
    } else {
        var if_res850 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i1955));
    }
    if_res850;
    if ((__lt_(i1955, 0) || __gt_(i1955, bs1954.length)) !== false) {
        var if_res851 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs1954, bs1954.length, i1955));
    } else {
        var if_res851 = M1.Core.Bytes.ref(bs1954, i1955);
    }
    return if_res851;
};
var bytes_set_bang_ = function(bs1956, i1957, b1958) {
    if (bytes_p(bs1956) !== false) {
        var if_res852 = rvoid();
    } else {
        var if_res852 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs1956));
    }
    if_res852;
    if (integer_p(i1957) !== false) {
        var if_res853 = rvoid();
    } else {
        var if_res853 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i1957));
    }
    if_res853;
    if (integer_p(b1958) !== false) {
        var if_res854 = rvoid();
    } else {
        var if_res854 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b1958));
    }
    if_res854;
    if ((__lt_(i1957, 0) || __gt_(i1957, bs1956.length)) !== false) {
        var if_res855 = raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs1956, bs1956.length, i1957));
    } else {
        var if_res855 = M1.Core.Bytes.set(bs1956, i1957, b1958);
    }
    return if_res855;
};
var bytes_append = function() {
    var bss1959 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss1959);
};
var bytes__gt_string_by_utf_8 = function(bs1960) {
    if (bytes_p(bs1960) !== false) {
        var if_res856 = rvoid();
    } else {
        var if_res856 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs1960));
    }
    if_res856;
    return M1.Core.UString.fromBytesUtf8(bs1960);
};
var bytes__gt_string_by_latin_1 = function(bs1961) {
    if (bytes_p(bs1961) !== false) {
        var if_res857 = rvoid();
    } else {
        var if_res857 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs1961));
    }
    if_res857;
    return M1.Core.UString.fromBytesLatin1(bs1961);
};
var string__gt_bytes_by_utf_8 = function(str1962) {
    if (string_p(str1962) !== false) {
        var if_res858 = rvoid();
    } else {
        var if_res858 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str1962));
    }
    if_res858;
    return M1.Core.UString.toBytesUtf8(str1962);
};
var string__gt_bytes_by_locale1963 = function(str151964, err_byte121965, start131966, end141967) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var str1968 = str151964;
    if (false !== false) {
        var if_res859 = true;
    } else {
        var if_res859 = err_byte121965;
    }
    var err_byte1969 = if_res859;
    if (false !== false) {
        var if_res860 = 0;
    } else {
        var if_res860 = start131966;
    }
    var start1970 = if_res860;
    if (false !== false) {
        var if_res861 = 0;
    } else {
        var if_res861 = end141967;
    }
    var end1971 = if_res861;
    return M1.Core.UString.toBytesUtf8(str1968);
};
var cl862 = function(str1972) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1963(str1972, true, 0, 0);
};
var cl863 = function(str1973, err_byte1974, start1975, end141976) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1963(str1973, err_byte1974, start1975, end141976);
};
var cl864 = function(str1977, err_byte1978, start131979) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1963(str1977, err_byte1978, start131979, 0);
};
var cl865 = function(str1980, err_byte121981) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return string__gt_bytes_by_locale1963(str1980, err_byte121981, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam866 = {
        '1': cl862,
        '4': cl863,
        '3': cl864,
        '2': cl865
    } [arguments.length];
    if (fixed_lam866 !== undefined) {
        return fixed_lam866.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr11982, bstr21983) {
    if (bytes_p(bstr11982) !== false) {
        var if_res867 = rvoid();
    } else {
        var if_res867 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr11982));
    }
    if_res867;
    if (bytes_p(bstr21983) !== false) {
        var if_res868 = rvoid();
    } else {
        var if_res868 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr21983));
    }
    if_res868;
    return M1.Core.Bytes.eq(bstr11982, bstr21983);
};
var bytes_lt__p = function(bstr11984, bstr21985) {
    if (bytes_p(bstr11984) !== false) {
        var if_res869 = rvoid();
    } else {
        var if_res869 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr11984));
    }
    if_res869;
    if (bytes_p(bstr21985) !== false) {
        var if_res870 = rvoid();
    } else {
        var if_res870 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr21985));
    }
    if_res870;
    return M1.Core.Bytes.lt(bstr11984, bstr21985);
};
var bytes_gt__p = function(bstr11986, bstr21987) {
    if (bytes_p(bstr11986) !== false) {
        var if_res871 = rvoid();
    } else {
        var if_res871 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr11986));
    }
    if_res871;
    if (bytes_p(bstr21987) !== false) {
        var if_res872 = rvoid();
    } else {
        var if_res872 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr21987));
    }
    if_res872;
    return M1.Core.Bytes.gt(bstr11986, bstr21987);
};
var bytes_length = function(bs1988) {
    if (bytes_p(bs1988) !== false) {
        var if_res873 = rvoid();
    } else {
        var if_res873 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs1988));
    }
    if_res873;
    return bs1988.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set1989, key_v1990, none_v1991, prompt_tag1992) {
    var let_result874 = values();
    var mark_set1993 = mark_set1993 || M1.Core.Marks.getContinuationMarks(prompt_tag1992);
    var marks1994 = M1.Core.Marks.getMarks(mark_set1993, key_v1990, prompt_tag1992);
    if (null_p(marks1994) !== false) {
        var if_res875 = none_v1991;
    } else {
        var if_res875 = marks1994.hd;
    }
    return if_res875;
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag1995) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res876 = null;
    } else {
        var if_res876 = rvoid();
    }
    if_res876;
    var let_result877 = values();
    var args1996 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag1995, args1996);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e1997) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e1997));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p1998) {
    if (void_p(p1998) !== false) {
        var if_res878 = rvoid();
    } else {
        print(p1998);
        var if_res878 = newline();
    }
    return if_res878;
});
var port_p = function(p1999) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.check(p1999);
};
var input_port_p = function(p2000) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isInputPort(p2000);
};
var output_port_p = function(p2001) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isOutputPort(p2001);
};
var string_port_p = function(p2002) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.isStringPort(p2002);
};
var open_output_string = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p2003) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Ports.getOutputString(p2003);
};
var print_as_expression = make_parameter(true);
var display2004 = function(datum172005, out162006) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2007 = datum172005;
    if (eq_p(out162006, M4.unsafe_undefined) !== false) {
        var if_res879 = current_output_port();
    } else {
        var if_res879 = out162006;
    }
    var out2008 = if_res879;
    return M1.Core.display(out2008, datum2007);
};
var cl880 = function(datum2009) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2004(datum2009, M4.unsafe_undefined);
};
var cl881 = function(datum2010, out162011) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return display2004(datum2010, out162011);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam882 = {
        '1': cl880,
        '2': cl881
    } [arguments.length];
    if (fixed_lam882 !== undefined) {
        return fixed_lam882.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln2012 = function(datum192013, out182014) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2015 = datum192013;
    if (eq_p(out182014, M4.unsafe_undefined) !== false) {
        var if_res883 = current_output_port();
    } else {
        var if_res883 = out182014;
    }
    var out2016 = if_res883;
    display(datum2015, out2016);
    return newline(out2016);
};
var cl884 = function(datum2017) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2012(datum2017, M4.unsafe_undefined);
};
var cl885 = function(datum2018, out182019) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return displayln2012(datum2018, out182019);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam886 = {
        '1': cl884,
        '2': cl885
    } [arguments.length];
    if (fixed_lam886 !== undefined) {
        return fixed_lam886.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write2020 = function(datum212021, out202022) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2023 = datum212021;
    if (eq_p(out202022, M4.unsafe_undefined) !== false) {
        var if_res887 = current_output_port();
    } else {
        var if_res887 = out202022;
    }
    var out2024 = if_res887;
    return M1.Core.write(out2024, datum2023);
};
var cl888 = function(datum2025) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2020(datum2025, M4.unsafe_undefined);
};
var cl889 = function(datum2026, out202027) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return write2020(datum2026, out202027);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam890 = {
        '1': cl888,
        '2': cl889
    } [arguments.length];
    if (fixed_lam890 !== undefined) {
        return fixed_lam890.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln2028 = function(datum232029, out222030) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2031 = datum232029;
    if (eq_p(out222030, M4.unsafe_undefined) !== false) {
        var if_res891 = current_output_port();
    } else {
        var if_res891 = out222030;
    }
    var out2032 = if_res891;
    write(datum2031, out2032);
    return newline(out2032);
};
var cl892 = function(datum2033) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2028(datum2033, M4.unsafe_undefined);
};
var cl893 = function(datum2034, out222035) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return writeln2028(datum2034, out222035);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam894 = {
        '1': cl892,
        '2': cl893
    } [arguments.length];
    if (fixed_lam894 !== undefined) {
        return fixed_lam894.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print2036 = function(datum262037, out242038, quote_depth252039) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2040 = datum262037;
    if (eq_p(out242038, M4.unsafe_undefined) !== false) {
        var if_res895 = current_output_port();
    } else {
        var if_res895 = out242038;
    }
    var out2041 = if_res895;
    if (false !== false) {
        var if_res896 = 0;
    } else {
        var if_res896 = quote_depth252039;
    }
    var quote_depth2042 = if_res896;
    return M1.Core.print(out2041, datum2040, print_as_expression(), quote_depth2042);
};
var cl897 = function(datum2043) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2036(datum2043, M4.unsafe_undefined, 0);
};
var cl898 = function(datum2044, out2045, quote_depth252046) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2036(datum2044, out2045, quote_depth252046);
};
var cl899 = function(datum2047, out242048) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return print2036(datum2047, out242048, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam900 = {
        '1': cl897,
        '3': cl898,
        '2': cl899
    } [arguments.length];
    if (fixed_lam900 !== undefined) {
        return fixed_lam900.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println2049 = function(datum282050, out272051) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var datum2052 = datum282050;
    if (eq_p(out272051, M4.unsafe_undefined) !== false) {
        var if_res901 = current_output_port();
    } else {
        var if_res901 = out272051;
    }
    var out2053 = if_res901;
    print(datum2052, out2053);
    return newline(out2053);
};
var cl902 = function(datum2054) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2049(datum2054, M4.unsafe_undefined);
};
var cl903 = function(datum2055, out272056) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return println2049(datum2055, out272056);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam904 = {
        '1': cl902,
        '2': cl903
    } [arguments.length];
    if (fixed_lam904 !== undefined) {
        return fixed_lam904.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline2057 = function(out292058) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (eq_p(out292058, M4.unsafe_undefined) !== false) {
        var if_res905 = current_output_port();
    } else {
        var if_res905 = out292058;
    }
    var out2059 = if_res905;
    return display($rjs_core.UString.make("\n"), out2059);
};
var cl906 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2057(M4.unsafe_undefined);
};
var cl907 = function(out292060) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return newline2057(out292060);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam908 = {
        '0': cl906,
        '1': cl907
    } [arguments.length];
    if (fixed_lam908 !== undefined) {
        return fixed_lam908.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var current_inspector = function() {
    return true;
};
var current_code_inspector = function() {
    return true;
};
var make_inspector = $rjs_core.attachProcedureArity(function(..._2061909) {
    var _2061 = $rjs_core.Pair.listFromArray(_2061909);
    return false;
});
var check_method = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var random = M1.Kernel.random;
var current_seconds = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.floor(Date.now() / 1000);
};
var object_name = function(fn2062) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return fn2062.name;
};
var unquoted_printing_string = function(s2063) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s2063;
};
var error_print_width = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return 42;
};
var error_value__gt_string_handler = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(x2064, n2065) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res910 = null;
        } else {
            var if_res910 = rvoid();
        }
        if_res910;
        return $rjs_core.UString.make("str");
    };
};
var procedure_extract_target = function(f2066) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var regexp_p = function(v2067) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.Core.Regexp.check(v2067);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str2068) {
    if (string_p(str2068) !== false) {
        var if_res911 = rvoid();
    } else {
        var if_res911 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str2068));
    }
    if_res911;
    return M1.Core.Regexp.fromString(str2068);
};
var pregexp = regexp;
var byte_regexp = function(bs2069) {
    if (bytes_p(bs2069) !== false) {
        var if_res912 = rvoid();
    } else {
        var if_res912 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs2069));
    }
    if_res912;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs2069));
};
var byte_pregexp = byte_regexp;
var regexp_match2070 = function(pattern322071, input332072, start_pos302073, end_pos312074) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2075 = pattern322071;
    var input2076 = input332072;
    if (false !== false) {
        var if_res913 = 0;
    } else {
        var if_res913 = start_pos302073;
    }
    var start_pos2077 = if_res913;
    if (false !== false) {
        var if_res914 = false;
    } else {
        var if_res914 = end_pos312074;
    }
    var end_pos2078 = if_res914;
    return M1.Core.Regexp.match(pattern2075, input2076, start_pos2077, end_pos2078);
};
var cl915 = function(pattern2079, input2080) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2070(pattern2079, input2080, 0, false);
};
var cl916 = function(pattern2081, input2082, start_pos2083, end_pos312084) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2070(pattern2081, input2082, start_pos2083, end_pos312084);
};
var cl917 = function(pattern2085, input2086, start_pos302087) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match2070(pattern2085, input2086, start_pos302087, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam918 = {
        '2': cl915,
        '4': cl916,
        '3': cl917
    } [arguments.length];
    if (fixed_lam918 !== undefined) {
        return fixed_lam918.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p2088 = function(pattern362089, input372090, start_pos342091, end_pos352092) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var pattern2093 = pattern362089;
    var input2094 = input372090;
    if (false !== false) {
        var if_res919 = 0;
    } else {
        var if_res919 = start_pos342091;
    }
    var start_pos2095 = if_res919;
    if (false !== false) {
        var if_res920 = false;
    } else {
        var if_res920 = end_pos352092;
    }
    var end_pos2096 = if_res920;
    if (M1.Core.Regexp.match(pattern2093, input2094, start_pos2095, end_pos2096) !== false) {
        var if_res921 = true;
    } else {
        var if_res921 = false;
    }
    return if_res921;
};
var cl922 = function(pattern2097, input2098) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2088(pattern2097, input2098, 0, false);
};
var cl923 = function(pattern2099, input2100, start_pos2101, end_pos352102) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2088(pattern2099, input2100, start_pos2101, end_pos352102);
};
var cl924 = function(pattern2103, input2104, start_pos342105) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return regexp_match_p2088(pattern2103, input2104, start_pos342105, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam925 = {
        '2': cl922,
        '4': cl923,
        '3': cl924
    } [arguments.length];
    if (fixed_lam925 !== undefined) {
        return fixed_lam925.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result926 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_2106 = let_result926.getAt(0);
var make_2107 = let_result926.getAt(1);
var __p2108 = let_result926.getAt(2);
var __ref2109 = let_result926.getAt(3);
var __set_bang_2110 = let_result926.getAt(4);
var let_result927 = values(struct_2106, make_2107, __p2108, make_struct_field_accessor(__ref2109, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result927.getAt(0);
var make_arity_at_least = let_result927.getAt(1);
var kernel_arity_at_least_p = let_result927.getAt(2);
var kernel_arity_at_least_value = let_result927.getAt(3);
var procedure_p = function(f2111) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return typeof(f2111) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p2112) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_p(p2112);
};
var arity_at_least_value = function(p2113) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kernel_arity_at_least_value(p2113);
};
var procedure_arity_includes_p = function(fn2114, n2115) {
    var ar2116 = procedure_arity(fn2114);
    if (kernel_arity_at_least_p(ar2116) !== false) {
        var if_res929 = __lt__eq_(kernel_arity_at_least_value(ar2116), n2115);
    } else {
        if (list_p(ar2116) !== false) {
            var if_res928 = member(n2115, ar2116);
        } else {
            var if_res928 = n2115 === ar2116;
        }
        var if_res929 = if_res928;
    }
    return if_res929;
};
var procedure_arity = function(fn2117) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (Array.isArray(fn2117.__rjs_arityValue) !== false) {
        if ((fn2117.__rjs_arityValue.length === 1) !== false) {
            var if_res930 = fn2117.__rjs_arityValue[0];
        } else {
            var if_res930 = M1.Core.Pair.listFromArray(fn2117.__rjs_arityValue);
        }
        var if_res932 = if_res930;
    } else {
        if ((fn2117.__rjs_arityValue === undefined) !== false) {
            var if_res931 = fn2117.length;
        } else {
            var if_res931 = make_arity_at_least(fn2117.__rjs_arityValue || fn2117.length);
        }
        var if_res932 = if_res931;
    }
    return if_res932;
};
var procedure_arity_p = function(v2118) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (exact_nonnegative_integer_p(v2118) || kernel_arity_at_least_p(v2118)) || ormap(function(v2119) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return exact_nonnegative_integer_p(v2119) || kernel_arity_at_least_p(v2119);
    }, v2118);
};
var procedure_arity_mask = function(fn2120) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ar2121 = procedure_arity(fn2120);
    if (integer_p(ar2121) !== false) {
        var if_res934 = arithmetic_shift(1, ar2121);
    } else {
        if (kernel_arity_at_least_p(ar2121) !== false) {
            var if_res933 = arithmetic_shift(-1, kernel_arity_at_least_value(ar2121));
        } else {
            var if_res933 = rvoid();
        }
        var if_res934 = if_res933;
    }
    return if_res934;
};
var checked_procedure_check_and_extract = function(type2122, v2123, proc2124, v12125, v22126) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((M1.Core.Struct.check(v2123, type2122) && type2122._findProperty(prop_checked_procedure)) !== false) {
        var fn2127 = v2123.getField(0);
        var r12128 = fn2127(v12125, v22126);
        if (r12128 !== false) {
            var if_res935 = v2123.getField(1);
        } else {
            var if_res935 = proc2124(v2123, v12125, v22126);
        }
        var if_res936 = if_res935;
    } else {
        var if_res936 = proc2124(v2123, v12125, v22126);
    }
    return if_res936;
};
var gensym = function(sym2129) {
    var s2130 = (sym2129 && sym2129.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s2130 + __count);
};
var eval_jit_enabled = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_constant_p = function(x2131) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference_from_unsafe_p = function(x2132) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_module_source = function(x2133) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var variable_reference__gt_resolved_module_path = function(x2134) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var module_name_fixup = function(x2135) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var inspector_p = function(p2136) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return true;
};
var make_thread_cell = function(p2137) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p2137;
};
var __count = 1000;
var system_type2138 = function(mode382139) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (false !== false) {
        var if_res937 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res937 = mode382139;
    }
    var mode2140 = if_res937;
    var tmp2141 = mode2140;
    if (equal_p(tmp2141, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        var if_res941 = $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp2141, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            var if_res940 = $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp2141, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                var if_res939 = $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp2141, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    var if_res938 = M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    var if_res938 = false;
                }
                var if_res939 = if_res938;
            }
            var if_res940 = if_res939;
        }
        var if_res941 = if_res940;
    }
    return if_res941;
};
var cl942 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2138($rjs_core.PrimitiveSymbol.make("os"));
};
var cl943 = function(mode382142) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return system_type2138(mode382142);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam944 = {
        '0': cl942,
        '1': cl943
    } [arguments.length];
    if (fixed_lam944 !== undefined) {
        return fixed_lam944.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind2143) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("");
};
var build_path = function(base2144) {
    return base2144;
};
var make_weak_hash = make_hash;
var make_weak_hasheqv = make_hasheqv;
var make_weak_hasheq = make_hasheq;
var current_environment_variables = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return rnull;
};
var environment_variables_ref = function(e2145, n2146) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var environment_variables_set_bang_2147 = function(e402148, n412149, v422150, fail392151) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var e2152 = e402148;
    var n2153 = n412149;
    var v2154 = v422150;
    if (false !== false) {
        var if_res945 = false;
    } else {
        var if_res945 = fail392151;
    }
    var fail2155 = if_res945;
    return rvoid();
};
var cl946 = function(e2156, n2157, v2158) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2147(e2156, n2157, v2158, false);
};
var cl947 = function(e2159, n2160, v2161, fail392162) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return environment_variables_set_bang_2147(e2159, n2160, v2161, fail392162);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam948 = {
        '3': cl946,
        '4': cl947
    } [arguments.length];
    if (fixed_lam948 !== undefined) {
        return fixed_lam948.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v2163) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var path_p = M1.Core.Path.check;
var version = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return $rjs_core.UString.make("99.0");
};
var string__gt_path = M1.Core.Path.fromString;
var dynamic_wind = function(f2164, g2165, h2166) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    f2164();
    g2165();
    return h2166();
};
var datum_intern_literal = function(v2167) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v2167;
};
var make_semaphore = function(x2168) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2168;
};
var semaphore_peek_evt = function(x2169) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return x2169;
};
var call_with_semaphore = function(s2170, f2171) {
    return false;
};
var syntax_source = M1.Core.Correlated.syntaxSource;
var syntax_line = M1.Core.Correlated.syntaxLine;
var syntax_column = M1.Core.Correlated.syntaxColumn;
var syntax_position = M1.Core.Correlated.syntaxPosition;
var syntax_span = M1.Core.Correlated.syntaxSpan;
var __rjs_quoted__ = {};
__rjs_quoted__.length = length;
__rjs_quoted__.kernel_arity_at_least_value = kernel_arity_at_least_value;
__rjs_quoted__.null_p = null_p;
__rjs_quoted__.struct_kernel_arity_at_least = struct_kernel_arity_at_least;
__rjs_quoted__.make_struct_type_property = make_struct_type_property;
__rjs_quoted__.cdr = cdr;
__rjs_quoted__.make_arity_at_least = make_arity_at_least;
__rjs_quoted__.car = car;
__rjs_quoted__.__plus_ = __plus_;
__rjs_quoted__.apply = apply;
__rjs_quoted__.kernel_arity_at_least_p = kernel_arity_at_least_p;
export {
    __rjs_quoted__,
    equal_p,
    eqv_p,
    eq_p,
    values,
    call_with_values,
    immutable_p,
    rvoid,
    void_p,
    number_p,
    real_p,
    integer_p,
    complex_p,
    zero_p,
    positive_p,
    negative_p,
    add1,
    sub1,
    quotient,
    even_p,
    odd_p,
    exact_nonnegative_integer_p,
    exact_integer_p,
    exact_p,
    inexact_p,
    single_flonum_available_p,
    single_flonum_p,
    real__gt_single_flonum,
    __times_,
    __by_,
    __plus_,
    __,
    __lt_,
    __gt_,
    __lt__eq_,
    __gt__eq_,
    __eq_,
    floor,
    abs,
    sin,
    cos,
    tan,
    asin,
    acos,
    atan,
    ceiling,
    round,
    min,
    max,
    log,
    exp,
    expt,
    sqrt,
    sqr,
    truncate,
    remainder,
    number__gt_string,
    arithmetic_shift,
    inexact__gt_exact,
    exact__gt_inexact,
    make_rectangular,
    make_polar,
    real_part,
    imag_part,
    magnitude,
    conjugate,
    angle,
    rational_p,
    numerator,
    denominator,
    bitwise_and,
    bitwise_ior,
    bitwise_xor,
    bitwise_not,
    bitwise_bit_set_p,
    not,
    rfalse,
    rtrue,
    false_p,
    boolean_p,
    car,
    cdr,
    cons,
    pair_p,
    caar,
    cadr,
    cdar,
    cddr,
    cdddr,
    caddr,
    cadddr,
    cddddr,
    rnull,
    list,
    null_p,
    list_p,
    length,
    reverse,
    list_times_,
    append,
    for_each,
    mcons,
    mpair_p,
    mcar,
    mcdr,
    set_mcar_bang_,
    set_mcdr_bang_,
    make_struct_type,
    make_struct_field_accessor,
    make_struct_field_mutator,
    make_struct_type_property,
    check_struct_type,
    struct_type_p,
    struct_type_info,
    vector,
    make_vector,
    vector_p,
    vector_length,
    vector_ref,
    vector_set_bang_,
    vector__gt_list,
    list__gt_vector,
    vector__gt_immutable_vector,
    vector_copy,
    vector_copy_bang_,
    hash,
    hasheqv,
    hasheq,
    make_hash,
    make_hasheqv,
    make_hasheq,
    make_immutable_hash,
    make_immutable_hasheqv,
    make_immutable_hasheq,
    hash_p,
    hash_equal_p,
    hash_eqv_p,
    hash_eq_p,
    hash_weak_p,
    hash_ref,
    hash_has_key_p,
    hash_ref_key,
    hash_set,
    hash_remove,
    hash_map,
    hash_count,
    hash_remove_bang_,
    hash_set_bang_,
    hash_iterate_first,
    hash_iterate_next,
    hash_iterate_key,
    hash_iterate_value,
    hash_iterate_key_plus_value,
    hash_iterate_pair,
    hash_keys_subset_p,
    hash_union,
    hash_strong_p,
    apply,
    map,
    foldl,
    _foldr,
    foldr,
    range,
    remove,
    filter,
    ormap,
    andmap,
    member,
    compose,
    compose1,
    list_ref,
    build_list,
    make_list,
    flatten,
    assoc,
    memv,
    memq,
    memf,
    findf,
    assv,
    assq,
    assf,
    alt_reverse,
    string,
    string_append,
    string_ref,
    string_eq__p,
    string_lt__p,
    string_lt__eq__p,
    string_gt__p,
    string_gt__eq__p,
    string_p,
    fprintf,
    eprintf,
    printf,
    format,
    symbol_p,
    keyword_p,
    make_string,
    list__gt_string,
    string__gt_list,
    string__gt_immutable_string,
    symbol__gt_string,
    string__gt_symbol,
    string__gt_uninterned_symbol,
    string__gt_unreadable_symbol,
    string__gt_number,
    symbol_interned_p,
    symbol_eq__p,
    symbol_lt__p,
    keyword_lt__p,
    string_length,
    string_downcase,
    string_upcase,
    substring,
    string_split,
    string_set_bang_,
    char_p,
    char__gt_integer,
    integer__gt_char,
    char_utf_8_length,
    char_upcase,
    char_downcase,
    char_alphabetic_p,
    char_lower_case_p,
    char_upper_case_p,
    char_title_case_p,
    char_numeric_p,
    char_symbolic_p,
    char_punctuation_p,
    char_graphic_p,
    char_whitespace_p,
    char_blank_p,
    char_iso_control_p,
    char_lt__p,
    char_lt__eq__p,
    char_gt__p,
    char_gt__eq__p,
    char_eq__p,
    box,
    unbox,
    set_box_bang_,
    box_p,
    box_cas_bang_,
    box_immutable,
    make_weak_box,
    weak_box_value,
    set_box_times__bang_,
    unbox_times_,
    evt_p,
    prop_evt,
    prop_checked_procedure,
    prop_impersonator_of,
    prop_arity_string,
    prop_incomplete_arity,
    prop_method_arity_error,
    prop_exn_srclocs,
    prop_authentic,
    prop_serialize,
    prop_custom_write,
    prop_sealed,
    prop_object_name,
    prop_procedure,
    prop_equal_plus_hash,
    equal_hash_code,
    equal_secondary_hash_code,
    error,
    raise_argument_error,
    raise_arguments_error,
    raise_result_error,
    raise_mismatch_error,
    bytes_p,
    make_bytes,
    bytes_ref,
    bytes_set_bang_,
    bytes_append,
    bytes__gt_string_by_utf_8,
    bytes__gt_string_by_latin_1,
    string__gt_bytes_by_utf_8,
    string__gt_bytes_by_locale,
    bytes_eq__p,
    bytes_lt__p,
    bytes_gt__p,
    bytes_length,
    current_continuation_marks,
    continuation_mark_set__gt_list,
    continuation_mark_set_first,
    make_parameter,
    call_with_continuation_prompt,
    abort_current_continuation,
    make_continuation_prompt_tag,
    default_continuation_prompt_tag,
    raise,
    exn_fail_p,
    exn_fail_contract_p,
    exn_fail_contract_arity_p,
    exn_message,
    current_output_port,
    current_input_port,
    current_error_port,
    current_print,
    port_p,
    input_port_p,
    output_port_p,
    string_port_p,
    open_output_string,
    get_output_string,
    print_as_expression,
    display,
    displayln,
    write,
    writeln,
    print,
    println,
    newline,
    current_inspector,
    current_code_inspector,
    make_inspector,
    check_method,
    random,
    current_seconds,
    object_name,
    unquoted_printing_string,
    error_print_width,
    error_value__gt_string_handler,
    procedure_extract_target,
    regexp_p,
    pregexp_p,
    byte_regexp_p,
    byte_pregexp_p,
    regexp,
    pregexp,
    byte_regexp,
    byte_pregexp,
    regexp_match,
    regexp_match_p,
    kernel_arity_at_least_value,
    kernel_arity_at_least_p,
    make_arity_at_least,
    struct_kernel_arity_at_least,
    procedure_p,
    arity_at_least,
    arity_at_least_p,
    arity_at_least_value,
    procedure_arity_includes_p,
    procedure_arity,
    procedure_arity_p,
    procedure_arity_mask,
    checked_procedure_check_and_extract,
    gensym,
    eval_jit_enabled,
    variable_reference_constant_p,
    variable_reference_from_unsafe_p,
    variable_reference__gt_module_source,
    variable_reference__gt_resolved_module_path,
    module_name_fixup,
    inspector_p,
    make_thread_cell,
    system_type,
    find_system_path,
    build_path,
    make_weak_hash,
    make_weak_hasheqv,
    make_weak_hasheq,
    current_environment_variables,
    environment_variables_ref,
    environment_variables_set_bang_,
    prefab_struct_key,
    path_p,
    version,
    string__gt_path,
    dynamic_wind,
    datum_intern_literal,
    make_semaphore,
    semaphore_peek_evt,
    call_with_semaphore,
    syntax_source,
    syntax_line,
    syntax_column,
    syntax_position,
    syntax_span
};