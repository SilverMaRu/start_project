(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Tools.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ad6afYmCi9LBKkm2Kl4ak2v', 'Tools', __filename);
// Script/Tools.js

"use strict";

(function () {
    var tools = function tools() {};
    tools.removeItemOfIndex = function (array, index) {
        var resultArray = new Array();
        for (var i = 0; i < array.length; i++) {
            if (i == index) continue;
            resultArray.push(array[i]);
        }
        return resultArray;
    };
    tools.removeItem = function (array, item) {
        var index = array.indexOf(item);
        var resultArray = array;
        if (index >= 0) {
            resultArray = tools.removeItemOfIndex(resultArray, index);
        }
        return resultArray;
    };
    window.tools = tools;
})();

(function () {
    Math.clamp = function (value, min, max) {
        var resultValue = value;
        resultValue = Math.max(resultValue, min);
        resultValue = Math.min(resultValue, max);
        return resultValue;
    };

    Math.lerp = function (v1, v2, f) {
        f = Math.clamp(f, 0, 1);
        return v1 + (v2 - v1) * f;
    };

    Math.lerpInt = function (v1, v2, f) {
        var resultValue = Math.lerp(v1, v2, f);
        return Math.round(resultValue);
    };

    Math.range = function (min, max) {
        var random01 = Math.random();
        return Math.lerp(min, max, random01);
    };

    Math.random01 = function () {
        return Math.round(Math.random());
    };
})();

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Tools.js.map
        