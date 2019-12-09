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
        spawnClampRectNodePath: "",
        spawnClampRectNode: {
            default: null,
            type: cc.Node,
        },
        _spawnClampRectNode:{
            get(){
                if(this.spawnClampRectNode == null){
                    this.spawnClampRectNode = cc.find(this.spawnClampRectNodePath);
                }
                return this.spawnClampRectNode;
            },
        },
        _spawnClampRect: {
            get(){
                var resultRect = cc.rect(cc.Vec2.ZERO, cc.v2(1920, 1080));
                if(this._spawnClampRectNode){
                    resultRect = cc.rect(this._spawnClampRectNode.x, this._spawnClampRectNode.y, this._spawnClampRectNode.width, this._spawnClampRectNode.height);
                }
                console.log(resultRect);
                return resultRect;
            },
        },
        spawnCenterNodePath: "",
        spawnCenterNode: {
            default: null,
            type: cc.Node,
        },
        _spawnCenterNode:{
            get(){
                if(!this.spawnCenterNode){
                    this.spawnCenterNode = cc.find(this.spawnCenterNodePath);
                }
                return this.spawnCenterNode;
            },
        },
        _spawnCenter: {
            get(){
                var resultV2 = cc.Vec2.ZERO;
                if(this._spawnCenterNode){
                    resultV2 = this._spawnCenterNode.position;
                }
                return resultV2;
            }
        },
        spawnRect: cc.rect(0, 0, 400, 200),
        hollowRect: cc.rect(0,0,0,0),
        baseLifeTime: 4.5,
        randomRange: cc.v2(-1, 0.5),
        _lifeTime: 0,
        _timeCount: 0,
        isTimeout: {
            get(){
                return this._timeCount > this._lifeTime;
            },
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.initPosition();
        this._lifeTime = this.baseLifeTime + Math.range(this.randomRange.x, this.randomRange.y);
        this._timeCount = 0;
    },

    // start () {
    // },

    update (dt) {
        if(this.isTimeout){
            this.lifeTimeOut();
        }
        else{
            this.node.opacity = Math.lerpInt(255, 0, this._timeCount / this._lifeTime);
            this._timeCount += dt;
        }
    },

    onDestroy(){
        var event = new cc.Event.EventCustom("StarDestroy", true);
        event.setUserData({
            isTimeout: this.isTimeout,
        });
        this.node.dispatchEvent(event);
    },

    initPosition(){
        var offsetX_0 = this.spawnRect.x + Math.range(-this.spawnRect.width * 0.5, this.hollowRect.x - this.hollowRect.width * 0.5);
        var offsetX_1 = this.spawnRect.x + Math.range(this.hollowRect.x + this.hollowRect.width * 0.5, this.spawnRect.width * 0.5);

        var offsetY_0 = this.spawnRect.y + Math.range(-this.spawnRect.height * 0.5, this.hollowRect.y - this.hollowRect.height * 0.5);
        var offsetY_1 = this.spawnRect.y + Math.range(this.hollowRect.y + this.hollowRect.height * 0.5, this.spawnRect.height * 0.5);

        var offsetX = [offsetX_0, offsetX_1][Math.random01()];
        var offsetY = [offsetY_0, offsetY_1][Math.random01()];
        
        var minX = this._spawnClampRect.x - this._spawnClampRect.width * 0.5;
        var maxX = this._spawnClampRect.x + this._spawnClampRect.width * 0.5;
        var finalX = this._spawnCenter.x + offsetX;
        if(finalX < minX || finalX > maxX){
            finalX = this._spawnCenter - offsetX;
        }
        finalX = Math.clamp(finalX, minX, maxX);

        var minY = this._spawnClampRect.y - this._spawnClampRect.height * 0.5;
        var maxY = this._spawnClampRect.y + this._spawnClampRect.height * 0.5;
        var finalY = this._spawnCenter.y + offsetY;
        if(finalY < minY || finalY > maxY){
            finalY = this._spawnCenter.y - offsetY;
        }
        finalY = Math.clamp(finalY, minY, maxY);

        this.node.position = cc.v2(finalX, finalY);
    },

    lifeTimeOut(){
        // this.node.emit("lifeTimeOut");
        this.node.destroy();
    },
});
