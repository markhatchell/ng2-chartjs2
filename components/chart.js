"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ChartComponent = (function () {
    function ChartComponent(element) {
        this.element = element;
        /**
         * Labels to display on chart
         */
        this.labels = [];
        this.data = [];
        this.type = 'bar';
        this._labels = [];
        this._data = [];
        this.onClick = new core_1.EventEmitter();
        this.onResize = new core_1.EventEmitter();
        this.onHover = new core_1.EventEmitter();
    }
    ChartComponent.prototype.ngOnInit = function () {
        // verify that the library exists
        if (typeof Chart === 'undefined') {
            console.error('You must include Chart.js 2.0 Library in your index.html in order for ng2-chartjs2 to work.');
            return;
        }
        this.canvas = this.element.nativeElement;
        this.ctx = this.canvas.getContext("2d");
        // if the options param is provided, we will not use the other inputs
        // this allows maximum customization and control
        if (!this.options) {
            this.options = {
                type: this.type,
                data: {
                    labels: this.labels,
                    datasets: this.data
                }
            };
        }
        // create new chart
        this.chart = new Chart(this.ctx, this.options);
        // bind the event emitters to the options
        if (!this.options.options)
            this.options.options = {};
        if (!this.options.options.hover)
            this.options.options.hover = {};
        if (!this.options.options.onClick)
            this.options.options.onClick = this.onClick.emit.bind(this.onClick);
        if (!this.options.options.onResize)
            this.options.options.onResize = this.onResize.emit.bind(this.onResize);
        if (!this.options.options.hover.onHover)
            this.options.options.hover.onHover = this.onHover.emit.bind(this.onHover);
    };
    ChartComponent.prototype.ngOnDestroy = function () {
        // destroy the chart object
        this.destroy();
    };
    ChartComponent.prototype.ngDoCheck = function () {
        if (this.data !== this._data
            || this._labels !== this.labels
            || this._options !== this.options) {
            this._data = this.data;
            this._labels = this.labels;
            this._options = this.options;
            this.update();
        }
    };
    /**
     * Use this to destroy any chart instances that are created. This will clean up any references stored to the chart object within Chart.js, along with any associated event listeners attached by Chart.js. This must be called before the canvas is reused for a new chart.
     */
    ChartComponent.prototype.destroy = function () {
        if (typeof this.chart !== 'undefined' && typeof this.chart.destroy === 'function')
            this.chart.destroy();
    };
    /**
     * Triggers an update of the chart. This can be safely called after replacing the entire data object. This will update all scales, legends, and then re-render the chart.
     * @param duration {number} the time for the animation of the redraw in miliseconds
     * @param lazy {boolean} if true, the animation can be interupted by other animations
     */
    ChartComponent.prototype.update = function (duration, lazy) {
        if (this.chart)
            this.chart.update(duration, lazy);
    };
    /**
     * Triggers a redraw of all chart elements. Note, this does not update elements for new data. Use .update() in that case.
     * @param duration {number} the time for the animation of the redraw in miliseconds
     * @param lazy {boolean} if true, the animation can be interupted by other animations
     */
    ChartComponent.prototype.render = function (duration, lazy) {
        if (this.chart)
            this.chart.render(duration, lazy);
    };
    /**
     * Use this to stop any current animation loop. This will pause the chart during any current animation frame. Call .render() to re-animate.
     */
    ChartComponent.prototype.stop = function () {
        if (this.chart)
            this.chart.stop();
    };
    /**
     * Use this to manually onResize the canvas element. This is run each time the canvas container is resized, but you can call this method manually if you change the size of the canvas nodes container element.
     */
    ChartComponent.prototype.resize = function () {
        if (this.chart)
            this.chart.onResize();
    };
    /**
     * Will clear the chart canvas. Used extensively internally between animation frames, but you might find it useful.
     */
    ChartComponent.prototype.clear = function () {
        if (this.chart)
            this.chart.clear();
    };
    /**
     * This returns a base 64 encoded string of the chart in it's current state.
     * @returns {string} base64 encoded string of the chart
     */
    ChartComponent.prototype.toBase64Image = function () {
        if (this.chart)
            return this.chart.toBase64Image();
    };
    /**
     * Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options.
     * @returns {string}
     */
    ChartComponent.prototype.generateLegend = function () {
        if (this.chart)
            return this.chart.generateLegend();
    };
    /**
     * Calling getElementAtEvent(event) on your Chart instance passing an argument of an event, or jQuery event, will return the single element at the event position. If there are multiple items within range, only the first is returned
     * @param event
     * @returns {HTMLElement}
     */
    ChartComponent.prototype.getElementAtEvent = function (event) {
        if (this.chart)
            return this.chart.getElementAtEvent(event);
    };
    /**
     * Looks for the element under the event point, then returns all elements at the same data index. This is used internally for 'label' mode highlighting.
     * @param event
     * @returns {HTMLElement[]}
     */
    ChartComponent.prototype.getElementsAtEvent = function (event) {
        if (this.chart)
            return this.chart.getElementsAtEvent(event);
    };
    /**
     * Looks for the element under the event point, then returns all elements from that dataset. This is used internally for 'dataset' mode highlighting
     * @param event
     * @returns {Chart.Dataset}
     */
    ChartComponent.prototype.getDatasetAtEvent = function (event) {
        if (this.chart)
            return this.chart.getDatasetAtEvent(event);
    };
    /**
     * Looks for the dataset that matches the current index and returns that metadata. This returned data has all of the metadata that is used to construct the chart.
     * The data property of the metadata will contain information about each point, rectangle, etc. depending on the chart type.
     * @param index
     * @returns {any}
     */
    ChartComponent.prototype.getDatasetMeta = function (index) {
        if (this.chart)
            return this.chart.getDatasetMeta(index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartComponent.prototype, "labels", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ChartComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChartComponent.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ChartComponent.prototype, "options", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChartComponent.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChartComponent.prototype, "onResize", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ChartComponent.prototype, "onHover", void 0);
    ChartComponent = __decorate([
        core_1.Directive({
            selector: '[chart]',
            styles: [':host {display: block;}']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.js.map