import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
var cl954 = function(f2196, l2197) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res961 = true;
    } else {
        if (M1.procedure_p(f2196) !== false) {
            if (M1.procedure_arity_includes_p(f2196, 1) !== false) {
                var if_res959 = M1.list_p(l2197);
            } else {
                var if_res959 = false;
            }
            var if_res960 = if_res959;
        } else {
            var if_res960 = false;
        }
        var if_res961 = if_res960;
    }
    if (if_res961 !== false) {
        var loop2198 = function(l2199) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2199) !== false) {
                var if_res962 = M1.rnull;
            } else {
                var r2200 = M1.cdr(l2199);
                var if_res962 = M1.cons(f2196(M1.car(l2199)), loop2198(r2200));
            }
            return if_res962;
        };
        var if_res963 = loop2198(l2197);
    } else {
        var if_res963 = gen_map(f2196, M1.list(l2197));
    }
    return if_res963;
};
var cl955 = function(f2201, l12202, l22203) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res968 = true;
    } else {
        if (M1.procedure_p(f2201) !== false) {
            if (M1.procedure_arity_includes_p(f2201, 2) !== false) {
                if (M1.list_p(l12202) !== false) {
                    if (M1.list_p(l22203) !== false) {
                        var if_res964 = M1.__eq_(M1.length(l12202), M1.length(l22203));
                    } else {
                        var if_res964 = false;
                    }
                    var if_res965 = if_res964;
                } else {
                    var if_res965 = false;
                }
                var if_res966 = if_res965;
            } else {
                var if_res966 = false;
            }
            var if_res967 = if_res966;
        } else {
            var if_res967 = false;
        }
        var if_res968 = if_res967;
    }
    if (if_res968 !== false) {
        var loop2204 = function(l12205, l22206) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12205) !== false) {
                var if_res969 = M1.rnull;
            } else {
                var r12207 = M1.cdr(l12205);
                var r22208 = M1.cdr(l22206);
                var if_res969 = M1.cons(f2201(M1.car(l12205), M1.car(l22206)), loop2204(r12207, r22208));
            }
            return if_res969;
        };
        var if_res970 = loop2204(l12202, l22203);
    } else {
        var if_res970 = gen_map(f2201, M1.list(l12202, l22203));
    }
    return if_res970;
};
var cl956 = $rjs_core.attachProcedureArity(function(f2209, l2210, ...args2211971) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2211 = $rjs_core.Pair.listFromArray(args2211971);
    return gen_map(f2209, M1.cons(l2210, args2211));
});
var map2195 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam957 = {
        '2': cl954,
        '3': cl955
    } [arguments.length];
    if (fixed_lam957 !== undefined) {
        return fixed_lam957.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl956.length, 1) !== false) {
            var if_res958 = cl956.apply(null, arguments);
        } else {
            var if_res958 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res958;
    }
}, [M1.make_arity_at_least(2)]);
var map2 = map2195;
var cl972 = function(f2213, l2214) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res979 = true;
    } else {
        if (M1.procedure_p(f2213) !== false) {
            if (M1.procedure_arity_includes_p(f2213, 1) !== false) {
                var if_res977 = M1.list_p(l2214);
            } else {
                var if_res977 = false;
            }
            var if_res978 = if_res977;
        } else {
            var if_res978 = false;
        }
        var if_res979 = if_res978;
    }
    if (if_res979 !== false) {
        var loop2215 = function(l2216) {
            if (arguments.length !== 1) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l2216) !== false) {
                var if_res980 = M1.rvoid();
            } else {
                var r2217 = M1.cdr(l2216);
                f2213(M1.car(l2216));
                var if_res980 = loop2215(r2217);
            }
            return if_res980;
        };
        var if_res981 = loop2215(l2214);
    } else {
        var if_res981 = gen_for_each(f2213, M1.list(l2214));
    }
    return if_res981;
};
var cl973 = function(f2218, l12219, l22220) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res986 = true;
    } else {
        if (M1.procedure_p(f2218) !== false) {
            if (M1.procedure_arity_includes_p(f2218, 2) !== false) {
                if (M1.list_p(l12219) !== false) {
                    if (M1.list_p(l22220) !== false) {
                        var if_res982 = M1.__eq_(M1.length(l12219), M1.length(l22220));
                    } else {
                        var if_res982 = false;
                    }
                    var if_res983 = if_res982;
                } else {
                    var if_res983 = false;
                }
                var if_res984 = if_res983;
            } else {
                var if_res984 = false;
            }
            var if_res985 = if_res984;
        } else {
            var if_res985 = false;
        }
        var if_res986 = if_res985;
    }
    if (if_res986 !== false) {
        var loop2221 = function(l12222, l22223) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(l12222) !== false) {
                var if_res987 = M1.rvoid();
            } else {
                var r12224 = M1.cdr(l12222);
                var r22225 = M1.cdr(l22223);
                f2218(M1.car(l12222), M1.car(l22223));
                var if_res987 = loop2221(r12224, r22225);
            }
            return if_res987;
        };
        var if_res988 = loop2221(l12219, l22220);
    } else {
        var if_res988 = gen_for_each(f2218, M1.list(l12219, l22220));
    }
    return if_res988;
};
var cl974 = $rjs_core.attachProcedureArity(function(f2226, l2227, ...args2228989) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2228 = $rjs_core.Pair.listFromArray(args2228989);
    return gen_for_each(f2226, M1.cons(l2227, args2228));
});
var for_each2212 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam975 = {
        '2': cl972,
        '3': cl973
    } [arguments.length];
    if (fixed_lam975 !== undefined) {
        return fixed_lam975.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl974.length, 1) !== false) {
            var if_res976 = cl974.apply(null, arguments);
        } else {
            var if_res976 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res976;
    }
}, [M1.make_arity_at_least(2)]);
var for_each2 = for_each2212;
var cl990 = function(f2230, l2231) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res997 = true;
    } else {
        if (M1.procedure_p(f2230) !== false) {
            if (M1.procedure_arity_includes_p(f2230, 1) !== false) {
                var if_res995 = M1.list_p(l2231);
            } else {
                var if_res995 = false;
            }
            var if_res996 = if_res995;
        } else {
            var if_res996 = false;
        }
        var if_res997 = if_res996;
    }
    if (if_res997 !== false) {
        if (M1.null_p(l2231) !== false) {
            var if_res1000 = true;
        } else {
            var loop2232 = function(l2233) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2233)) !== false) {
                    var if_res999 = f2230(M1.car(l2233));
                } else {
                    var r2234 = M1.cdr(l2233);
                    if (f2230(M1.car(l2233)) !== false) {
                        var if_res998 = loop2232(r2234);
                    } else {
                        var if_res998 = false;
                    }
                    var if_res999 = if_res998;
                }
                return if_res999;
            };
            var if_res1000 = loop2232(l2231);
        }
        var if_res1001 = if_res1000;
    } else {
        var if_res1001 = gen_andmap(f2230, M1.list(l2231));
    }
    return if_res1001;
};
var cl991 = function(f2235, l12236, l22237) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1006 = true;
    } else {
        if (M1.procedure_p(f2235) !== false) {
            if (M1.procedure_arity_includes_p(f2235, 2) !== false) {
                if (M1.list_p(l12236) !== false) {
                    if (M1.list_p(l22237) !== false) {
                        var if_res1002 = M1.__eq_(M1.length(l12236), M1.length(l22237));
                    } else {
                        var if_res1002 = false;
                    }
                    var if_res1003 = if_res1002;
                } else {
                    var if_res1003 = false;
                }
                var if_res1004 = if_res1003;
            } else {
                var if_res1004 = false;
            }
            var if_res1005 = if_res1004;
        } else {
            var if_res1005 = false;
        }
        var if_res1006 = if_res1005;
    }
    if (if_res1006 !== false) {
        if (M1.null_p(l12236) !== false) {
            var if_res1009 = true;
        } else {
            var loop2238 = function(l12239, l22240) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12239)) !== false) {
                    var if_res1008 = f2235(M1.car(l12239), M1.car(l22240));
                } else {
                    var r12241 = M1.cdr(l12239);
                    var r22242 = M1.cdr(l22240);
                    if (f2235(M1.car(l12239), M1.car(l22240)) !== false) {
                        var if_res1007 = loop2238(r12241, r22242);
                    } else {
                        var if_res1007 = false;
                    }
                    var if_res1008 = if_res1007;
                }
                return if_res1008;
            };
            var if_res1009 = loop2238(l12236, l22237);
        }
        var if_res1010 = if_res1009;
    } else {
        var if_res1010 = gen_andmap(f2235, M1.list(l12236, l22237));
    }
    return if_res1010;
};
var cl992 = $rjs_core.attachProcedureArity(function(f2243, l2244, ...args22451011) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2245 = $rjs_core.Pair.listFromArray(args22451011);
    return gen_andmap(f2243, M1.cons(l2244, args2245));
});
var andmap2229 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam993 = {
        '2': cl990,
        '3': cl991
    } [arguments.length];
    if (fixed_lam993 !== undefined) {
        return fixed_lam993.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl992.length, 1) !== false) {
            var if_res994 = cl992.apply(null, arguments);
        } else {
            var if_res994 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res994;
    }
}, [M1.make_arity_at_least(2)]);
var andmap2 = andmap2229;
var cl1012 = function(f2247, l2248) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1019 = true;
    } else {
        if (M1.procedure_p(f2247) !== false) {
            if (M1.procedure_arity_includes_p(f2247, 1) !== false) {
                var if_res1017 = M1.list_p(l2248);
            } else {
                var if_res1017 = false;
            }
            var if_res1018 = if_res1017;
        } else {
            var if_res1018 = false;
        }
        var if_res1019 = if_res1018;
    }
    if (if_res1019 !== false) {
        if (M1.null_p(l2248) !== false) {
            var if_res1022 = false;
        } else {
            var loop2249 = function(l2250) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l2250)) !== false) {
                    var if_res1021 = f2247(M1.car(l2250));
                } else {
                    var r2251 = M1.cdr(l2250);
                    var or_part2252 = f2247(M1.car(l2250));
                    if (or_part2252 !== false) {
                        var if_res1020 = or_part2252;
                    } else {
                        var if_res1020 = loop2249(r2251);
                    }
                    var if_res1021 = if_res1020;
                }
                return if_res1021;
            };
            var if_res1022 = loop2249(l2248);
        }
        var if_res1023 = if_res1022;
    } else {
        var if_res1023 = gen_ormap(f2247, M1.list(l2248));
    }
    return if_res1023;
};
var cl1013 = function(f2253, l12254, l22255) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1028 = true;
    } else {
        if (M1.procedure_p(f2253) !== false) {
            if (M1.procedure_arity_includes_p(f2253, 2) !== false) {
                if (M1.list_p(l12254) !== false) {
                    if (M1.list_p(l22255) !== false) {
                        var if_res1024 = M1.__eq_(M1.length(l12254), M1.length(l22255));
                    } else {
                        var if_res1024 = false;
                    }
                    var if_res1025 = if_res1024;
                } else {
                    var if_res1025 = false;
                }
                var if_res1026 = if_res1025;
            } else {
                var if_res1026 = false;
            }
            var if_res1027 = if_res1026;
        } else {
            var if_res1027 = false;
        }
        var if_res1028 = if_res1027;
    }
    if (if_res1028 !== false) {
        if (M1.null_p(l12254) !== false) {
            var if_res1031 = false;
        } else {
            var loop2256 = function(l12257, l22258) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(M1.cdr(l12257)) !== false) {
                    var if_res1030 = f2253(M1.car(l12257), M1.car(l22258));
                } else {
                    var r12259 = M1.cdr(l12257);
                    var r22260 = M1.cdr(l22258);
                    var or_part2261 = f2253(M1.car(l12257), M1.car(l22258));
                    if (or_part2261 !== false) {
                        var if_res1029 = or_part2261;
                    } else {
                        var if_res1029 = loop2256(r12259, r22260);
                    }
                    var if_res1030 = if_res1029;
                }
                return if_res1030;
            };
            var if_res1031 = loop2256(l12254, l22255);
        }
        var if_res1032 = if_res1031;
    } else {
        var if_res1032 = gen_ormap(f2253, M1.list(l12254, l22255));
    }
    return if_res1032;
};
var cl1014 = $rjs_core.attachProcedureArity(function(f2262, l2263, ...args22641033) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var args2264 = $rjs_core.Pair.listFromArray(args22641033);
    return gen_ormap(f2262, M1.cons(l2263, args2264));
});
var ormap2246 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1015 = {
        '2': cl1012,
        '3': cl1013
    } [arguments.length];
    if (fixed_lam1015 !== undefined) {
        return fixed_lam1015.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1014.length, 1) !== false) {
            var if_res1016 = cl1014.apply(null, arguments);
        } else {
            var if_res1016 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1016;
    }
}, [M1.make_arity_at_least(2)]);
var ormap2 = ormap2246;
var check_args = function(who2265, f2266, ls2267) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2266) !== false) {
        var if_res1034 = M1.rvoid();
    } else {
        var if_res1034 = M1.raise_argument_error(who2265, $rjs_core.UString.make("procedure?"), f2266);
    }
    if_res1034;
    var loop2268 = function(prev_len2269, ls2270, i2271) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(ls2270) !== false) {
            var if_res1038 = M1.rvoid();
        } else {
            var l2272 = M1.car(ls2270);
            if (M1.list_p(l2272) !== false) {
                var if_res1035 = M1.rvoid();
            } else {
                var if_res1035 = M1.raise_argument_error(who2265, $rjs_core.UString.make("list?"), l2272);
            }
            if_res1035;
            var len2273 = M1.length(l2272);
            if (prev_len2269 !== false) {
                var if_res1036 = M1.not(M1.__eq_(len2273, prev_len2269));
            } else {
                var if_res1036 = false;
            }
            if (if_res1036 !== false) {
                var if_res1037 = M1.raise_arguments_error(who2265, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len2269, $rjs_core.UString.make("other list length"), len2273, $rjs_core.UString.make("procedure"), f2266);
            } else {
                var if_res1037 = M1.rvoid();
            }
            if_res1037;
            var if_res1038 = loop2268(len2273, M1.cdr(ls2270), M1.add1(i2271));
        }
        return if_res1038;
    };
    loop2268(false, ls2267, 1);
    if (M1.procedure_arity_includes_p(f2266, M1.length(ls2267)) !== false) {
        var if_res1055 = M1.rvoid();
    } else {
        var let_result1039 = M0.procedure_keywords(f2266);
        var required_keywords2274 = let_result1039.getAt(0);
        var optional_keywords2275 = let_result1039.getAt(1);
        if (M1.pair_p(required_keywords2274) !== false) {
            var if_res1054 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res1054 = M1.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp1053 = $rjs_core.UString.make("given procedure");
        var n2277 = M1.object_name(f2266);
        if (M1.symbol_p(n2277) !== false) {
            var if_res1050 = M1.symbol__gt_string(n2277);
        } else {
            var if_res1050 = false;
        }
        var or_part2276 = if_res1050;
        if (or_part2276 !== false) {
            var if_res1051 = or_part2276;
        } else {
            var if_res1051 = $rjs_core.UString.make("#<procedure>");
        }
        var temp1052 = M1.unquoted_printing_string(if_res1051);
        var a2278 = M1.procedure_arity(f2266);
        if (M1.pair_p(required_keywords2274) !== false) {
            var if_res1049 = M1.rnull;
        } else {
            if (M1.integer_p(a2278) !== false) {
                var if_res1048 = M1.list($rjs_core.UString.make("expected"), a2278);
            } else {
                if (M1.arity_at_least_p(a2278) !== false) {
                    var if_res1047 = M1.list($rjs_core.UString.make("expected"), M1.unquoted_printing_string(M1.string_append($rjs_core.UString.make("at least "), M1.number__gt_string(M1.arity_at_least_value(a2278)))));
                } else {
                    var if_res1047 = M1.rnull;
                }
                var if_res1048 = if_res1047;
            }
            var if_res1049 = if_res1048;
        }
        if (M1.pair_p(required_keywords2274) !== false) {
            var if_res1046 = M1.rnull;
        } else {
            var if_res1046 = M1.list($rjs_core.UString.make("given"), M1.length(ls2267));
        }
        if (M1.pair_p(required_keywords2274) !== false) {
            var temp1044 = $rjs_core.UString.make("required keywords");
            var loop2279 = function(kws2280) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(kws2280) !== false) {
                    var if_res1043 = M1.rnull;
                } else {
                    var if_res1043 = M1.list_times_($rjs_core.UString.make(" "), M1.string_append($rjs_core.UString.make("#:"), M1.__rjs_quoted__.keyword__gt_string(M1.car(kws2280))), loop2279(M1.cdr(kws2280)));
                }
                return if_res1043;
            };
            var if_res1045 = M1.list(temp1044, M1.unquoted_printing_string(M1.apply(M1.string_append, M1.cdr(loop2279(required_keywords2274)))));
        } else {
            var if_res1045 = M1.rnull;
        }
        var w2281 = M1.quotient(M1.error_print_width(), M1.length(ls2267));
        if (M1.__gt_(w2281, 10) !== false) {
            var temp1041 = $rjs_core.UString.make("argument lists...");
            var loop2282 = function(ls2283) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(ls2283) !== false) {
                    var if_res1040 = M1.rnull;
                } else {
                    var if_res1040 = M1.cons(M1.string_append($rjs_core.UString.make("\n   "), M1.error_value__gt_string_handler()(M1.car(ls2283), w2281)), loop2282(M1.cdr(ls2283)));
                }
                return if_res1040;
            };
            var if_res1042 = M1.list(temp1041, M1.unquoted_printing_string(M1.apply(M1.string_append, loop2282(ls2267))));
        } else {
            var if_res1042 = M1.rnull;
        }
        var if_res1055 = M1.apply(M1.raise_arguments_error, who2265, if_res1054, temp1053, temp1052, M1.append(if_res1049, if_res1046, if_res1045, if_res1042));
    }
    return if_res1055;
};
var gen_map = function(f2284, ls2285) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1056 = true;
    } else {
        var if_res1056 = check_args($rjs_core.PrimitiveSymbol.make("map"), f2284, ls2285);
    }
    if_res1056;
    var loop2286 = function(ls2287) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2287)) !== false) {
            var if_res1057 = M1.rnull;
        } else {
            var next_ls2288 = map2(M1.cdr, ls2287);
            var if_res1057 = M1.cons(M1.apply(f2284, map2(M1.car, ls2287)), loop2286(next_ls2288));
        }
        return if_res1057;
    };
    return loop2286(ls2285);
};
var gen_for_each = function(f2289, ls2290) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1058 = true;
    } else {
        var if_res1058 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f2289, ls2290);
    }
    if_res1058;
    var loop2291 = function(ls2292) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2292)) !== false) {
            var if_res1059 = M1.rvoid();
        } else {
            var next_ls2293 = map2(M1.cdr, ls2292);
            M1.apply(f2289, map2(M1.car, ls2292));
            var if_res1059 = loop2291(next_ls2293);
        }
        return if_res1059;
    };
    return loop2291(ls2290);
};
var gen_andmap = function(f2294, ls2295) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1060 = true;
    } else {
        var if_res1060 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f2294, ls2295);
    }
    if_res1060;
    var loop2296 = function(ls2297) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2297)) !== false) {
            var if_res1063 = true;
        } else {
            if (M1.null_p(M1.cdar(ls2297)) !== false) {
                var if_res1062 = M1.apply(f2294, map2(M1.car, ls2297));
            } else {
                var next_ls2298 = map2(M1.cdr, ls2297);
                if (M1.apply(f2294, map2(M1.car, ls2297)) !== false) {
                    var if_res1061 = loop2296(next_ls2298);
                } else {
                    var if_res1061 = false;
                }
                var if_res1062 = if_res1061;
            }
            var if_res1063 = if_res1062;
        }
        return if_res1063;
    };
    return loop2296(ls2295);
};
var gen_ormap = function(f2299, ls2300) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res1064 = true;
    } else {
        var if_res1064 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f2299, ls2300);
    }
    if_res1064;
    var loop2301 = function(ls2302) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(M1.car(ls2302)) !== false) {
            var if_res1067 = false;
        } else {
            if (M1.null_p(M1.cdar(ls2302)) !== false) {
                var if_res1066 = M1.apply(f2299, map2(M1.car, ls2302));
            } else {
                var next_ls2303 = map2(M1.cdr, ls2302);
                var or_part2304 = M1.apply(f2299, map2(M1.car, ls2302));
                if (or_part2304 !== false) {
                    var if_res1065 = or_part2304;
                } else {
                    var if_res1065 = loop2301(next_ls2303);
                }
                var if_res1066 = if_res1065;
            }
            var if_res1067 = if_res1066;
        }
        return if_res1067;
    };
    return loop2301(ls2300);
};
M1.rvoid();
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    ormap2 as ormap,
    andmap2 as andmap,
    for_each2 as for_each,
    map2 as map
};