/**
* DevExtreme (esm/core/templates/empty_template.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../renderer';
import { TemplateBase } from './template_base';
export class EmptyTemplate extends TemplateBase {
  _renderCore() {
    return $();
  }

}
