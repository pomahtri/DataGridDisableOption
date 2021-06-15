/**
* DevExtreme (esm/ui/scheduler/workspaces/utils.work_week.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import dateUtils from '../../../core/utils/date';
var MONDAY_INDEX = 1;
var SATURDAY_INDEX = 6;
var SUNDAY_INDEX = 0;

class workWeekUtils {
  static isDataOnWeekend(date) {
    var day = date.getDay();
    return day === SATURDAY_INDEX || day === SUNDAY_INDEX;
  }

  static getFirstDayOfWeek(firstDayOfWeekOption) {
    return firstDayOfWeekOption || MONDAY_INDEX;
  }

  static getWeekendsCount(days) {
    return 2 * Math.floor(days / 7);
  }

  static getFirstViewDate(viewStart, firstDayOfWeek) {
    var firstViewDate = dateUtils.getFirstWeekDate(viewStart, firstDayOfWeek);
    return dateUtils.normalizeDateByWeek(firstViewDate, viewStart);
  }

}

export default workWeekUtils;
