import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort3087 = function(A3088, less_than_p3089, n3090) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3091 = M1.unsafe_fxrshift(n3090, 1);
    var n_by_2_plus_3092 = M1.unsafe_fx_(n3090, n_by_2_3091);
    var copying_mergesort3093 = function(Alo3094, Blo3095, n3096) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3096, 1) !== false) {
            var if_res1699 = M1.unsafe_vector_set_bang_(A3088, Blo3095, M1.unsafe_vector_ref(A3088, Alo3094));
        } else {
            if (M1.unsafe_fx_eq_(n3096, 2) !== false) {
                var x3097 = M1.unsafe_vector_ref(A3088, Alo3094);
                var y3098 = M1.unsafe_vector_ref(A3088, M1.unsafe_fx_plus_(Alo3094, 1));
                if (false !== false) {
                    var if_res1684 = less_than_p3089(false(y3098), false(x3097));
                } else {
                    var if_res1684 = less_than_p3089(y3098, x3097);
                }
                if (if_res1684 !== false) {
                    M1.unsafe_vector_set_bang_(A3088, Blo3095, y3098);
                    var if_res1685 = M1.unsafe_vector_set_bang_(A3088, M1.unsafe_fx_plus_(Blo3095, 1), x3097);
                } else {
                    M1.unsafe_vector_set_bang_(A3088, Blo3095, x3097);
                    var if_res1685 = M1.unsafe_vector_set_bang_(A3088, M1.unsafe_fx_plus_(Blo3095, 1), y3098);
                }
                var if_res1698 = if_res1685;
            } else {
                if (M1.unsafe_fx_lt_(n3096, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3088, Blo3095, M1.unsafe_vector_ref(A3088, Alo3094));
                    var iloop3099 = function(i3100) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3100, n3096) !== false) {
                            var ref_i3101 = M1.unsafe_vector_ref(A3088, M1.unsafe_fx_plus_(Alo3094, i3100));
                            var jloop3102 = function(j3103) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13104 = M1.unsafe_vector_ref(A3088, M1.unsafe_fx_(j3103, 1));
                                if (M1.unsafe_fx_lt_(Blo3095, j3103) !== false) {
                                    if (false !== false) {
                                        var if_res1686 = less_than_p3089(false(ref_i3101), false(ref_j_13104));
                                    } else {
                                        var if_res1686 = less_than_p3089(ref_i3101, ref_j_13104);
                                    }
                                    var if_res1687 = if_res1686;
                                } else {
                                    var if_res1687 = false;
                                }
                                if (if_res1687 !== false) {
                                    M1.unsafe_vector_set_bang_(A3088, j3103, ref_j_13104);
                                    var if_res1688 = jloop3102(M1.unsafe_fx_(j3103, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3088, j3103, ref_i3101);
                                    var if_res1688 = iloop3099(M1.unsafe_fx_plus_(i3100, 1));
                                }
                                return if_res1688;
                            };
                            var if_res1689 = jloop3102(M1.unsafe_fx_plus_(Blo3095, i3100));
                        } else {
                            var if_res1689 = M0.rvoid();
                        }
                        return if_res1689;
                    };
                    var if_res1697 = iloop3099(1);
                } else {
                    var n_by_2_3105 = M1.unsafe_fxrshift(n3096, 1);
                    var n_by_2_plus_3106 = M1.unsafe_fx_(n3096, n_by_2_3105);
                    var Amid13107 = M1.unsafe_fx_plus_(Alo3094, n_by_2_3105);
                    var Amid23108 = M1.unsafe_fx_plus_(Alo3094, n_by_2_plus_3106);
                    var Bmid13109 = M1.unsafe_fx_plus_(Blo3095, n_by_2_3105);
                    copying_mergesort3093(Amid13107, Bmid13109, n_by_2_plus_3106);
                    copying_mergesort3093(Alo3094, Amid23108, n_by_2_3105);
                    var b23110 = M1.unsafe_fx_plus_(Blo3095, n3096);
                    var loop3111 = function(a13112, b13113, c13114) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3115 = M1.unsafe_vector_ref(A3088, a13112);
                        var y3116 = M1.unsafe_vector_ref(A3088, b13113);
                        if (true !== false) {
                            if (false !== false) {
                                var if_res1690 = less_than_p3089(false(y3116), false(x3115));
                            } else {
                                var if_res1690 = less_than_p3089(y3116, x3115);
                            }
                            var if_res1692 = M0.not(if_res1690);
                        } else {
                            if (false !== false) {
                                var if_res1691 = less_than_p3089(false(x3115), false(y3116));
                            } else {
                                var if_res1691 = less_than_p3089(x3115, y3116);
                            }
                            var if_res1692 = if_res1691;
                        }
                        if (if_res1692 !== false) {
                            M1.unsafe_vector_set_bang_(A3088, c13114, x3115);
                            var a13117 = M1.unsafe_fx_plus_(a13112, 1);
                            var c13118 = M1.unsafe_fx_plus_(c13114, 1);
                            if (M1.unsafe_fx_lt_(c13118, b13113) !== false) {
                                var if_res1693 = loop3111(a13117, b13113, c13118);
                            } else {
                                var if_res1693 = M0.rvoid();
                            }
                            var if_res1696 = if_res1693;
                        } else {
                            M1.unsafe_vector_set_bang_(A3088, c13114, y3116);
                            var b13119 = M1.unsafe_fx_plus_(b13113, 1);
                            var c13120 = M1.unsafe_fx_plus_(c13114, 1);
                            if (M1.unsafe_fx_lt__eq_(b23110, b13119) !== false) {
                                var loop3121 = function(a13122, c13123) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13123, b13119) !== false) {
                                        M1.unsafe_vector_set_bang_(A3088, c13123, M1.unsafe_vector_ref(A3088, a13122));
                                        var if_res1694 = loop3121(M1.unsafe_fx_plus_(a13122, 1), M1.unsafe_fx_plus_(c13123, 1));
                                    } else {
                                        var if_res1694 = M0.rvoid();
                                    }
                                    return if_res1694;
                                };
                                var if_res1695 = loop3121(a13112, c13120);
                            } else {
                                var if_res1695 = loop3111(a13112, b13119, c13120);
                            }
                            var if_res1696 = if_res1695;
                        }
                        return if_res1696;
                    };
                    var if_res1697 = loop3111(Amid23108, Bmid13109, Blo3095);
                }
                var if_res1698 = if_res1697;
            }
            var if_res1699 = if_res1698;
        }
        return if_res1699;
    };
    var Alo3124 = 0;
    var Amid13125 = n_by_2_3091;
    var Amid23126 = n_by_2_plus_3092;
    var Ahi3127 = n3090;
    var B1lo3128 = n3090;
    copying_mergesort3093(Amid13125, B1lo3128, n_by_2_plus_3092);
    if (M0.zero_p(n_by_2_3091) !== false) {
        var if_res1700 = M0.rvoid();
    } else {
        var if_res1700 = copying_mergesort3093(Alo3124, Amid23126, n_by_2_3091);
    }
    if_res1700;
    var b23129 = Ahi3127;
    var loop3130 = function(a13131, b13132, c13133) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3134 = M1.unsafe_vector_ref(A3088, a13131);
        var y3135 = M1.unsafe_vector_ref(A3088, b13132);
        if (false !== false) {
            if (false !== false) {
                var if_res1701 = less_than_p3089(false(y3135), false(x3134));
            } else {
                var if_res1701 = less_than_p3089(y3135, x3134);
            }
            var if_res1703 = M0.not(if_res1701);
        } else {
            if (false !== false) {
                var if_res1702 = less_than_p3089(false(x3134), false(y3135));
            } else {
                var if_res1702 = less_than_p3089(x3134, y3135);
            }
            var if_res1703 = if_res1702;
        }
        if (if_res1703 !== false) {
            M1.unsafe_vector_set_bang_(A3088, c13133, x3134);
            var a13136 = M1.unsafe_fx_plus_(a13131, 1);
            var c13137 = M1.unsafe_fx_plus_(c13133, 1);
            if (M1.unsafe_fx_lt_(c13137, b13132) !== false) {
                var if_res1704 = loop3130(a13136, b13132, c13137);
            } else {
                var if_res1704 = M0.rvoid();
            }
            var if_res1707 = if_res1704;
        } else {
            M1.unsafe_vector_set_bang_(A3088, c13133, y3135);
            var b13138 = M1.unsafe_fx_plus_(b13132, 1);
            var c13139 = M1.unsafe_fx_plus_(c13133, 1);
            if (M1.unsafe_fx_lt__eq_(b23129, b13138) !== false) {
                var loop3140 = function(a13141, c13142) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13142, b13138) !== false) {
                        M1.unsafe_vector_set_bang_(A3088, c13142, M1.unsafe_vector_ref(A3088, a13141));
                        var if_res1705 = loop3140(M1.unsafe_fx_plus_(a13141, 1), M1.unsafe_fx_plus_(c13142, 1));
                    } else {
                        var if_res1705 = M0.rvoid();
                    }
                    return if_res1705;
                };
                var if_res1706 = loop3140(a13131, c13139);
            } else {
                var if_res1706 = loop3130(a13131, b13138, c13139);
            }
            var if_res1707 = if_res1706;
        }
        return if_res1707;
    };
    return loop3130(B1lo3128, Amid23126, Alo3124);
};
var generic_sort_by_key3143 = function(A3144, less_than_p3145, n3146, key3147) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n_by_2_3148 = M1.unsafe_fxrshift(n3146, 1);
    var n_by_2_plus_3149 = M1.unsafe_fx_(n3146, n_by_2_3148);
    var copying_mergesort3150 = function(Alo3151, Blo3152, n3153) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.unsafe_fx_eq_(n3153, 1) !== false) {
            var if_res1723 = M1.unsafe_vector_set_bang_(A3144, Blo3152, M1.unsafe_vector_ref(A3144, Alo3151));
        } else {
            if (M1.unsafe_fx_eq_(n3153, 2) !== false) {
                var x3154 = M1.unsafe_vector_ref(A3144, Alo3151);
                var y3155 = M1.unsafe_vector_ref(A3144, M1.unsafe_fx_plus_(Alo3151, 1));
                if (key3147 !== false) {
                    var if_res1708 = less_than_p3145(key3147(y3155), key3147(x3154));
                } else {
                    var if_res1708 = less_than_p3145(y3155, x3154);
                }
                if (if_res1708 !== false) {
                    M1.unsafe_vector_set_bang_(A3144, Blo3152, y3155);
                    var if_res1709 = M1.unsafe_vector_set_bang_(A3144, M1.unsafe_fx_plus_(Blo3152, 1), x3154);
                } else {
                    M1.unsafe_vector_set_bang_(A3144, Blo3152, x3154);
                    var if_res1709 = M1.unsafe_vector_set_bang_(A3144, M1.unsafe_fx_plus_(Blo3152, 1), y3155);
                }
                var if_res1722 = if_res1709;
            } else {
                if (M1.unsafe_fx_lt_(n3153, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3144, Blo3152, M1.unsafe_vector_ref(A3144, Alo3151));
                    var iloop3156 = function(i3157) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M1.unsafe_fx_lt_(i3157, n3153) !== false) {
                            var ref_i3158 = M1.unsafe_vector_ref(A3144, M1.unsafe_fx_plus_(Alo3151, i3157));
                            var jloop3159 = function(j3160) {
                                if (arguments.length !== 1) {
                                    throw $rjs_core.racketContractError("arity mismatch");
                                } else {}
                                var ref_j_13161 = M1.unsafe_vector_ref(A3144, M1.unsafe_fx_(j3160, 1));
                                if (M1.unsafe_fx_lt_(Blo3152, j3160) !== false) {
                                    if (key3147 !== false) {
                                        var if_res1710 = less_than_p3145(key3147(ref_i3158), key3147(ref_j_13161));
                                    } else {
                                        var if_res1710 = less_than_p3145(ref_i3158, ref_j_13161);
                                    }
                                    var if_res1711 = if_res1710;
                                } else {
                                    var if_res1711 = false;
                                }
                                if (if_res1711 !== false) {
                                    M1.unsafe_vector_set_bang_(A3144, j3160, ref_j_13161);
                                    var if_res1712 = jloop3159(M1.unsafe_fx_(j3160, 1));
                                } else {
                                    M1.unsafe_vector_set_bang_(A3144, j3160, ref_i3158);
                                    var if_res1712 = iloop3156(M1.unsafe_fx_plus_(i3157, 1));
                                }
                                return if_res1712;
                            };
                            var if_res1713 = jloop3159(M1.unsafe_fx_plus_(Blo3152, i3157));
                        } else {
                            var if_res1713 = M0.rvoid();
                        }
                        return if_res1713;
                    };
                    var if_res1721 = iloop3156(1);
                } else {
                    var n_by_2_3162 = M1.unsafe_fxrshift(n3153, 1);
                    var n_by_2_plus_3163 = M1.unsafe_fx_(n3153, n_by_2_3162);
                    var Amid13164 = M1.unsafe_fx_plus_(Alo3151, n_by_2_3162);
                    var Amid23165 = M1.unsafe_fx_plus_(Alo3151, n_by_2_plus_3163);
                    var Bmid13166 = M1.unsafe_fx_plus_(Blo3152, n_by_2_3162);
                    copying_mergesort3150(Amid13164, Bmid13166, n_by_2_plus_3163);
                    copying_mergesort3150(Alo3151, Amid23165, n_by_2_3162);
                    var b23167 = M1.unsafe_fx_plus_(Blo3152, n3153);
                    var loop3168 = function(a13169, b13170, c13171) {
                        if (arguments.length !== 3) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var x3172 = M1.unsafe_vector_ref(A3144, a13169);
                        var y3173 = M1.unsafe_vector_ref(A3144, b13170);
                        if (true !== false) {
                            if (key3147 !== false) {
                                var if_res1714 = less_than_p3145(key3147(y3173), key3147(x3172));
                            } else {
                                var if_res1714 = less_than_p3145(y3173, x3172);
                            }
                            var if_res1716 = M0.not(if_res1714);
                        } else {
                            if (key3147 !== false) {
                                var if_res1715 = less_than_p3145(key3147(x3172), key3147(y3173));
                            } else {
                                var if_res1715 = less_than_p3145(x3172, y3173);
                            }
                            var if_res1716 = if_res1715;
                        }
                        if (if_res1716 !== false) {
                            M1.unsafe_vector_set_bang_(A3144, c13171, x3172);
                            var a13174 = M1.unsafe_fx_plus_(a13169, 1);
                            var c13175 = M1.unsafe_fx_plus_(c13171, 1);
                            if (M1.unsafe_fx_lt_(c13175, b13170) !== false) {
                                var if_res1717 = loop3168(a13174, b13170, c13175);
                            } else {
                                var if_res1717 = M0.rvoid();
                            }
                            var if_res1720 = if_res1717;
                        } else {
                            M1.unsafe_vector_set_bang_(A3144, c13171, y3173);
                            var b13176 = M1.unsafe_fx_plus_(b13170, 1);
                            var c13177 = M1.unsafe_fx_plus_(c13171, 1);
                            if (M1.unsafe_fx_lt__eq_(b23167, b13176) !== false) {
                                var loop3178 = function(a13179, c13180) {
                                    if (arguments.length !== 2) {
                                        throw $rjs_core.racketContractError("arity mismatch");
                                    } else {}
                                    if (M1.unsafe_fx_lt_(c13180, b13176) !== false) {
                                        M1.unsafe_vector_set_bang_(A3144, c13180, M1.unsafe_vector_ref(A3144, a13179));
                                        var if_res1718 = loop3178(M1.unsafe_fx_plus_(a13179, 1), M1.unsafe_fx_plus_(c13180, 1));
                                    } else {
                                        var if_res1718 = M0.rvoid();
                                    }
                                    return if_res1718;
                                };
                                var if_res1719 = loop3178(a13169, c13177);
                            } else {
                                var if_res1719 = loop3168(a13169, b13176, c13177);
                            }
                            var if_res1720 = if_res1719;
                        }
                        return if_res1720;
                    };
                    var if_res1721 = loop3168(Amid23165, Bmid13166, Blo3152);
                }
                var if_res1722 = if_res1721;
            }
            var if_res1723 = if_res1722;
        }
        return if_res1723;
    };
    var Alo3181 = 0;
    var Amid13182 = n_by_2_3148;
    var Amid23183 = n_by_2_plus_3149;
    var Ahi3184 = n3146;
    var B1lo3185 = n3146;
    copying_mergesort3150(Amid13182, B1lo3185, n_by_2_plus_3149);
    if (M0.zero_p(n_by_2_3148) !== false) {
        var if_res1724 = M0.rvoid();
    } else {
        var if_res1724 = copying_mergesort3150(Alo3181, Amid23183, n_by_2_3148);
    }
    if_res1724;
    var b23186 = Ahi3184;
    var loop3187 = function(a13188, b13189, c13190) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var x3191 = M1.unsafe_vector_ref(A3144, a13188);
        var y3192 = M1.unsafe_vector_ref(A3144, b13189);
        if (false !== false) {
            if (key3147 !== false) {
                var if_res1725 = less_than_p3145(key3147(y3192), key3147(x3191));
            } else {
                var if_res1725 = less_than_p3145(y3192, x3191);
            }
            var if_res1727 = M0.not(if_res1725);
        } else {
            if (key3147 !== false) {
                var if_res1726 = less_than_p3145(key3147(x3191), key3147(y3192));
            } else {
                var if_res1726 = less_than_p3145(x3191, y3192);
            }
            var if_res1727 = if_res1726;
        }
        if (if_res1727 !== false) {
            M1.unsafe_vector_set_bang_(A3144, c13190, x3191);
            var a13193 = M1.unsafe_fx_plus_(a13188, 1);
            var c13194 = M1.unsafe_fx_plus_(c13190, 1);
            if (M1.unsafe_fx_lt_(c13194, b13189) !== false) {
                var if_res1728 = loop3187(a13193, b13189, c13194);
            } else {
                var if_res1728 = M0.rvoid();
            }
            var if_res1731 = if_res1728;
        } else {
            M1.unsafe_vector_set_bang_(A3144, c13190, y3192);
            var b13195 = M1.unsafe_fx_plus_(b13189, 1);
            var c13196 = M1.unsafe_fx_plus_(c13190, 1);
            if (M1.unsafe_fx_lt__eq_(b23186, b13195) !== false) {
                var loop3197 = function(a13198, c13199) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(c13199, b13195) !== false) {
                        M1.unsafe_vector_set_bang_(A3144, c13199, M1.unsafe_vector_ref(A3144, a13198));
                        var if_res1729 = loop3197(M1.unsafe_fx_plus_(a13198, 1), M1.unsafe_fx_plus_(c13199, 1));
                    } else {
                        var if_res1729 = M0.rvoid();
                    }
                    return if_res1729;
                };
                var if_res1730 = loop3197(a13188, c13196);
            } else {
                var if_res1730 = loop3187(a13188, b13195, c13196);
            }
            var if_res1731 = if_res1730;
        }
        return if_res1731;
    };
    return loop3187(B1lo3185, Amid23183, Alo3181);
};
var cl1839 = function(lst3200, less_than_p3201) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3202 = M0.length(lst3200);
    if (M1.unsafe_fx_eq_(n3202, 0) !== false) {
        var if_res1863 = lst3200;
    } else {
        if (false !== false) {
            var vec3203 = M0.make_vector(n3202 + M0.ceiling(n3202 / 2));
            var loop3204 = function(i3205, lst3206) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M0.pair_p(lst3206) !== false) {
                    var x3207 = M0.car(lst3206);
                    M1.unsafe_vector_set_bang_(vec3203, i3205, M0.cons(false(x3207), x3207));
                    var if_res1843 = loop3204(M1.unsafe_fx_plus_(i3205, 1), M0.cdr(lst3206));
                } else {
                    var if_res1843 = M0.rvoid();
                }
                return if_res1843;
            };
            loop3204(0, lst3200);
            generic_sort_by_key3143(vec3203, less_than_p3201, n3202, M1.unsafe_car);
            var loop3208 = function(i3209, r3210) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var i3211 = M1.unsafe_fx_(i3209, 1);
                if (M1.unsafe_fx_lt_(i3211, 0) !== false) {
                    var if_res1844 = r3210;
                } else {
                    var if_res1844 = loop3208(i3211, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3203, i3211)), r3210));
                }
                return if_res1844;
            };
            var if_res1862 = loop3208(n3202, $rjs_core.Pair.EMPTY);
        } else {
            var loop3212 = function(last3213, next3214) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3215 = M0.null_p(next3214);
                if (or_part3215 !== false) {
                    var if_res1847 = or_part3215;
                } else {
                    if (false !== false) {
                        var if_res1845 = less_than_p3201(false(M1.unsafe_car(next3214)), false(last3213));
                    } else {
                        var if_res1845 = less_than_p3201(M1.unsafe_car(next3214), last3213);
                    }
                    if (M0.not(if_res1845) !== false) {
                        var if_res1846 = loop3212(M1.unsafe_car(next3214), M1.unsafe_cdr(next3214));
                    } else {
                        var if_res1846 = false;
                    }
                    var if_res1847 = if_res1846;
                }
                return if_res1847;
            };
            if (loop3212(M0.car(lst3200), M0.cdr(lst3200)) !== false) {
                var if_res1861 = lst3200;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3202, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n3202, 1) !== false) {
                        var if_res1857 = lst3200;
                    } else {
                        if (M1.unsafe_fx_eq_(n3202, 2) !== false) {
                            var if_res1856 = M0.list(M0.cadr(lst3200), M0.car(lst3200));
                        } else {
                            var a3216 = M0.car(lst3200);
                            var b3217 = M0.cadr(lst3200);
                            var c3218 = M0.caddr(lst3200);
                            if (false !== false) {
                                var if_res1848 = less_than_p3201(false(b3217), false(a3216));
                            } else {
                                var if_res1848 = less_than_p3201(b3217, a3216);
                            }
                            if (if_res1848 !== false) {
                                if (false !== false) {
                                    var if_res1849 = less_than_p3201(false(c3218), false(b3217));
                                } else {
                                    var if_res1849 = less_than_p3201(c3218, b3217);
                                }
                                if (if_res1849 !== false) {
                                    var if_res1852 = M0.list(c3218, b3217, a3216);
                                } else {
                                    if (false !== false) {
                                        var if_res1850 = less_than_p3201(false(c3218), false(a3216));
                                    } else {
                                        var if_res1850 = less_than_p3201(c3218, a3216);
                                    }
                                    if (if_res1850 !== false) {
                                        var if_res1851 = M0.list(b3217, c3218, a3216);
                                    } else {
                                        var if_res1851 = M0.list(b3217, a3216, c3218);
                                    }
                                    var if_res1852 = if_res1851;
                                }
                                var if_res1855 = if_res1852;
                            } else {
                                if (false !== false) {
                                    var if_res1853 = less_than_p3201(false(c3218), false(a3216));
                                } else {
                                    var if_res1853 = less_than_p3201(c3218, a3216);
                                }
                                if (if_res1853 !== false) {
                                    var if_res1854 = M0.list(c3218, a3216, b3217);
                                } else {
                                    var if_res1854 = M0.list(a3216, c3218, b3217);
                                }
                                var if_res1855 = if_res1854;
                            }
                            var if_res1856 = if_res1855;
                        }
                        var if_res1857 = if_res1856;
                    }
                    var if_res1860 = if_res1857;
                } else {
                    var vec3219 = M0.make_vector(n3202 + M0.ceiling(n3202 / 2));
                    var loop3220 = function(i3221, lst3222) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        if (M0.pair_p(lst3222) !== false) {
                            M0.vector_set_bang_(vec3219, i3221, M0.car(lst3222));
                            var if_res1858 = loop3220(M0.add1(i3221), M0.cdr(lst3222));
                        } else {
                            var if_res1858 = M0.rvoid();
                        }
                        return if_res1858;
                    };
                    loop3220(0, lst3200);
                    generic_sort3087(vec3219, less_than_p3201, n3202);
                    var loop3223 = function(i3224, r3225) {
                        if (arguments.length !== 2) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var i3226 = M0.sub1(i3224);
                        if (M0.__lt_(i3226, 0) !== false) {
                            var if_res1859 = r3225;
                        } else {
                            var if_res1859 = loop3223(i3226, M0.cons(M0.vector_ref(vec3219, i3226), r3225));
                        }
                        return if_res1859;
                    };
                    var if_res1860 = loop3223(n3202, $rjs_core.Pair.EMPTY);
                }
                var if_res1861 = if_res1860;
            }
            var if_res1862 = if_res1861;
        }
        var if_res1863 = if_res1862;
    }
    return if_res1863;
};
var cl1840 = function(lst3227, less_than_p3228, getkey3229) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3229 !== false) {
        var if_res1864 = M0.not(M0.eq_p(M0.values, getkey3229));
    } else {
        var if_res1864 = false;
    }
    if (if_res1864 !== false) {
        var if_res1865 = sort(lst3227, less_than_p3228, getkey3229, false);
    } else {
        var if_res1865 = sort(lst3227, less_than_p3228);
    }
    return if_res1865;
};
var cl1841 = function(lst3230, less_than_p3231, getkey3232, cache_keys_p3233) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3232 !== false) {
        var if_res1866 = M0.not(M0.eq_p(M0.values, getkey3232));
    } else {
        var if_res1866 = false;
    }
    if (if_res1866 !== false) {
        var n3234 = M0.length(lst3230);
        if (M1.unsafe_fx_eq_(n3234, 0) !== false) {
            var if_res1887 = lst3230;
        } else {
            if (cache_keys_p3233 !== false) {
                var vec3235 = M0.make_vector(n3234 + M0.ceiling(n3234 / 2));
                var loop3236 = function(i3237, lst3238) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M0.pair_p(lst3238) !== false) {
                        var x3239 = M0.car(lst3238);
                        M1.unsafe_vector_set_bang_(vec3235, i3237, M0.cons(getkey3232(x3239), x3239));
                        var if_res1867 = loop3236(M1.unsafe_fx_plus_(i3237, 1), M0.cdr(lst3238));
                    } else {
                        var if_res1867 = M0.rvoid();
                    }
                    return if_res1867;
                };
                loop3236(0, lst3230);
                generic_sort_by_key3143(vec3235, less_than_p3231, n3234, M1.unsafe_car);
                var loop3240 = function(i3241, r3242) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var i3243 = M1.unsafe_fx_(i3241, 1);
                    if (M1.unsafe_fx_lt_(i3243, 0) !== false) {
                        var if_res1868 = r3242;
                    } else {
                        var if_res1868 = loop3240(i3243, M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3235, i3243)), r3242));
                    }
                    return if_res1868;
                };
                var if_res1886 = loop3240(n3234, $rjs_core.Pair.EMPTY);
            } else {
                var loop3244 = function(last3245, next3246) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3247 = M0.null_p(next3246);
                    if (or_part3247 !== false) {
                        var if_res1871 = or_part3247;
                    } else {
                        if (getkey3232 !== false) {
                            var if_res1869 = less_than_p3231(getkey3232(M1.unsafe_car(next3246)), getkey3232(last3245));
                        } else {
                            var if_res1869 = less_than_p3231(M1.unsafe_car(next3246), last3245);
                        }
                        if (M0.not(if_res1869) !== false) {
                            var if_res1870 = loop3244(M1.unsafe_car(next3246), M1.unsafe_cdr(next3246));
                        } else {
                            var if_res1870 = false;
                        }
                        var if_res1871 = if_res1870;
                    }
                    return if_res1871;
                };
                if (loop3244(M0.car(lst3230), M0.cdr(lst3230)) !== false) {
                    var if_res1885 = lst3230;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3234, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n3234, 1) !== false) {
                            var if_res1881 = lst3230;
                        } else {
                            if (M1.unsafe_fx_eq_(n3234, 2) !== false) {
                                var if_res1880 = M0.list(M0.cadr(lst3230), M0.car(lst3230));
                            } else {
                                var a3248 = M0.car(lst3230);
                                var b3249 = M0.cadr(lst3230);
                                var c3250 = M0.caddr(lst3230);
                                if (getkey3232 !== false) {
                                    var if_res1872 = less_than_p3231(getkey3232(b3249), getkey3232(a3248));
                                } else {
                                    var if_res1872 = less_than_p3231(b3249, a3248);
                                }
                                if (if_res1872 !== false) {
                                    if (getkey3232 !== false) {
                                        var if_res1873 = less_than_p3231(getkey3232(c3250), getkey3232(b3249));
                                    } else {
                                        var if_res1873 = less_than_p3231(c3250, b3249);
                                    }
                                    if (if_res1873 !== false) {
                                        var if_res1876 = M0.list(c3250, b3249, a3248);
                                    } else {
                                        if (getkey3232 !== false) {
                                            var if_res1874 = less_than_p3231(getkey3232(c3250), getkey3232(a3248));
                                        } else {
                                            var if_res1874 = less_than_p3231(c3250, a3248);
                                        }
                                        if (if_res1874 !== false) {
                                            var if_res1875 = M0.list(b3249, c3250, a3248);
                                        } else {
                                            var if_res1875 = M0.list(b3249, a3248, c3250);
                                        }
                                        var if_res1876 = if_res1875;
                                    }
                                    var if_res1879 = if_res1876;
                                } else {
                                    if (getkey3232 !== false) {
                                        var if_res1877 = less_than_p3231(getkey3232(c3250), getkey3232(a3248));
                                    } else {
                                        var if_res1877 = less_than_p3231(c3250, a3248);
                                    }
                                    if (if_res1877 !== false) {
                                        var if_res1878 = M0.list(c3250, a3248, b3249);
                                    } else {
                                        var if_res1878 = M0.list(a3248, c3250, b3249);
                                    }
                                    var if_res1879 = if_res1878;
                                }
                                var if_res1880 = if_res1879;
                            }
                            var if_res1881 = if_res1880;
                        }
                        var if_res1884 = if_res1881;
                    } else {
                        var vec3251 = M0.make_vector(n3234 + M0.ceiling(n3234 / 2));
                        var loop3252 = function(i3253, lst3254) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            if (M0.pair_p(lst3254) !== false) {
                                M0.vector_set_bang_(vec3251, i3253, M0.car(lst3254));
                                var if_res1882 = loop3252(M0.add1(i3253), M0.cdr(lst3254));
                            } else {
                                var if_res1882 = M0.rvoid();
                            }
                            return if_res1882;
                        };
                        loop3252(0, lst3230);
                        generic_sort_by_key3143(vec3251, less_than_p3231, n3234, getkey3232);
                        var loop3255 = function(i3256, r3257) {
                            if (arguments.length !== 2) {
                                throw $rjs_core.racketContractError("arity mismatch");
                            } else {}
                            var i3258 = M0.sub1(i3256);
                            if (M0.__lt_(i3258, 0) !== false) {
                                var if_res1883 = r3257;
                            } else {
                                var if_res1883 = loop3255(i3258, M0.cons(M0.vector_ref(vec3251, i3258), r3257));
                            }
                            return if_res1883;
                        };
                        var if_res1884 = loop3255(n3234, $rjs_core.Pair.EMPTY);
                    }
                    var if_res1885 = if_res1884;
                }
                var if_res1886 = if_res1885;
            }
            var if_res1887 = if_res1886;
        }
        var if_res1888 = if_res1887;
    } else {
        var if_res1888 = sort(lst3230, less_than_p3231);
    }
    return if_res1888;
};
var temp1889 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1842 = {
        '2': cl1839,
        '3': cl1840,
        '4': cl1841
    } [arguments.length];
    if (fixed_lam1842 !== undefined) {
        return fixed_lam1842.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl1785 = function(vec3259, less_than_p3260, start3261, end3262) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3263 = end3262 - start3261;
    if (true !== false) {
        var if_res1788 = M0.make_vector(n3263);
    } else {
        var if_res1788 = vec3259;
    }
    var dst_vec3264 = if_res1788;
    if (true !== false) {
        var if_res1789 = 0;
    } else {
        var if_res1789 = start3261;
    }
    var dst_start3265 = if_res1789;
    if (M1.unsafe_fx_eq_(n3263, 0) !== false) {
        var if_res1810 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3266 = M0.make_vector(n3263 + M0.ceiling(n3263 / 2), true);
            var loop3267 = function(i3268) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3268, n3263) !== false) {
                    var x3269 = M1.unsafe_vector_ref(vec3259, M1.unsafe_fx_plus_(i3268, start3261));
                    M1.unsafe_vector_set_bang_(work_vec3266, i3268, M0.cons(false(x3269), x3269));
                    var if_res1790 = loop3267(M1.unsafe_fx_plus_(i3268, 1));
                } else {
                    var if_res1790 = M0.rvoid();
                }
                return if_res1790;
            };
            loop3267(0);
            generic_sort_by_key3143(work_vec3266, less_than_p3260, n3263, M1.unsafe_car);
            var loop3270 = function(i3271) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3271, n3263) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(i3271, dst_start3265), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3266, i3271)));
                    var if_res1791 = loop3270(M1.unsafe_fx_plus_(i3271, 1));
                } else {
                    var if_res1791 = M0.rvoid();
                }
                return if_res1791;
            };
            var if_res1809 = loop3270(0);
        } else {
            var loop3272 = function(prev_val3273, next_index3274) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3275 = M1.unsafe_fx_eq_(next_index3274, end3262);
                if (or_part3275 !== false) {
                    var if_res1794 = or_part3275;
                } else {
                    var next_val3276 = M1.unsafe_vector_ref(vec3259, next_index3274);
                    if (false !== false) {
                        var if_res1792 = less_than_p3260(false(next_val3276), false(prev_val3273));
                    } else {
                        var if_res1792 = less_than_p3260(next_val3276, prev_val3273);
                    }
                    if (M0.not(if_res1792) !== false) {
                        var if_res1793 = loop3272(next_val3276, M1.unsafe_fx_plus_(next_index3274, 1));
                    } else {
                        var if_res1793 = false;
                    }
                    var if_res1794 = if_res1793;
                }
                return if_res1794;
            };
            if (loop3272(M1.unsafe_vector_ref(vec3259, start3261), M1.unsafe_fx_plus_(start3261, 1)) !== false) {
                if (true !== false) {
                    var if_res1795 = M0.vector_copy_bang_(dst_vec3264, dst_start3265, vec3259, start3261, end3262);
                } else {
                    var if_res1795 = M0.rvoid();
                }
                var if_res1808 = if_res1795;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3263, 3) !== false) {
                    if (true !== false) {
                        var if_res1796 = M0.vector_copy_bang_(dst_vec3264, dst_start3265, vec3259, start3261, end3262);
                    } else {
                        var if_res1796 = M0.rvoid();
                    }
                    if_res1796;
                    if (M1.unsafe_fx_eq_(n3263, 1) !== false) {
                        var if_res1806 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3263, 2) !== false) {
                            var tmp3277 = M1.unsafe_vector_ref(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0), M1.unsafe_vector_ref(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1)));
                            var if_res1805 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1), tmp3277);
                        } else {
                            var a3278 = M1.unsafe_vector_ref(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0));
                            var b3279 = M1.unsafe_vector_ref(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1));
                            var c3280 = M1.unsafe_vector_ref(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 2));
                            if (false !== false) {
                                var if_res1797 = less_than_p3260(false(b3279), false(a3278));
                            } else {
                                var if_res1797 = less_than_p3260(b3279, a3278);
                            }
                            if (if_res1797 !== false) {
                                if (false !== false) {
                                    var if_res1798 = less_than_p3260(false(c3280), false(b3279));
                                } else {
                                    var if_res1798 = less_than_p3260(c3280, b3279);
                                }
                                if (if_res1798 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0), c3280);
                                    var if_res1801 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 2), a3278);
                                } else {
                                    if (false !== false) {
                                        var if_res1799 = less_than_p3260(false(c3280), false(a3278));
                                    } else {
                                        var if_res1799 = less_than_p3260(c3280, a3278);
                                    }
                                    if (if_res1799 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0), b3279);
                                        M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1), c3280);
                                        var if_res1800 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 2), a3278);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0), b3279);
                                        var if_res1800 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1), a3278);
                                    }
                                    var if_res1801 = if_res1800;
                                }
                                var if_res1804 = if_res1801;
                            } else {
                                if (false !== false) {
                                    var if_res1802 = less_than_p3260(false(c3280), false(a3278));
                                } else {
                                    var if_res1802 = less_than_p3260(c3280, a3278);
                                }
                                if (if_res1802 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 0), c3280);
                                    M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1), a3278);
                                    var if_res1803 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 2), b3279);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 1), c3280);
                                    var if_res1803 = M1.unsafe_vector_set_bang_(dst_vec3264, M1.unsafe_fx_plus_(dst_start3265, 2), b3279);
                                }
                                var if_res1804 = if_res1803;
                            }
                            var if_res1805 = if_res1804;
                        }
                        var if_res1806 = if_res1805;
                    }
                    var if_res1807 = if_res1806;
                } else {
                    var work_vec3281 = M0.make_vector(n3263 + M0.ceiling(n3263 / 2), false);
                    M0.vector_copy_bang_(work_vec3281, 0, vec3259, start3261, end3262);
                    generic_sort3087(work_vec3281, less_than_p3260, n3263);
                    var if_res1807 = M0.vector_copy_bang_(dst_vec3264, dst_start3265, work_vec3281, 0, n3263);
                }
                var if_res1808 = if_res1807;
            }
            var if_res1809 = if_res1808;
        }
        var if_res1810 = if_res1809;
    }
    if_res1810;
    if (true !== false) {
        var if_res1811 = dst_vec3264;
    } else {
        var if_res1811 = M0.rvoid();
    }
    return if_res1811;
};
var cl1786 = function(vec3282, less_than_p3283, start3284, end3285, getkey3286, cache_keys_p3287) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3286 !== false) {
        var if_res1812 = M0.not(M0.eq_p(M0.values, getkey3286));
    } else {
        var if_res1812 = false;
    }
    if (if_res1812 !== false) {
        var n3288 = end3285 - start3284;
        if (true !== false) {
            var if_res1813 = M0.make_vector(n3288);
        } else {
            var if_res1813 = vec3282;
        }
        var dst_vec3289 = if_res1813;
        if (true !== false) {
            var if_res1814 = 0;
        } else {
            var if_res1814 = start3284;
        }
        var dst_start3290 = if_res1814;
        if (M1.unsafe_fx_eq_(n3288, 0) !== false) {
            var if_res1835 = M0.rvoid();
        } else {
            if (cache_keys_p3287 !== false) {
                var work_vec3291 = M0.make_vector(n3288 + M0.ceiling(n3288 / 2), true);
                var loop3292 = function(i3293) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3293, n3288) !== false) {
                        var x3294 = M1.unsafe_vector_ref(vec3282, M1.unsafe_fx_plus_(i3293, start3284));
                        M1.unsafe_vector_set_bang_(work_vec3291, i3293, M0.cons(getkey3286(x3294), x3294));
                        var if_res1815 = loop3292(M1.unsafe_fx_plus_(i3293, 1));
                    } else {
                        var if_res1815 = M0.rvoid();
                    }
                    return if_res1815;
                };
                loop3292(0);
                generic_sort_by_key3143(work_vec3291, less_than_p3283, n3288, M1.unsafe_car);
                var loop3295 = function(i3296) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3296, n3288) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(i3296, dst_start3290), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3291, i3296)));
                        var if_res1816 = loop3295(M1.unsafe_fx_plus_(i3296, 1));
                    } else {
                        var if_res1816 = M0.rvoid();
                    }
                    return if_res1816;
                };
                var if_res1834 = loop3295(0);
            } else {
                var loop3297 = function(prev_val3298, next_index3299) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3300 = M1.unsafe_fx_eq_(next_index3299, end3285);
                    if (or_part3300 !== false) {
                        var if_res1819 = or_part3300;
                    } else {
                        var next_val3301 = M1.unsafe_vector_ref(vec3282, next_index3299);
                        if (getkey3286 !== false) {
                            var if_res1817 = less_than_p3283(getkey3286(next_val3301), getkey3286(prev_val3298));
                        } else {
                            var if_res1817 = less_than_p3283(next_val3301, prev_val3298);
                        }
                        if (M0.not(if_res1817) !== false) {
                            var if_res1818 = loop3297(next_val3301, M1.unsafe_fx_plus_(next_index3299, 1));
                        } else {
                            var if_res1818 = false;
                        }
                        var if_res1819 = if_res1818;
                    }
                    return if_res1819;
                };
                if (loop3297(M1.unsafe_vector_ref(vec3282, start3284), M1.unsafe_fx_plus_(start3284, 1)) !== false) {
                    if (true !== false) {
                        var if_res1820 = M0.vector_copy_bang_(dst_vec3289, dst_start3290, vec3282, start3284, end3285);
                    } else {
                        var if_res1820 = M0.rvoid();
                    }
                    var if_res1833 = if_res1820;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3288, 3) !== false) {
                        if (true !== false) {
                            var if_res1821 = M0.vector_copy_bang_(dst_vec3289, dst_start3290, vec3282, start3284, end3285);
                        } else {
                            var if_res1821 = M0.rvoid();
                        }
                        if_res1821;
                        if (M1.unsafe_fx_eq_(n3288, 1) !== false) {
                            var if_res1831 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3288, 2) !== false) {
                                var tmp3302 = M1.unsafe_vector_ref(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0), M1.unsafe_vector_ref(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1)));
                                var if_res1830 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1), tmp3302);
                            } else {
                                var a3303 = M1.unsafe_vector_ref(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0));
                                var b3304 = M1.unsafe_vector_ref(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1));
                                var c3305 = M1.unsafe_vector_ref(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 2));
                                if (getkey3286 !== false) {
                                    var if_res1822 = less_than_p3283(getkey3286(b3304), getkey3286(a3303));
                                } else {
                                    var if_res1822 = less_than_p3283(b3304, a3303);
                                }
                                if (if_res1822 !== false) {
                                    if (getkey3286 !== false) {
                                        var if_res1823 = less_than_p3283(getkey3286(c3305), getkey3286(b3304));
                                    } else {
                                        var if_res1823 = less_than_p3283(c3305, b3304);
                                    }
                                    if (if_res1823 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0), c3305);
                                        var if_res1826 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 2), a3303);
                                    } else {
                                        if (getkey3286 !== false) {
                                            var if_res1824 = less_than_p3283(getkey3286(c3305), getkey3286(a3303));
                                        } else {
                                            var if_res1824 = less_than_p3283(c3305, a3303);
                                        }
                                        if (if_res1824 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0), b3304);
                                            M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1), c3305);
                                            var if_res1825 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 2), a3303);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0), b3304);
                                            var if_res1825 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1), a3303);
                                        }
                                        var if_res1826 = if_res1825;
                                    }
                                    var if_res1829 = if_res1826;
                                } else {
                                    if (getkey3286 !== false) {
                                        var if_res1827 = less_than_p3283(getkey3286(c3305), getkey3286(a3303));
                                    } else {
                                        var if_res1827 = less_than_p3283(c3305, a3303);
                                    }
                                    if (if_res1827 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 0), c3305);
                                        M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1), a3303);
                                        var if_res1828 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 2), b3304);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 1), c3305);
                                        var if_res1828 = M1.unsafe_vector_set_bang_(dst_vec3289, M1.unsafe_fx_plus_(dst_start3290, 2), b3304);
                                    }
                                    var if_res1829 = if_res1828;
                                }
                                var if_res1830 = if_res1829;
                            }
                            var if_res1831 = if_res1830;
                        }
                        var if_res1832 = if_res1831;
                    } else {
                        var work_vec3306 = M0.make_vector(n3288 + M0.ceiling(n3288 / 2), false);
                        M0.vector_copy_bang_(work_vec3306, 0, vec3282, start3284, end3285);
                        generic_sort_by_key3143(work_vec3306, less_than_p3283, n3288, getkey3286);
                        var if_res1832 = M0.vector_copy_bang_(dst_vec3289, dst_start3290, work_vec3306, 0, n3288);
                    }
                    var if_res1833 = if_res1832;
                }
                var if_res1834 = if_res1833;
            }
            var if_res1835 = if_res1834;
        }
        if_res1835;
        if (true !== false) {
            var if_res1836 = dst_vec3289;
        } else {
            var if_res1836 = M0.rvoid();
        }
        var if_res1837 = if_res1836;
    } else {
        var if_res1837 = vector_sort(vec3282, less_than_p3283, start3284, end3285);
    }
    return if_res1837;
};
var temp1838 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1787 = {
        '4': cl1785,
        '6': cl1786
    } [arguments.length];
    if (fixed_lam1787 !== undefined) {
        return fixed_lam1787.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl1732 = function(vec3307, less_than_p3308, start3309, end3310) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var n3311 = end3310 - start3309;
    if (false !== false) {
        var if_res1735 = M0.make_vector(n3311);
    } else {
        var if_res1735 = vec3307;
    }
    var dst_vec3312 = if_res1735;
    if (false !== false) {
        var if_res1736 = 0;
    } else {
        var if_res1736 = start3309;
    }
    var dst_start3313 = if_res1736;
    if (M1.unsafe_fx_eq_(n3311, 0) !== false) {
        var if_res1757 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3314 = M0.make_vector(n3311 + M0.ceiling(n3311 / 2), true);
            var loop3315 = function(i3316) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3316, n3311) !== false) {
                    var x3317 = M1.unsafe_vector_ref(vec3307, M1.unsafe_fx_plus_(i3316, start3309));
                    M1.unsafe_vector_set_bang_(work_vec3314, i3316, M0.cons(false(x3317), x3317));
                    var if_res1737 = loop3315(M1.unsafe_fx_plus_(i3316, 1));
                } else {
                    var if_res1737 = M0.rvoid();
                }
                return if_res1737;
            };
            loop3315(0);
            generic_sort_by_key3143(work_vec3314, less_than_p3308, n3311, M1.unsafe_car);
            var loop3318 = function(i3319) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (M1.unsafe_fx_lt_(i3319, n3311) !== false) {
                    M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(i3319, dst_start3313), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3314, i3319)));
                    var if_res1738 = loop3318(M1.unsafe_fx_plus_(i3319, 1));
                } else {
                    var if_res1738 = M0.rvoid();
                }
                return if_res1738;
            };
            var if_res1756 = loop3318(0);
        } else {
            var loop3320 = function(prev_val3321, next_index3322) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var or_part3323 = M1.unsafe_fx_eq_(next_index3322, end3310);
                if (or_part3323 !== false) {
                    var if_res1741 = or_part3323;
                } else {
                    var next_val3324 = M1.unsafe_vector_ref(vec3307, next_index3322);
                    if (false !== false) {
                        var if_res1739 = less_than_p3308(false(next_val3324), false(prev_val3321));
                    } else {
                        var if_res1739 = less_than_p3308(next_val3324, prev_val3321);
                    }
                    if (M0.not(if_res1739) !== false) {
                        var if_res1740 = loop3320(next_val3324, M1.unsafe_fx_plus_(next_index3322, 1));
                    } else {
                        var if_res1740 = false;
                    }
                    var if_res1741 = if_res1740;
                }
                return if_res1741;
            };
            if (loop3320(M1.unsafe_vector_ref(vec3307, start3309), M1.unsafe_fx_plus_(start3309, 1)) !== false) {
                if (false !== false) {
                    var if_res1742 = M0.vector_copy_bang_(dst_vec3312, dst_start3313, vec3307, start3309, end3310);
                } else {
                    var if_res1742 = M0.rvoid();
                }
                var if_res1755 = if_res1742;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3311, 3) !== false) {
                    if (false !== false) {
                        var if_res1743 = M0.vector_copy_bang_(dst_vec3312, dst_start3313, vec3307, start3309, end3310);
                    } else {
                        var if_res1743 = M0.rvoid();
                    }
                    if_res1743;
                    if (M1.unsafe_fx_eq_(n3311, 1) !== false) {
                        var if_res1753 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3311, 2) !== false) {
                            var tmp3325 = M1.unsafe_vector_ref(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0), M1.unsafe_vector_ref(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1)));
                            var if_res1752 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1), tmp3325);
                        } else {
                            var a3326 = M1.unsafe_vector_ref(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0));
                            var b3327 = M1.unsafe_vector_ref(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1));
                            var c3328 = M1.unsafe_vector_ref(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 2));
                            if (false !== false) {
                                var if_res1744 = less_than_p3308(false(b3327), false(a3326));
                            } else {
                                var if_res1744 = less_than_p3308(b3327, a3326);
                            }
                            if (if_res1744 !== false) {
                                if (false !== false) {
                                    var if_res1745 = less_than_p3308(false(c3328), false(b3327));
                                } else {
                                    var if_res1745 = less_than_p3308(c3328, b3327);
                                }
                                if (if_res1745 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0), c3328);
                                    var if_res1748 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 2), a3326);
                                } else {
                                    if (false !== false) {
                                        var if_res1746 = less_than_p3308(false(c3328), false(a3326));
                                    } else {
                                        var if_res1746 = less_than_p3308(c3328, a3326);
                                    }
                                    if (if_res1746 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0), b3327);
                                        M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1), c3328);
                                        var if_res1747 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 2), a3326);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0), b3327);
                                        var if_res1747 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1), a3326);
                                    }
                                    var if_res1748 = if_res1747;
                                }
                                var if_res1751 = if_res1748;
                            } else {
                                if (false !== false) {
                                    var if_res1749 = less_than_p3308(false(c3328), false(a3326));
                                } else {
                                    var if_res1749 = less_than_p3308(c3328, a3326);
                                }
                                if (if_res1749 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 0), c3328);
                                    M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1), a3326);
                                    var if_res1750 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 2), b3327);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 1), c3328);
                                    var if_res1750 = M1.unsafe_vector_set_bang_(dst_vec3312, M1.unsafe_fx_plus_(dst_start3313, 2), b3327);
                                }
                                var if_res1751 = if_res1750;
                            }
                            var if_res1752 = if_res1751;
                        }
                        var if_res1753 = if_res1752;
                    }
                    var if_res1754 = if_res1753;
                } else {
                    var work_vec3329 = M0.make_vector(n3311 + M0.ceiling(n3311 / 2), false);
                    M0.vector_copy_bang_(work_vec3329, 0, vec3307, start3309, end3310);
                    generic_sort3087(work_vec3329, less_than_p3308, n3311);
                    var if_res1754 = M0.vector_copy_bang_(dst_vec3312, dst_start3313, work_vec3329, 0, n3311);
                }
                var if_res1755 = if_res1754;
            }
            var if_res1756 = if_res1755;
        }
        var if_res1757 = if_res1756;
    }
    if_res1757;
    if (false !== false) {
        var if_res1758 = dst_vec3312;
    } else {
        var if_res1758 = M0.rvoid();
    }
    return if_res1758;
};
var cl1733 = function(vec3330, less_than_p3331, start3332, end3333, getkey3334, cache_keys_p3335) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (getkey3334 !== false) {
        var if_res1759 = M0.not(M0.eq_p(M0.values, getkey3334));
    } else {
        var if_res1759 = false;
    }
    if (if_res1759 !== false) {
        var n3336 = end3333 - start3332;
        if (false !== false) {
            var if_res1760 = M0.make_vector(n3336);
        } else {
            var if_res1760 = vec3330;
        }
        var dst_vec3337 = if_res1760;
        if (false !== false) {
            var if_res1761 = 0;
        } else {
            var if_res1761 = start3332;
        }
        var dst_start3338 = if_res1761;
        if (M1.unsafe_fx_eq_(n3336, 0) !== false) {
            var if_res1782 = M0.rvoid();
        } else {
            if (cache_keys_p3335 !== false) {
                var work_vec3339 = M0.make_vector(n3336 + M0.ceiling(n3336 / 2), true);
                var loop3340 = function(i3341) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3341, n3336) !== false) {
                        var x3342 = M1.unsafe_vector_ref(vec3330, M1.unsafe_fx_plus_(i3341, start3332));
                        M1.unsafe_vector_set_bang_(work_vec3339, i3341, M0.cons(getkey3334(x3342), x3342));
                        var if_res1762 = loop3340(M1.unsafe_fx_plus_(i3341, 1));
                    } else {
                        var if_res1762 = M0.rvoid();
                    }
                    return if_res1762;
                };
                loop3340(0);
                generic_sort_by_key3143(work_vec3339, less_than_p3331, n3336, M1.unsafe_car);
                var loop3343 = function(i3344) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    if (M1.unsafe_fx_lt_(i3344, n3336) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(i3344, dst_start3338), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3339, i3344)));
                        var if_res1763 = loop3343(M1.unsafe_fx_plus_(i3344, 1));
                    } else {
                        var if_res1763 = M0.rvoid();
                    }
                    return if_res1763;
                };
                var if_res1781 = loop3343(0);
            } else {
                var loop3345 = function(prev_val3346, next_index3347) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var or_part3348 = M1.unsafe_fx_eq_(next_index3347, end3333);
                    if (or_part3348 !== false) {
                        var if_res1766 = or_part3348;
                    } else {
                        var next_val3349 = M1.unsafe_vector_ref(vec3330, next_index3347);
                        if (getkey3334 !== false) {
                            var if_res1764 = less_than_p3331(getkey3334(next_val3349), getkey3334(prev_val3346));
                        } else {
                            var if_res1764 = less_than_p3331(next_val3349, prev_val3346);
                        }
                        if (M0.not(if_res1764) !== false) {
                            var if_res1765 = loop3345(next_val3349, M1.unsafe_fx_plus_(next_index3347, 1));
                        } else {
                            var if_res1765 = false;
                        }
                        var if_res1766 = if_res1765;
                    }
                    return if_res1766;
                };
                if (loop3345(M1.unsafe_vector_ref(vec3330, start3332), M1.unsafe_fx_plus_(start3332, 1)) !== false) {
                    if (false !== false) {
                        var if_res1767 = M0.vector_copy_bang_(dst_vec3337, dst_start3338, vec3330, start3332, end3333);
                    } else {
                        var if_res1767 = M0.rvoid();
                    }
                    var if_res1780 = if_res1767;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3336, 3) !== false) {
                        if (false !== false) {
                            var if_res1768 = M0.vector_copy_bang_(dst_vec3337, dst_start3338, vec3330, start3332, end3333);
                        } else {
                            var if_res1768 = M0.rvoid();
                        }
                        if_res1768;
                        if (M1.unsafe_fx_eq_(n3336, 1) !== false) {
                            var if_res1778 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3336, 2) !== false) {
                                var tmp3350 = M1.unsafe_vector_ref(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0), M1.unsafe_vector_ref(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1)));
                                var if_res1777 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1), tmp3350);
                            } else {
                                var a3351 = M1.unsafe_vector_ref(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0));
                                var b3352 = M1.unsafe_vector_ref(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1));
                                var c3353 = M1.unsafe_vector_ref(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 2));
                                if (getkey3334 !== false) {
                                    var if_res1769 = less_than_p3331(getkey3334(b3352), getkey3334(a3351));
                                } else {
                                    var if_res1769 = less_than_p3331(b3352, a3351);
                                }
                                if (if_res1769 !== false) {
                                    if (getkey3334 !== false) {
                                        var if_res1770 = less_than_p3331(getkey3334(c3353), getkey3334(b3352));
                                    } else {
                                        var if_res1770 = less_than_p3331(c3353, b3352);
                                    }
                                    if (if_res1770 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0), c3353);
                                        var if_res1773 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 2), a3351);
                                    } else {
                                        if (getkey3334 !== false) {
                                            var if_res1771 = less_than_p3331(getkey3334(c3353), getkey3334(a3351));
                                        } else {
                                            var if_res1771 = less_than_p3331(c3353, a3351);
                                        }
                                        if (if_res1771 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0), b3352);
                                            M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1), c3353);
                                            var if_res1772 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 2), a3351);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0), b3352);
                                            var if_res1772 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1), a3351);
                                        }
                                        var if_res1773 = if_res1772;
                                    }
                                    var if_res1776 = if_res1773;
                                } else {
                                    if (getkey3334 !== false) {
                                        var if_res1774 = less_than_p3331(getkey3334(c3353), getkey3334(a3351));
                                    } else {
                                        var if_res1774 = less_than_p3331(c3353, a3351);
                                    }
                                    if (if_res1774 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 0), c3353);
                                        M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1), a3351);
                                        var if_res1775 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 2), b3352);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 1), c3353);
                                        var if_res1775 = M1.unsafe_vector_set_bang_(dst_vec3337, M1.unsafe_fx_plus_(dst_start3338, 2), b3352);
                                    }
                                    var if_res1776 = if_res1775;
                                }
                                var if_res1777 = if_res1776;
                            }
                            var if_res1778 = if_res1777;
                        }
                        var if_res1779 = if_res1778;
                    } else {
                        var work_vec3354 = M0.make_vector(n3336 + M0.ceiling(n3336 / 2), false);
                        M0.vector_copy_bang_(work_vec3354, 0, vec3330, start3332, end3333);
                        generic_sort_by_key3143(work_vec3354, less_than_p3331, n3336, getkey3334);
                        var if_res1779 = M0.vector_copy_bang_(dst_vec3337, dst_start3338, work_vec3354, 0, n3336);
                    }
                    var if_res1780 = if_res1779;
                }
                var if_res1781 = if_res1780;
            }
            var if_res1782 = if_res1781;
        }
        if_res1782;
        if (false !== false) {
            var if_res1783 = dst_vec3337;
        } else {
            var if_res1783 = M0.rvoid();
        }
        var if_res1784 = if_res1783;
    } else {
        var if_res1784 = vector_sort_bang_(vec3330, less_than_p3331, start3332, end3333);
    }
    return if_res1784;
};
var let_result1890 = M0.values(temp1889, temp1838, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1734 = {
        '4': cl1732,
        '6': cl1733
    } [arguments.length];
    if (fixed_lam1734 !== undefined) {
        return fixed_lam1734.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result1890.getAt(0);
var vector_sort = let_result1890.getAt(1);
var vector_sort_bang_ = let_result1890.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};