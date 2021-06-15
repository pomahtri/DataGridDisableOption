/**
* DevExtreme (esm/renovation/ui/common/widget.j.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from "../../../core/component_registrator";
import BaseComponent from "../../component_wrapper/common/component";
import { Widget as WidgetComponent, defaultOptions } from "./widget";
export default class Widget extends BaseComponent {
  getProps() {
    var props = super.getProps();
    props.onKeyDown = this._wrapKeyDownHandler(props.onKeyDown);
    return props;
  }

  focus() {
    var _this$viewRef;

    return (_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.focus(...arguments);
  }

  _getActionConfigs() {
    return {
      onActive: {},
      onDimensionChanged: {},
      onInactive: {},
      onVisibilityChange: {},
      onFocusIn: {},
      onFocusOut: {},
      onHoverStart: {},
      onHoverEnd: {},
      onClick: {}
    };
  }

  get _propsInfo() {
    return {
      twoWay: [],
      allowNull: [],
      elements: [],
      templates: [],
      props: ["_feedbackHideTimeout", "_feedbackShowTimeout", "activeStateUnit", "aria", "classes", "name", "addWidgetClass", "onActive", "onDimensionChanged", "onInactive", "onVisibilityChange", "onFocusIn", "onFocusOut", "onHoverStart", "onHoverEnd", "className", "accessKey", "activeStateEnabled", "disabled", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "onClick", "onKeyDown", "rtlEnabled", "tabIndex", "visible", "width"]
    };
  }

  get _viewComponent() {
    return WidgetComponent;
  }

}
registerComponent("dxWidget", Widget);
Widget.defaultOptions = defaultOptions;
