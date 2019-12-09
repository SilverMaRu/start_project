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
        maxSpeed: 0,
        accel: 0,
        _currentSpeed: 0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._currentSpeed = 0;
    },

    start () {
    },

    update (dt) {
        this._currentSpeed = this.getCurrentSpeed(dt);
        this.node.x += this._currentSpeed * dt;
        // if(input.isKey(65)){
        //     console.log("Key A");
        // }
        // if(input.isKeyUp(65)){
        //     console.log("KeyUp A");
        // }
        // if(input.isKey(68)){
        //     console.log("Key D");
        // }
        // if(input.isKeyUp(68)){
        //     console.log("KeyUp D");
        // }
        // this.node.emit("testEvent");
    },

    onDestroy(){
    },

    getAccelDirection(){
        var accelDir = 0;
        var isKeyA = input.isKey(cc.macro.KEY.a);
        var isKeyD = input.isKey(cc.macro.KEY.d);

        if(isKeyD){
            accelDir = 1;
        }else if(isKeyA){
            accelDir = -1;
        }else if(!isKeyA && !isKeyD){
            accelDir = -Math.sign(this._currentSpeed);
        }

        return accelDir;
    },

    getCurrentSpeed(dt){
        var resultSpeed = this._currentSpeed;
        resultSpeed += this.accel * this.getAccelDirection() * dt;
        resultSpeed = Math.sign(resultSpeed) * Math.clamp(Math.abs(resultSpeed), 0, this.maxSpeed);
        return resultSpeed;
    }
});
