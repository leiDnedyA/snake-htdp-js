import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "./private/color.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../../../../collects/racket/private/list.rkt.js";
import * as M3 from "../private/jscommon.rkt.js";
import * as M4 from "../../../../runtime/kernel.rkt.js";
import * as M5 from "../../../../collects/racket/private/map.rkt.js";
import * as M6 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var let_result451 = M4.make_struct_type($rjs_core.PrimitiveSymbol.make("posn"), false, 2, 0, false, M4.rnull, false, false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("posn"));
var struct_1063 = let_result451.getAt(0);
var make_1064 = let_result451.getAt(1);
var __p1065 = let_result451.getAt(2);
var __ref1066 = let_result451.getAt(3);
var __set_bang_1067 = let_result451.getAt(4);
var let_result452 = M4.values(struct_1063, make_1064, __p1065, M4.make_struct_field_accessor(__ref1066, 0, $rjs_core.PrimitiveSymbol.make("x")), M4.make_struct_field_accessor(__ref1066, 1, $rjs_core.PrimitiveSymbol.make("y")));
var struct_posn = let_result452.getAt(0);
var make_posn = let_result452.getAt(1);
var posn_p = let_result452.getAt(2);
var posn_x = let_result452.getAt(3);
var posn_y = let_result452.getAt(4);
var ___gt_web_color = function(p1068) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    if (M4.string_p(p1068) !== false) {
        var if_res455 = M0.string__gt_web_color(p1068);
    } else {
        if (M0.color_p(p1068) !== false) {
            var if_res454 = M0.color__gt_web_color(p1068);
        } else {
            if (M4.symbol_p(p1068) !== false) {
                var if_res453 = M0.string__gt_web_color(M4.symbol__gt_string(p1068));
            } else {
                var if_res453 = M4.error($rjs_core.PrimitiveSymbol.make("color"), $rjs_core.UString.make("invalid color"));
            }
            var if_res454 = if_res453;
        }
        var if_res455 = if_res454;
    }
    return if_res455;
};
var print_image = function(d1069) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var canvas1070 = M3.document.createElement("canvas");
    var ctx1071 = canvas1070.getContext("2d");
    M3.document.body.appendChild(canvas1070);
    M3.document.body.appendChild(M3.document.createElement("br"));
    canvas1070.width = d1069.width;
    canvas1070.height = d1069.height;
    ctx1071.save();
    ctx1071.translate(d1069.width / 2, d1069.height / 2);
    d1069.render(ctx1071, 0, 0);
    return ctx1071.restore();
};
var canvas1072 = M3.document.createElement("canvas");
var __times_invisible_canvas_context_times_ = canvas1072.getContext("2d");
var empty_image = {
    'type': $rjs_core.UString.make("empty-image"),
    'width': 0,
    'height': 0,
    'render': function(ctx1073, x1074, y1075) {
        if (arguments.length !== 3) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return M4.rvoid();
    }
};
var image_height = function(i1076) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1076.height;
};
var image_width = function(i1077) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return i1077.width;
};
var Text = function(text1078, size1079, color1080, face1081, family1082, style1083, weight1084, underline_p1085) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1086 = this;
    this1086.type = $rjs_core.UString.make("text");
    this1086.text = text1078;
    this1086.size = size1079;
    this1086.color = ___gt_web_color(color1080);
    this1086.face = face1081;
    this1086.family = family1082;
    this1086.style = style1083;
    this1086.weight = weight1084;
    this1086.underline = underline_p1085;
    return this1086._updateMetrics();
};
Text.prototype._updateMetrics = function() {
    if (arguments.length !== 0) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1087 = this;
    var font1088 = M4.string_append(this1087.weight, $rjs_core.UString.make(" "), this1087.style, $rjs_core.UString.make(" "), M4.number__gt_string(this1087.size), $rjs_core.UString.make("px "), this1087.face, $rjs_core.UString.make(" "), this1087.family);
    __times_invisible_canvas_context_times_.font = M1.js_string(font1088);
    var let_result456 = M4.values();
    var metrics1089 = __times_invisible_canvas_context_times_.measureText(M1.js_string(this1087.text));
    this1087.font = font1088;
    this1087.width = metrics1089.width;
    this1087.height = this1087.size;
    return null;
};
Text.prototype.render = function(ctx1090, x1091, y1092) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1093 = this;
    ctx1090.save();
    ctx1090.translate(x1091, y1092);
    ctx1090.font = M1.js_string(this1093.font);
    ctx1090.textAlign = "center";
    ctx1090.textBaseline = "middle";
    ctx1090.fillStyle = M1.js_string(this1093.color);
    ctx1090.fillText(M1.js_string(this1093.text), 0, 0);
    return ctx1090.restore();
};
var Line = function(x1094, y1095, pen_or_color1096) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1097 = this;
    this1097.type = $rjs_core.UString.make("line");
    this1097.width = M3.abs_plus_ceil(x1094);
    this1097.height = M3.abs_plus_ceil(y1095);
    this1097.mode = false;
    this1097.pen = pen_or_color1096;
    return null;
};
Line.prototype.render = function(ctx1098, x1099, y1100) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1101 = this;
    ctx1098.save();
    var let_result457 = M4.values();
    ctx1098.translate(x1099, y1100);
    var let_result458 = M4.values();
    ctx1098.beginPath();
    var let_result459 = M4.values();
    var sx1102 = M4.__(M4.abs(this1101.x / 2));
    var sy1103 = M4.__(M4.abs(this1101.y / 2));
    if (M4.__gt__eq_(x1099, 0) !== false) {
        var if_res460 = M4.__gt__eq_(y1100, 0);
    } else {
        var if_res460 = false;
    }
    if (if_res460 !== false) {
        ctx1098.moveTo(sx1102, sy1103);
        var if_res467 = ctx1098.lineTo(sx1102 + x1099, sy1103 + y1100);
    } else {
        if (M4.__gt__eq_(x1099, 0) !== false) {
            var if_res461 = M4.__lt_(y1100, 0);
        } else {
            var if_res461 = false;
        }
        if (if_res461 !== false) {
            ctx1098.moveTo(sx1102 + x1099, sy1103);
            var if_res466 = ctx1098.lineTo(sx1102, sy1103 - y1100);
        } else {
            if (M4.__lt_(x1099, 0) !== false) {
                var if_res462 = M4.__gt__eq_(y1100, 0);
            } else {
                var if_res462 = false;
            }
            if (if_res462 !== false) {
                ctx1098.moveTo(sx1102, sy1103 + y1100);
                var if_res465 = ctx1098.lineTo(sx1102 - x1099, sy1103);
            } else {
                if (M4.__lt_(x1099, 0) !== false) {
                    var if_res463 = M4.__lt_(y1100, 0);
                } else {
                    var if_res463 = false;
                }
                if (if_res463 !== false) {
                    ctx1098.moveTo(sx1102 - x1099, sy1103 - y1100);
                    var if_res464 = ctx1098.lineTo(sx1102, sy1103);
                } else {
                    var if_res464 = M4.rvoid();
                }
                var if_res465 = if_res464;
            }
            var if_res466 = if_res465;
        }
        var if_res467 = if_res466;
    }
    if_res467;
    var or_part1104 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1104 !== false) {
        var if_res468 = or_part1104;
    } else {
        var if_res468 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("outline"));
    }
    if (if_res468 !== false) {
        ctx1098.strokeStyle = M1.js_string(___gt_web_color(this1101.pen));
        var if_res471 = ctx1098.stroke();
    } else {
        var or_part1105 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1105 !== false) {
            var if_res469 = or_part1105;
        } else {
            var if_res469 = M4.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("solid"));
        }
        if (if_res469 !== false) {
            ctx1098.fillStyle = M1.js_string(___gt_web_color(this1101.pen));
            var if_res470 = ctx1098.fill();
        } else {
            var if_res470 = M4.rvoid();
        }
        var if_res471 = if_res470;
    }
    if_res471;
    ctx1098.closePath();
    return ctx1098.restore();
};
var Rectangle = function(width1106, height1107, mode1108, pen_or_color1109) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1110 = this;
    this1110.type = $rjs_core.UString.make("rectangle");
    this1110.width = width1106;
    this1110.height = height1107;
    this1110.mode = mode1108;
    this1110.pen = pen_or_color1109;
    return null;
};
Rectangle.prototype.render = function(ctx1111, x1112, y1113) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1114 = this;
    ctx1111.save();
    ctx1111.translate(x1112, y1113);
    ctx1111.beginPath();
    var width1115 = this1114.width;
    var height1116 = this1114.height;
    var start_x1117 = M4.__(width1115 / 2);
    var start_y1118 = M4.__(height1116 / 2);
    ctx1111.rect(start_x1117, start_y1118, width1115, height1116);
    var or_part1119 = M4.equal_p(this1114.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1119 !== false) {
        var if_res472 = or_part1119;
    } else {
        var if_res472 = M4.equal_p(this1114.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res472 !== false) {
        ctx1111.strokeStyle = M1.js_string(___gt_web_color(this1114.pen));
        var if_res475 = ctx1111.stroke();
    } else {
        var or_part1120 = M4.equal_p(this1114.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1120 !== false) {
            var if_res473 = or_part1120;
        } else {
            var if_res473 = M4.equal_p(this1114.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res473 !== false) {
            ctx1111.fillStyle = M1.js_string(___gt_web_color(this1114.pen));
            var if_res474 = ctx1111.fill();
        } else {
            var if_res474 = M4.rvoid();
        }
        var if_res475 = if_res474;
    }
    if_res475;
    ctx1111.closePath();
    return ctx1111.restore();
};
var Circle = function(radius1121, mode1122, pen_or_color1123) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1124 = this;
    var diameter1125 = radius1121 * 2;
    this1124.type = $rjs_core.UString.make("circle");
    this1124.radius = radius1121;
    this1124.width = diameter1125;
    this1124.height = diameter1125;
    this1124.mode = mode1122;
    this1124.pen = pen_or_color1123;
    return null;
};
Circle.prototype.render = function(ctx1126, x1127, y1128) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1129 = this;
    var radius1130 = this1129.radius;
    ctx1126.save();
    ctx1126.translate(x1127, y1128);
    ctx1126.beginPath();
    ctx1126.ellipse(0, 0, radius1130, radius1130, 0, 0, M3.Math.PI * 2);
    var or_part1131 = M4.equal_p(this1129.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1131 !== false) {
        var if_res476 = or_part1131;
    } else {
        var if_res476 = M4.equal_p(this1129.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res476 !== false) {
        ctx1126.strokeStyle = M1.js_string(___gt_web_color(this1129.pen));
        var if_res479 = ctx1126.stroke();
    } else {
        var or_part1132 = M4.equal_p(this1129.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1132 !== false) {
            var if_res477 = or_part1132;
        } else {
            var if_res477 = M4.equal_p(this1129.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res477 !== false) {
            ctx1126.fillStyle = M1.js_string(___gt_web_color(this1129.pen));
            var if_res478 = ctx1126.fill();
        } else {
            var if_res478 = M4.rvoid();
        }
        var if_res479 = if_res478;
    }
    if_res479;
    ctx1126.closePath();
    return ctx1126.restore();
};
var Polygon = function(vertices1133, mode1134, pen_or_color1135) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1136 = this;
    var xs1137 = M5.map(posn_x, vertices1133);
    var ys1138 = M5.map(posn_y, vertices1133);
    var width1139 = M4.apply(M4.max, xs1137) - M4.apply(M4.min, xs1137);
    var height1140 = M4.apply(M4.max, ys1138) - M4.apply(M4.min, xs1137);
    this1136.type = $rjs_core.UString.make("polygon");
    this1136.vertices = vertices1133;
    this1136.width = width1139;
    this1136.height = height1140;
    this1136.mode = mode1134;
    this1136.pen = pen_or_color1135;
    return null;
};
Polygon.prototype.render = function(ctx1141, x1142, y1143) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1144 = this;
    var first_point1145 = M4.car(this1144.vertices);
    var rest_points1146 = M4.cdr(this1144.vertices);
    var radius1147 = this1144.radius;
    ctx1141.save();
    ctx1141.translate(x1142, y1143);
    ctx1141.beginPath();
    ctx1141.moveTo(posn_x(first_point1145), posn_y(first_point1145));
    var loop1148 = function(points1149) {
        if (arguments.length !== 1) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(points1149) !== false) {
            var if_res480 = M4.rvoid();
        } else {
            var pt1150 = M4.car(points1149);
            ctx1141.lineTo(posn_x(pt1150), posn_y(pt1150));
            var if_res480 = loop1148(M4.cdr(points1149));
        }
        return if_res480;
    };
    loop1148(rest_points1146);
    var or_part1151 = M4.equal_p(this1144.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1151 !== false) {
        var if_res481 = or_part1151;
    } else {
        var if_res481 = M4.equal_p(this1144.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res481 !== false) {
        ctx1141.strokeStyle = M1.js_string(___gt_web_color(this1144.pen));
        var if_res484 = ctx1141.stroke();
    } else {
        var or_part1152 = M4.equal_p(this1144.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1152 !== false) {
            var if_res482 = or_part1152;
        } else {
            var if_res482 = M4.equal_p(this1144.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res482 !== false) {
            ctx1141.fillStyle = M1.js_string(___gt_web_color(this1144.pen));
            var if_res483 = ctx1141.fill();
        } else {
            var if_res483 = M4.rvoid();
        }
        var if_res484 = if_res483;
    }
    if_res484;
    ctx1141.closePath();
    return ctx1141.restore();
};
var empty_scene1153 = function(width21154, height31155, color11156) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1157 = width21154;
    var height1158 = height31155;
    if (false !== false) {
        var if_res485 = $rjs_core.UString.make("white");
    } else {
        var if_res485 = color11156;
    }
    var color1159 = if_res485;
    return overlay(rectangle(width1157, height1158, $rjs_core.UString.make("solid"), color1159), rectangle(width1157, height1158, $rjs_core.UString.make("outline"), $rjs_core.UString.make("black")));
};
var cl486 = function(width1160, height1161) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1153(width1160, height1161, $rjs_core.UString.make("white"));
};
var cl487 = function(width1162, height1163, color11164) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return empty_scene1153(width1162, height1163, color11164);
};
var empty_scene = $rjs_core.attachProcedureArity(function() {
    var fixed_lam488 = {
        '2': cl486,
        '3': cl487
    } [arguments.length];
    if (fixed_lam488 !== undefined) {
        return fixed_lam488.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var text = function(txt1165, size1166, color1167) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Text(txt1165, size1166, color1167, $rjs_core.UString.make(""), $rjs_core.UString.make("serif"), $rjs_core.UString.make("normal"), $rjs_core.UString.make("normal"), false);
};
var text_by_font = function(txt1168, size1169, color1170, face1171, family1172, style1173, weight1174, underline_p1175) {
    if (arguments.length !== 8) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var or_part1176 = face1171;
    if (or_part1176 !== false) {
        var if_res492 = or_part1176;
    } else {
        var if_res492 = $rjs_core.UString.make("");
    }
    if (M4.symbol_p(family1172) !== false) {
        var if_res491 = M4.symbol__gt_string(family1172);
    } else {
        var if_res491 = family1172;
    }
    if (M4.symbol_p(style1173) !== false) {
        var if_res490 = M4.symbol__gt_string(style1173);
    } else {
        var if_res490 = style1173;
    }
    if (M4.symbol_p(weight1174) !== false) {
        var if_res489 = M4.symbol__gt_string(weight1174);
    } else {
        var if_res489 = weight1174;
    }
    return new Text(txt1168, size1169, color1170, if_res492, if_res491, if_res490, if_res489, underline_p1175);
};
var line = function(x1177, y1178, pen_or_color1179) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Line(x1177, y1178, pen_or_color1179);
};
var rectangle = function(w1180, h1181, m1182, p1183) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(w1180, h1181, m1182, p1183);
};
var square = function(s1184, m1185, p1186) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rectangle(s1184, s1184, m1185, p1186);
};
var circle = function(r1187, m1188, p1189) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Circle(r1187, m1188, p1189);
};
var triangle = function(side1190, mode1191, color1192) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var height1193 = side1190 * (M4.sqrt(3) / 2);
    return new Polygon(M4.list(make_posn(M4.__(side1190 / 2), height1193 / 2), make_posn(0, M4.__(height1193 / 2)), make_posn(side1190 / 2, height1193 / 2)), mode1191, color1192);
};
var Overlay = function(x_place1194, y_place1195, ima1196, imb1197) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1198 = this;
    var ima_cx1199 = ima1196.width / 2;
    var ima_cy1200 = ima1196.height / 2;
    var imb_cx1201 = imb1197.width / 2;
    var imb_cy1202 = imb1197.height / 2;
    var tmp1204 = x_place1194;
    if (M4.equal_p(tmp1204, $rjs_core.UString.make("beside")) !== false) {
        var if_res495 = ima1196.width + imb1197.width;
    } else {
        if (M4.number_p(x_place1194) !== false) {
            if (M4.positive_p(x_place1194) !== false) {
                var if_res493 = M4.max(ima1196.width, imb1197.width + x_place1194);
            } else {
                var if_res493 = M4.max(imb1197.width, ima1196.width - x_place1194);
            }
            var if_res494 = if_res493;
        } else {
            var if_res494 = M4.max(ima1196.width, imb1197.width);
        }
        var if_res495 = if_res494;
    }
    var width1203 = if_res495;
    var tmp1206 = y_place1195;
    if (M4.equal_p(tmp1206, $rjs_core.UString.make("above")) !== false) {
        var if_res498 = ima1196.height + imb1197.height;
    } else {
        if (M4.number_p(y_place1195) !== false) {
            if (M4.positive_p(y_place1195) !== false) {
                var if_res496 = M4.max(ima1196.height, imb1197.height + y_place1195);
            } else {
                var if_res496 = M4.max(imb1197.height, ima1196.height - y_place1195);
            }
            var if_res497 = if_res496;
        } else {
            var if_res497 = M4.max(ima1196.height, imb1197.height);
        }
        var if_res498 = if_res497;
    }
    var height1205 = if_res498;
    var δ_edge_x1207 = width1203 / 2;
    var δ_edge_y1208 = height1205 / 2;
    var tmp1211 = x_place1194;
    if (M4.equal_p(tmp1211, $rjs_core.UString.make("left")) !== false) {
        var if_res505 = M4.values(ima_cx1199 - δ_edge_x1207, imb_cx1201 - δ_edge_x1207);
    } else {
        if (M4.equal_p(tmp1211, $rjs_core.UString.make("right")) !== false) {
            var if_res504 = M4.values(δ_edge_x1207 - ima_cx1199, δ_edge_x1207 - imb_cx1201);
        } else {
            if (M4.equal_p(tmp1211, $rjs_core.UString.make("beside")) !== false) {
                var if_res503 = M4.values(ima_cx1199 - δ_edge_x1207, δ_edge_x1207 - imb_cx1201);
            } else {
                if (M4.equal_p(tmp1211, $rjs_core.UString.make("middle")) !== false) {
                    var if_res499 = true;
                } else {
                    var if_res499 = M4.equal_p(tmp1211, $rjs_core.UString.make("center"));
                }
                if (if_res499 !== false) {
                    var if_res502 = M4.values(0, 0);
                } else {
                    if (M4.number_p(x_place1194) !== false) {
                        var local_width1212 = M4.max(ima1196.width, imb1197.width);
                        var local_acx1213 = ima_cx1199 - (local_width1212 / 2);
                        var local_bcx1214 = imb_cx1201 - (local_width1212 / 2);
                        var acx_bcx1215 = δ_edge_x1207 - (local_width1212 / 2);
                        if (M4.positive_p(x_place1194) !== false) {
                            var if_res500 = M4.values(local_acx1213 - acx_bcx1215, x_place1194 + (local_bcx1214 - acx_bcx1215));
                        } else {
                            var if_res500 = M4.values(local_acx1213 - x_place1194 - acx_bcx1215, local_bcx1214 - acx_bcx1215);
                        }
                        var if_res501 = if_res500;
                    } else {
                        var if_res501 = M4.error($rjs_core.UString.make("invalid x-place align"));
                    }
                    var if_res502 = if_res501;
                }
                var if_res503 = if_res502;
            }
            var if_res504 = if_res503;
        }
        var if_res505 = if_res504;
    }
    var let_result506 = if_res505;
    var δ_a_x1209 = let_result506.getAt(0);
    var δ_b_x1210 = let_result506.getAt(1);
    var tmp1218 = y_place1195;
    if (M4.equal_p(tmp1218, $rjs_core.UString.make("top")) !== false) {
        var if_res513 = M4.values(ima_cy1200 - δ_edge_y1208, imb_cy1202 - δ_edge_y1208);
    } else {
        if (M4.equal_p(tmp1218, $rjs_core.UString.make("bottom")) !== false) {
            var if_res512 = M4.values(δ_edge_y1208 - ima_cy1200, δ_edge_y1208 - imb_cy1202);
        } else {
            if (M4.equal_p(tmp1218, $rjs_core.UString.make("above")) !== false) {
                var if_res511 = M4.values(ima_cy1200 - δ_edge_y1208, δ_edge_y1208 - imb_cy1202);
            } else {
                if (M4.equal_p(tmp1218, $rjs_core.UString.make("middle")) !== false) {
                    var if_res507 = true;
                } else {
                    var if_res507 = M4.equal_p(tmp1218, $rjs_core.UString.make("center"));
                }
                if (if_res507 !== false) {
                    var if_res510 = M4.values(0, 0);
                } else {
                    if (M4.number_p(y_place1195) !== false) {
                        var local_height1219 = M4.max(ima1196.height, imb1197.height);
                        var local_acy1220 = ima_cy1200 - (local_height1219 / 2);
                        var local_bcy1221 = imb_cy1202 - (local_height1219 / 2);
                        var acy_bcy1222 = δ_edge_y1208 - (local_height1219 / 2);
                        if (M4.positive_p(y_place1195) !== false) {
                            var if_res508 = M4.values(local_acy1220 - acy_bcy1222, y_place1195 + (local_bcy1221 - acy_bcy1222));
                        } else {
                            var if_res508 = M4.values(local_acy1220 - y_place1195 - acy_bcy1222, local_bcy1221 - acy_bcy1222);
                        }
                        var if_res509 = if_res508;
                    } else {
                        var if_res509 = M4.error($rjs_core.UString.make("invalid y-place align"));
                    }
                    var if_res510 = if_res509;
                }
                var if_res511 = if_res510;
            }
            var if_res512 = if_res511;
        }
        var if_res513 = if_res512;
    }
    var let_result514 = if_res513;
    var δ_a_y1216 = let_result514.getAt(0);
    var δ_b_y1217 = let_result514.getAt(1);
    this1198.type = $rjs_core.UString.make("overlay");
    this1198.ima = ima1196;
    this1198.imb = imb1197;
    this1198.width = width1203;
    this1198.height = height1205;
    this1198.aDx = δ_a_x1209;
    this1198.aDy = δ_a_y1216;
    this1198.bDx = δ_b_x1210;
    this1198.bDy = δ_b_y1217;
    return null;
};
Overlay.prototype.render = function(ctx1223, x1224, y1225) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1226 = this;
    var ima1227 = this1226.ima;
    var imb1228 = this1226.imb;
    ctx1223.save();
    ctx1223.translate(x1224, y1225);
    imb1228.render(ctx1223, this1226.bDx, this1226.bDy);
    ima1227.render(ctx1223, this1226.aDx, this1226.aDy);
    return ctx1223.restore();
};
var Container = function(childs1229, posns1230, width1231, height1232) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1233 = this;
    this1233.type = $rjs_core.UString.make("container");
    this1233.childs = childs1229;
    this1233.posns = posns1230;
    this1233.width = width1231;
    this1233.height = height1232;
    return null;
};
Container.prototype.render = function(ctx1234, x1235, y1236) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1237 = this;
    var width1238 = this1237.width;
    var height1239 = this1237.height;
    ctx1234.save();
    ctx1234.translate(x1235 - (width1238 / 2), y1236 - (height1239 / 2));
    ctx1234.beginPath();
    ctx1234.rect(0, 0, M4.sub1(width1238), M4.sub1(height1239));
    ctx1234.clip();
    var loop1240 = function(childs1241, posns1242) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        if (M4.null_p(childs1241) !== false) {
            var if_res515 = M4.rvoid();
        } else {
            var child1243 = M4.car(childs1241);
            var posn1244 = M4.car(posns1242);
            child1243.render(ctx1234, posn_x(posn1244), posn_y(posn1244));
            var if_res515 = loop1240(M4.cdr(childs1241), M4.cdr(posns1242));
        }
        return if_res515;
    };
    loop1240(this1237.childs, this1237.posns);
    return ctx1234.restore();
};
var Bitmap = function(data1245) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1246 = this;
    var image1247 = new Image;
    image1247.crossOrigin = "anonymous";
    image1247.src = M1.js_string(data1245);
    this1246.image = image1247;
    this1246.width = image1247.width;
    this1246.height = image1247.height;
    return null;
};
Bitmap.prototype.render = function(ctx1248, x1249, y1250) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1251 = this;
    var image1252 = this1251.image;
    ctx1248.save();
    ctx1248.translate(x1249, y1250);
    ctx1248.drawImage(image1252, M4.__(image1252.width / 2), M4.__(image1252.height / 2));
    return ctx1248.restore();
};
var Freeze = function(img1253) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1254 = this;
    var canvas1255 = M3.document.createElement("canvas");
    var ctx1256 = canvas1255.getContext("2d");
    var width1257 = img1253.width;
    var height1258 = img1253.height;
    canvas1255.width = width1257;
    canvas1255.height = height1258;
    ctx1256.save();
    ctx1256.translate(width1257 / 2, height1258 / 2);
    img1253.render(ctx1256, 0, 0);
    ctx1256.restore();
    this1254.width = width1257;
    this1254.height = height1258;
    this1254.canvas = canvas1255;
    return null;
};
Freeze.prototype.render = function(ctx1259, x1260, y1261) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1262 = this;
    var width1263 = this1262.width;
    var height1264 = this1262.height;
    ctx1259.save();
    ctx1259.translate(x1260, y1261);
    ctx1259.drawImage(this1262.canvas, M4.__(width1263 / 2), M4.__(height1264 / 2));
    return ctx1259.restore();
};
var Rotate = function(image1265, angle1266) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1267 = this;
    var width1268 = image1265.width;
    var height1269 = image1265.height;
    var θ1270 = (M3.Math.PI * angle1266) / 180.0;
    var sin_θ1271 = M4.sin(θ1270);
    var cos_θ1272 = M4.cos(θ1270);
    var x11273 = cos_θ1272 * width1268;
    var y11274 = sin_θ1271 * width1268;
    var x21275 = M4.__(sin_θ1271) * height1269;
    var y21276 = cos_θ1272 * height1269;
    var x31277 = x11273 + x21275;
    var y31278 = y11274 + y21276;
    var min_x1279 = M4.min(0, x11273, x21275, x31277);
    var max_x1280 = M4.max(0, x11273, x21275, x31277);
    var min_y1281 = M4.min(0, y11274, y21276, y31278);
    var max_y1282 = M4.max(0, y11274, y21276, y31278);
    var rotated_width1283 = M4.floor(max_x1280 - min_x1279);
    var rotated_height1284 = M4.floor(max_y1282 - min_y1281);
    this1267.image = image1265;
    this1267.width = rotated_width1283;
    this1267.height = rotated_height1284;
    this1267.degrees = angle1266;
    this1267.radians = θ1270;
    return null;
};
Rotate.prototype.render = function(ctx1285, x1286, y1287) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1288 = this;
    ctx1285.save();
    ctx1285.translate(x1286, y1287);
    ctx1285.rotate(this1288.radians);
    this1288.image.render(ctx1285, 0, 0);
    return ctx1285.restore();
};
var Scale = function(image1289, x_factor1290, y_factor1291) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1292 = this;
    this1292.image = image1289;
    this1292.x_factor = x_factor1290;
    this1292.y_factor = y_factor1291;
    this1292.width = M4.abs(M4.floor(image1289.width * x_factor1290));
    this1292.height = M4.abs(M4.floor(image1289.height * y_factor1291));
    return null;
};
Scale.prototype.render = function(ctx1293, x1294, y1295) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var this1296 = this;
    ctx1293.save();
    ctx1293.translate(x1294, y1295);
    ctx1293.scale(this1296.x_factor, this1296.y_factor);
    this1296.image.render(ctx1293, 0, 0);
    return ctx1293.restore();
};
var container = function(childs1297, posns1298, width1299, height1300) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Container(childs1297, posns1298, width1299, height1300);
};
var place_image = function(child1301, cx1302, cy1303, base1304) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1305 = base1304.width;
    var height1306 = base1304.height;
    return container(M4.list(base1304, child1301), M4.list(make_posn(width1305 / 2, height1306 / 2), make_posn(cx1302, cy1303)), width1305, height1306);
};
var place_images = function(images1307, posns1308, scene1309) {
    if (arguments.length !== 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var width1310 = scene1309.width;
    var height1311 = scene1309.height;
    return container(M4.cons(scene1309, images1307), M4.cons(make_posn(width1310 / 2, height1311 / 2), posns1308), width1310, height1311);
};
var __align_image_pos = function(image1312, pos1313, x_place1314, y_place1315) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var x1316 = posn_x(pos1313);
    var y1317 = posn_y(pos1313);
    var tmp1319 = x_place1314;
    if (M4.equal_p(tmp1319, $rjs_core.UString.make("left")) !== false) {
        var if_res519 = (image1312.width / 2) + x1316;
    } else {
        if (M4.equal_p(tmp1319, $rjs_core.UString.make("right")) !== false) {
            var if_res518 = x1316 - (image1312.width / 2);
        } else {
            if (M4.equal_p(tmp1319, $rjs_core.UString.make("center")) !== false) {
                var if_res516 = true;
            } else {
                var if_res516 = M4.equal_p(tmp1319, $rjs_core.UString.make("middle"));
            }
            if (if_res516 !== false) {
                var if_res517 = x1316;
            } else {
                var if_res517 = M4.rvoid();
            }
            var if_res518 = if_res517;
        }
        var if_res519 = if_res518;
    }
    var new_x1318 = if_res519;
    var tmp1321 = y_place1315;
    if (M4.equal_p(tmp1321, $rjs_core.UString.make("top")) !== false) {
        var if_res523 = (image1312.height / 2) + y1317;
    } else {
        if (M4.equal_p(tmp1321, $rjs_core.UString.make("bottom")) !== false) {
            var if_res522 = y1317 - (image1312.height / 2);
        } else {
            if (M4.equal_p(tmp1321, $rjs_core.UString.make("center")) !== false) {
                var if_res520 = true;
            } else {
                var if_res520 = M4.equal_p(tmp1321, $rjs_core.UString.make("middle"));
            }
            if (if_res520 !== false) {
                var if_res521 = y1317;
            } else {
                var if_res521 = M4.rvoid();
            }
            var if_res522 = if_res521;
        }
        var if_res523 = if_res522;
    }
    var new_y1320 = if_res523;
    return make_posn(new_x1318, new_y1320);
};
var place_image_by_align = function(image1322, x1323, y1324, x_place1325, y_place1326, scene1327) {
    if (arguments.length !== 6) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_pos1328 = __align_image_pos(image1322, make_posn(x1323, y1324), x_place1325, y_place1326);
    return place_image(image1322, posn_x(new_pos1328), posn_y(new_pos1328), scene1327);
};
var place_images_by_align = function(images1329, posns1330, x_place1331, y_place1332, scene1333) {
    if (arguments.length !== 5) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var new_posns1334 = M5.map(function(i1335, p1336) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __align_image_pos(i1335, p1336, x_place1331, y_place1332);
    }, images1329, posns1330);
    return place_images(images1329, new_posns1334, scene1333);
};
var __single_overlay = function(x_place1337, y_place1338, ima1339, imb1340) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1337, y_place1338, ima1339, imb1340);
};
var __single_underlay = function(x_place1341, y_place1342, ima1343, imb1344) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x_place1341, y_place1342, imb1344, ima1343);
};
var overlay_by_align = $rjs_core.attachProcedureArity(function(x_place1345, y_place1346, ima1347, imb1348, ...imn1349524) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1349 = $rjs_core.Pair.listFromArray(imn1349524);
    return M2.foldl(function(img1350, acc1351) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1345, y_place1346, acc1351, img1350);
    }, empty_image, M4.cons(ima1347, M4.cons(imb1348, imn1349)));
});
var overlay = $rjs_core.attachProcedureArity(function(ima1352, imb1353, ...imn1354525) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1354 = $rjs_core.Pair.listFromArray(imn1354525);
    return M2.foldl(function(img1355, acc1356) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1356, img1355);
    }, empty_image, M4.cons(ima1352, M4.cons(imb1353, imn1354)));
});
var overlay_by_xy = function(ima1357, x1358, y1359, imb1360) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(x1358, y1359, ima1357, imb1360);
};
var underlay = $rjs_core.attachProcedureArity(function(ima1361, imb1362, ...imn1363526) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1363 = $rjs_core.Pair.listFromArray(imn1363526);
    return M2.foldl(function(img1364, acc1365) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1365, img1364);
    }, empty_image, M4.cons(ima1361, M4.cons(imb1362, imn1363)));
});
var underlay_by_align = $rjs_core.attachProcedureArity(function(x_place1366, y_place1367, ima1368, imb1369, ...imn1370527) {
    if (arguments.length < 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var imn1370 = $rjs_core.Pair.listFromArray(imn1370527);
    return M2.foldl(function(img1371, acc1372) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_underlay(x_place1366, y_place1367, acc1372, img1371);
    }, empty_image, M4.cons(ima1368, M4.cons(imb1369, imn1370)));
});
var underlay_by_xy = function(ima1373, x1374, y1375, imb1376) {
    if (arguments.length !== 4) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Overlay(M4.__(x1374), M4.__(y1375), imb1376, ima1373);
};
var above_by_align = $rjs_core.attachProcedureArity(function(x_place1377, i11378, i21379, ...is1380528) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1380 = $rjs_core.Pair.listFromArray(is1380528);
    return M2.foldl(function(img1381, acc1382) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay(x_place1377, $rjs_core.UString.make("above"), acc1382, img1381);
    }, empty_image, M4.cons(i11378, M4.cons(i21379, is1380)));
});
var above = $rjs_core.attachProcedureArity(function(i11383, i21384, ...is1385529) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1385 = $rjs_core.Pair.listFromArray(is1385529);
    return M2.foldl(function(img1386, acc1387) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("above"), acc1387, img1386);
    }, empty_image, M4.cons(i11383, M4.cons(i21384, is1385)));
});
var beside_by_align = $rjs_core.attachProcedureArity(function(y_place1388, i11389, i21390, ...is1391530) {
    if (arguments.length < 3) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1391 = $rjs_core.Pair.listFromArray(is1391530);
    return M2.foldl(function(img1392, acc1393) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), y_place1388, acc1393, img1392);
    }, empty_image, M4.cons(i11389, M4.cons(i21390, is1391)));
});
var beside = $rjs_core.attachProcedureArity(function(i11394, i21395, ...is1396531) {
    if (arguments.length < 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    var is1396 = $rjs_core.Pair.listFromArray(is1396531);
    return M2.foldl(function(img1397, acc1398) {
        if (arguments.length !== 2) {
            throw $rjs_core.racketContractError("arity mismatch");
        } else {}
        return __single_overlay($rjs_core.UString.make("beside"), $rjs_core.UString.make("middle"), acc1398, img1397);
    }, empty_image, M4.cons(i11394, M4.cons(i21395, is1396)));
});
var rotate = function(angle1399, image1400) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Rotate(image1400, M4.__(angle1399));
};
var scale = function(factor1401, image1402) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1402, factor1401, factor1401);
};
var flip_horizontal = function(image1403) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1403, -1, 1);
};
var flip_vertical = function(image1404) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Scale(image1404, 1, -1);
};
var bitmap_by_data = function(data1405) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(data1405);
};
var bitmap_by_url = function(url1406) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Bitmap(url1406);
};
var frame = function(img1407) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return color_frame($rjs_core.UString.make("black"), img1407);
};
var color_frame = function(color1408, img1409) {
    if (arguments.length !== 2) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return overlay(rectangle(image_width(img1409), image_height(img1409), $rjs_core.PrimitiveSymbol.make("outline"), color1408), img1409);
};
var freeze = function(img1410) {
    if (arguments.length !== 1) {
        throw $rjs_core.racketContractError("arity mismatch");
    } else {}
    return new Freeze(img1410);
};
var __rjs_quoted__ = {};
__rjs_quoted__.empty_image = empty_image;
__rjs_quoted__.posn_p = posn_p;
__rjs_quoted__.make_posn = make_posn;
__rjs_quoted__.posn_y = posn_y;
__rjs_quoted__.posn_x = posn_x;
__rjs_quoted__.___gt_web_color = ___gt_web_color;
__rjs_quoted__.struct_posn = struct_posn;
export {
    __rjs_quoted__,
    posn_x,
    posn_y,
    posn_p,
    make_posn,
    struct_posn,
    print_image,
    freeze,
    bitmap_by_url,
    bitmap_by_data,
    flip_horizontal,
    flip_vertical,
    scale,
    rotate,
    beside,
    beside_by_align,
    above,
    above_by_align,
    underlay_by_xy,
    underlay,
    overlay,
    overlay_by_xy,
    overlay_by_align,
    place_images_by_align,
    place_image_by_align,
    place_images,
    place_image,
    color_frame,
    frame,
    triangle,
    text_by_font,
    text,
    circle,
    square,
    rectangle,
    line,
    image_width,
    image_height,
    empty_scene,
    empty_image
};