import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
var values = function() {
    var vals72 = M1.Core.argumentsToArray(arguments);
    if ((vals72.length === 1) !== false) {
        var if_res13 = vals72[0];
    } else {
        var if_res13 = M1.Values.make(vals72);
    }
    return if_res13;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    values
};