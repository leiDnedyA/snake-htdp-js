import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a73, b74) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a73 + b74) | 0;
};
var unsafe_fx_ = function(a75, b76) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a75 - b76) | 0;
};
var unsafe_fx_times_ = function(a77, b78) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a77 * b78) | 0;
};
var unsafe_fxquotient = function(a79, b80) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a79 / b80) | 0;
};
var unsafe_fxremainder = function(a81, b82) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a81 % b82) | 0;
};
var unsafe_fxmodulo = function(a83, b84) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var remainder85 = a83 % b84;
    if ((remainder85 >= 0) !== false) {
        var if_res14 = remainder85;
    } else {
        var if_res14 = remainder85 + b84;
    }
    return Math.floor(if_res14);
};
var unsafe_fxabs = function(a86) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Math.abs(a86);
};
var unsafe_fx_eq_ = function(a87, b88) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a87 === b88;
};
var unsafe_fx_lt_ = function(a89, b90) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a89 < b90;
};
var unsafe_fx_lt__eq_ = function(a91, b92) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a91 <= b92;
};
var unsafe_fx_gt_ = function(a93, b94) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a93 > b94;
};
var unsafe_fx_gt__eq_ = function(a95, b96) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a95 >= b96;
};
var unsafe_fxmin = function(a97, b98) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a97 < b98) !== false) {
        var if_res15 = a97;
    } else {
        var if_res15 = b98;
    }
    return if_res15;
};
var unsafe_fxmax = function(a99, b100) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a99 > b100) !== false) {
        var if_res16 = b100;
    } else {
        var if_res16 = a99;
    }
    return if_res16;
};
var unsafe_fl_eq_ = function(a101, b102) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a101 === b102;
};
var unsafe_fl_lt_ = function(a103, b104) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a103 < b104;
};
var unsafe_fl_lt__eq_ = function(a105, b106) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a105 <= b106;
};
var unsafe_fl_gt_ = function(a107, b108) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a107 > b108;
};
var unsafe_fl_gt__eq_ = function(a109, b110) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return a109 >= b110;
};
var unsafe_flmin = function(a111, b112) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a111 < b112) !== false) {
        var if_res17 = a111;
    } else {
        var if_res17 = b112;
    }
    return if_res17;
};
var unsafe_flmax = function(a113, b114) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if ((a113 > b114) !== false) {
        var if_res18 = b114;
    } else {
        var if_res18 = a113;
    }
    return if_res18;
};
var unsafe_fxrshift = function(a115, b116) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a115 >> b116) | 0;
};
var unsafe_fxlshift = function(a117, b118) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a117 << b118) | 0;
};
var unsafe_fxand = function(a119, b120) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a119 && b120) | 0;
};
var unsafe_fxior = function(a121, b122) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a121 || b122) | 0;
};
var unsafe_fxxor = function(a123, b124) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return (a123 ^ b124) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v125) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v125.hd;
};
var unsafe_cdr = function(v126) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v126.tl;
};
var unsafe_mcar = function(v127) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v127.hd;
};
var unsafe_mcdr = function(v128) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v128.tl;
};
var unsafe_set_mcar_bang_ = function(p129, v130) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p129.setCar(v130);
};
var unsafe_set_mcdr_bang_ = function(p131, v132) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return p131.setCdr(v132);
};
var unsafe_cons_list = function(v133, rest134) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Pair.make(v133, rest134);
};
var unsafe_struct_ref = function(v135, k136) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v135._fields[k136];
};
var unsafe_vector_ref = function(v137, k138) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v137.ref(k138);
};
var unsafe_vector_set_bang_ = function(v139, k140, val141) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v139.set(k140, val141);
};
var unsafe_vector_length = function(v142) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v142.length();
};
var unsafe_vector_times__ref = function(v143, k144) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v143.ref(k144);
};
var unsafe_vector_times__set_bang_ = function(v145, k146, val147) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v145.set(k146, val147);
};
var unsafe_vector_times__length = function(v148) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return v148.length();
};
var unsafe_immutable_hash_iterate_first = function(h149) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h149.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h150, i151) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h150.iterateNext(i151);
};
var unsafe_immutable_hash_iterate_key = function(h152, i153) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h152.iterateKey(i153);
};
var unsafe_immutable_hash_iterate_value = function(h154, i155) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h154.iterateValue(i155);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h156, i157) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h156.iterateKeyValue(i157);
};
var unsafe_immutable_hash_iterate_pair = function(h158, i159) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h158.iteratePair(i159);
};
var unsafe_mutable_hash_iterate_first = function(h160) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h160.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h161, i162) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h161.iterateNext(i162);
};
var unsafe_mutable_hash_iterate_key = function(h163, i164) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h163.iterateKey(i164);
};
var unsafe_mutable_hash_iterate_value = function(h165, i166) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h165.iterateValue(i166);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h167, i168) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h167.iterateKeyValue(i168);
};
var unsafe_mutable_hash_iterate_pair = function(h169, i170) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return h169.iteratePair(i170);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b171, v172) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b171.set(v172);
};
var unsafe_place_local_ref = function(b173) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return b173.get();
};
var variable_reference_from_unsafe_p = function(v174) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return false;
};
var unsafe_root_continuation_prompt_tag = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return Core.Marks.defaultContinuationPromptTag();
};
var unsafe_string_length = function(s175) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return s175.length;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    unsafe_fx_plus_,
    unsafe_fx_,
    unsafe_fx_times_,
    unsafe_fxquotient,
    unsafe_fxremainder,
    unsafe_fxmodulo,
    unsafe_fxabs,
    unsafe_fx_eq_,
    unsafe_fx_lt_,
    unsafe_fx_lt__eq_,
    unsafe_fx_gt_,
    unsafe_fx_gt__eq_,
    unsafe_fxmin,
    unsafe_fxmax,
    unsafe_fl_eq_,
    unsafe_fl_lt_,
    unsafe_fl_lt__eq_,
    unsafe_fl_gt_,
    unsafe_fl_gt__eq_,
    unsafe_flmin,
    unsafe_flmax,
    unsafe_fxrshift,
    unsafe_fxlshift,
    unsafe_fxand,
    unsafe_fxior,
    unsafe_fxxor,
    unsafe_fxnot,
    unsafe_car,
    unsafe_cdr,
    unsafe_mcar,
    unsafe_mcdr,
    unsafe_set_mcar_bang_,
    unsafe_set_mcdr_bang_,
    unsafe_cons_list,
    unsafe_struct_ref,
    unsafe_vector_ref,
    unsafe_vector_set_bang_,
    unsafe_vector_length,
    unsafe_vector_times__ref,
    unsafe_vector_times__set_bang_,
    unsafe_vector_times__length,
    unsafe_immutable_hash_iterate_first,
    unsafe_immutable_hash_iterate_next,
    unsafe_immutable_hash_iterate_key,
    unsafe_immutable_hash_iterate_value,
    unsafe_immutable_hash_iterate_key_plus_value,
    unsafe_immutable_hash_iterate_pair,
    unsafe_mutable_hash_iterate_first,
    unsafe_mutable_hash_iterate_next,
    unsafe_mutable_hash_iterate_key,
    unsafe_mutable_hash_iterate_value,
    unsafe_mutable_hash_iterate_key_plus_value,
    unsafe_mutable_hash_iterate_pair,
    unsafe_undefined,
    unsafe_make_place_local,
    unsafe_place_local_set_bang_,
    unsafe_place_local_ref,
    variable_reference_from_unsafe_p,
    unsafe_root_continuation_prompt_tag,
    unsafe_string_length
};