"use strict";
cc._RF.push(module, 'b2730cwqwZO9YYAGhbmAAYp', 'Input');
// Script/Input.js

"use strict";

(function () {
    var input = function input() {};

    var _keyDownArray = new Array();
    var _keyArray = new Array();
    var _keyUpArray = new Array();

    var onKeyDown = function onKeyDown(event) {
        var keyCode = event.keyCode;
        var keyDownIndex = _keyDownArray.indexOf(keyCode);
        var keyIndex = _keyArray.indexOf(keyCode);
        if (keyDownIndex < 0) {
            _keyDownArray.push(keyCode);
        }
        if (keyIndex < 0) {
            _keyArray.push(keyCode);
        }
    };

    var onKeyUp = function onKeyUp(event) {
        var keyCode = event.keyCode;
        if (_keyUpArray.indexOf(keyCode) < 0) {
            _keyArray = tools.removeItem(_keyArray, keyCode);
            _keyDownArray = tools.removeItem(_keyDownArray, keyCode);
            _keyUpArray.push(keyCode);
        }
    };

    input.isKeyDown = function (keyCode) {
        var isKeyDown = _keyDownArray.indexOf(keyCode) >= 0;
        if (isKeyDown) {
            _keyUpArray = tools.removeItem(_keyUpArray, keyCode);
        }
        return isKeyDown;
    };

    input.isKey = function (keyCode) {
        var isKey = _keyArray.indexOf(keyCode) >= 0;
        if (isKey) {
            _keyDownArray = tools.removeItem(_keyDownArray, keyCode);
            _keyUpArray = tools.removeItem(_keyUpArray, keyCode);
        }
        return isKey;
    };

    input.isKeyUp = function (keyCode) {
        var isKeyUp = _keyUpArray.indexOf(keyCode) >= 0;
        if (isKeyUp) {
            _keyArray = tools.removeItem(_keyArray, keyCode);
            _keyDownArray = tools.removeItem(_keyDownArray, keyCode);
            _keyUpArray = tools.removeItem(_keyUpArray, keyCode);
        }
        return isKeyUp;
    };

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, onKeyDown, input);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, onKeyUp, input);
    window.input = input;
})();

cc._RF.pop();