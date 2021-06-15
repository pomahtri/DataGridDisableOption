/**
* DevExtreme (esm/integration/angular/template.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../core/renderer';
import { TemplateBase } from '../../core/templates/template_base';
import { isFunction } from '../../core/utils/type';
import { normalizeTemplateElement } from '../../core/utils/dom';
export var NgTemplate = class extends TemplateBase {
  constructor(element, templateCompiler) {
    super();
    this._element = element;
    this._compiledTemplate = templateCompiler(normalizeTemplateElement(this._element));
  }

  _renderCore(options) {
    var compiledTemplate = this._compiledTemplate;
    return isFunction(compiledTemplate) ? compiledTemplate(options) : compiledTemplate;
  }

  source() {
    return $(this._element).clone();
  }

};
