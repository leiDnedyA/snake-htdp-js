import * as $rjs_core from '../../runtime/core.js';
import * as M0 from "../../runtime/kernel.rkt.js";
import * as M1 from "../../links/racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var js_list__gt_list = function(js_list1412) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return js_list1412.reduce($rjs_core.attachProcedureArity(function(accumulator1413, current_value1414, ..._1415533) {
        if (arguments.length < 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var _1415 = $rjs_core.Pair.listFromArray(_1415533);
        return M0.append(accumulator1413, M0.list(current_value1414));
    }), $rjs_core.Pair.EMPTY);
};
var js_arguments__gt_list = function(arguments1416) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return js_list__gt_list(Array.from(arguments1416));
};
var js_string__gt_symbol = function(str1417) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.string__gt_symbol(M1.js_string__gt_string(str1417));
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    js_arguments__gt_list,
    js_string__gt_symbol,
    js_list__gt_list
};