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
            type: cc.Prefab,
        },
        starSpawnNode: {
            default: null,
            type: cc.Node,
        },
        // playerNode: {
        //     default: null,
        //     type: cc.Node,
        // }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on("StarDestroy", this.onStarDestroy, this);
    },

    start () {
        this.spawnStar();
        // for(var i = 0; i < 1000;i++){
        //     this.spawnStar();
        // }
    },

    // update (dt) {},

    onDestroy(){
        this.node.off("StarDestroy", this.onStarDestroy, this);
    },

    onStarDestroy(event){
        // console.log("Get Event");
        // console.log(event.getUserData());
        var userData = event.getUserData();
        if(userData.isTimeout){
            this.castNormal();
        }else{
            this.castNormal();
        }
    },

    castTimeout(){

    },

    castNormal(){
        this.spawnStar();
    },

    spawnStar(){
        var newStar = cc.instantiate(this.starPrefab);
        this.starSpawnNode.addChild(newStar);
    }
});
