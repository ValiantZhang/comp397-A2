var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Bird = (function (_super) {
        __extends(Bird, _super);
        function Bird(imageString, x, y, speed) {
            _super.call(this, imageString, "fly");
            this.name = "bird";
            this.position = new objects.Vector2(x, y);
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this._speed = speed;
        }
        Bird.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.y -= this._speed;
        };
        return Bird;
    }(objects.GameObject));
    objects.Bird = Bird;
})(objects || (objects = {}));
//# sourceMappingURL=bird.js.map