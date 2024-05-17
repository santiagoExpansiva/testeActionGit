"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _200001_Special_Base = /** @class */ (function () {
    function _200001_Special_Base() {
        this.el = document.createElement('a');
    }
    _200001_Special_Base.prototype.createEL = function (teste) {
    };
    _200001_Special_Base.prototype.renderAllFields = function (el, cls) {
    };
    return _200001_Special_Base;
}());
var Input = /** @class */ (function () {
    function Input(cls, obj) {
    }
    return Input;
}());
var _200001_tCard = /** @class */ (function (_super) {
    __extends(_200001_tCard, _super);
    function _200001_tCard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = new Input(_this, {
            desc: 'url img', type: 'text', group: 'principal', elType: 'attr'
        });
        _this.text = new Input(_this, {
            desc: 'text', type: 'text', group: 'principal', elType: 'attr'
        });
        _this.title = new Input(_this, {
            desc: 'title', type: 'text', group: 'principal', elType: 'attr'
        });
        _this.text2 = new Input(_this, {
            desc: 'text', type: 'text', elType: 'attr'
        });
        /**
         * Comentário avançado
         * @name Teste
         * @param value - recebe o valor do title2
         *
         * @remarks
       * This method is part of the {@link core-library#Statistics | Statistics subsystem}.
         *
         * @see {@link http://example.com/@internal | the @internal tag}
       *
         */
        _this.title2 = new Input(_this, {
            desc: 'title', type: 'text', elType: 'attr'
        });
        _this.onClick = new Input(_this, {
            desc: 'title', type: 'text', group: 'principal', elType: 'attr'
        });
        return _this;
    }
    _200001_tCard.prototype.render = function () {
        _super.prototype.createEL.call(this, 't-card-4');
        this.renderAllFields(this.el, this);
        return this.el;
    };
    // 3 - Search Page
    _200001_tCard._SearchDetails = {
        section: 'a',
        desc: 'section',
        tags: ['section'],
        childrenTags: ['!elChild', '!restricted'],
        examples: []
    };
    return _200001_tCard;
}(_200001_Special_Base));
//# sourceMappingURL=tCard.js.map