/**
* DevExtreme (renovation/ui/scheduler/workspaces/base/group_panel/horizontal/cell.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.GroupPanelHorizontalCell = exports.GroupPanelHorizontalCellProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _combine_classes = require("../../../../../../utils/combine_classes");

var _cell_props = require("../cell_props");

var _excluded = ["cellTemplate", "className", "colSpan", "color", "data", "id", "index", "isFirstGroupCell", "isLastGroupCell", "text"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(_ref) {
  var classes = _ref.classes,
      _ref$props = _ref.props,
      CellTemplate = _ref$props.cellTemplate,
      colSpan = _ref$props.colSpan,
      color = _ref$props.color,
      data = _ref$props.data,
      id = _ref$props.id,
      index = _ref$props.index,
      text = _ref$props.text;
  return (0, _inferno.createVNode)(1, "th", classes, (0, _inferno.createVNode)(1, "div", "dx-scheduler-group-header-content", [!!CellTemplate && CellTemplate({
    data: {
      data: data,
      id: id,
      color: color,
      text: text
    },
    index: index
  }), !CellTemplate && (0, _inferno.createVNode)(1, "div", null, text, 0)], 0), 2, {
    "colSpan": colSpan
  });
};

exports.viewFunction = viewFunction;

var GroupPanelHorizontalCellProps = _extends({}, _cell_props.GroupPanelCellProps, {
  isFirstGroupCell: false,
  isLastGroupCell: false,
  colSpan: 1
});

exports.GroupPanelHorizontalCellProps = GroupPanelHorizontalCellProps;

var getTemplate = function getTemplate(TemplateProp) {
  return TemplateProp && (TemplateProp.defaultProps ? function (props) {
    return (0, _inferno.normalizeProps)((0, _inferno.createComponentVNode)(2, TemplateProp, _extends({}, props)));
  } : TemplateProp);
};

var GroupPanelHorizontalCell = /*#__PURE__*/function (_BaseInfernoComponent) {
  _inheritsLoose(GroupPanelHorizontalCell, _BaseInfernoComponent);

  function GroupPanelHorizontalCell(props) {
    var _this;

    _this = _BaseInfernoComponent.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = GroupPanelHorizontalCell.prototype;

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props, {
        cellTemplate: getTemplate(props.cellTemplate)
      }),
      classes: this.classes,
      restAttributes: this.restAttributes
    });
  };

  _createClass(GroupPanelHorizontalCell, [{
    key: "classes",
    get: function get() {
      var _this$props = this.props,
          className = _this$props.className,
          isFirstGroupCell = _this$props.isFirstGroupCell,
          isLastGroupCell = _this$props.isLastGroupCell;
      return (0, _combine_classes.combineClasses)(_defineProperty({
        "dx-scheduler-group-header": true,
        "dx-scheduler-first-group-cell": isFirstGroupCell,
        "dx-scheduler-last-group-cell": isLastGroupCell
      }, className, !!className));
    }
  }, {
    key: "restAttributes",
    get: function get() {
      var _this$props2 = this.props,
          cellTemplate = _this$props2.cellTemplate,
          className = _this$props2.className,
          colSpan = _this$props2.colSpan,
          color = _this$props2.color,
          data = _this$props2.data,
          id = _this$props2.id,
          index = _this$props2.index,
          isFirstGroupCell = _this$props2.isFirstGroupCell,
          isLastGroupCell = _this$props2.isLastGroupCell,
          text = _this$props2.text,
          restProps = _objectWithoutProperties(_this$props2, _excluded);

      return restProps;
    }
  }]);

  return GroupPanelHorizontalCell;
}(_vdom.BaseInfernoComponent);

exports.GroupPanelHorizontalCell = GroupPanelHorizontalCell;
GroupPanelHorizontalCell.defaultProps = _extends({}, GroupPanelHorizontalCellProps);
