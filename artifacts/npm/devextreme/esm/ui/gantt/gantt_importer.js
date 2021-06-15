/**
* DevExtreme (esm/ui/gantt/gantt_importer.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Errors from '../widget/ui.errors';
import Gantt from 'devexpress-gantt';
export function getGanttViewCore() {
  if (!Gantt) {
    throw Errors.Error('E1041', 'devexpress-gantt');
  }

  return Gantt;
}
