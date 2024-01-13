import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "../private/jscommon.rkt.js";
import * as M1 from "../../../../runtime/kernel.rkt.js";
import * as M2 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M3 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var __times_default_frames_per_second_times_ = 70;
var make_big_bang = function(init_world935, handlers936) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new BigBang(init_world935, handlers936);
};
var big_bang = $rjs_core.attachProcedureArity(function(init_world937, ...handlers938420) {
    if (arguments.length < 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var handlers938 = $rjs_core.Pair.listFromArray(handlers938420);
    return make_big_bang(init_world937, handlers938).setup().start();
});
var BigBang = function(init_world939, handlers940) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this941 = this;
    this941.world = init_world939;
    this941.interval = 1000 / __times_default_frames_per_second_times_;
    this941.handlers = handlers940;
    this941.__active_handlers = {};
    this941.__world_change_listeners = [];
    this941.__idle = true;
    this941.__stopped = true;
    this941.__events = [];
    return null;
};
BigBang.prototype.setup = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this942 = this;
    var canvas943 = M0.document.createElement("canvas");
    var ctx944 = canvas943.getContext("2d");
    canvas943.setAttribute("tabindex", 1);
    var let_result421 = M1.values();
    canvas943.setAttribute("style", "outline: none");
    var let_result422 = M1.values();
    this942.__canvas = canvas943;
    var let_result423 = M1.values();
    this942.__context = ctx944;
    var let_result424 = M1.values();
    M0.document.body.appendChild(canvas943);
    var let_result425 = M1.values();
    canvas943.focus();
    var let_result426 = M1.values();
    this942.register_handlers();
    var let_result427 = M1.values();
    var draw_handler945 = this942.__active_handlers["to-draw"];
    if (draw_handler945 !== false) {
        var if_res428 = M1.rvoid();
    } else {
        var if_res428 = M1.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res428;
    var let_result429 = M1.values();
    var img946 = draw_handler945.callback(this942.world);
    canvas943.width = img946.width;
    canvas943.height = img946.height;
    this942.change_world(this942.world);
    return this942;
};
BigBang.prototype.register_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this947 = this;
    var active_handlers948 = this947.__active_handlers;
    var loop949 = function(handlers950) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.pair_p(handlers950) !== false) {
            var h951 = M1.car(handlers950)(this947);
            h951.register();
            active_handlers948[h951.name] = h951;
            var if_res430 = loop949(M1.cdr(handlers950));
        } else {
            var if_res430 = M1.rvoid();
        }
        return if_res430;
    };
    return loop949(this947.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this952 = this;
    var active_handlers953 = this952.__active_handlers;
    return Object.keys(active_handlers953).forEach(function(key954) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var h955 = active_handlers953[key954];
        h955.deregister();
        active_handlers953[h955.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this956 = this;
    this956.__stopped = false;
    this956.queue_event({
        'type': "to-draw"
    });
    return this956.process_events();
};
BigBang.prototype.stop = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this957 = this;
    this957.clear_event_queue();
    this957.__stopped = true;
    this957.__idle = true;
    this957.deregister_handlers();
    this957.__active_handlers = {};
    this957.handlers = $rjs_core.Pair.EMPTY;
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this958 = this;
    return this958.__events.splice(0, this958.__events.length);
};
BigBang.prototype.queue_event = function(e959) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this960 = this;
    this960.__events.push(e959);
    if (this960.__idle !== false) {
        var self961 = this960;
        var if_res431 = window.requestAnimationFrame(function() {
            if (arguments.length !== 0) {
                throw $rjs_core.racketContractError("arity mismatch");
            } else {}
            return self961.process_events();
        });
    } else {
        var if_res431 = M1.rvoid();
    }
    return if_res431;
};
BigBang.prototype.change_world = function(new_world962) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this963 = this;
    var listeners964 = this963.__world_change_listeners;
    var loop965 = function(i966) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__lt_(i966, listeners964.length) !== false) {
            var listener967 = listeners964[i966];
            listener967(new_world962);
            var if_res432 = loop965(M1.add1(i966));
        } else {
            var if_res432 = M1.rvoid();
        }
        return if_res432;
    };
    loop965(0);
    this963.world = new_world962;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb968) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this969 = this;
    return this969.__world_change_listeners.push(cb968);
};
BigBang.prototype.remove_world_change_listener = function(cb970) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this971 = this;
    var index972 = this971.__world_change_listeners.indexOf(cb970);
    return this971.__world_change_listeners.splice(index972, 1);
};
BigBang.prototype.process_events = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this973 = this;
    var events974 = this973.__events;
    this973.__idle = false;
    var loop975 = function(world_changed_p976) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M1.__gt_(events974.length, 0) !== false) {
            var evt977 = events974.shift();
            var handler978 = this973.__active_handlers[evt977.type];
            if (M1.equal_p(evt977.type, "raw") !== false) {
                var if_res434 = evt977.invoke(this973.world, evt977);
            } else {
                if (handler978 !== false) {
                    var if_res433 = handler978.invoke(this973.world, evt977);
                } else {
                    var if_res433 = M0.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt977);
                }
                var if_res434 = if_res433;
            }
            var changed_p979 = if_res434;
            var or_part980 = world_changed_p976;
            if (or_part980 !== false) {
                var if_res435 = or_part980;
            } else {
                var if_res435 = changed_p979;
            }
            var if_res438 = loop975(if_res435);
        } else {
            if (world_changed_p976 !== false) {
                var if_res436 = M1.not(this973.__stopped);
            } else {
                var if_res436 = false;
            }
            if (if_res436 !== false) {
                this973.queue_event({
                    'type': "to-draw"
                });
                var if_res437 = loop975(false);
            } else {
                var if_res437 = M1.rvoid();
            }
            var if_res438 = if_res437;
        }
        return if_res438;
    };
    loop975(false);
    this973.__idle = true;
    return null;
};
var to_draw = function(cb981) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb982) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt983 = {
            'type': "to-draw"
        };
        return {
            'name': "to-draw",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.rvoid();
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                return M1.rvoid();
            },
            'callback': cb981,
            'invoke': function(world984, evt985) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var ctx986 = bb982.__context;
                var img987 = cb981(bb982.world);
                var height988 = img987.height;
                var width989 = img987.width;
                ctx986.clearRect(0, 0, width989, height988);
                img987.render(ctx986, width989 / 2, height988 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb990, rate991) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb992) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        var on_tick_evt993 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this994 = this;
                bb992.queue_event(on_tick_evt993);
                if (rate991 !== false) {
                    rate991 = 1000 * rate991;
                    var if_res439 = null;
                } else {
                    rate991 = bb992.interval;
                    var if_res439 = null;
                }
                return if_res439;
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this995 = this;
                var last_cb996 = this995.last_cb;
                if (last_cb996 !== false) {
                    var if_res440 = window.clearTimeout(last_cb996);
                } else {
                    var if_res440 = M1.rvoid();
                }
                return if_res440;
            },
            'invoke': function(world997, _998) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this999 = this;
                bb992.change_world(cb990(world997));
                this999.last_cb = setTimeout(function() {
                    if (arguments.length !== 0) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return bb992.queue_event(on_tick_evt993);
                }, rate991);
                return true;
            }
        };
    };
};
var on_mouse = function(cb1000) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1001) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-mouse",
            'listeners': {},
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1002 = this;
                var canvas1003 = bb1001.__canvas;
                var make_listener1004 = function(r_evt_name1005) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    return function(evt1006) {
                        if (arguments.length !== 1) {
                            throw $rjs_core.racketContractError("arity mismatch");
                        } else {}
                        var posn1007 = canvas_posn_δ(canvas1003, evt1006);
                        return bb1001.queue_event({
                            'type': "on-mouse",
                            'evt': M2.js_string__gt_string(r_evt_name1005),
                            'x': posn1007.x,
                            'y': posn1007.y
                        });
                    };
                };
                var register_listener1008 = function(evt_name1009, r_evt_name1010) {
                    if (arguments.length !== 2) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb1011 = make_listener1004(r_evt_name1010);
                    canvas1003.addEventListener(evt_name1009, cb1011);
                    this1002.listeners[evt_name1009] = cb1011;
                    return null;
                };
                register_listener1008("mousemove", "move");
                register_listener1008("mousedown", "button-down");
                register_listener1008("mouseup", "button-up");
                register_listener1008("mouseout", "leave");
                register_listener1008("mouseover", "enter");
                return register_listener1008("drag", "drag");
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1012 = this;
                var remove_listener1013 = function(evt_name1014) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    var cb1015 = this1012.listeners[evt_name1014];
                    return bb1001.__canvas.removeEventListener(evt_name1014, cb1015);
                };
                remove_listener1013("mousemove");
                remove_listener1013("mousedown");
                remove_listener1013("mouseup");
                remove_listener1013("mouseout");
                remove_listener1013("mouseover");
                return remove_listener1013("drag");
            },
            'invoke': function(world1016, evt1017) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1018 = cb1000(world1016, evt1017.x, evt1017.y, evt1017.evt);
                bb1001.change_world(new_world1018);
                return true;
            }
        };
    };
};
var on_key = function(cb1019) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1020) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-key",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1021 = this;
                var canvas1022 = bb1020.__canvas;
                this1021.listener = function(evt1023) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt1023.preventDefault();
                    evt1023.stopPropagation();
                    return bb1020.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt1023)
                    });
                };
                return canvas1022.addEventListener("keydown", this1021.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1024 = this;
                bb1020.__canvas.removeEventListener("keydown", this1024.listener);
                this1024.listener = undefined;
                return null;
            },
            'invoke': function(world1025, evt1026) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1027 = cb1019(world1025, evt1026.key);
                bb1020.change_world(new_world1027);
                return true;
            }
        };
    };
};
var on_release = function(cb1028) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return function(bb1029) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "on-release",
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1030 = this;
                var canvas1031 = bb1029.__canvas;
                this1030.listener = function(evt1032) {
                    if (arguments.length !== 1) {
                        throw $rjs_core.racketContractError("arity mismatch");
                    } else {}
                    evt1032.preventDefault();
                    evt1032.stopPropagation();
                    return bb1029.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt1032)
                    });
                };
                return canvas1031.addEventListener("keyup", this1030.listener);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1033 = this;
                bb1029.__canvas.removeEventListener("keyup", this1033.listener);
                this1033.listener = undefined;
                return null;
            },
            'invoke': function(world1034, evt1035) {
                if (arguments.length !== 2) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var new_world1036 = cb1028(world1034, evt1035.key);
                bb1029.change_world(new_world1036);
                return true;
            }
        };
    };
};
var stop_when1037 = function(last_world_p21038, last_picture11039) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var last_world_p1040 = last_world_p21038;
    if (false !== false) {
        var if_res441 = false;
    } else {
        var if_res441 = last_picture11039;
    }
    var last_picture1041 = if_res441;
    return function(bb1042) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return {
            'name': "stop-when",
            'predicate': last_world_p1040,
            'lastpicture': last_picture1041,
            'register': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1043 = this;
                return bb1042.add_world_change_listener(this1043.invoke);
            },
            'deregister': function() {
                if (arguments.length !== 0) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                var this1044 = this;
                return bb1042.remove_world_change_listener(this1044.invoke);
            },
            'invoke': function(w1045) {
                if (arguments.length !== 1) {
                    throw $rjs_core.racketContractError("arity mismatch");
                } else {}
                if (last_world_p1040(w1045) !== false) {
                    bb1042.stop();
                    if (last_picture1041 !== false) {
                        var handler1046 = to_draw(last_picture1041)(bb1042);
                        var if_res442 = bb1042.queue_event({
                            'type': "raw",
                            'invoke': handler1046.invoke
                        });
                    } else {
                        var if_res442 = M1.rvoid();
                    }
                    var if_res443 = if_res442;
                } else {
                    var if_res443 = M1.rvoid();
                }
                return if_res443;
            }
        };
    };
};
var cl444 = function(last_world_p1047) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when1037(last_world_p1047, false);
};
var cl445 = function(last_world_p1048, last_picture11049) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return stop_when1037(last_world_p1048, last_picture11049);
};
var stop_when = $rjs_core.attachProcedureArity(function() {
    var fixed_lam446 = {
        '1': cl444,
        '2': cl445
    } [arguments.length];
    if (fixed_lam446 !== undefined) {
        return fixed_lam446.apply(null, arguments);
    } else {
        return M1.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var key_table = {
    'Backspace': $rjs_core.UString.make("\b"),
    'Enter': $rjs_core.UString.make("\r"),
    'Tab': $rjs_core.UString.make("\t"),
    'ArrowLeft': $rjs_core.UString.make("left"),
    'ArrowRight': $rjs_core.UString.make("right"),
    'ArrowDown': $rjs_core.UString.make("down"),
    'ArrowUp': $rjs_core.UString.make("up"),
    'Shift': $rjs_core.UString.make("shift"),
    'Control': $rjs_core.UString.make("control"),
    'ControlRight': $rjs_core.UString.make("rcontrol"),
    'ControlLeft': $rjs_core.UString.make("control"),
    'ShiftRight': $rjs_core.UString.make("rshift"),
    'ShiftLeft': $rjs_core.UString.make("shift"),
    'Escape': $rjs_core.UString.make("escape"),
    'Home': $rjs_core.UString.make("home"),
    'End': $rjs_core.UString.make("end"),
    'Insert': $rjs_core.UString.make("insert"),
    'Delete': $rjs_core.UString.make("\u007F"),
    'Pause': $rjs_core.UString.make("pause"),
    'NumLock': $rjs_core.UString.make("numlock"),
    'F1': $rjs_core.UString.make("f1"),
    'F2': $rjs_core.UString.make("f2"),
    'F3': $rjs_core.UString.make("f3"),
    'F4': $rjs_core.UString.make("f4"),
    'F5': $rjs_core.UString.make("f5"),
    'F6': $rjs_core.UString.make("f6"),
    'F7': $rjs_core.UString.make("f7"),
    'F8': $rjs_core.UString.make("f8"),
    'F9': $rjs_core.UString.make("f9"),
    'F10': $rjs_core.UString.make("f10"),
    'F11': $rjs_core.UString.make("f11"),
    'F12': $rjs_core.UString.make("f12")
};
var key_event__gt_key_name = function(e1050) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var k1051 = e1050.key;
    var or_part1053 = k1051 === "Shift";
    if (or_part1053 !== false) {
        var if_res448 = or_part1053;
    } else {
        var or_part1054 = k1051 === "Control";
        if (or_part1054 !== false) {
            var if_res447 = or_part1054;
        } else {
            var if_res447 = k1051 === "Alt";
        }
        var if_res448 = if_res447;
    }
    if (if_res448 !== false) {
        var if_res449 = e1050.code;
    } else {
        var if_res449 = k1051;
    }
    var code1052 = if_res449;
    var key_table_code1055 = key_table[code1052];
    if (M1.void_p(key_table_code1055) !== false) {
        var if_res450 = M2.js_string__gt_string(code1052);
    } else {
        var if_res450 = key_table_code1055;
    }
    return if_res450;
};
var canvas_posn_δ = function(canvas1056, evt1057) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var rect1058 = canvas1056.getBoundingClientRect();
    return {
        'x': evt1057.clientX - rect1058.left,
        'y': evt1057.clientY - rect1058.top
    };
};
var key_eq__p = function(k11059, k21060) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.equal_p(k11059, k21060);
};
var mouse_eq__p = function(m11061, m21062) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return M1.equal_p(m11061, m21062);
};
var __rjs_quoted__ = {};
__rjs_quoted__.key_event__gt_key_name = key_event__gt_key_name;
export {
    __rjs_quoted__,
    mouse_eq__p,
    key_eq__p,
    big_bang,
    stop_when,
    to_draw,
    on_release,
    on_key,
    on_tick,
    on_mouse
};