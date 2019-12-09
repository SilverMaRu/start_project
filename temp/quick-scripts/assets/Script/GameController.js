(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/GameController.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '245357yD/ZEmYD2Jjqr1SFh', 'GameController', __filename);
// Script/GameController.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        starPrefab: {
            default: null,
            type: cc.Prefab
        },
        starSpawnNode: {
            default: null,
            type: cc.Node
        }
        // playerNode: {
        //     default: null,
        //     type: cc.Node,
        // }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.on("StarDestroy", this.onStarDestroy, this);
    },
    start: function start() {
        this.spawnStar();
        // for(var i = 0; i < 1000;i++){
        //     this.spawnStar();
        // }
    },


    // update (dt) {},

    onDestroy: function onDestroy() {
        this.node.off("StarDestroy", this.onStarDestroy, this);
    },
    onStarDestroy: function onStarDestroy(event) {
        // console.log("Get Event");
        // console.log(event.getUserData());
        var userData = event.getUserData();
        if (userData.isTimeout) {
            this.castNormal();
        } else {
            this.castNormal();
        }
    },
    castTimeout: function castTimeout() {},
    castNormal: function castNormal() {
        this.spawnStar();
    },
    spawnStar: function spawnStar() {
        var newStar = cc.instantiate(this.starPrefab);
        this.starSpawnNode.addChild(newStar);
    }
});

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
        //# sourceMappingURL=GameController.js.map
        