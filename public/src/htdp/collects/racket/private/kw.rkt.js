import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result1325 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result1325.getAt(0);
var keyword_impersonator_p = let_result1325.getAt(1);
var keyword_impersonator_ref = let_result1325.getAt(2);
var keyword_procedure_impersonator_of = function(v2663) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_impersonator_p(v2663) !== false) {
        var if_res1326 = keyword_impersonator_ref(v2663)(v2663);
    } else {
        var if_res1326 = false;
    }
    return if_res1326;
};
var let_result1327 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result1327.getAt(0);
var mk_kw_proc = let_result1327.getAt(1);
var keyword_procedure_p = let_result1327.getAt(2);
var keyword_procedure_ref = let_result1327.getAt(3);
var keyword_procedure_set_bang_ = let_result1327.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result1328 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result1328.getAt(0);
var make_km = let_result1328.getAt(1);
var keyword_method_p = let_result1328.getAt(2);
var km_ref = let_result1328.getAt(3);
var km_set_bang_ = let_result1328.getAt(4);
var generate_arity_string = function(proc2664) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var let_result1329 = procedure_keywords(proc2664);
    var req2665 = let_result1329.getAt(0);
    var allowed2666 = let_result1329.getAt(1);
    var a2667 = M0.procedure_arity(proc2664);
    var keywords_desc2668 = function(opt2670, req2671) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var temp1335 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req2671)) !== false) {
            var if_res1334 = M0.format($rjs_core.UString.make("an ~aargument"), opt2670);
        } else {
            var if_res1334 = M0.format($rjs_core.UString.make("~aarguments"), opt2670);
        }
        if (M0.null_p(M0.cdr(req2671)) !== false) {
            var if_res1333 = $rjs_core.UString.make("");
        } else {
            var if_res1333 = $rjs_core.UString.make("s");
        }
        var tmp2672 = M0.length(req2671);
        if (M0.equal_p(tmp2672, 1) !== false) {
            var if_res1332 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req2671));
        } else {
            if (M0.equal_p(tmp2672, 2) !== false) {
                var if_res1331 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req2671), M0.cadr(req2671));
            } else {
                var loop2673 = function(req2674) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(M0.cdr(req2674)) !== false) {
                        var if_res1330 = M0.format($rjs_core.UString.make(" and ~a"), M0.car(req2674));
                    } else {
                        var if_res1330 = M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req2674), loop2673(M0.cdr(req2674)));
                    }
                    return if_res1330;
                };
                var if_res1331 = loop2673(req2671);
            }
            var if_res1332 = if_res1331;
        }
        return M0.format(temp1335, if_res1334, if_res1333, if_res1332);
    };
    var method_adjust2669 = function(a2675) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var or_part2676 = okm_p(proc2664);
        if (or_part2676 !== false) {
            var if_res1336 = or_part2676;
        } else {
            var if_res1336 = keyword_method_p(proc2664);
        }
        if (if_res1336 !== false) {
            if (M0.zero_p(a2675) !== false) {
                var if_res1337 = 0;
            } else {
                var if_res1337 = M0.sub1(a2675);
            }
            var if_res1338 = if_res1337;
        } else {
            var if_res1338 = a2675;
        }
        return if_res1338;
    };
    if (M0.number_p(a2667) !== false) {
        var a2677 = method_adjust2669(a2667);
        var if_res1345 = M0.format($rjs_core.UString.make("~a"), a2677);
    } else {
        if (M0.arity_at_least_p(a2667) !== false) {
            var a2678 = method_adjust2669(M0.arity_at_least_value(a2667));
            var if_res1344 = M0.format($rjs_core.UString.make("at least ~a"), a2678);
        } else {
            var if_res1344 = $rjs_core.UString.make("a different number");
        }
        var if_res1345 = if_res1344;
    }
    if (M0.null_p(req2665) !== false) {
        var if_res1343 = $rjs_core.UString.make("");
    } else {
        var if_res1343 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2668($rjs_core.UString.make(""), req2665));
    }
    if (allowed2666 !== false) {
        var loop2680 = function(req2681, allowed2682) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(req2681) !== false) {
                var if_res1340 = allowed2682;
            } else {
                if (M0.eq_p(M0.car(req2681), M0.car(allowed2682)) !== false) {
                    var if_res1339 = loop2680(M0.cdr(req2681), M0.cdr(allowed2682));
                } else {
                    var if_res1339 = M0.cons(M0.car(allowed2682), loop2680(req2681, M0.cdr(allowed2682)));
                }
                var if_res1340 = if_res1339;
            }
            return if_res1340;
        };
        var others2679 = loop2680(req2665, allowed2666);
        if (M0.null_p(others2679) !== false) {
            var if_res1341 = $rjs_core.UString.make("");
        } else {
            var if_res1341 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc2668($rjs_core.UString.make("optional "), others2679));
        }
        var if_res1342 = if_res1341;
    } else {
        var if_res1342 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res1345, if_res1343, if_res1342);
};
var let_result1346 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result1346.getAt(0);
var make_optional_keyword_procedure = let_result1346.getAt(1);
var okp_p = let_result1346.getAt(2);
var okp_ref = let_result1346.getAt(3);
var okp_set_bang_ = let_result1346.getAt(4);
var let_result1347 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result1347.getAt(0);
var make_optional_keyword_method = let_result1347.getAt(1);
var okm_p = let_result1347.getAt(2);
var okm_ref = let_result1347.getAt(3);
var okm_set_bang_ = let_result1347.getAt(4);
var let_result1348 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result1348.getAt(0);
var named_keyword_procedure_p = let_result1348.getAt(1);
var keyword_procedure_name_plus_fail = let_result1348.getAt(2);
var keyword_procedure_name_plus_fail_times_ = function(p2683) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var v2684 = keyword_procedure_name_plus_fail(p2683);
    if (M0.vector_p(v2684) !== false) {
        var if_res1349 = v2684;
    } else {
        var if_res1349 = v2684(p2683);
    }
    return if_res1349;
};
var let_result1351 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v2685, info_l2686) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_integer_p(v2685) !== false) {
        var if_res1350 = M0.make_struct_field_accessor(M0.list_ref(info_l2686, 3), v2685);
    } else {
        var if_res1350 = false;
    }
    return if_res1350;
});
var prop_procedure_accessor = let_result1351.getAt(0);
var procedure_accessor_p = let_result1351.getAt(1);
var procedure_accessor_ref = let_result1351.getAt(2);
var let_result1352 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result1352.getAt(0);
var new_procedure_p = let_result1352.getAt(1);
var new_procedure_ref = let_result1352.getAt(2);
var let_result1353 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2687) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kpp_ref(v2687, 0);
})));
var struct_keyword_procedure_impersonator = let_result1353.getAt(0);
var make_kpp = let_result1353.getAt(1);
var keyword_procedure_impersonator_p = let_result1353.getAt(2);
var kpp_ref = let_result1353.getAt(3);
var kpp_set_bang_ = let_result1353.getAt(4);
var let_result1354 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2688) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return kmp_ref(v2688, 0);
})));
var struct_keyword_method_impersonator = let_result1354.getAt(0);
var make_kmp = let_result1354.getAt(1);
var keyword_method_impersonator_p = let_result1354.getAt(2);
var kmp_ref = let_result1354.getAt(3);
var kmp_set_bang_ = let_result1354.getAt(4);
var let_result1355 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2689) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okpp_ref(v2689, 0);
})));
var struct_okpp = let_result1355.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result1355.getAt(1);
var okpp_p = let_result1355.getAt(2);
var okpp_ref = let_result1355.getAt(3);
var okpp_set_bang_ = let_result1355.getAt(4);
var let_result1356 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v2690) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return okmp_ref(v2690, 0);
})));
var struct_okmp = let_result1356.getAt(0);
var make_optional_keyword_method_impersonator = let_result1356.getAt(1);
var okmp_p = let_result1356.getAt(2);
var okmp_ref = let_result1356.getAt(3);
var okmp_set_bang_ = let_result1356.getAt(4);
var let_result1357 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result1357.getAt(0);
var make_kp_by_ae = let_result1357.getAt(1);
var kp_by_ae_p = let_result1357.getAt(2);
var kp_by_ae_ref = let_result1357.getAt(3);
var kp_by_ae_set_bang_ = let_result1357.getAt(4);
var let_result1358 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result1358.getAt(0);
var make_km_by_ae = let_result1358.getAt(1);
var km_by_ae_p = let_result1358.getAt(2);
var km_by_ae_ref = let_result1358.getAt(3);
var km_by_ae_set_bang_ = let_result1358.getAt(4);
var let_result1359 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result1359.getAt(0);
var make_kpi_by_ae = let_result1359.getAt(1);
var kpi_by_ae_p = let_result1359.getAt(2);
var kpi_by_ae_ref = let_result1359.getAt(3);
var kpi_by_ae_set_bang_ = let_result1359.getAt(4);
var let_result1360 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result1360.getAt(0);
var make_kmi_by_ae = let_result1360.getAt(1);
var kmi_by_ae_p = let_result1360.getAt(2);
var kmi_by_ae_ref = let_result1360.getAt(3);
var kmi_by_ae_set_bang_ = let_result1360.getAt(4);
var let_result1361 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2691) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref(r2691, 1), rkp_by_ae_ref(r2691, 2), rkp_by_ae_ref(r2691, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae = let_result1361.getAt(0);
var make_required_keyword_procedure_by_arity_error = let_result1361.getAt(1);
var rkp_by_ae_p = let_result1361.getAt(2);
var rkp_by_ae_ref = let_result1361.getAt(3);
var rkp_by_ae_set_bang_ = let_result1361.getAt(4);
var let_result1362 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2692) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2653(r2692, 1), rkp_by_ae_ref2653(r2692, 2), rkp_by_ae_ref2653(r2692, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2651 = let_result1362.getAt(0);
var make_required_keyword_method_by_arity_error = let_result1362.getAt(1);
var rkp_by_ae_p2652 = let_result1362.getAt(2);
var rkp_by_ae_ref2653 = let_result1362.getAt(3);
var rkp_by_ae_set_bang_2654 = let_result1362.getAt(4);
var let_result1363 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2693) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2657(r2693, 1), rkp_by_ae_ref2657(r2693, 2), rkp_by_ae_ref2657(r2693, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2655 = let_result1363.getAt(0);
var make_required_keyword_procedure_impersonator_by_arity_error = let_result1363.getAt(1);
var rkp_by_ae_p2656 = let_result1363.getAt(2);
var rkp_by_ae_ref2657 = let_result1363.getAt(3);
var rkp_by_ae_set_bang_2658 = let_result1363.getAt(4);
var let_result1364 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator_by_arity_error, 3, 0, false, M0.list(M0.cons(M0.prop_procedure, 0), M0.cons(M0.prop_object_name, 1), M0.cons(prop_named_keyword_procedure, function(r2694) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M0.vector(rkp_by_ae_ref2661(r2694, 1), rkp_by_ae_ref2661(r2694, 2), rkp_by_ae_ref2661(r2694, 0));
})), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2));
var struct_rkp_by_ae2659 = let_result1364.getAt(0);
var make_required_keyword_method_impersonator_by_arity_error = let_result1364.getAt(1);
var rkp_by_ae_p2660 = let_result1364.getAt(2);
var rkp_by_ae_ref2661 = let_result1364.getAt(3);
var rkp_by_ae_set_bang_2662 = let_result1364.getAt(4);
var cl1365 = function(proc2695) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc_name2696 = M0.object_name(proc2695);
    if (M0.procedure_p(proc2695) !== false) {
        var if_res1368 = M0.__rjs_quoted__.procedure_realm(proc2695);
    } else {
        var if_res1368 = false;
    }
    var proc_realm2697 = if_res1368;
    var plain_proc2698 = $rjs_core.attachProcedureArity(function(...args26991369) {
        var args2699 = $rjs_core.Pair.listFromArray(args26991369);
        return M0.apply(proc2695, M0.rnull, M0.rnull, args2699);
    });
    if (M0.procedure_p(proc2695) !== false) {
        var if_res1370 = M0.arithmetic_shift(M0.procedure_arity_mask(proc2695), -2);
    } else {
        var if_res1370 = false;
    }
    var mask2700 = if_res1370;
    if (M0.procedure_p(plain_proc2698) !== false) {
        if (M0.exact_integer_p(mask2700) !== false) {
            if (M0.symbol_p(proc_name2696) !== false) {
                if (M0.symbol_p(proc_realm2697) !== false) {
                    var if_res1371 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2698, mask2700, proc_name2696, proc_realm2697);
                } else {
                    var if_res1371 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2698, mask2700, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res1372 = if_res1371;
            } else {
                var if_res1372 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc2698, mask2700, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res1373 = if_res1372;
        } else {
            var if_res1373 = plain_proc2698;
        }
        var if_res1374 = if_res1373;
    } else {
        var if_res1374 = plain_proc2698;
    }
    return make_keyword_procedure(proc2695, if_res1374);
};
var cl1366 = function(proc2701, plain_proc2702) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2701) !== false) {
        var if_res1375 = M0.procedure_arity_mask(proc2701);
    } else {
        var if_res1375 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res1375), proc2701, M0.rnull, false, plain_proc2702);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1367 = {
        '1': cl1365,
        '2': cl1366
    } [arguments.length];
    if (fixed_lam1367 !== undefined) {
        return fixed_lam1367.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc2703, kws2704, kw_vals2705, normal_args2706, ...normal_argss27071376) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var normal_argss2707 = $rjs_core.Pair.listFromArray(normal_argss27071376);
    var type_error2708 = function(what2709, which2710) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what2709, which2710, proc2703, kws2704, kw_vals2705, normal_args2706, normal_argss2707);
    };
    if (M0.procedure_p(proc2703) !== false) {
        var if_res1377 = M0.rvoid();
    } else {
        var if_res1377 = type_error2708($rjs_core.UString.make("procedure?"), 0);
    }
    if_res1377;
    var loop2711 = function(ks2712) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(ks2712) !== false) {
            var if_res1384 = M0.rvoid();
        } else {
            var or_part2713 = M0.not(M0.pair_p(ks2712));
            if (or_part2713 !== false) {
                var if_res1378 = or_part2713;
            } else {
                var if_res1378 = M0.not(M0.keyword_p(M0.car(ks2712)));
            }
            if (if_res1378 !== false) {
                var if_res1383 = type_error2708($rjs_core.UString.make("(listof keyword?)"), 1);
            } else {
                if (M0.null_p(M0.cdr(ks2712)) !== false) {
                    var if_res1382 = M0.rvoid();
                } else {
                    var or_part2714 = M0.not(M0.pair_p(M0.cdr(ks2712)));
                    if (or_part2714 !== false) {
                        var if_res1379 = or_part2714;
                    } else {
                        var if_res1379 = M0.not(M0.keyword_p(M0.cadr(ks2712)));
                    }
                    if (if_res1379 !== false) {
                        var if_res1381 = loop2711(M0.cdr(ks2712));
                    } else {
                        if (M0.keyword_lt__p(M0.car(ks2712), M0.cadr(ks2712)) !== false) {
                            var if_res1380 = loop2711(M0.cdr(ks2712));
                        } else {
                            var if_res1380 = type_error2708($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                        }
                        var if_res1381 = if_res1380;
                    }
                    var if_res1382 = if_res1381;
                }
                var if_res1383 = if_res1382;
            }
            var if_res1384 = if_res1383;
        }
        return if_res1384;
    };
    loop2711(kws2704);
    if (M0.list_p(kw_vals2705) !== false) {
        var if_res1385 = M0.rvoid();
    } else {
        var if_res1385 = type_error2708($rjs_core.UString.make("list?"), 2);
    }
    if_res1385;
    if (M0.__eq_(M0.length(kws2704), M0.length(kw_vals2705)) !== false) {
        var if_res1386 = M0.rvoid();
    } else {
        var if_res1386 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws2704), $rjs_core.UString.make("value list length"), M0.length(kw_vals2705), $rjs_core.UString.make("keyword list"), kws2704, $rjs_core.UString.make("value list"), kw_vals2705);
    }
    if_res1386;
    var loop2716 = function(normal_argss2717, pos2718) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(M0.cdr(normal_argss2717)) !== false) {
            var l2719 = M0.car(normal_argss2717);
            if (M0.list_p(l2719) !== false) {
                var if_res1387 = l2719;
            } else {
                var if_res1387 = type_error2708($rjs_core.UString.make("list?"), pos2718);
            }
            var if_res1388 = if_res1387;
        } else {
            var if_res1388 = M0.cons(M0.car(normal_argss2717), loop2716(M0.cdr(normal_argss2717), M0.add1(pos2718)));
        }
        return if_res1388;
    };
    var normal_args2715 = loop2716(M0.cons(normal_args2706, normal_argss2707), 3);
    if (M0.null_p(kws2704) !== false) {
        var if_res1389 = M0.apply(proc2703, normal_args2715);
    } else {
        var if_res1389 = M0.apply(keyword_procedure_extract_by_method(kws2704, 2 + M0.length(normal_args2715), proc2703, 0), kws2704, kw_vals2705, normal_args2715);
    }
    return if_res1389;
});
var procedure_keywords = function(p2720) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2720) !== false) {
        var if_res1394 = M0.values(keyword_procedure_required(p2720), keyword_procedure_allowed(p2720));
    } else {
        if (M0.procedure_p(p2720) !== false) {
            if (new_procedure_p(p2720) !== false) {
                var v2721 = new_procedure_ref(p2720);
                if (M0.procedure_p(v2721) !== false) {
                    var if_res1391 = procedure_keywords(v2721);
                } else {
                    var a2722 = procedure_accessor_ref(p2720);
                    if (a2722 !== false) {
                        var if_res1390 = procedure_keywords(a2722(p2720));
                    } else {
                        var if_res1390 = M0.values(M0.rnull, M0.rnull);
                    }
                    var if_res1391 = if_res1390;
                }
                var if_res1392 = if_res1391;
            } else {
                var if_res1392 = M0.values(M0.rnull, M0.rnull);
            }
            var if_res1393 = if_res1392;
        } else {
            var if_res1393 = M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p2720);
        }
        var if_res1394 = if_res1393;
    }
    return if_res1394;
};
var extract_keyword_root = function(p2723) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2723) !== false) {
        var if_res1398 = p2723;
    } else {
        if (M0.procedure_p(p2723) !== false) {
            var v2724 = new_procedure_ref(p2723, false);
            if (M0.procedure_p(v2724) !== false) {
                var if_res1396 = extract_keyword_root(v2724);
            } else {
                var a2725 = procedure_accessor_ref(p2723, false);
                if (a2725 !== false) {
                    var if_res1395 = extract_keyword_root(a2725(p2723));
                } else {
                    var if_res1395 = false;
                }
                var if_res1396 = if_res1395;
            }
            var if_res1397 = if_res1396;
        } else {
            var if_res1397 = false;
        }
        var if_res1398 = if_res1397;
    }
    return if_res1398;
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc2726, ...args27271399) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2727 = $rjs_core.Pair.listFromArray(args27271399);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc2726, 0), M0.rnull, M0.rnull, args2727);
});
var raise_missing_kw = function(name2728, req_kws2729, args2730) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return raise_wrong_kws(name2728, true, true, false, M0.rnull, M0.rnull, req_kws2729, M0.rnull, args2730);
};
var check_kw_args = function(p2731, kws2732) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2733 = function(kws2734, required2735, allowed2736) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(kws2734) !== false) {
            if (M0.null_p(required2735) !== false) {
                var if_res1400 = M0.values(false, false);
            } else {
                var if_res1400 = M0.values(M0.car(required2735), false);
            }
            var if_res1409 = if_res1400;
        } else {
            if (M0.pair_p(required2735) !== false) {
                var if_res1401 = M0.eq_p(M0.car(required2735), M0.car(kws2734));
            } else {
                var if_res1401 = false;
            }
            if (if_res1401 !== false) {
                var temp1404 = M0.cdr(kws2734);
                var temp1403 = M0.cdr(required2735);
                if (allowed2736 !== false) {
                    var if_res1402 = M0.cdr(allowed2736);
                } else {
                    var if_res1402 = false;
                }
                var if_res1408 = loop2733(temp1404, temp1403, if_res1402);
            } else {
                if (M0.not(allowed2736) !== false) {
                    var if_res1407 = loop2733(M0.cdr(kws2734), required2735, false);
                } else {
                    if (M0.pair_p(allowed2736) !== false) {
                        if (M0.eq_p(M0.car(allowed2736), M0.car(kws2734)) !== false) {
                            var if_res1405 = loop2733(M0.cdr(kws2734), required2735, M0.cdr(allowed2736));
                        } else {
                            var if_res1405 = loop2733(kws2734, required2735, M0.cdr(allowed2736));
                        }
                        var if_res1406 = if_res1405;
                    } else {
                        var if_res1406 = M0.values(false, M0.car(kws2734));
                    }
                    var if_res1407 = if_res1406;
                }
                var if_res1408 = if_res1407;
            }
            var if_res1409 = if_res1408;
        }
        return if_res1409;
    };
    return loop2733(kws2732, keyword_procedure_required(p2731), keyword_procedure_allowed(p2731));
};
var make_keyword_checker = function(req_kws2737, allowed_kws2738, arity_mask2739) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.not(allowed_kws2738) !== false) {
        if (M0.null_p(req_kws2737) !== false) {
            var if_res1412 = function(kws2740, a2741) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (true !== false) {
                    var if_res1410 = M0.bitwise_bit_set_p(arity_mask2739, a2741);
                } else {
                    var if_res1410 = false;
                }
                return if_res1410;
            };
        } else {
            var if_res1412 = function(kws2742, a2743) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (subset_p(req_kws2737, kws2742) !== false) {
                    var if_res1411 = M0.bitwise_bit_set_p(arity_mask2739, a2743);
                } else {
                    var if_res1411 = false;
                }
                return if_res1411;
            };
        }
        var if_res1425 = if_res1412;
    } else {
        if (M0.null_p(allowed_kws2738) !== false) {
            var if_res1424 = function(kws2744, a2745) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.null_p(kws2744) !== false) {
                    var if_res1413 = M0.bitwise_bit_set_p(arity_mask2739, a2745);
                } else {
                    var if_res1413 = false;
                }
                return if_res1413;
            };
        } else {
            if (M0.null_p(req_kws2737) !== false) {
                var if_res1423 = function(kws2746, a2747) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (subset_p(kws2746, allowed_kws2738) !== false) {
                        var if_res1414 = M0.bitwise_bit_set_p(arity_mask2739, a2747);
                    } else {
                        var if_res1414 = false;
                    }
                    return if_res1414;
                };
            } else {
                if (M0.list_p(req_kws2737) !== false) {
                    if (M0.list_p(allowed_kws2738) !== false) {
                        var if_res1415 = M0.eq_p(M0.length(req_kws2737), M0.length(allowed_kws2738));
                    } else {
                        var if_res1415 = false;
                    }
                    var if_res1416 = if_res1415;
                } else {
                    var if_res1416 = false;
                }
                if (if_res1416 !== false) {
                    var if_res1422 = function(kws2748, a2749) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var loop2750 = function(kws2751, req_kws2752) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.null_p(req_kws2752) !== false) {
                                var if_res1419 = M0.null_p(kws2751);
                            } else {
                                if (M0.null_p(kws2751) !== false) {
                                    var if_res1418 = false;
                                } else {
                                    if (M0.eq_p(M0.car(kws2751), M0.car(req_kws2752)) !== false) {
                                        var if_res1417 = loop2750(M0.cdr(kws2751), M0.cdr(req_kws2752));
                                    } else {
                                        var if_res1417 = false;
                                    }
                                    var if_res1418 = if_res1417;
                                }
                                var if_res1419 = if_res1418;
                            }
                            return if_res1419;
                        };
                        if (loop2750(kws2748, req_kws2737) !== false) {
                            var if_res1420 = M0.bitwise_bit_set_p(arity_mask2739, a2749);
                        } else {
                            var if_res1420 = false;
                        }
                        return if_res1420;
                    };
                } else {
                    var if_res1422 = function(kws2753, a2754) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (subsets_p(req_kws2737, kws2753, allowed_kws2738) !== false) {
                            var if_res1421 = M0.bitwise_bit_set_p(arity_mask2739, a2754);
                        } else {
                            var if_res1421 = false;
                        }
                        return if_res1421;
                    };
                }
                var if_res1423 = if_res1422;
            }
            var if_res1424 = if_res1423;
        }
        var if_res1425 = if_res1424;
    }
    return if_res1425;
};
var subset_p = function(l12755, l22756) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12755) !== false) {
        var if_res1428 = true;
    } else {
        if (M0.null_p(l22756) !== false) {
            var if_res1427 = false;
        } else {
            if (M0.eq_p(M0.car(l12755), M0.car(l22756)) !== false) {
                var if_res1426 = subset_p(M0.cdr(l12755), M0.cdr(l22756));
            } else {
                var if_res1426 = subset_p(l12755, M0.cdr(l22756));
            }
            var if_res1427 = if_res1426;
        }
        var if_res1428 = if_res1427;
    }
    return if_res1428;
};
var subsets_p = function(l12757, l22758, l32759) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(l12757) !== false) {
        var if_res1433 = subset_p(l22758, l32759);
    } else {
        if (M0.null_p(l22758) !== false) {
            var if_res1432 = false;
        } else {
            if (M0.null_p(l32759) !== false) {
                var if_res1431 = false;
            } else {
                var v22760 = M0.car(l22758);
                if (M0.eq_p(M0.car(l12757), v22760) !== false) {
                    var if_res1430 = subsets_p(M0.cdr(l12757), M0.cdr(l22758), M0.cdr(l32759));
                } else {
                    if (M0.eq_p(v22760, M0.car(l32759)) !== false) {
                        var if_res1429 = subsets_p(l12757, M0.cdr(l22758), M0.cdr(l32759));
                    } else {
                        var if_res1429 = subsets_p(l12757, l22758, M0.cdr(l32759));
                    }
                    var if_res1430 = if_res1429;
                }
                var if_res1431 = if_res1430;
            }
            var if_res1432 = if_res1431;
        }
        var if_res1433 = if_res1432;
    }
    return if_res1433;
};
var keyword_procedure_extract_by_method = function(kws2761, n2762, p2763, method_n2764) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(p2763) !== false) {
        var if_res1434 = keyword_procedure_checker(p2763)(kws2761, n2762);
    } else {
        var if_res1434 = false;
    }
    if (if_res1434 !== false) {
        var if_res1457 = keyword_procedure_proc(p2763);
    } else {
        if (M0.not(keyword_procedure_p(p2763)) !== false) {
            if (M0.procedure_p(p2763) !== false) {
                if (new_procedure_p(p2763) !== false) {
                    var a2767 = procedure_accessor_ref(p2763);
                    if (a2767 !== false) {
                        var if_res1435 = a2767(p2763);
                    } else {
                        var if_res1435 = false;
                    }
                    var if_res1436 = if_res1435;
                } else {
                    var if_res1436 = false;
                }
                var or_part2766 = if_res1436;
                if (or_part2766 !== false) {
                    var if_res1439 = or_part2766;
                } else {
                    var or_part2768 = M0.procedure_extract_target(p2763);
                    if (or_part2768 !== false) {
                        var if_res1438 = or_part2768;
                    } else {
                        if (new_procedure_p(p2763) !== false) {
                            var if_res1437 = $rjs_core.PrimitiveSymbol.make("method");
                        } else {
                            var if_res1437 = false;
                        }
                        var if_res1438 = if_res1437;
                    }
                    var if_res1439 = if_res1438;
                }
                var if_res1440 = if_res1439;
            } else {
                var if_res1440 = false;
            }
            var if_res1441 = if_res1440;
        } else {
            var if_res1441 = false;
        }
        var p22765 = if_res1441;
        if (p22765 !== false) {
            if (M0.eq_p(p22765, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                var p32769 = keyword_procedure_extract_by_method(kws2761, M0.add1(n2762), new_procedure_ref(p2763), M0.add1(method_n2764));
                var if_res1443 = $rjs_core.attachProcedureArity(function(kws2770, kw_args2771, ...args27721442) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var args2772 = $rjs_core.Pair.listFromArray(args27721442);
                    return M0.apply(p32769, kws2770, kw_args2771, M0.cons(p2763, args2772));
                });
            } else {
                var if_res1443 = keyword_procedure_extract_by_method(kws2761, n2762, p22765, method_n2764);
            }
            var if_res1456 = if_res1443;
        } else {
            var if_res1456 = $rjs_core.attachProcedureArity(function(kws2773, kw_args2774, ...args27751444) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var args2775 = $rjs_core.Pair.listFromArray(args27751444);
                if (keyword_procedure_p(p2763) !== false) {
                    var if_res1445 = check_kw_args(p2763, kws2773);
                } else {
                    var if_res1445 = M0.values(false, M0.car(kws2773));
                }
                var let_result1446 = if_res1445;
                var missing_kw2776 = let_result1446.getAt(0);
                var extra_kw2777 = let_result1446.getAt(1);
                var or_part2781 = keyword_method_p(p2763);
                if (or_part2781 !== false) {
                    var if_res1447 = or_part2781;
                } else {
                    var if_res1447 = okm_p(p2763);
                }
                if (if_res1447 !== false) {
                    var if_res1448 = 1;
                } else {
                    var if_res1448 = 0;
                }
                var method_n2780 = method_n2764 + if_res1448;
                if (M0.__gt__eq_(n2762, method_n2780) !== false) {
                    var if_res1449 = n2762 - method_n2780;
                } else {
                    var if_res1449 = n2762;
                }
                var n2778 = if_res1449;
                var or_part2782 = keyword_procedure_p(p2763);
                if (or_part2782 !== false) {
                    var if_res1451 = or_part2782;
                } else {
                    var or_part2783 = M0.procedure_p(p2763);
                    if (or_part2783 !== false) {
                        var if_res1450 = or_part2783;
                    } else {
                        var if_res1450 = M0.not(extra_kw2777);
                    }
                    var if_res1451 = if_res1450;
                }
                if (if_res1451 !== false) {
                    if (named_keyword_procedure_p(p2763) !== false) {
                        var if_res1452 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(p2763), 0);
                    } else {
                        var if_res1452 = false;
                    }
                    var or_part2784 = if_res1452;
                    if (or_part2784 !== false) {
                        var if_res1454 = or_part2784;
                    } else {
                        var or_part2785 = M0.object_name(p2763);
                        if (or_part2785 !== false) {
                            var if_res1453 = or_part2785;
                        } else {
                            var if_res1453 = p2763;
                        }
                        var if_res1454 = if_res1453;
                    }
                    var if_res1455 = if_res1454;
                } else {
                    var if_res1455 = p2763;
                }
                var name_by_val2779 = if_res1455;
                return raise_wrong_kws(name_by_val2779, keyword_procedure_p(p2763), M0.procedure_p(p2763), n2778, kws2773, kw_args2774, missing_kw2776, extra_kw2777, args2775);
            });
        }
        var if_res1457 = if_res1456;
    }
    return if_res1457;
};
var raise_wrong_kws = function(name_by_val2786, kw_proc_p2787, proc_p2788, n2789, kws2790, kw_args2791, missing_kw2792, extra_kw2793, args2794) {
    if (arguments.length !== 9) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.null_p(args2794) !== false) {
        var if_res1458 = M0.null_p(kws2790);
    } else {
        var if_res1458 = false;
    }
    if (if_res1458 !== false) {
        var if_res1459 = $rjs_core.UString.make("");
    } else {
        var if_res1459 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v2796) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~e"), v2796);
        }, args2794), M0.map(function(kw2797, kw_arg2798) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw2797, kw_arg2798);
        }, kws2790, kw_args2791)));
    }
    var args_str2795 = if_res1459;
    var application_message2799 = function(str2800) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str2800, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
    };
    var or_part2801 = extra_kw2793;
    if (or_part2801 !== false) {
        var if_res1466 = or_part2801;
    } else {
        var if_res1466 = missing_kw2792;
    }
    if (if_res1466 !== false) {
        var if_res1467 = M0.__rjs_quoted__.exn_fail_contract;
    } else {
        var if_res1467 = M0.__rjs_quoted__.exn_fail_contract_arity;
    }
    if (extra_kw2793 !== false) {
        if (kw_proc_p2787 !== false) {
            var if_res1461 = application_message2799(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2786, extra_kw2793, args_str2795));
        } else {
            if (proc_p2788 !== false) {
                var if_res1460 = application_message2799(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), name_by_val2786, args_str2795));
            } else {
                var if_res1460 = application_message2799(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), name_by_val2786, args_str2795));
            }
            var if_res1461 = if_res1460;
        }
        var if_res1465 = if_res1461;
    } else {
        if (missing_kw2792 !== false) {
            var if_res1464 = application_message2799(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), name_by_val2786, missing_kw2792, args_str2795));
        } else {
            var temp1463 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
            if (M0.__eq_(1, n2789 - 2) !== false) {
                var if_res1462 = $rjs_core.UString.make("");
            } else {
                var if_res1462 = $rjs_core.UString.make("s");
            }
            var if_res1464 = application_message2799(M0.format(temp1463, n2789 - 2, if_res1462, name_by_val2786, args_str2795));
        }
        var if_res1465 = if_res1464;
    }
    return M0.raise(if_res1467(if_res1465, M0.current_continuation_marks()));
};
var keyword_procedure_extract = function(p2802, kws2803, n2804) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return keyword_procedure_extract_by_method(kws2803, n2804, p2802, 0);
};
var cl1468 = function(proc2805, arity2806, req_kw2807, allowed_kw2808, name2809, realm2810) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2805, arity2806, false, name2809, realm2810, req_kw2807, allowed_kw2808);
};
var cl1469 = function(proc2811, arity2812, req_kw2813, allowed_kw2814, name2815) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2811, arity2812, false, name2815, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2813, allowed_kw2814);
};
var cl1470 = function(proc2816, arity2817, req_kw2818, allowed_kw2819) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc2816, arity2817, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2818, allowed_kw2819);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1471 = {
        '6': cl1468,
        '5': cl1469,
        '4': cl1470
    } [arguments.length];
    if (fixed_lam1471 !== undefined) {
        return fixed_lam1471.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl1472 = function(proc2820, mask2821, req_kw2822, allowed_kw2823, name2824, realm2825) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2820, false, mask2821, name2824, realm2825, req_kw2822, allowed_kw2823);
};
var cl1473 = function(proc2826, mask2827, req_kw2828, allowed_kw2829, name2830) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2826, false, mask2827, name2830, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2828, allowed_kw2829);
};
var cl1474 = function(proc2831, mask2832, req_kw2833, allowed_kw2834) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc2831, false, mask2832, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw2833, allowed_kw2834);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1475 = {
        '6': cl1472,
        '5': cl1473,
        '4': cl1474
    } [arguments.length];
    if (fixed_lam1475 !== undefined) {
        return fixed_lam1475.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who2835, proc2836, arity2837, mask2838, name2839, realm2840, req_kw2841, allowed_kw2842) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part2844 = M0.null_p(allowed_kw2842);
    if (or_part2844 !== false) {
        var if_res1476 = or_part2844;
    } else {
        var if_res1476 = M0.null_p(req_kw2841);
    }
    if (if_res1476 !== false) {
        if (okp_p(proc2836) !== false) {
            var if_res1477 = okp_ref(proc2836, 0);
        } else {
            var if_res1477 = proc2836;
        }
        var p2845 = if_res1477;
        if (arity2837 !== false) {
            var if_res1478 = M0.__rjs_quoted__.procedure_reduce_arity(p2845, arity2837, name2839, realm2840);
        } else {
            var if_res1478 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p2845, mask2838, name2839, realm2840);
        }
        var if_res1479 = if_res1478;
    } else {
        var if_res1479 = false;
    }
    var plain_proc2843 = if_res1479;
    var sorted_kws_p2846 = function(kws2847) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2848 = function(kws2849) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(kws2849) !== false) {
                var if_res1484 = true;
            } else {
                if (M0.not(M0.pair_p(kws2849)) !== false) {
                    var if_res1483 = false;
                } else {
                    if (M0.not(M0.keyword_p(M0.car(kws2849))) !== false) {
                        var if_res1482 = false;
                    } else {
                        if (M0.null_p(M0.cdr(kws2849)) !== false) {
                            var if_res1481 = true;
                        } else {
                            if (M0.keyword_lt__p(M0.car(kws2849), M0.cadr(kws2849)) !== false) {
                                var if_res1480 = loop2848(M0.cdr(kws2849));
                            } else {
                                var if_res1480 = false;
                            }
                            var if_res1481 = if_res1480;
                        }
                        var if_res1482 = if_res1481;
                    }
                    var if_res1483 = if_res1482;
                }
                var if_res1484 = if_res1483;
            }
            return if_res1484;
        };
        return loop2848(kws2847);
    };
    if (sorted_kws_p2846(req_kw2841) !== false) {
        var if_res1488 = M0.rvoid();
    } else {
        var temp1487 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp1486 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part2850 = arity2837;
        if (or_part2850 !== false) {
            var if_res1485 = or_part2850;
        } else {
            var if_res1485 = mask2838;
        }
        var if_res1488 = M0.__rjs_quoted__.raise_argument_error_times_(who2835, temp1487, temp1486, 2, proc2836, if_res1485, req_kw2841, allowed_kw2842);
    }
    if_res1488;
    if (allowed_kw2842 !== false) {
        if (sorted_kws_p2846(allowed_kw2842) !== false) {
            var if_res1492 = M0.rvoid();
        } else {
            var temp1491 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp1490 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part2851 = arity2837;
            if (or_part2851 !== false) {
                var if_res1489 = or_part2851;
            } else {
                var if_res1489 = mask2838;
            }
            var if_res1492 = M0.__rjs_quoted__.raise_argument_error_times_(who2835, temp1491, temp1490, 3, proc2836, if_res1489, req_kw2841, allowed_kw2842);
        }
        if_res1492;
        if (subset_p(req_kw2841, allowed_kw2842) !== false) {
            var if_res1493 = M0.rvoid();
        } else {
            var if_res1493 = M0.__rjs_quoted__.raise_arguments_error_times_(who2835, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw2842, $rjs_core.UString.make("required keywords"), req_kw2841);
        }
        var if_res1494 = if_res1493;
    } else {
        var if_res1494 = M0.rvoid();
    }
    if_res1494;
    var let_result1495 = procedure_keywords(proc2836);
    var old_req2852 = let_result1495.getAt(0);
    var old_allowed2853 = let_result1495.getAt(1);
    if (subset_p(old_req2852, req_kw2841) !== false) {
        var if_res1496 = M0.rvoid();
    } else {
        var if_res1496 = M0.__rjs_quoted__.raise_arguments_error_times_(who2835, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req2852, $rjs_core.UString.make("requested required keywords"), req_kw2841);
    }
    if_res1496;
    if (old_allowed2853 !== false) {
        if (subset_p(req_kw2841, old_allowed2853) !== false) {
            var if_res1497 = M0.rvoid();
        } else {
            var if_res1497 = M0.__rjs_quoted__.raise_arguments_error_times_(who2835, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2853, $rjs_core.UString.make("requested required keywords"), req_kw2841);
        }
        if_res1497;
        var or_part2854 = M0.not(allowed_kw2842);
        if (or_part2854 !== false) {
            var if_res1498 = or_part2854;
        } else {
            var if_res1498 = subset_p(allowed_kw2842, old_allowed2853);
        }
        if (if_res1498 !== false) {
            var if_res1499 = M0.rvoid();
        } else {
            var if_res1499 = M0.__rjs_quoted__.raise_arguments_error_times_(who2835, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed2853, $rjs_core.UString.make("requested allowed keywords"), allowed_kw2842);
        }
        var if_res1500 = if_res1499;
    } else {
        var if_res1500 = M0.rvoid();
    }
    if_res1500;
    if (M0.null_p(allowed_kw2842) !== false) {
        var if_res1514 = plain_proc2843;
    } else {
        var or_part2856 = mask2838;
        if (or_part2856 !== false) {
            var if_res1501 = or_part2856;
        } else {
            var if_res1501 = arity__gt_mask(arity2837);
        }
        var mask2855 = if_res1501;
        var new_mask2857 = M0.arithmetic_shift(mask2855, 2);
        var kw_checker2858 = make_keyword_checker(req_kw2841, allowed_kw2842, new_mask2857);
        var proc2859 = normalize_proc(proc2836);
        var new_kw_proc2860 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc2859), new_mask2857);
        if (M0.null_p(req_kw2841) !== false) {
            if (okm_p(proc2859) !== false) {
                var if_res1502 = make_optional_keyword_method;
            } else {
                var if_res1502 = make_optional_keyword_procedure;
            }
            var if_res1513 = if_res1502(kw_checker2858, new_kw_proc2860, req_kw2841, allowed_kw2842, plain_proc2843);
        } else {
            var or_part2863 = name2839;
            if (or_part2863 !== false) {
                var if_res1505 = or_part2863;
            } else {
                if (named_keyword_procedure_p(proc2859) !== false) {
                    var if_res1503 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2859), 0);
                } else {
                    var if_res1503 = false;
                }
                var or_part2864 = if_res1503;
                if (or_part2864 !== false) {
                    var if_res1504 = or_part2864;
                } else {
                    var if_res1504 = M0.object_name(proc2859);
                }
                var if_res1505 = if_res1504;
            }
            var name2861 = if_res1505;
            if (name2839 !== false) {
                var if_res1506 = realm2840;
            } else {
                var if_res1506 = false;
            }
            var or_part2865 = if_res1506;
            if (or_part2865 !== false) {
                var if_res1509 = or_part2865;
            } else {
                if (named_keyword_procedure_p(proc2859) !== false) {
                    var if_res1507 = M0.vector_ref(keyword_procedure_name_plus_fail_times_(proc2859), 1);
                } else {
                    var if_res1507 = false;
                }
                var or_part2866 = if_res1507;
                if (or_part2866 !== false) {
                    var if_res1508 = or_part2866;
                } else {
                    var if_res1508 = M0.__rjs_quoted__.procedure_realm(proc2859);
                }
                var if_res1509 = if_res1508;
            }
            var realm2862 = if_res1509;
            var or_part2867 = okm_p(proc2859);
            if (or_part2867 !== false) {
                var if_res1511 = or_part2867;
            } else {
                var if_res1511 = keyword_method_p(proc2859);
            }
            if (if_res1511 !== false) {
                var if_res1512 = make_required_keyword_method_by_arity_error;
            } else {
                var if_res1512 = make_required_keyword_procedure_by_arity_error;
            }
            var if_res1513 = if_res1512(kw_checker2858, new_kw_proc2860, req_kw2841, allowed_kw2842, M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args28681510) {
                var args2868 = $rjs_core.Pair.listFromArray(args28681510);
                return raise_missing_kw(name2861, req_kw2841);
            }), mask2855), name2861, realm2862);
        }
        var if_res1514 = if_res1513;
    }
    return if_res1514;
};
var arity__gt_mask = function(a2869) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.exact_nonnegative_integer_p(a2869) !== false) {
        var if_res1520 = M0.arithmetic_shift(1, a2869);
    } else {
        if (M0.arity_at_least_p(a2869) !== false) {
            var if_res1519 = M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a2869))));
        } else {
            if (M0.list_p(a2869) !== false) {
                var loop2870 = function(mask2871, l2872) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.null_p(l2872) !== false) {
                        var if_res1517 = mask2871;
                    } else {
                        var a2873 = M0.car(l2872);
                        var or_part2874 = M0.exact_nonnegative_integer_p(a2873);
                        if (or_part2874 !== false) {
                            var if_res1515 = or_part2874;
                        } else {
                            var if_res1515 = M0.arity_at_least_p(a2873);
                        }
                        if (if_res1515 !== false) {
                            var if_res1516 = loop2870(M0.bitwise_ior(mask2871, arity__gt_mask(a2873)), M0.cdr(l2872));
                        } else {
                            var if_res1516 = false;
                        }
                        var if_res1517 = if_res1516;
                    }
                    return if_res1517;
                };
                var if_res1518 = loop2870(0, a2869);
            } else {
                var if_res1518 = false;
            }
            var if_res1519 = if_res1518;
        }
        var if_res1520 = if_res1519;
    }
    return if_res1520;
};
var cl1521 = function(proc2876, arity2877, name2878, realm2879) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2876) !== false) {
        var let_result1525 = procedure_keywords(proc2876);
        var req2880 = let_result1525.getAt(0);
        var allows2881 = let_result1525.getAt(1);
        if (M0.pair_p(req2880) !== false) {
            var if_res1526 = M0.not(M0.null_p(arity2877));
        } else {
            var if_res1526 = false;
        }
        var if_res1527 = if_res1526;
    } else {
        var if_res1527 = false;
    }
    if (if_res1527 !== false) {
        var if_res1529 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2876);
    } else {
        if (okm_p(proc2876) !== false) {
            var if_res1528 = M0.__rjs_quoted__.procedure__gt_method(proc2876);
        } else {
            var if_res1528 = proc2876;
        }
        var if_res1529 = M0.__rjs_quoted__.procedure_reduce_arity(if_res1528, arity2877, name2878, realm2879);
    }
    return if_res1529;
};
var cl1522 = function(proc2882, arity2883, name2884) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2882, arity2883, name2884, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1523 = function(proc2885, arity2886) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity(proc2885, arity2886, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2875 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1524 = {
        '4': cl1521,
        '3': cl1522,
        '2': cl1523
    } [arguments.length];
    if (fixed_lam1524 !== undefined) {
        return fixed_lam1524.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity2875;
var cl1530 = function(proc2888, mask2889, name2890, realm2891) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.procedure_p(proc2888) !== false) {
        var let_result1534 = procedure_keywords(proc2888);
        var req2892 = let_result1534.getAt(0);
        var allows2893 = let_result1534.getAt(1);
        if (M0.pair_p(req2892) !== false) {
            var if_res1535 = M0.not(M0.eqv_p(mask2889, 0));
        } else {
            var if_res1535 = false;
        }
        var if_res1536 = if_res1535;
    } else {
        var if_res1536 = false;
    }
    if (if_res1536 !== false) {
        var if_res1538 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc2888);
    } else {
        if (okm_p(proc2888) !== false) {
            var if_res1537 = M0.__rjs_quoted__.procedure__gt_method(proc2888);
        } else {
            var if_res1537 = proc2888;
        }
        var if_res1538 = M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res1537, mask2889, name2890, realm2891);
    }
    return if_res1538;
};
var cl1531 = function(proc2894, mask2895, name2896) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2894, mask2895, name2896, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl1532 = function(proc2897, mask2898) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_reduce_arity_mask(proc2897, mask2898, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity2887 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1533 = {
        '4': cl1530,
        '3': cl1531,
        '2': cl1532
    } [arguments.length];
    if (fixed_lam1533 !== undefined) {
        return fixed_lam1533.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity2887;
var procedure__gt_method2899 = function(proc2900) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var proc2901 = normalize_proc(proc2900);
    if (keyword_procedure_p(proc2901) !== false) {
        if (okm_p(proc2901) !== false) {
            var if_res1547 = proc2901;
        } else {
            if (keyword_method_p(proc2901) !== false) {
                var if_res1546 = proc2901;
            } else {
                if (okp_p(proc2901) !== false) {
                    var if_res1545 = make_optional_keyword_method(keyword_procedure_checker(proc2901), keyword_procedure_proc(proc2901), keyword_procedure_required(proc2901), keyword_procedure_allowed(proc2901), okp_ref(proc2901, 0));
                } else {
                    var raw_name_plus_fail2902 = keyword_procedure_name_plus_fail(proc2901);
                    if (M0.vector_p(raw_name_plus_fail2902) !== false) {
                        var if_res1539 = raw_name_plus_fail2902;
                    } else {
                        var if_res1539 = raw_name_plus_fail2902(proc2901);
                    }
                    var name_plus_fail2903 = if_res1539;
                    var name2904 = M0.vector_ref(name_plus_fail2903, 0);
                    var req_kw2905 = keyword_procedure_required(proc2901);
                    var temp1544 = keyword_procedure_checker(proc2901);
                    var temp1543 = keyword_procedure_proc(proc2901);
                    var temp1542 = keyword_procedure_allowed(proc2901);
                    if (M0.vector_p(raw_name_plus_fail2902) !== false) {
                        var if_res1541 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args29061540) {
                            var args2906 = $rjs_core.Pair.listFromArray(args29061540);
                            return raise_missing_kw(name2904, req_kw2905);
                        }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail2903, 2)), -1));
                    } else {
                        var if_res1541 = M0.vector_ref(name_plus_fail2903, 2);
                    }
                    var if_res1545 = make_required_keyword_method_by_arity_error(temp1544, temp1543, req_kw2905, temp1542, if_res1541, name2904, M0.vector_ref(name_plus_fail2903, 1));
                }
                var if_res1546 = if_res1545;
            }
            var if_res1547 = if_res1546;
        }
        var if_res1548 = if_res1547;
    } else {
        var if_res1548 = M0.__rjs_quoted__.procedure__gt_method(proc2901);
    }
    return if_res1548;
};
var new_procedure__gt_method = procedure__gt_method2899;
var cl1549 = function(proc2908, name2909, realm2910) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M0.symbol_p(name2909) !== false) {
        var if_res1552 = M0.symbol_p(realm2910);
    } else {
        var if_res1552 = false;
    }
    if (M0.not(if_res1552) !== false) {
        var if_res1554 = M0.__rjs_quoted__.procedure_rename(proc2908, name2909, realm2910);
    } else {
        var c12911 = extract_keyword_root(proc2908);
        if (c12911 !== false) {
            var if_res1553 = (function(kw_p2912) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc2908, false, M0.procedure_arity_mask(proc2908), name2909, realm2910, keyword_procedure_required(kw_p2912), keyword_procedure_allowed(kw_p2912));
            })(c12911);
        } else {
            var if_res1553 = M0.__rjs_quoted__.procedure_rename(proc2908, name2909, realm2910);
        }
        var if_res1554 = if_res1553;
    }
    return if_res1554;
};
var cl1550 = function(proc2913, name2914) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new_procedure_rename(proc2913, name2914, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename2907 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1551 = {
        '3': cl1549,
        '2': cl1550
    } [arguments.length];
    if (fixed_lam1551 !== undefined) {
        return fixed_lam1551.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename2907;
var procedure_realm2915 = function(proc2916) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc2916) !== false) {
        if (named_keyword_procedure_p(proc2916) !== false) {
            var name_plus_fail2917 = keyword_procedure_name_plus_fail_times_(proc2916);
            var or_part2918 = M0.vector_ref(name_plus_fail2917, 1);
            if (or_part2918 !== false) {
                var if_res1555 = or_part2918;
            } else {
                var if_res1555 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail2917, 2));
            }
            var if_res1557 = if_res1555;
        } else {
            if (okp_p(proc2916) !== false) {
                var if_res1556 = M0.__rjs_quoted__.procedure_realm(okp_ref(proc2916, 0));
            } else {
                var if_res1556 = M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc2916));
            }
            var if_res1557 = if_res1556;
        }
        var if_res1558 = if_res1557;
    } else {
        var if_res1558 = M0.__rjs_quoted__.procedure_realm(proc2916);
    }
    return if_res1558;
};
var new_procedure_realm = procedure_realm2915;
var chaperone_procedure2919 = $rjs_core.attachProcedureArity(function(proc2920, wrap_proc2921, ...props29221559) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2922 = $rjs_core.Pair.listFromArray(props29221559);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2920, wrap_proc2921, props2922);
});
var new_chaperone_procedure = chaperone_procedure2919;
var unsafe_chaperone_procedure2923 = $rjs_core.attachProcedureArity(function(proc2924, wrap_proc2925, ...props29261560) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2926 = $rjs_core.Pair.listFromArray(props29261560);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc2924, wrap_proc2925, props2926);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure2923;
var impersonate_procedure2927 = $rjs_core.attachProcedureArity(function(proc2928, wrap_proc2929, ...props29301561) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2930 = $rjs_core.Pair.listFromArray(props29301561);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2928, wrap_proc2929, props2930);
});
var new_impersonate_procedure = impersonate_procedure2927;
var unsafe_impersonate_procedure2931 = $rjs_core.attachProcedureArity(function(proc2932, wrap_proc2933, ...props29341562) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2934 = $rjs_core.Pair.listFromArray(props29341562);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc2932, wrap_proc2933, props2934);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure2931;
var chaperone_procedure_times_2935 = $rjs_core.attachProcedureArity(function(proc2936, wrap_proc2937, ...props29381563) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2938 = $rjs_core.Pair.listFromArray(props29381563);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc2936, wrap_proc2937, props2938);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_2935;
var impersonate_procedure_times_2939 = $rjs_core.attachProcedureArity(function(proc2940, wrap_proc2941, ...props29421564) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var props2942 = $rjs_core.Pair.listFromArray(props29421564);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc2940, wrap_proc2941, props2942);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_2939;
var do_chaperone_procedure = function(is_impersonator_p2943, self_arg_p2944, chaperone_procedure2945, name2946, proc2947, wrap_proc2948, props2949) {
    if (arguments.length !== 7) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc2950 = normalize_proc(proc2947);
    var n_wrap_proc2951 = normalize_proc(wrap_proc2948);
    var or_part2952 = M0.not(keyword_procedure_p(n_proc2950));
    if (or_part2952 !== false) {
        var if_res1566 = or_part2952;
    } else {
        var or_part2953 = M0.not(M0.procedure_p(wrap_proc2948));
        if (or_part2953 !== false) {
            var if_res1565 = or_part2953;
        } else {
            var if_res1565 = bad_props_p(props2949);
        }
        var if_res1566 = if_res1565;
    }
    if (if_res1566 !== false) {
        var if_res1655 = M0.apply(chaperone_procedure2945, proc2947, wrap_proc2948, props2949);
    } else {
        chaperone_arity_match_checking(self_arg_p2944, name2946, proc2947, wrap_proc2948, props2949);
        var loop2955 = function(props2956) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.null_p(props2956) !== false) {
                var if_res1568 = false;
            } else {
                if (M0.eq_p(M0.car(props2956), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                    var if_res1567 = M0.cadr(props2956);
                } else {
                    var if_res1567 = loop2955(M0.cddr(props2956));
                }
                var if_res1568 = if_res1567;
            }
            return if_res1568;
        };
        var mark_prop2954 = loop2955(props2949);
        var chaperone_procedure_by_add_mark2957 = function(proc2958, wrap_proc2959) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (mark_prop2954 !== false) {
                var if_res1569 = chaperone_procedure2945(proc2958, wrap_proc2959, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop2954);
            } else {
                var if_res1569 = chaperone_procedure2945(proc2958, wrap_proc2959);
            }
            return if_res1569;
        };
        var p2961 = keyword_procedure_proc(n_wrap_proc2951);
        if (self_arg_p2944 !== false) {
            var cl1570 = $rjs_core.attachProcedureArity(function(self_proc2962, kws2963, args2964, ...rest29651575) {
                if (arguments.length < 3) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2965 = $rjs_core.Pair.listFromArray(rest29651575);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2961, kws2963, args2964, self_proc2962, rest2965);
                }, $rjs_core.attachProcedureArity(function(...results29661576) {
                    var results2966 = $rjs_core.Pair.listFromArray(results29661576);
                    var len2967 = M0.length(results2966);
                    var alen2968 = M0.length(rest2965);
                    if (M0.__lt_(len2967, alen2968 + 1) !== false) {
                        var if_res1577 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2968 + 1, $rjs_core.UString.make("received number of results"), len2967, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                    } else {
                        var if_res1577 = M0.rvoid();
                    }
                    if_res1577;
                    var num_extra2969 = len2967 - (alen2968 + 1);
                    var new_args2970 = M0.list_ref(results2966, num_extra2969);
                    if (M0.list_p(new_args2970) !== false) {
                        var if_res1578 = M0.__eq_(M0.length(new_args2970), M0.length(args2964));
                    } else {
                        var if_res1578 = false;
                    }
                    if (if_res1578 !== false) {
                        var if_res1583 = M0.rvoid();
                    } else {
                        var temp1582 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1581 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1580 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2967, alen2968) !== false) {
                            var if_res1579 = $rjs_core.UString.make("");
                        } else {
                            var if_res1579 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1583 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1582, temp1581, M0.format(temp1580, if_res1579), $rjs_core.UString.make("first result"), new_args2970, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                    }
                    if_res1583;
                    M0.for_each(function(kw2971, new_arg2972, arg2973) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2943 !== false) {
                            var if_res1585 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2972, arg2973) !== false) {
                                var if_res1584 = M0.rvoid();
                            } else {
                                var if_res1584 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2971), $rjs_core.UString.make("result"), new_arg2972, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                            }
                            var if_res1585 = if_res1584;
                        }
                        return if_res1585;
                    }, kws2963, new_args2970, args2964);
                    var tmp2974 = num_extra2969;
                    if (M0.equal_p(tmp2974, 0) !== false) {
                        var if_res1588 = M0.apply(M0.values, kws2963, results2966);
                    } else {
                        if (M0.equal_p(tmp2974, 1) !== false) {
                            var if_res1587 = M0.apply(M0.values, M0.car(results2966), kws2963, M0.cdr(results2966));
                        } else {
                            var loop2975 = function(results2976, c2977) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2977) !== false) {
                                    var if_res1586 = M0.cons(kws2963, results2976);
                                } else {
                                    var if_res1586 = M0.cons(M0.car(results2976), loop2975(M0.cdr(results2976), M0.sub1(c2977)));
                                }
                                return if_res1586;
                            };
                            var if_res1587 = M0.apply(M0.values, loop2975(results2966, num_extra2969));
                        }
                        var if_res1588 = if_res1587;
                    }
                    return if_res1588;
                }));
            });
            var cl1571 = $rjs_core.attachProcedureArity(function(...other29781589) {
                var other2978 = $rjs_core.Pair.listFromArray(other29781589);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1610 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1572 = {} [arguments.length];
                if (fixed_lam1572 !== undefined) {
                    return fixed_lam1572.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1570.length, 1) !== false) {
                        var if_res1574 = cl1570.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1573 = cl1571.apply(null, arguments);
                        } else {
                            var if_res1573 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1574 = if_res1573;
                    }
                    return if_res1574;
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl1590 = $rjs_core.attachProcedureArity(function(kws2979, args2980, ...rest29811595) {
                if (arguments.length < 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var rest2981 = $rjs_core.Pair.listFromArray(rest29811595);
                return M0.call_with_values(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M0.apply(p2961, kws2979, args2980, rest2981);
                }, $rjs_core.attachProcedureArity(function(...results29821596) {
                    var results2982 = $rjs_core.Pair.listFromArray(results29821596);
                    var len2983 = M0.length(results2982);
                    var alen2984 = M0.length(rest2981);
                    if (M0.__lt_(len2983, alen2984 + 1) !== false) {
                        var if_res1597 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen2984 + 1, $rjs_core.UString.make("received number of results"), len2983, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                    } else {
                        var if_res1597 = M0.rvoid();
                    }
                    if_res1597;
                    var num_extra2985 = len2983 - (alen2984 + 1);
                    var new_args2986 = M0.list_ref(results2982, num_extra2985);
                    if (M0.list_p(new_args2986) !== false) {
                        var if_res1598 = M0.__eq_(M0.length(new_args2986), M0.length(args2980));
                    } else {
                        var if_res1598 = false;
                    }
                    if (if_res1598 !== false) {
                        var if_res1603 = M0.rvoid();
                    } else {
                        var temp1602 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp1601 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp1600 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len2983, alen2984) !== false) {
                            var if_res1599 = $rjs_core.UString.make("");
                        } else {
                            var if_res1599 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res1603 = M0.__rjs_quoted__.raise_arguments_error_times_(temp1602, temp1601, M0.format(temp1600, if_res1599), $rjs_core.UString.make("first result"), new_args2986, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                    }
                    if_res1603;
                    M0.for_each(function(kw2987, new_arg2988, arg2989) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2943 !== false) {
                            var if_res1605 = M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg2988, arg2989) !== false) {
                                var if_res1604 = M0.rvoid();
                            } else {
                                var if_res1604 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw2987), $rjs_core.UString.make("result"), new_arg2988, $rjs_core.UString.make("wrapper procedure"), wrap_proc2948);
                            }
                            var if_res1605 = if_res1604;
                        }
                        return if_res1605;
                    }, kws2979, new_args2986, args2980);
                    var tmp2990 = num_extra2985;
                    if (M0.equal_p(tmp2990, 0) !== false) {
                        var if_res1608 = M0.apply(M0.values, kws2979, results2982);
                    } else {
                        if (M0.equal_p(tmp2990, 1) !== false) {
                            var if_res1607 = M0.apply(M0.values, M0.car(results2982), kws2979, M0.cdr(results2982));
                        } else {
                            var loop2991 = function(results2992, c2993) {
                                if (arguments.length !== 2) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                if (M0.zero_p(c2993) !== false) {
                                    var if_res1606 = M0.cons(kws2979, results2992);
                                } else {
                                    var if_res1606 = M0.cons(M0.car(results2992), loop2991(M0.cdr(results2992), M0.sub1(c2993)));
                                }
                                return if_res1606;
                            };
                            var if_res1607 = M0.apply(M0.values, loop2991(results2982, num_extra2985));
                        }
                        var if_res1608 = if_res1607;
                    }
                    return if_res1608;
                }));
            });
            var cl1591 = $rjs_core.attachProcedureArity(function(...other29941609) {
                var other2994 = $rjs_core.Pair.listFromArray(other29941609);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res1610 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1592 = {} [arguments.length];
                if (fixed_lam1592 !== undefined) {
                    return fixed_lam1592.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl1590.length, 1) !== false) {
                        var if_res1594 = cl1590.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1593 = cl1591.apply(null, arguments);
                        } else {
                            var if_res1593 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        var if_res1594 = if_res1593;
                    }
                    return if_res1594;
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone2960 = if_res1610;
        var wrap2997 = function(proc2998, n_proc2999) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M0.not(M0.eq_p(n_proc2999, proc2998)) !== false) {
                var if_res1611 = new_procedure_p(proc2998);
            } else {
                var if_res1611 = false;
            }
            if (if_res1611 !== false) {
                var v3000 = new_procedure_ref(proc2998);
                if (M0.exact_integer_p(v3000) !== false) {
                    var acc3001 = procedure_accessor_ref(proc2998);
                    var if_res1639 = M0.values(M0.__rjs_quoted__.chaperone_struct(proc2998, acc3001, function(self3002, sub_proc3003) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var let_result1612 = wrap2997(sub_proc3003, normalize_proc(sub_proc3003));
                        var f3004 = let_result1612.getAt(0);
                        var acc3005 = let_result1612.getAt(1);
                        return f3004;
                    }), acc3001);
                } else {
                    if (is_impersonator_p2943 !== false) {
                        var if_res1638 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res1638 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc2999) !== false) {
                        var if_res1637 = chaperone_procedure_by_add_mark2957(proc2998, wrap_proc2948);
                    } else {
                        var if_res1637 = proc2998;
                    }
                    var new_kw_proc3006 = if_res1638(if_res1637, new_procedure_ref, function(self3007, proc3008) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (is_impersonator_p2943 !== false) {
                            var if_res1636 = new_impersonate_procedure;
                        } else {
                            var if_res1636 = new_chaperone_procedure;
                        }
                        if (self_arg_p2944 !== false) {
                            var cl1613 = $rjs_core.attachProcedureArity(function(proc_self3009, kws3010, kw_args3011, self3012, ...args30131618) {
                                if (arguments.length < 4) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args3013 = $rjs_core.Pair.listFromArray(args30131618);
                                var len3014 = M0.length(args3013);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2960, proc_self3009, kws3010, kw_args3011, args3013);
                                }, $rjs_core.attachProcedureArity(function(...results30151619) {
                                    var results3015 = $rjs_core.Pair.listFromArray(results30151619);
                                    var r_len3016 = M0.length(results3015);
                                    var list_take3017 = function(l3018, n3019) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n3019) !== false) {
                                            var if_res1620 = M0.rnull;
                                        } else {
                                            var if_res1620 = M0.cons(M0.car(l3018), list_take3017(M0.cdr(l3018), M0.sub1(n3019)));
                                        }
                                        return if_res1620;
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res1621 = M0.__eq_(r_len3016, 2 + len3014);
                                    } else {
                                        var if_res1621 = false;
                                    }
                                    if (if_res1621 !== false) {
                                        var if_res1622 = M0.apply(M0.values, M0.cadr(results3015), self3012, M0.cddr(results3015));
                                    } else {
                                        var skip3020 = r_len3016 - len3014;
                                        var if_res1622 = M0.apply(M0.values, M0.append(list_take3017(results3015, skip3020 - 2), M0.list(M0.list_ref(results3015, M0.sub1(skip3020)), self3012), M0.__rjs_quoted__.list_tail(results3015, skip3020)));
                                    }
                                    return if_res1622;
                                }));
                            });
                            var cl1614 = $rjs_core.attachProcedureArity(function(...args30211623) {
                                var args3021 = $rjs_core.Pair.listFromArray(args30211623);
                                return M0.rvoid();
                            });
                            var if_res1635 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1615 = {} [arguments.length];
                                if (fixed_lam1615 !== undefined) {
                                    return fixed_lam1615.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1613.length, 1) !== false) {
                                        var if_res1617 = cl1613.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1616 = cl1614.apply(null, arguments);
                                        } else {
                                            var if_res1616 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1617 = if_res1616;
                                    }
                                    return if_res1617;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl1624 = $rjs_core.attachProcedureArity(function(kws3022, kw_args3023, self3024, ...args30251629) {
                                if (arguments.length < 3) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var args3025 = $rjs_core.Pair.listFromArray(args30251629);
                                var len3026 = M0.length(args3025);
                                return M0.call_with_values(function() {
                                    if (arguments.length !== 0) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return M0.apply(kw_chaperone2960, kws3022, kw_args3023, args3025);
                                }, $rjs_core.attachProcedureArity(function(...results30271630) {
                                    var results3027 = $rjs_core.Pair.listFromArray(results30271630);
                                    var r_len3028 = M0.length(results3027);
                                    var list_take3029 = function(l3030, n3031) {
                                        if (arguments.length !== 2) {
                                            throw $rjs_core.racketContractError("arity mismatch");
                                        } else {}
                                        if (M0.zero_p(n3031) !== false) {
                                            var if_res1631 = M0.rnull;
                                        } else {
                                            var if_res1631 = M0.cons(M0.car(l3030), list_take3029(M0.cdr(l3030), M0.sub1(n3031)));
                                        }
                                        return if_res1631;
                                    };
                                    if (M0.null_p($rjs_core.Pair.EMPTY) !== false) {
                                        var if_res1632 = M0.__eq_(r_len3028, 2 + len3026);
                                    } else {
                                        var if_res1632 = false;
                                    }
                                    if (if_res1632 !== false) {
                                        var if_res1633 = M0.apply(M0.values, M0.cadr(results3027), self3024, M0.cddr(results3027));
                                    } else {
                                        var skip3032 = r_len3028 - len3026;
                                        var if_res1633 = M0.apply(M0.values, M0.append(list_take3029(results3027, skip3032 - 2), M0.list(M0.list_ref(results3027, M0.sub1(skip3032)), self3024), M0.__rjs_quoted__.list_tail(results3027, skip3032)));
                                    }
                                    return if_res1633;
                                }));
                            });
                            var cl1625 = $rjs_core.attachProcedureArity(function(...args30331634) {
                                var args3033 = $rjs_core.Pair.listFromArray(args30331634);
                                return M0.rvoid();
                            });
                            var if_res1635 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam1626 = {} [arguments.length];
                                if (fixed_lam1626 !== undefined) {
                                    return fixed_lam1626.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl1624.length, 1) !== false) {
                                        var if_res1628 = cl1624.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            var if_res1627 = cl1625.apply(null, arguments);
                                        } else {
                                            var if_res1627 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                        var if_res1628 = if_res1627;
                                    }
                                    return if_res1628;
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res1636(proc3008, make_keyword_procedure(if_res1635));
                    });
                    var if_res1639 = M0.values(new_kw_proc3006, new_procedure_ref);
                }
                var if_res1652 = if_res1639;
            } else {
                if (okp_p(n_proc2999) !== false) {
                    if (is_impersonator_p2943 !== false) {
                        if (okm_p(n_proc2999) !== false) {
                            var if_res1640 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res1640 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res1641 = if_res1640(keyword_procedure_checker(n_proc2999), chaperone_procedure_by_add_mark2957(keyword_procedure_proc(n_proc2999), kw_chaperone2960), keyword_procedure_required(n_proc2999), keyword_procedure_allowed(n_proc2999), chaperone_procedure_by_add_mark2957(okp_ref(n_proc2999, 0), okp_ref(n_wrap_proc2951, 0)), n_proc2999);
                    } else {
                        var if_res1641 = M0.__rjs_quoted__.chaperone_struct(proc2998, keyword_procedure_proc, function(self3034, proc3035) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2957(proc3035, kw_chaperone2960);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self3036, proc3037) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2957(proc3037, okp_ref(n_wrap_proc2951, 0));
                        });
                    }
                    var if_res1651 = M0.values(if_res1641, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p2943 !== false) {
                        var raw_name_plus_fail3038 = keyword_procedure_name_plus_fail(proc2998);
                        if (M0.vector_p(raw_name_plus_fail3038) !== false) {
                            var if_res1642 = raw_name_plus_fail3038;
                        } else {
                            var if_res1642 = raw_name_plus_fail3038(proc2998);
                        }
                        var name_plus_fail3039 = if_res1642;
                        var name3040 = M0.vector_ref(name_plus_fail3039, 0);
                        var req_kw3041 = keyword_procedure_required(proc2998);
                        if (keyword_method_p(n_proc2999) !== false) {
                            var if_res1649 = make_required_keyword_method_impersonator_by_arity_error;
                        } else {
                            var if_res1649 = make_required_keyword_procedure_impersonator_by_arity_error;
                        }
                        var temp1648 = keyword_procedure_checker(n_proc2999);
                        var temp1647 = chaperone_procedure_by_add_mark2957(keyword_procedure_proc(n_proc2999), kw_chaperone2960);
                        var temp1646 = keyword_procedure_required(n_proc2999);
                        var temp1645 = keyword_procedure_allowed(n_proc2999);
                        if (M0.vector_p(raw_name_plus_fail3038) !== false) {
                            var if_res1644 = M0.__rjs_quoted__.procedure_reduce_arity_mask($rjs_core.attachProcedureArity(function(...args30421643) {
                                var args3042 = $rjs_core.Pair.listFromArray(args30421643);
                                return raise_missing_kw(name3040, req_kw3041);
                            }), M0.arithmetic_shift(M0.procedure_arity_mask(M0.vector_ref(name_plus_fail3039, 2)), -1));
                        } else {
                            var if_res1644 = M0.vector_ref(name_plus_fail3039, 2);
                        }
                        var if_res1650 = if_res1649(temp1648, temp1647, temp1646, temp1645, n_proc2999, if_res1644, M0.vector_ref(name_plus_fail3039, 0), M0.vector_ref(name_plus_fail3039, 1));
                    } else {
                        var if_res1650 = M0.__rjs_quoted__.chaperone_struct(n_proc2999, keyword_procedure_proc, function(self3043, proc3044) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return chaperone_procedure_by_add_mark2957(proc3044, kw_chaperone2960);
                        });
                    }
                    var if_res1651 = M0.values(if_res1650, keyword_procedure_proc);
                }
                var if_res1652 = if_res1651;
            }
            return if_res1652;
        };
        var let_result1653 = wrap2997(proc2947, n_proc2950);
        var new_proc2995 = let_result1653.getAt(0);
        var chap_accessor2996 = let_result1653.getAt(1);
        if (M0.null_p(props2949) !== false) {
            var if_res1654 = new_proc2995;
        } else {
            var if_res1654 = M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc2995, chap_accessor2996, false, props2949);
        }
        var if_res1655 = if_res1654;
    }
    return if_res1655;
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure3045, name3046, proc3047, wrap_proc3048, props3049) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_proc3050 = normalize_proc(proc3047);
    var n_wrap_proc3051 = normalize_proc(wrap_proc3048);
    var or_part3052 = M0.not(keyword_procedure_p(n_proc3050));
    if (or_part3052 !== false) {
        var if_res1657 = or_part3052;
    } else {
        var or_part3053 = M0.not(M0.procedure_p(wrap_proc3048));
        if (or_part3053 !== false) {
            var if_res1656 = or_part3053;
        } else {
            var if_res1656 = bad_props_p(props3049);
        }
        var if_res1657 = if_res1656;
    }
    if (if_res1657 !== false) {
        var if_res1658 = M0.apply(unsafe_chaperone_procedure3045, proc3047, wrap_proc3048, props3049);
    } else {
        chaperone_arity_match_checking(false, name3046, proc3047, wrap_proc3048, props3049);
        var if_res1658 = M0.apply(unsafe_chaperone_procedure3045, proc3047, wrap_proc3048, props3049);
    }
    return if_res1658;
};
var bad_props_p = function(props3054) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop3055 = function(props3056) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.null_p(props3056) !== false) {
            var if_res1661 = false;
        } else {
            if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props3056)) !== false) {
                var props3057 = M0.cdr(props3056);
                var or_part3058 = M0.null_p(props3057);
                if (or_part3058 !== false) {
                    var if_res1659 = or_part3058;
                } else {
                    var if_res1659 = loop3055(M0.cdr(props3057));
                }
                var if_res1660 = if_res1659;
            } else {
                var if_res1660 = true;
            }
            var if_res1661 = if_res1660;
        }
        return if_res1661;
    };
    return loop3055(props3054);
};
var chaperone_arity_match_checking = function(self_arg_p3059, name3060, proc3061, wrap_proc3062, props3063) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var a3064 = M0.procedure_arity(proc3061);
    var b3065 = M0.procedure_arity(wrap_proc3062);
    if (self_arg_p3059 !== false) {
        var if_res1662 = 1;
    } else {
        var if_res1662 = 0;
    }
    var d3066 = if_res1662;
    var let_result1663 = procedure_keywords(proc3061);
    var a_req3067 = let_result1663.getAt(0);
    var a_allow3068 = let_result1663.getAt(1);
    var let_result1664 = procedure_keywords(wrap_proc3062);
    var b_req3069 = let_result1664.getAt(0);
    var b_allow3070 = let_result1664.getAt(1);
    var includes_p3071 = function(a3072, b3073) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M0.number_p(b3073) !== false) {
            if (M0.number_p(a3072) !== false) {
                var if_res1666 = M0.__eq_(b3073, a3072 + d3066);
            } else {
                if (M0.arity_at_least_p(a3072) !== false) {
                    var if_res1665 = M0.__gt__eq_(b3073, M0.arity_at_least_value(a3072) + d3066);
                } else {
                    var if_res1665 = M0.ormap(function(a3074) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return includes_p3071(a3074, b3073);
                    }, a3072);
                }
                var if_res1666 = if_res1665;
            }
            var if_res1670 = if_res1666;
        } else {
            if (M0.arity_at_least_p(b3073) !== false) {
                if (M0.number_p(a3072) !== false) {
                    var if_res1668 = false;
                } else {
                    if (M0.arity_at_least_p(a3072) !== false) {
                        var if_res1667 = M0.__gt__eq_(M0.arity_at_least_value(b3073), M0.arity_at_least_value(a3072) + d3066);
                    } else {
                        var if_res1667 = M0.ormap(function(a3075) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return includes_p3071(b3073, a3075);
                        }, a3072);
                    }
                    var if_res1668 = if_res1667;
                }
                var if_res1669 = if_res1668;
            } else {
                var if_res1669 = M0.andmap(function(b3076) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return includes_p3071(a3072, b3076);
                }, b3073);
            }
            var if_res1670 = if_res1669;
        }
        return if_res1670;
    };
    if (includes_p3071(b3065, a3064) !== false) {
        var if_res1671 = M0.rvoid();
    } else {
        var if_res1671 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc3061, wrap_proc3062, props3063);
    }
    if_res1671;
    if (subset_p(b_req3069, a_req3067) !== false) {
        var if_res1672 = M0.rvoid();
    } else {
        var if_res1672 = M0.__rjs_quoted__.raise_arguments_error_times_(name3060, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3062, $rjs_core.UString.make("original procedure"), proc3061);
    }
    if_res1672;
    var or_part3077 = M0.not(b_allow3070);
    if (or_part3077 !== false) {
        var if_res1674 = or_part3077;
    } else {
        if (a_allow3068 !== false) {
            var if_res1673 = subset_p(a_allow3068, b_allow3070);
        } else {
            var if_res1673 = false;
        }
        var if_res1674 = if_res1673;
    }
    if (if_res1674 !== false) {
        var if_res1675 = M0.rvoid();
    } else {
        var if_res1675 = M0.__rjs_quoted__.raise_arguments_error_times_(name3060, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3062, $rjs_core.UString.make("original procedure"), proc3061);
    }
    if_res1675;
    return M0.rvoid();
};
var normalize_proc = function(proc3078) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (keyword_procedure_p(proc3078) !== false) {
        var if_res1683 = proc3078;
    } else {
        if (new_procedure_p(proc3078) !== false) {
            var let_result1676 = procedure_keywords(proc3078);
            var req_kws3079 = let_result1676.getAt(0);
            var allowed_kws3080 = let_result1676.getAt(1);
            if (M0.null_p(allowed_kws3080) !== false) {
                var if_res1681 = proc3078;
            } else {
                var if_res1681 = make_optional_keyword_procedure(function(given_kws3081, given_argc3082) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.procedure_arity_includes_p(proc3078, given_argc3082 - 2, true) !== false) {
                        var or_part3083 = M0.not(allowed_kws3080);
                        if (or_part3083 !== false) {
                            var if_res1678 = or_part3083;
                        } else {
                            var if_res1678 = subset_p(given_kws3081, allowed_kws3080);
                        }
                        if (if_res1678 !== false) {
                            var if_res1679 = subset_p(req_kws3079, given_kws3081);
                        } else {
                            var if_res1679 = false;
                        }
                        var if_res1680 = if_res1679;
                    } else {
                        var if_res1680 = false;
                    }
                    return if_res1680;
                }, $rjs_core.attachProcedureArity(function(kws3084, kw_args3085, ...vals30861677) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var vals3086 = $rjs_core.Pair.listFromArray(vals30861677);
                    return keyword_apply(proc3078, kws3084, kw_args3085, vals3086);
                }), req_kws3079, allowed_kws3080, proc3078);
            }
            var if_res1682 = if_res1681;
        } else {
            var if_res1682 = proc3078;
        }
        var if_res1683 = if_res1682;
    }
    return if_res1683;
};
var __rjs_quoted__ = {};
__rjs_quoted__.make_optional_keyword_method = make_optional_keyword_method;
__rjs_quoted__.struct_keyword_procedure_by_arity_error = struct_keyword_procedure_by_arity_error;
__rjs_quoted__.prop_named_keyword_procedure = prop_named_keyword_procedure;
__rjs_quoted__.make_optional_keyword_procedure = make_optional_keyword_procedure;
__rjs_quoted__.struct_keyword_procedure = struct_keyword_procedure;
__rjs_quoted__.struct_keyword_method_by_arity_error = struct_keyword_method_by_arity_error;
__rjs_quoted__.subset_p = subset_p;
__rjs_quoted__.missing_kw = missing_kw;
__rjs_quoted__.subsets_p = subsets_p;
__rjs_quoted__.keyword_procedure_extract = keyword_procedure_extract;
export {
    __rjs_quoted__,
    new_impersonate_procedure_times_,
    new_chaperone_procedure_times_,
    new_unsafe_impersonate_procedure,
    new_impersonate_procedure,
    new_unsafe_chaperone_procedure,
    new_chaperone_procedure,
    new_procedure_realm,
    new_procedure_rename,
    new_procedure__gt_method,
    new_prop_procedure,
    procedure_reduce_keyword_arity_mask,
    procedure_reduce_keyword_arity,
    new_procedure_reduce_arity_mask,
    new_procedure_reduce_arity,
    procedure_keywords,
    keyword_apply,
    make_keyword_procedure
};