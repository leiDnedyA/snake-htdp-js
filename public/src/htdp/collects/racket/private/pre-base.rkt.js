import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var new_apply_proc = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3355, kw_args3356, proc3357, args3358, ...rest33591891) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3359 = $rjs_core.Pair.listFromArray(rest33591891);
    return M0.keyword_apply(proc3357, kws3355, kw_args3356, M1.apply(M1.list_times_, args3358, rest3359));
}), M1.apply);
var new_keyword_apply = M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3360, kw_args3361, proc3362, orig_kws3363, orig_kw_args3364, args3365, ...rest33661892) {
    if (arguments.length < 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rest3366 = $rjs_core.Pair.listFromArray(rest33661892);
    var loop3369 = function(kws3370, kw_args3371, kws23372, kw_args23373, swapped_p3374) {
        if (arguments.length !== 5) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(kws3370) !== false) {
            var if_res1897 = M1.values(kws23372, kw_args23373);
        } else {
            if (M1.null_p(kws23372) !== false) {
                var if_res1896 = M1.values(kws3370, kw_args3371);
            } else {
                if (M1.keyword_lt__p(M1.car(kws3370), M1.car(kws23372)) !== false) {
                    var let_result1893 = loop3369(M1.cdr(kws3370), M1.cdr(kw_args3371), kws23372, kw_args23373, false);
                    var res_kws3375 = let_result1893.getAt(0);
                    var res_kw_args3376 = let_result1893.getAt(1);
                    var if_res1895 = M1.values(M1.cons(M1.car(kws3370), res_kws3375), M1.cons(M1.car(kw_args3371), res_kw_args3376));
                } else {
                    if (swapped_p3374 !== false) {
                        var if_res1894 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M1.car(kws3370));
                    } else {
                        var if_res1894 = loop3369(kws23372, kw_args23373, kws3370, kw_args3371, true);
                    }
                    var if_res1895 = if_res1894;
                }
                var if_res1896 = if_res1895;
            }
            var if_res1897 = if_res1896;
        }
        return if_res1897;
    };
    var let_result1898 = loop3369(kws3360, kw_args3361, orig_kws3363, orig_kw_args3364, false);
    var kws3367 = let_result1898.getAt(0);
    var kw_args3368 = let_result1898.getAt(1);
    return M0.keyword_apply(proc3362, kws3367, kw_args3368, M1.apply(M1.list_times_, args3365, rest3366));
}), M0.keyword_apply);
var double_flonum_p = function(x3377) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.__rjs_quoted__.flonum_p(x3377);
};
var cl1899 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random();
};
var cl1900 = function(x3379) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.random(x3379);
};
var cl1901 = function(x3380, y3381) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(y3381) !== false) {
        if (M1.exact_integer_p(x3380) !== false) {
            var if_res1904 = M1.rvoid();
        } else {
            var if_res1904 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3380, y3381);
        }
        if_res1904;
        if (M1.__lt_(x3380, y3381) !== false) {
            var if_res1905 = M1.rvoid();
        } else {
            var if_res1905 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(x3380), $rjs_core.UString.make(")")), 1, x3380, y3381);
        }
        if_res1905;
        var d3382 = y3381 - x3380;
        if (M1.__lt__eq_(d3382, 4294967087) !== false) {
            var if_res1906 = M1.rvoid();
        } else {
            var if_res1906 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x3380, $rjs_core.UString.make("max"), y3381);
        }
        if_res1906;
        var if_res1911 = x3380 + M1.random(d3382);
    } else {
        if (M1.__rjs_quoted__.pseudo_random_generator_p(y3381) !== false) {
            if (M1.exact_integer_p(x3380) !== false) {
                var if_res1907 = M1.__lt__eq_(1, x3380, 4294967087);
            } else {
                var if_res1907 = false;
            }
            if (if_res1907 !== false) {
                var if_res1908 = M1.rvoid();
            } else {
                var if_res1908 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x3380, y3381);
            }
            if_res1908;
            var if_res1910 = M1.random(x3380, y3381);
        } else {
            if (M1.exact_integer_p(x3380) !== false) {
                var if_res1909 = M1.rvoid();
            } else {
                var if_res1909 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3380, y3381);
            }
            if_res1909;
            var if_res1910 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x3380, y3381);
        }
        var if_res1911 = if_res1910;
    }
    return if_res1911;
};
var cl1902 = function(min3383, max3384, prng3385) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_integer_p(min3383) !== false) {
        var if_res1912 = M1.rvoid();
    } else {
        var if_res1912 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min3383, max3384, prng3385);
    }
    if_res1912;
    if (M1.exact_integer_p(max3384) !== false) {
        var if_res1913 = M1.rvoid();
    } else {
        var if_res1913 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min3383, max3384, prng3385);
    }
    if_res1913;
    if (M1.__lt_(min3383, max3384) !== false) {
        var if_res1914 = M1.rvoid();
    } else {
        var if_res1914 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M1.string_append($rjs_core.UString.make("(>/c "), M1.number__gt_string(min3383), $rjs_core.UString.make(")")), 1, min3383, max3384, prng3385);
    }
    if_res1914;
    var d3386 = max3384 - min3383;
    if (M1.__lt__eq_(d3386, 4294967087) !== false) {
        var if_res1915 = M1.rvoid();
    } else {
        var if_res1915 = M1.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min3383, $rjs_core.UString.make("max"), max3384, $rjs_core.UString.make("rand-gen"), prng3385);
    }
    if_res1915;
    if (M1.__rjs_quoted__.pseudo_random_generator_p(prng3385) !== false) {
        var if_res1916 = M1.rvoid();
    } else {
        var if_res1916 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min3383, max3384, prng3385);
    }
    if_res1916;
    return min3383 + M1.random(d3386, prng3385);
};
var random3378 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1903 = {
        '0': cl1899,
        '1': cl1900,
        '2': cl1901,
        '3': cl1902
    } [arguments.length];
    if (fixed_lam1903 !== undefined) {
        return fixed_lam1903.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random3378;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};