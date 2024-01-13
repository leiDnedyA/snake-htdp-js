import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/core.rkt.js";
M1.__rjs_quoted__.___declare;
$rjs_core.Keyword.make("cross-phase-persistent");
var reverse = function(l2647) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1323 = M0.rvoid();
    } else {
        if (M0.list_p(l2647) !== false) {
            var if_res1322 = M0.rvoid();
        } else {
            var if_res1322 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), l2647);
        }
        var if_res1323 = if_res1322;
    }
    if_res1323;
    var loop2648 = function(a2649, l2650) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(l2650) !== false) {
            var if_res1324 = a2649;
        } else {
            var if_res1324 = loop2648(M0.cons(M0.car(l2650), a2649), M0.cdr(l2650));
        }
        return if_res1324;
    };
    return loop2648(M0.rnull, l2647);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    reverse as alt_reverse
};