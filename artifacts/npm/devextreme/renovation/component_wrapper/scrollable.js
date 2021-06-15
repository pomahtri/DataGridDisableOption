/**
* DevExtreme (renovation/component_wrapper/scrollable.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.ScrollableWrapper = void 0;

var _component = _interopRequireDefault(require("./common/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollableWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ScrollableWrapper, _Component);

  function ScrollableWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ScrollableWrapper.prototype;

  _proto._optionChanged = function _optionChanged(option) {
    var name = option.name;

    if (name === "useNative") {
      this._isNodeReplaced = false;
    }

    _Component.prototype._optionChanged.call(this, option);
  };

  return ScrollableWrapper;
}(_component.default);

exports.ScrollableWrapper = ScrollableWrapper;
