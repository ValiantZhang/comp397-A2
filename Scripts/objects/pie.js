var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Pie = (function (_super) {
        __extends(Pie, _super);
        function Pie(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            // Set the position of the button
            this.x = x;
            this.y = y;
            // Set the size of the button
            this.width = 320;
            this.height = 200;
            // Set the registration point of the button. This is used for transformations
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);
            this.on("mousedown", this.destroy, this);
        }
        // Modify the bitmaps alpha value when hovering over the button
        Pie.prototype.overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        // Modify the bitmaps alphave when mouse is not hovering
        Pie.prototype.outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        Pie.prototype.destroy = function (event) {
            currentScene.removeChild(this);
            score += 1;
            currentScene.update();
        };
        return Pie;
    }(createjs.Bitmap));
    objects.Pie = Pie;
})(objects || (objects = {}));
//# sourceMappingURL=pie.js.map