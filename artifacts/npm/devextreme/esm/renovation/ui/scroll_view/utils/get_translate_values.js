/**
* DevExtreme (esm/renovation/ui/scroll_view/utils/get_translate_values.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { getElementStyle } from "./get_element_style";
export function getTranslateValues(element) {
  if (!element) return {
    left: 0,
    top: 0
  };
  var matrix = getElementStyle("transform", element);
  var regex = /matrix.*\((.+)\)/;
  var matrixValues = regex.exec(matrix);

  if (matrixValues) {
    var result = matrixValues[1].split(", ");
    return {
      left: Number(result[4]),
      top: Number(result[5])
    };
  }

  return {
    left: 0,
    top: 0
  };
}
