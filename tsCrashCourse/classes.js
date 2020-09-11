var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(name, password, age) {
        this.name = name;
        this.password = password;
        this.age = age;
        console.log("a player instance has been created", this.name, this.age, this.password);
    }
    Player.prototype.register = function () {
        console.log(this.name, "is now registered");
    };
    Player.prototype.payInvoice = function () {
        console.log("invoice was payed by =>", this.name);
    };
    return Player;
}());
var james = new Player("sina", "testPassWorD", 21);
console.log(james.name);
// james.register();
var FootballPlayer = /** @class */ (function (_super) {
    __extends(FootballPlayer, _super);
    function FootballPlayer(id, name, password, age) {
        var _this = _super.call(this, name, password, age) || this;
        _this.id = id;
        return _this;
    }
    FootballPlayer.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return FootballPlayer;
}(Player));
var mike = new FootballPlayer(1, "mike adams", "123456", 11);
mike.payInvoice();
