import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./kw.rkt.js";
import * as M1 from "../../../runtime/kernel.rkt.js";
import * as M2 from "./pre-base.rkt.js";
import * as M3 from "./map.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "../../../runtime/unsafe.rkt.js";
import * as M6 from "./reverse.rkt.js";
var sort = function(cache_keys_p22306, key12307, lst52308, less_p62309) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var lst2310 = lst52308;
    var less_p2311 = less_p62309;
    if (false !== false) {
        var if_res1068 = false;
    } else {
        var if_res1068 = key12307;
    }
    var getkey2312 = if_res1068;
    if (false !== false) {
        var if_res1069 = false;
    } else {
        var if_res1069 = cache_keys_p22306;
    }
    var cache_keys_p2313 = if_res1069;
    if (M1.list_p(lst2310) !== false) {
        var if_res1070 = M1.rvoid();
    } else {
        var if_res1070 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst2310);
    }
    if_res1070;
    if (M1.procedure_p(less_p2311) !== false) {
        var if_res1071 = M1.procedure_arity_includes_p(less_p2311, 2);
    } else {
        var if_res1071 = false;
    }
    if (if_res1071 !== false) {
        var if_res1072 = M1.rvoid();
    } else {
        var if_res1072 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p2311);
    }
    if_res1072;
    if (getkey2312 !== false) {
        if (M1.procedure_p(getkey2312) !== false) {
            var if_res1073 = M1.procedure_arity_includes_p(getkey2312, 1);
        } else {
            var if_res1073 = false;
        }
        var if_res1074 = M1.not(if_res1073);
    } else {
        var if_res1074 = false;
    }
    if (if_res1074 !== false) {
        var if_res1075 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey2312);
    } else {
        var if_res1075 = M1.rvoid();
    }
    if_res1075;
    if (getkey2312 !== false) {
        var if_res1076 = M4.sort(lst2310, less_p2311, getkey2312, cache_keys_p2313);
    } else {
        var if_res1076 = M4.sort(lst2310, less_p2311);
    }
    return if_res1076;
};
var sort2305 = function(given_kws2314, given_args2315, lst52316, less_p62317) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.pair_p(given_kws2314) !== false) {
        var if_res1077 = M1.eq_p($rjs_core.Keyword.make("cache-keys?"), M1.car(given_kws2314));
    } else {
        var if_res1077 = false;
    }
    var cache_keys_p42318 = if_res1077;
    if (cache_keys_p42318 !== false) {
        var if_res1078 = M1.car(given_args2315);
    } else {
        var if_res1078 = false;
    }
    var cache_keys_p22319 = if_res1078;
    if (cache_keys_p42318 !== false) {
        var if_res1079 = M1.cdr(given_kws2314);
    } else {
        var if_res1079 = given_kws2314;
    }
    var kws1406942320 = if_res1079;
    if (cache_keys_p42318 !== false) {
        var if_res1080 = M1.cdr(given_args2315);
    } else {
        var if_res1080 = given_args2315;
    }
    var kw_args1406952321 = if_res1080;
    var key32322 = M1.pair_p(kws1406942320);
    if (key32322 !== false) {
        var if_res1081 = M1.car(kw_args1406952321);
    } else {
        var if_res1081 = false;
    }
    var key12323 = if_res1081;
    return sort(cache_keys_p22319, key12323, lst52316, less_p62317);
};
var cl1085 = function(given_kws2330, given_args2331, lst2332, less_p2333) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2305(given_kws2330, given_args2331, lst2332, less_p2333);
};
var temp1087 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1086 = {
        '4': cl1085
    } [arguments.length];
    if (fixed_lam1086 !== undefined) {
        return fixed_lam1086.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp1084 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl1082 = function(lst2334, less_p2335) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return sort2305(M1.rnull, M1.rnull, lst2334, less_p2335);
};
var sort7 = M0.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2324, given_argc2325) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.__eq_(given_argc2325, 4) !== false) {
        var l11406962326 = given_kws2324;
        if (M1.null_p(l11406962326) !== false) {
            var if_res1089 = l11406962326;
        } else {
            if (M1.eq_p(M1.car(l11406962326), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res1088 = M1.cdr(l11406962326);
            } else {
                var if_res1088 = l11406962326;
            }
            var if_res1089 = if_res1088;
        }
        var l11406962327 = if_res1089;
        var l11406972328 = l11406962327;
        if (M1.null_p(l11406972328) !== false) {
            var if_res1091 = l11406972328;
        } else {
            if (M1.eq_p(M1.car(l11406972328), $rjs_core.Keyword.make("key")) !== false) {
                var if_res1090 = M1.cdr(l11406972328);
            } else {
                var if_res1090 = l11406972328;
            }
            var if_res1091 = if_res1090;
        }
        var l11406972329 = if_res1091;
        var if_res1092 = M1.null_p(l11406972329);
    } else {
        var if_res1092 = false;
    }
    return if_res1092;
}, temp1087, M1.rnull, temp1084, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1083 = {
        '2': cl1082
    } [arguments.length];
    if (fixed_lam1083 !== undefined) {
        return fixed_lam1083.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who2336, item2337, list2338, equal_p2339) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(list2338) !== false) {
        var if_res1093 = M1.rvoid();
    } else {
        var if_res1093 = M1.raise_argument_error(who2336, $rjs_core.UString.make("list?"), list2338);
    }
    if_res1093;
    var loop2340 = function(list2341) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(list2341) !== false) {
            var if_res1096 = list2341;
        } else {
            if (equal_p2339(item2337, M1.car(list2341)) !== false) {
                var if_res1095 = M1.cdr(list2341);
            } else {
                var next2342 = loop2340(M1.cdr(list2341));
                if (M1.eq_p(next2342, M1.cdr(list2341)) !== false) {
                    var if_res1094 = list2341;
                } else {
                    var if_res1094 = M1.cons(M1.car(list2341), next2342);
                }
                var if_res1095 = if_res1094;
            }
            var if_res1096 = if_res1095;
        }
        return if_res1096;
    };
    return loop2340(list2338);
};
var cl1097 = function(item2343, list2344) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2343, list2344, M1.equal_p);
};
var cl1098 = function(item2345, list2346, equal_p2347) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2347) !== false) {
        var if_res1100 = M1.procedure_arity_includes_p(equal_p2347, 2);
    } else {
        var if_res1100 = false;
    }
    if (if_res1100 !== false) {
        var if_res1101 = M1.rvoid();
    } else {
        var if_res1101 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2347);
    }
    if_res1101;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item2345, list2346, equal_p2347);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1099 = {
        '2': cl1097,
        '3': cl1098
    } [arguments.length];
    if (fixed_lam1099 !== undefined) {
        return fixed_lam1099.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item2348, list2349) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item2348, list2349, M1.eq_p);
};
var remv = function(item2350, list2351) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item2350, list2351, M1.eqv_p);
};
var remw = function(item2352, list2353) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item2352, list2353, M1.equal_always_p);
};
var do_remove_times_ = function(who2354, l2355, r2356, equal_p2357) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.list_p(l2355) !== false) {
        var if_res1102 = M1.rvoid();
    } else {
        var if_res1102 = M1.raise_argument_error(who2354, $rjs_core.UString.make("list?"), l2355);
    }
    if_res1102;
    if (M1.list_p(r2356) !== false) {
        var if_res1103 = M1.rvoid();
    } else {
        var if_res1103 = M1.raise_argument_error(who2354, $rjs_core.UString.make("list?"), r2356);
    }
    if_res1103;
    var rloop2358 = function(r2359) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(r2359) !== false) {
            var if_res1107 = r2359;
        } else {
            var first_r2360 = M1.car(r2359);
            var loop2361 = function(l_rest2362) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.null_p(l_rest2362) !== false) {
                    var next2363 = rloop2358(M1.cdr(r2359));
                    if (M1.eq_p(next2363, M1.cdr(r2359)) !== false) {
                        var if_res1104 = r2359;
                    } else {
                        var if_res1104 = M1.cons(first_r2360, next2363);
                    }
                    var if_res1106 = if_res1104;
                } else {
                    if (equal_p2357(M1.car(l_rest2362), first_r2360) !== false) {
                        var if_res1105 = rloop2358(M1.cdr(r2359));
                    } else {
                        var if_res1105 = loop2361(M1.cdr(l_rest2362));
                    }
                    var if_res1106 = if_res1105;
                }
                return if_res1106;
            };
            var if_res1107 = loop2361(l2355);
        }
        return if_res1107;
    };
    return rloop2358(r2356);
};
var cl1108 = function(l2364, r2365) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2364, r2365, M1.equal_p);
};
var cl1109 = function(l2366, r2367, equal_p2368) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(equal_p2368) !== false) {
        var if_res1111 = M1.procedure_arity_includes_p(equal_p2368, 2);
    } else {
        var if_res1111 = false;
    }
    if (if_res1111 !== false) {
        var if_res1112 = M1.rvoid();
    } else {
        var if_res1112 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p2368);
    }
    if_res1112;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l2366, r2367, equal_p2368);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1110 = {
        '2': cl1108,
        '3': cl1109
    } [arguments.length];
    if (fixed_lam1110 !== undefined) {
        return fixed_lam1110.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l2369, r2370) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l2369, r2370, M1.eq_p);
};
var remv_times_ = function(l2371, r2372) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l2371, r2372, M1.eqv_p);
};
var remw_times_ = function(l2373, r2374) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l2373, r2374, M1.equal_always_p);
};
var memf = function(f2375, list2376) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2375) !== false) {
        var if_res1113 = M1.procedure_arity_includes_p(f2375, 1);
    } else {
        var if_res1113 = false;
    }
    if (if_res1113 !== false) {
        var if_res1114 = M1.rvoid();
    } else {
        var if_res1114 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f2375);
    }
    if_res1114;
    var loop2377 = function(l2378) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2378) !== false) {
            var if_res1117 = false;
        } else {
            if (M1.not(M1.pair_p(l2378)) !== false) {
                var if_res1116 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list2376);
            } else {
                if (f2375(M1.car(l2378)) !== false) {
                    var if_res1115 = l2378;
                } else {
                    var if_res1115 = loop2377(M1.cdr(l2378));
                }
                var if_res1116 = if_res1115;
            }
            var if_res1117 = if_res1116;
        }
        return if_res1117;
    };
    return loop2377(list2376);
};
var findf = function(f2379, list2380) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2379) !== false) {
        var if_res1118 = M1.procedure_arity_includes_p(f2379, 1);
    } else {
        var if_res1118 = false;
    }
    if (if_res1118 !== false) {
        var if_res1119 = M1.rvoid();
    } else {
        var if_res1119 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2379);
    }
    if_res1119;
    var loop2381 = function(l2382) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2382) !== false) {
            var if_res1122 = false;
        } else {
            if (M1.not(M1.pair_p(l2382)) !== false) {
                var if_res1121 = M1.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list2380);
            } else {
                var a2383 = M1.car(l2382);
                if (f2379(a2383) !== false) {
                    var if_res1120 = a2383;
                } else {
                    var if_res1120 = loop2381(M1.cdr(l2382));
                }
                var if_res1121 = if_res1120;
            }
            var if_res1122 = if_res1121;
        }
        return if_res1122;
    };
    return loop2381(list2380);
};
var bad_list = function(who2384, orig_l2385) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_mismatch_error(who2384, $rjs_core.UString.make("not a proper list: "), orig_l2385);
};
var bad_item = function(who2386, a2387, orig_l2388) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.raise_arguments_error(who2386, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a2387, $rjs_core.UString.make("list"), orig_l2388);
};
var assq2389 = function(x2394, l2395) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2396 = function(l2397, t2398) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2397) !== false) {
            var a2399 = M5.unsafe_car(l2397);
            if (M1.pair_p(a2399) !== false) {
                if (M1.eq_p(x2394, M5.unsafe_car(a2399)) !== false) {
                    var if_res1128 = a2399;
                } else {
                    var l2400 = M5.unsafe_cdr(l2397);
                    if (M1.pair_p(l2400) !== false) {
                        var a2401 = M5.unsafe_car(l2400);
                        if (M1.pair_p(a2401) !== false) {
                            if (M1.eq_p(x2394, M5.unsafe_car(a2401)) !== false) {
                                var if_res1124 = a2401;
                            } else {
                                var t2402 = M5.unsafe_cdr(t2398);
                                var l2403 = M5.unsafe_cdr(l2400);
                                if (M1.eq_p(l2403, t2402) !== false) {
                                    var if_res1123 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2395);
                                } else {
                                    var if_res1123 = loop2396(l2403, t2402);
                                }
                                var if_res1124 = if_res1123;
                            }
                            var if_res1125 = if_res1124;
                        } else {
                            var if_res1125 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2401, l2395);
                        }
                        var if_res1127 = if_res1125;
                    } else {
                        if (M1.null_p(l2400) !== false) {
                            var if_res1126 = false;
                        } else {
                            var if_res1126 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2395);
                        }
                        var if_res1127 = if_res1126;
                    }
                    var if_res1128 = if_res1127;
                }
                var if_res1129 = if_res1128;
            } else {
                var if_res1129 = bad_item($rjs_core.PrimitiveSymbol.make("assq"), a2399, l2395);
            }
            var if_res1131 = if_res1129;
        } else {
            if (M1.null_p(l2397) !== false) {
                var if_res1130 = false;
            } else {
                var if_res1130 = bad_list($rjs_core.PrimitiveSymbol.make("assq"), l2395);
            }
            var if_res1131 = if_res1130;
        }
        return if_res1131;
    };
    return loop2396(l2395, l2395);
};
var assv2390 = function(x2404, l2405) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2406 = function(l2407, t2408) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2407) !== false) {
            var a2409 = M5.unsafe_car(l2407);
            if (M1.pair_p(a2409) !== false) {
                if (M1.eqv_p(x2404, M5.unsafe_car(a2409)) !== false) {
                    var if_res1137 = a2409;
                } else {
                    var l2410 = M5.unsafe_cdr(l2407);
                    if (M1.pair_p(l2410) !== false) {
                        var a2411 = M5.unsafe_car(l2410);
                        if (M1.pair_p(a2411) !== false) {
                            if (M1.eqv_p(x2404, M5.unsafe_car(a2411)) !== false) {
                                var if_res1133 = a2411;
                            } else {
                                var t2412 = M5.unsafe_cdr(t2408);
                                var l2413 = M5.unsafe_cdr(l2410);
                                if (M1.eq_p(l2413, t2412) !== false) {
                                    var if_res1132 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2405);
                                } else {
                                    var if_res1132 = loop2406(l2413, t2412);
                                }
                                var if_res1133 = if_res1132;
                            }
                            var if_res1134 = if_res1133;
                        } else {
                            var if_res1134 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2411, l2405);
                        }
                        var if_res1136 = if_res1134;
                    } else {
                        if (M1.null_p(l2410) !== false) {
                            var if_res1135 = false;
                        } else {
                            var if_res1135 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2405);
                        }
                        var if_res1136 = if_res1135;
                    }
                    var if_res1137 = if_res1136;
                }
                var if_res1138 = if_res1137;
            } else {
                var if_res1138 = bad_item($rjs_core.PrimitiveSymbol.make("assv"), a2409, l2405);
            }
            var if_res1140 = if_res1138;
        } else {
            if (M1.null_p(l2407) !== false) {
                var if_res1139 = false;
            } else {
                var if_res1139 = bad_list($rjs_core.PrimitiveSymbol.make("assv"), l2405);
            }
            var if_res1140 = if_res1139;
        }
        return if_res1140;
    };
    return loop2406(l2405, l2405);
};
var assw2391 = function(x2414, l2415) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2416 = function(l2417, t2418) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2417) !== false) {
            var a2419 = M5.unsafe_car(l2417);
            if (M1.pair_p(a2419) !== false) {
                if (M1.equal_always_p(x2414, M5.unsafe_car(a2419)) !== false) {
                    var if_res1146 = a2419;
                } else {
                    var l2420 = M5.unsafe_cdr(l2417);
                    if (M1.pair_p(l2420) !== false) {
                        var a2421 = M5.unsafe_car(l2420);
                        if (M1.pair_p(a2421) !== false) {
                            if (M1.equal_always_p(x2414, M5.unsafe_car(a2421)) !== false) {
                                var if_res1142 = a2421;
                            } else {
                                var t2422 = M5.unsafe_cdr(t2418);
                                var l2423 = M5.unsafe_cdr(l2420);
                                if (M1.eq_p(l2423, t2422) !== false) {
                                    var if_res1141 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2415);
                                } else {
                                    var if_res1141 = loop2416(l2423, t2422);
                                }
                                var if_res1142 = if_res1141;
                            }
                            var if_res1143 = if_res1142;
                        } else {
                            var if_res1143 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2421, l2415);
                        }
                        var if_res1145 = if_res1143;
                    } else {
                        if (M1.null_p(l2420) !== false) {
                            var if_res1144 = false;
                        } else {
                            var if_res1144 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2415);
                        }
                        var if_res1145 = if_res1144;
                    }
                    var if_res1146 = if_res1145;
                }
                var if_res1147 = if_res1146;
            } else {
                var if_res1147 = bad_item($rjs_core.PrimitiveSymbol.make("assw"), a2419, l2415);
            }
            var if_res1149 = if_res1147;
        } else {
            if (M1.null_p(l2417) !== false) {
                var if_res1148 = false;
            } else {
                var if_res1148 = bad_list($rjs_core.PrimitiveSymbol.make("assw"), l2415);
            }
            var if_res1149 = if_res1148;
        }
        return if_res1149;
    };
    return loop2416(l2415, l2415);
};
var cl1150 = function(x2424, l2425) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2426 = function(l2427, t2428) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2427) !== false) {
            var a2429 = M5.unsafe_car(l2427);
            if (M1.pair_p(a2429) !== false) {
                if (M1.equal_p(x2424, M5.unsafe_car(a2429)) !== false) {
                    var if_res1158 = a2429;
                } else {
                    var l2430 = M5.unsafe_cdr(l2427);
                    if (M1.pair_p(l2430) !== false) {
                        var a2431 = M5.unsafe_car(l2430);
                        if (M1.pair_p(a2431) !== false) {
                            if (M1.equal_p(x2424, M5.unsafe_car(a2431)) !== false) {
                                var if_res1154 = a2431;
                            } else {
                                var t2432 = M5.unsafe_cdr(t2428);
                                var l2433 = M5.unsafe_cdr(l2430);
                                if (M1.eq_p(l2433, t2432) !== false) {
                                    var if_res1153 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2425);
                                } else {
                                    var if_res1153 = loop2426(l2433, t2432);
                                }
                                var if_res1154 = if_res1153;
                            }
                            var if_res1155 = if_res1154;
                        } else {
                            var if_res1155 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2431, l2425);
                        }
                        var if_res1157 = if_res1155;
                    } else {
                        if (M1.null_p(l2430) !== false) {
                            var if_res1156 = false;
                        } else {
                            var if_res1156 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2425);
                        }
                        var if_res1157 = if_res1156;
                    }
                    var if_res1158 = if_res1157;
                }
                var if_res1159 = if_res1158;
            } else {
                var if_res1159 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2429, l2425);
            }
            var if_res1161 = if_res1159;
        } else {
            if (M1.null_p(l2427) !== false) {
                var if_res1160 = false;
            } else {
                var if_res1160 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2425);
            }
            var if_res1161 = if_res1160;
        }
        return if_res1161;
    };
    return loop2426(l2425, l2425);
};
var cl1151 = function(x2434, l2435, is_equal_p2436) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(is_equal_p2436) !== false) {
        var if_res1162 = M1.procedure_arity_includes_p(is_equal_p2436, 2);
    } else {
        var if_res1162 = false;
    }
    if (if_res1162 !== false) {
        var if_res1163 = M1.rvoid();
    } else {
        var if_res1163 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p2436);
    }
    if_res1163;
    var loop2437 = function(l2438, t2439) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2438) !== false) {
            var a2440 = M5.unsafe_car(l2438);
            if (M1.pair_p(a2440) !== false) {
                if (is_equal_p2436(x2434, M5.unsafe_car(a2440)) !== false) {
                    var if_res1169 = a2440;
                } else {
                    var l2441 = M5.unsafe_cdr(l2438);
                    if (M1.pair_p(l2441) !== false) {
                        var a2442 = M5.unsafe_car(l2441);
                        if (M1.pair_p(a2442) !== false) {
                            if (is_equal_p2436(x2434, M5.unsafe_car(a2442)) !== false) {
                                var if_res1165 = a2442;
                            } else {
                                var t2443 = M5.unsafe_cdr(t2439);
                                var l2444 = M5.unsafe_cdr(l2441);
                                if (M1.eq_p(l2444, t2443) !== false) {
                                    var if_res1164 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2435);
                                } else {
                                    var if_res1164 = loop2437(l2444, t2443);
                                }
                                var if_res1165 = if_res1164;
                            }
                            var if_res1166 = if_res1165;
                        } else {
                            var if_res1166 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2442, l2435);
                        }
                        var if_res1168 = if_res1166;
                    } else {
                        if (M1.null_p(l2441) !== false) {
                            var if_res1167 = false;
                        } else {
                            var if_res1167 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2435);
                        }
                        var if_res1168 = if_res1167;
                    }
                    var if_res1169 = if_res1168;
                }
                var if_res1170 = if_res1169;
            } else {
                var if_res1170 = bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a2440, l2435);
            }
            var if_res1172 = if_res1170;
        } else {
            if (M1.null_p(l2438) !== false) {
                var if_res1171 = false;
            } else {
                var if_res1171 = bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l2435);
            }
            var if_res1172 = if_res1171;
        }
        return if_res1172;
    };
    return loop2437(l2435, l2435);
};
var assoc2392 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1152 = {
        '2': cl1150,
        '3': cl1151
    } [arguments.length];
    if (fixed_lam1152 !== undefined) {
        return fixed_lam1152.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf2393 = function(f2445, l2446) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2445) !== false) {
        var if_res1173 = M1.procedure_arity_includes_p(f2445, 1);
    } else {
        var if_res1173 = false;
    }
    if (if_res1173 !== false) {
        var if_res1174 = M1.rvoid();
    } else {
        var if_res1174 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2445);
    }
    if_res1174;
    var loop2447 = function(l2448, t2449) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(l2448) !== false) {
            var a2450 = M5.unsafe_car(l2448);
            if (M1.pair_p(a2450) !== false) {
                if ((function(_2451, a2452) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2445(a2452);
                    })(false, M5.unsafe_car(a2450)) !== false) {
                    var if_res1180 = a2450;
                } else {
                    var l2453 = M5.unsafe_cdr(l2448);
                    if (M1.pair_p(l2453) !== false) {
                        var a2454 = M5.unsafe_car(l2453);
                        if (M1.pair_p(a2454) !== false) {
                            if ((function(_2455, a2456) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    return f2445(a2456);
                                })(false, M5.unsafe_car(a2454)) !== false) {
                                var if_res1176 = a2454;
                            } else {
                                var t2457 = M5.unsafe_cdr(t2449);
                                var l2458 = M5.unsafe_cdr(l2453);
                                if (M1.eq_p(l2458, t2457) !== false) {
                                    var if_res1175 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2446);
                                } else {
                                    var if_res1175 = loop2447(l2458, t2457);
                                }
                                var if_res1176 = if_res1175;
                            }
                            var if_res1177 = if_res1176;
                        } else {
                            var if_res1177 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2454, l2446);
                        }
                        var if_res1179 = if_res1177;
                    } else {
                        if (M1.null_p(l2453) !== false) {
                            var if_res1178 = false;
                        } else {
                            var if_res1178 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2446);
                        }
                        var if_res1179 = if_res1178;
                    }
                    var if_res1180 = if_res1179;
                }
                var if_res1181 = if_res1180;
            } else {
                var if_res1181 = bad_item($rjs_core.PrimitiveSymbol.make("assf"), a2450, l2446);
            }
            var if_res1183 = if_res1181;
        } else {
            if (M1.null_p(l2448) !== false) {
                var if_res1182 = false;
            } else {
                var if_res1182 = bad_list($rjs_core.PrimitiveSymbol.make("assf"), l2446);
            }
            var if_res1183 = if_res1182;
        }
        return if_res1183;
    };
    return loop2447(l2446, l2446);
};
var let_result1184 = M1.values(assq2389, assv2390, assw2391, assoc2392, assf2393);
var assq = let_result1184.getAt(0);
var assv = let_result1184.getAt(1);
var assw = let_result1184.getAt(2);
var assoc = let_result1184.getAt(3);
var assf = let_result1184.getAt(4);
var mapadd = function(f2459, l2460, last2461) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var loop2462 = function(l2463) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2463) !== false) {
            var if_res1185 = M1.list(last2461);
        } else {
            var if_res1185 = M1.cons(f2459(M1.car(l2463)), loop2462(M1.cdr(l2463)));
        }
        return if_res1185;
    };
    return loop2462(l2460);
};
var check_fold = function(name2464, proc2465, init2466, l2467, more2468) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(proc2465) !== false) {
        var if_res1186 = M1.rvoid();
    } else {
        var if_res1186 = M1.apply(M1.raise_argument_error, name2464, $rjs_core.UString.make("procedure?"), 0, proc2465, init2466, l2467, more2468);
    }
    if_res1186;
    if (M1.list_p(l2467) !== false) {
        var if_res1187 = M1.rvoid();
    } else {
        var if_res1187 = M1.apply(M1.raise_argument_error, name2464, $rjs_core.UString.make("list?"), 2, proc2465, init2466, l2467, more2468);
    }
    if_res1187;
    if (M1.null_p(more2468) !== false) {
        if (M1.procedure_arity_includes_p(proc2465, 2) !== false) {
            var if_res1188 = M1.rvoid();
        } else {
            var if_res1188 = M1.raise_mismatch_error(name2464, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc2465);
        }
        var if_res1193 = if_res1188;
    } else {
        var len2469 = M1.length(l2467);
        var loop2470 = function(remaining2471, n2472) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(remaining2471) !== false) {
                var if_res1191 = M1.rvoid();
            } else {
                if (M1.list_p(M1.car(remaining2471)) !== false) {
                    var if_res1189 = M1.rvoid();
                } else {
                    var if_res1189 = M1.apply(M1.raise_argument_error, name2464, $rjs_core.UString.make("list?"), n2472, proc2465, init2466, l2467, more2468);
                }
                if_res1189;
                if (M1.__eq_(len2469, M1.length(M1.car(remaining2471))) !== false) {
                    var if_res1190 = M1.rvoid();
                } else {
                    var if_res1190 = M1.raise_mismatch_error(name2464, $rjs_core.UString.make("given list does not have the same size as the first list: "), M1.car(remaining2471));
                }
                if_res1190;
                var if_res1191 = loop2470(M1.cdr(remaining2471), M1.add1(n2472));
            }
            return if_res1191;
        };
        loop2470(more2468, 3);
        if (M1.procedure_arity_includes_p(proc2465, 2 + M1.length(more2468)) !== false) {
            var if_res1192 = M1.rvoid();
        } else {
            var if_res1192 = M1.raise_mismatch_error(name2464, M1.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M1.length(more2468)), proc2465);
        }
        var if_res1193 = if_res1192;
    }
    return if_res1193;
};
var cl1194 = function(f2473, init2474, l2475) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2473, init2474, l2475, M1.rnull);
    var loop2476 = function(init2477, l2478) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2478) !== false) {
            var if_res1198 = init2477;
        } else {
            var if_res1198 = loop2476(f2473(M1.car(l2478), init2477), M1.cdr(l2478));
        }
        return if_res1198;
    };
    return loop2476(init2474, l2475);
};
var cl1195 = $rjs_core.attachProcedureArity(function(f2479, init2480, l2481, ...ls24821199) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2482 = $rjs_core.Pair.listFromArray(ls24821199);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f2479, init2480, l2481, ls2482);
    var loop2483 = function(init2484, ls2485) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2485)) !== false) {
            var if_res1200 = loop2483(M1.apply(f2479, mapadd(M1.car, ls2485, init2484)), M3.map(M1.cdr, ls2485));
        } else {
            var if_res1200 = init2484;
        }
        return if_res1200;
    };
    return loop2483(init2480, M1.cons(l2481, ls2482));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1196 = {
        '3': cl1194
    } [arguments.length];
    if (fixed_lam1196 !== undefined) {
        return fixed_lam1196.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1195.length, 1) !== false) {
            var if_res1197 = cl1195.apply(null, arguments);
        } else {
            var if_res1197 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1197;
    }
}, [M1.make_arity_at_least(3)]);
var cl1201 = function(f2486, init2487, l2488) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2486, init2487, l2488, M1.rnull);
    var loop2489 = function(init2490, l2491) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2491) !== false) {
            var if_res1205 = init2490;
        } else {
            var if_res1205 = f2486(M1.car(l2491), loop2489(init2490, M1.cdr(l2491)));
        }
        return if_res1205;
    };
    return loop2489(init2487, l2488);
};
var cl1202 = $rjs_core.attachProcedureArity(function(f2492, init2493, l2494, ...ls24951206) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var ls2495 = $rjs_core.Pair.listFromArray(ls24951206);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f2492, init2493, l2494, ls2495);
    var loop2496 = function(ls2497) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(M1.car(ls2497)) !== false) {
            var if_res1207 = M1.apply(f2492, mapadd(M1.car, ls2497, loop2496(M3.map(M1.cdr, ls2497))));
        } else {
            var if_res1207 = init2493;
        }
        return if_res1207;
    };
    return loop2496(M1.cons(l2494, ls2495));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1203 = {
        '3': cl1201
    } [arguments.length];
    if (fixed_lam1203 !== undefined) {
        return fixed_lam1203.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1202.length, 1) !== false) {
            var if_res1204 = cl1202.apply(null, arguments);
        } else {
            var if_res1204 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1204;
    }
}, [M1.make_arity_at_least(3)]);
var filter = function(f2498, list2499) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2498) !== false) {
        var if_res1208 = M1.procedure_arity_includes_p(f2498, 1);
    } else {
        var if_res1208 = false;
    }
    if (if_res1208 !== false) {
        var if_res1209 = M1.rvoid();
    } else {
        var if_res1209 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f2498);
    }
    if_res1209;
    if (M1.list_p(list2499) !== false) {
        var if_res1210 = M1.rvoid();
    } else {
        var if_res1210 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list2499);
    }
    if_res1210;
    var loop2500 = function(l2501, result2502) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.null_p(l2501) !== false) {
            var if_res1213 = M6.alt_reverse(result2502);
        } else {
            var temp1212 = M1.cdr(l2501);
            if (f2498(M1.car(l2501)) !== false) {
                var if_res1211 = M1.cons(M1.car(l2501), result2502);
            } else {
                var if_res1211 = result2502;
            }
            var if_res1213 = loop2500(temp1212, if_res1211);
        }
        return if_res1213;
    };
    return loop2500(list2499, M1.rnull);
};
var build_vector = function(n2503, fcn2504) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2503) !== false) {
        var if_res1214 = M1.rvoid();
    } else {
        var if_res1214 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2503);
    }
    if_res1214;
    if (M1.procedure_p(fcn2504) !== false) {
        var if_res1215 = M1.procedure_arity_includes_p(fcn2504, 1);
    } else {
        var if_res1215 = false;
    }
    if (if_res1215 !== false) {
        var if_res1216 = M1.rvoid();
    } else {
        var if_res1216 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2504);
    }
    if_res1216;
    var vec2505 = M1.make_vector(n2503);
    var loop2506 = function(i2507) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2507, n2503) !== false) {
            var if_res1217 = vec2505;
        } else {
            M1.vector_set_bang_(vec2505, i2507, fcn2504(i2507));
            var if_res1217 = loop2506(M1.add1(i2507));
        }
        return if_res1217;
    };
    return loop2506(0);
};
var build_string = function(n2508, fcn2509) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2508) !== false) {
        var if_res1218 = M1.rvoid();
    } else {
        var if_res1218 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2508);
    }
    if_res1218;
    if (M1.procedure_p(fcn2509) !== false) {
        var if_res1219 = M1.procedure_arity_includes_p(fcn2509, 1);
    } else {
        var if_res1219 = false;
    }
    if (if_res1219 !== false) {
        var if_res1220 = M1.rvoid();
    } else {
        var if_res1220 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn2509);
    }
    if_res1220;
    var str2510 = M1.make_string(n2508);
    var loop2511 = function(i2512) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__eq_(i2512, n2508) !== false) {
            var if_res1221 = str2510;
        } else {
            M1.string_set_bang_(str2510, i2512, fcn2509(i2512));
            var if_res1221 = loop2511(M1.add1(i2512));
        }
        return if_res1221;
    };
    return loop2511(0);
};
var build_list = function(n2513, fcn2514) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.exact_nonnegative_integer_p(n2513) !== false) {
        var if_res1222 = M1.rvoid();
    } else {
        var if_res1222 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n2513);
    }
    if_res1222;
    if (M1.procedure_p(fcn2514) !== false) {
        var if_res1223 = M1.procedure_arity_includes_p(fcn2514, 1);
    } else {
        var if_res1223 = false;
    }
    if (if_res1223 !== false) {
        var if_res1224 = M1.rvoid();
    } else {
        var if_res1224 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn2514);
    }
    if_res1224;
    var recr2515 = function(j2516, i2517) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.zero_p(i2517) !== false) {
            var if_res1225 = M1.rnull;
        } else {
            var if_res1225 = M1.cons(fcn2514(j2516), recr2515(M1.add1(j2516), M1.sub1(i2517)));
        }
        return if_res1225;
    };
    return recr2515(0, n2513);
};
var id_p2518 = function(f2519) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.eq_p(M1.values, f2519);
};
var pipeline12520 = function(f2521, rfuns2522) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var composed2523 = function(x2524) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var loop2525 = function(x2526, f2527, rfuns2528) {
            if (arguments.length !== 3) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2528) !== false) {
                var if_res1226 = f2527(x2526);
            } else {
                var if_res1226 = loop2525(f2527(x2526), M1.car(rfuns2528), M1.cdr(rfuns2528));
            }
            return if_res1226;
        };
        return loop2525(x2524, f2521, rfuns2522);
    };
    return composed2523;
};
var pipeline_times_2529 = function(f2530, rfuns2531) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.eqv_p(2, M1.procedure_arity_mask(f2530)) !== false) {
        var loop2532 = function(f2533, rfuns2534) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(rfuns2534) !== false) {
                var if_res1228 = f2533;
            } else {
                var fst2535 = M1.car(rfuns2534);
                if (M1.eqv_p(2, M1.procedure_arity_mask(fst2535)) !== false) {
                    var if_res1227 = function(x2536) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return fst2535(f2533(x2536));
                    };
                } else {
                    var if_res1227 = function(x2537) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2533(x2537);
                        }, fst2535);
                    };
                }
                var if_res1228 = loop2532(if_res1227, M1.cdr(rfuns2534));
            }
            return if_res1228;
        };
        var if_res1235 = loop2532(f2530, rfuns2531);
    } else {
        var funs2538 = M6.alt_reverse(M1.cons(f2530, rfuns2531));
        var loop2539 = function(f2540, funs2541) {
            if (arguments.length !== 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            if (M1.null_p(funs2541) !== false) {
                var if_res1234 = f2540;
            } else {
                var fst2542 = M1.car(funs2541);
                if (M1.eqv_p(2, M1.procedure_arity_mask(f2540)) !== false) {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2542)) !== false) {
                        var if_res1230 = function(x2543) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2540(fst2542(x2543));
                        };
                    } else {
                        var if_res1230 = $rjs_core.attachProcedureArity(function(...xs25441229) {
                            var xs2544 = $rjs_core.Pair.listFromArray(xs25441229);
                            return f2540(M1.apply(fst2542, xs2544));
                        });
                    }
                    var if_res1233 = if_res1230;
                } else {
                    if (M1.eqv_p(2, M1.procedure_arity_mask(fst2542)) !== false) {
                        var if_res1232 = function(x2545) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return fst2542(x2545);
                            }, f2540);
                        };
                    } else {
                        var if_res1232 = $rjs_core.attachProcedureArity(function(...xs25461231) {
                            var xs2546 = $rjs_core.Pair.listFromArray(xs25461231);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(fst2542, xs2546);
                            }, f2540);
                        });
                    }
                    var if_res1233 = if_res1232;
                }
                var if_res1234 = loop2539(if_res1233, M1.cdr(funs2541));
            }
            return if_res1234;
        };
        var if_res1235 = loop2539(M1.car(funs2538), M1.cdr(funs2538));
    }
    return if_res1235;
};
var simple_compose2548 = function(f2549, g2550) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var arity_mask2551 = M1.procedure_arity_mask(g2550);
    var let_result1236 = M0.procedure_keywords(g2550);
    var required_kwds2552 = let_result1236.getAt(0);
    var allowed_kwds2553 = let_result1236.getAt(1);
    var tmp2555 = arity_mask2551;
    if (M1.equal_p(tmp2555, 1) !== false) {
        var if_res1246 = function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return f2549(g2550());
        };
    } else {
        if (M1.equal_p(tmp2555, 2) !== false) {
            var if_res1245 = function(x2556) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return f2549(g2550(x2556));
            };
        } else {
            if (M1.equal_p(tmp2555, 4) !== false) {
                var if_res1244 = function(x2557, y2558) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2549(g2550(x2557, y2558));
                };
            } else {
                var cl1237 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2549(g2550());
                };
                var cl1238 = function(x2559) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2549(g2550(x2559));
                };
                var cl1239 = function(x2560, y2561) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2549(g2550(x2560, y2561));
                };
                var cl1240 = $rjs_core.attachProcedureArity(function(...args25621243) {
                    var args2562 = $rjs_core.Pair.listFromArray(args25621243);
                    return f2549(M1.apply(g2550, args2562));
                });
                var if_res1244 = $rjs_core.attachProcedureArity(function() {
                    var fixed_lam1241 = {
                        '0': cl1237,
                        '1': cl1238,
                        '2': cl1239
                    } [arguments.length];
                    if (fixed_lam1241 !== undefined) {
                        return fixed_lam1241.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            var if_res1242 = cl1240.apply(null, arguments);
                        } else {
                            var if_res1242 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                        return if_res1242;
                    }
                }, [M1.make_arity_at_least(0)]);
            }
            var if_res1245 = if_res1244;
        }
        var if_res1246 = if_res1245;
    }
    var composed2554 = if_res1246;
    if (M1.null_p(allowed_kwds2553) !== false) {
        if (M1.eqv_p(arity_mask2551, M1.procedure_arity_mask(composed2554)) !== false) {
            var if_res1247 = composed2554;
        } else {
            var if_res1247 = M0.new_procedure_reduce_arity_mask(composed2554, arity_mask2551);
        }
        var if_res1249 = if_res1247;
    } else {
        var if_res1249 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2563, kw_args2564, ...xs25651248) {
            if (arguments.length < 2) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            var xs2565 = $rjs_core.Pair.listFromArray(xs25651248);
            return f2549(M2.keyword_apply(g2550, kws2563, kw_args2564, xs2565));
        }), composed2554), arity_mask2551, required_kwds2552, allowed_kwds2553, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
    }
    return if_res1249;
};
var cl1250 = function(f2566) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2566) !== false) {
        var if_res1256 = f2566;
    } else {
        var if_res1256 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2566);
    }
    return if_res1256;
};
var cl1251 = function(f2567, g2568) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2567) !== false) {
        var if_res1257 = M1.rvoid();
    } else {
        var if_res1257 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f2567, g2568);
    }
    if_res1257;
    if (M1.procedure_p(g2568) !== false) {
        var if_res1258 = M1.rvoid();
    } else {
        var if_res1258 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f2567, g2568);
    }
    if_res1258;
    if (M1.procedure_arity_includes_p(f2567, 1) !== false) {
        var if_res1259 = M1.rvoid();
    } else {
        var if_res1259 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f2567, $rjs_core.Pair.EMPTY);
    }
    if_res1259;
    var let_result1260 = M0.procedure_keywords(f2567);
    var req2569 = let_result1260.getAt(0);
    var _2570 = let_result1260.getAt(1);
    if (M1.null_p(req2569) !== false) {
        var if_res1261 = M1.rvoid();
    } else {
        var if_res1261 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2567, $rjs_core.Pair.EMPTY);
    }
    if_res1261;
    return simple_compose2548(f2567, g2568);
};
var cl1252 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1253 = $rjs_core.attachProcedureArity(function(f02571, ...fs025721262) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02572 = $rjs_core.Pair.listFromArray(fs025721262);
    var loop2573 = function(g2574, fs2575, i2576, rfuns2577) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2574) !== false) {
            var if_res1263 = M1.rvoid();
        } else {
            var if_res1263 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i2576, f02571, fs02572);
        }
        if_res1263;
        if (M1.pair_p(fs2575) !== false) {
            if (M1.procedure_arity_includes_p(g2574, 1) !== false) {
                var if_res1264 = M1.rvoid();
            } else {
                var if_res1264 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i2576, f02571, fs02572);
            }
            if_res1264;
            var let_result1265 = M0.procedure_keywords(g2574);
            var req2578 = let_result1265.getAt(0);
            var _2579 = let_result1265.getAt(1);
            if (M1.null_p(req2578) !== false) {
                var if_res1266 = M1.rvoid();
            } else {
                var if_res1266 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2576, f02571, fs02572);
            }
            if_res1266;
            var if_res1268 = loop2573(M1.car(fs2575), M1.cdr(fs2575), M1.add1(i2576), M1.cons(g2574, rfuns2577));
        } else {
            var rfuns2580 = remq_times_(M1.list(M1.values), rfuns2577);
            if (M1.null_p(rfuns2580) !== false) {
                var if_res1267 = M1.values;
            } else {
                var if_res1267 = pipeline12520(M1.car(rfuns2580), M1.cdr(rfuns2580));
            }
            var f2581 = if_res1267;
            var if_res1268 = simple_compose2548(f2581, g2574);
        }
        return if_res1268;
    };
    return loop2573(f02571, fs02572, 0, $rjs_core.Pair.EMPTY);
});
var compose12547 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1254 = {
        '1': cl1250,
        '2': cl1251,
        '0': cl1252
    } [arguments.length];
    if (fixed_lam1254 !== undefined) {
        return fixed_lam1254.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1253.length, 1) !== false) {
            var if_res1255 = cl1253.apply(null, arguments);
        } else {
            var if_res1255 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1255;
    }
}, [0, M1.make_arity_at_least(1)]);
var simple_compose2583 = function(f2584, g2585) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (id_p2518(f2584) !== false) {
        var if_res1298 = g2585;
    } else {
        if (M1.eqv_p(2, M1.procedure_arity_mask(f2584)) !== false) {
            var arity_mask2586 = M1.procedure_arity_mask(g2585);
            var let_result1269 = M0.procedure_keywords(g2585);
            var required_kwds2587 = let_result1269.getAt(0);
            var allowed_kwds2588 = let_result1269.getAt(1);
            var tmp2590 = arity_mask2586;
            if (M1.equal_p(tmp2590, 1) !== false) {
                var if_res1279 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return f2584(g2585());
                };
            } else {
                if (M1.equal_p(tmp2590, 2) !== false) {
                    var if_res1278 = function(x2591) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return f2584(g2585(x2591));
                    };
                } else {
                    if (M1.equal_p(tmp2590, 4) !== false) {
                        var if_res1277 = function(x2592, y2593) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2584(g2585(x2592, y2593));
                        };
                    } else {
                        var cl1270 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2584(g2585());
                        };
                        var cl1271 = function(x2594) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2584(g2585(x2594));
                        };
                        var cl1272 = function(x2595, y2596) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return f2584(g2585(x2595, y2596));
                        };
                        var cl1273 = $rjs_core.attachProcedureArity(function(...args25971276) {
                            var args2597 = $rjs_core.Pair.listFromArray(args25971276);
                            return f2584(M1.apply(g2585, args2597));
                        });
                        var if_res1277 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1274 = {
                                '0': cl1270,
                                '1': cl1271,
                                '2': cl1272
                            } [arguments.length];
                            if (fixed_lam1274 !== undefined) {
                                return fixed_lam1274.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1275 = cl1273.apply(null, arguments);
                                } else {
                                    var if_res1275 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1275;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1278 = if_res1277;
                }
                var if_res1279 = if_res1278;
            }
            var composed2589 = if_res1279;
            if (M1.null_p(allowed_kwds2588) !== false) {
                if (M1.eqv_p(arity_mask2586, M1.procedure_arity_mask(composed2589)) !== false) {
                    var if_res1280 = composed2589;
                } else {
                    var if_res1280 = M0.new_procedure_reduce_arity_mask(composed2589, arity_mask2586);
                }
                var if_res1282 = if_res1280;
            } else {
                var if_res1282 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2598, kw_args2599, ...xs26001281) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2600 = $rjs_core.Pair.listFromArray(xs26001281);
                    return f2584(M2.keyword_apply(g2585, kws2598, kw_args2599, xs2600));
                }), composed2589), arity_mask2586, required_kwds2587, allowed_kwds2588, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1297 = if_res1282;
        } else {
            var arity_mask2601 = M1.procedure_arity_mask(g2585);
            var let_result1283 = M0.procedure_keywords(g2585);
            var required_kwds2602 = let_result1283.getAt(0);
            var allowed_kwds2603 = let_result1283.getAt(1);
            var tmp2605 = arity_mask2601;
            if (M1.equal_p(tmp2605, 1) !== false) {
                var if_res1293 = function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return g2585();
                    }, f2584);
                };
            } else {
                if (M1.equal_p(tmp2605, 2) !== false) {
                    var if_res1292 = function(x2606) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M1.call_with_values(function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return g2585(x2606);
                        }, f2584);
                    };
                } else {
                    if (M1.equal_p(tmp2605, 4) !== false) {
                        var if_res1291 = function(x2607, y2608) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2585(x2607, y2608);
                            }, f2584);
                        };
                    } else {
                        var cl1284 = function() {
                            if (arguments.length !== 0) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2585();
                            }, f2584);
                        };
                        var cl1285 = function(x2609) {
                            if (arguments.length !== 1) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2585(x2609);
                            }, f2584);
                        };
                        var cl1286 = function(x2610, y2611) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return g2585(x2610, y2611);
                            }, f2584);
                        };
                        var cl1287 = $rjs_core.attachProcedureArity(function(...args26121290) {
                            var args2612 = $rjs_core.Pair.listFromArray(args26121290);
                            return M1.call_with_values(function() {
                                if (arguments.length !== 0) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                return M1.apply(g2585, args2612);
                            }, f2584);
                        });
                        var if_res1291 = $rjs_core.attachProcedureArity(function() {
                            var fixed_lam1288 = {
                                '0': cl1284,
                                '1': cl1285,
                                '2': cl1286
                            } [arguments.length];
                            if (fixed_lam1288 !== undefined) {
                                return fixed_lam1288.apply(null, arguments);
                            } else {
                                if (true !== false) {
                                    var if_res1289 = cl1287.apply(null, arguments);
                                } else {
                                    var if_res1289 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
                                }
                                return if_res1289;
                            }
                        }, [M1.make_arity_at_least(0)]);
                    }
                    var if_res1292 = if_res1291;
                }
                var if_res1293 = if_res1292;
            }
            var composed2604 = if_res1293;
            if (M1.null_p(allowed_kwds2603) !== false) {
                if (M1.eqv_p(arity_mask2601, M1.procedure_arity_mask(composed2604)) !== false) {
                    var if_res1294 = composed2604;
                } else {
                    var if_res1294 = M0.new_procedure_reduce_arity_mask(composed2604, arity_mask2601);
                }
                var if_res1296 = if_res1294;
            } else {
                var if_res1296 = M0.procedure_reduce_keyword_arity_mask(M0.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws2613, kw_args2614, ...xs26151295) {
                    if (arguments.length < 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var xs2615 = $rjs_core.Pair.listFromArray(xs26151295);
                    return M1.call_with_values(function() {
                        if (arguments.length !== 0) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        return M2.keyword_apply(g2585, kws2613, kw_args2614, xs2615);
                    }, f2584);
                }), composed2604), arity_mask2601, required_kwds2602, allowed_kwds2603, $rjs_core.PrimitiveSymbol.make("composed"), $rjs_core.PrimitiveSymbol.make("racket"));
            }
            var if_res1297 = if_res1296;
        }
        var if_res1298 = if_res1297;
    }
    return if_res1298;
};
var cl1299 = function(f2616) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2616) !== false) {
        var if_res1305 = f2616;
    } else {
        var if_res1305 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2616);
    }
    return if_res1305;
};
var cl1300 = function(f2617, g2618) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M1.procedure_p(f2617) !== false) {
        var if_res1306 = M1.rvoid();
    } else {
        var if_res1306 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f2617, g2618);
    }
    if_res1306;
    if (M1.procedure_p(g2618) !== false) {
        var if_res1307 = M1.rvoid();
    } else {
        var if_res1307 = M1.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f2617, g2618);
    }
    if_res1307;
    var let_result1308 = M0.procedure_keywords(f2617);
    var req2619 = let_result1308.getAt(0);
    var _2620 = let_result1308.getAt(1);
    if (M1.null_p(req2619) !== false) {
        var if_res1309 = M1.rvoid();
    } else {
        var if_res1309 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f2617, $rjs_core.Pair.EMPTY);
    }
    if_res1309;
    return simple_compose2583(f2617, g2618);
};
var cl1301 = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.values;
};
var cl1302 = $rjs_core.attachProcedureArity(function(f02621, ...fs026221310) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var fs02622 = $rjs_core.Pair.listFromArray(fs026221310);
    var loop2623 = function(g2624, fs2625, i2626, rfuns2627) {
        if (arguments.length !== 4) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.procedure_p(g2624) !== false) {
            var if_res1311 = M1.rvoid();
        } else {
            var if_res1311 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i2626, f02621, fs02622);
        }
        if_res1311;
        if (M1.pair_p(fs2625) !== false) {
            var let_result1312 = M0.procedure_keywords(g2624);
            var req2628 = let_result1312.getAt(0);
            var _2629 = let_result1312.getAt(1);
            if (M1.null_p(req2628) !== false) {
                var if_res1313 = M1.rvoid();
            } else {
                var if_res1313 = M1.apply(M1.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i2626, f02621, fs02622);
            }
            if_res1313;
            var if_res1315 = loop2623(M1.car(fs2625), M1.cdr(fs2625), M1.add1(i2626), M1.cons(g2624, rfuns2627));
        } else {
            var rfuns2630 = remq_times_(M1.list(M1.values), rfuns2627);
            if (M1.null_p(rfuns2630) !== false) {
                var if_res1314 = M1.values;
            } else {
                var if_res1314 = pipeline_times_2529(M1.car(rfuns2630), M1.cdr(rfuns2630));
            }
            var f2631 = if_res1314;
            var if_res1315 = simple_compose2583(f2631, g2624);
        }
        return if_res1315;
    };
    return loop2623(f02621, fs02622, 0, $rjs_core.Pair.EMPTY);
});
var compose2582 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1303 = {
        '1': cl1299,
        '2': cl1300,
        '0': cl1301
    } [arguments.length];
    if (fixed_lam1303 !== undefined) {
        return fixed_lam1303.apply(null, arguments);
    } else {
        if (M1.__gt__eq_(cl1302.length, 1) !== false) {
            var if_res1304 = cl1302.apply(null, arguments);
        } else {
            var if_res1304 = M1.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
        return if_res1304;
    }
}, [0, M1.make_arity_at_least(1)]);
var let_result1316 = M1.values(compose12547, compose2582);
var compose1 = let_result1316.getAt(0);
var compose = let_result1316.getAt(1);
var __rjs_quoted__ = {};
__rjs_quoted__.sort = sort;
__rjs_quoted__.sort7 = sort7;
export {
    __rjs_quoted__,
    compose1,
    compose,
    build_list,
    build_string,
    build_vector,
    sort,
    filter,
    assoc,
    assw,
    assv,
    assq,
    findf,
    assf,
    memf,
    remove_times_,
    remq_times_,
    remw_times_,
    remv_times_,
    remove,
    remw,
    remq,
    remv,
    foldr,
    foldl
};