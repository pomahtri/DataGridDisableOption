/**
* DevExtreme (esm/ui/scheduler/rendering_strategies/ui.scheduler.appointmentsPositioning.strategy.adaptive.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import BasePositioningStrategy from './ui.scheduler.appointmentsPositioning.strategy.base';
var COLLECTOR_ADAPTIVE_SIZE = 28;
var COLLECTOR_ADAPTIVE_BOTTOM_OFFSET = 40;
var ADAPTIVE_APPOINTMENT_DEFAULT_OFFSET = 35;
var ADAPTIVE_APPOINTMENT_DEFAULT_WIDTH = 30;

class AdaptivePositioningStrategy extends BasePositioningStrategy {
  getDropDownAppointmentWidth(intervalCount, isAllDay) {
    return this.getDropDownButtonAdaptiveSize();
  }

  getDropDownButtonAdaptiveSize() {
    return COLLECTOR_ADAPTIVE_SIZE;
  }

  getCollectorTopOffset(allDay) {
    var renderingStrategy = this.getRenderingStrategy();

    if (renderingStrategy.hasAllDayAppointments() && allDay) {
      return (renderingStrategy.getDefaultAllDayCellHeight() - renderingStrategy.getDropDownButtonAdaptiveSize()) / 2;
    } else {
      return this.getRenderingStrategy().getDefaultCellHeight() - COLLECTOR_ADAPTIVE_BOTTOM_OFFSET;
    }
  }

  getCollectorLeftOffset() {
    return (this.getRenderingStrategy().getDefaultCellWidth() - COLLECTOR_ADAPTIVE_SIZE) / 2;
  }

  getAppointmentDefaultOffset() {
    return ADAPTIVE_APPOINTMENT_DEFAULT_OFFSET;
  }

  getDynamicAppointmentCountPerCell() {
    var renderingStrategy = this.getRenderingStrategy();

    if (renderingStrategy.hasAllDayAppointments()) {
      return {
        allDay: 0,
        simple: this._calculateDynamicAppointmentCountPerCell() || this._getAppointmentMinCount()
      };
    } else {
      return 0;
    }
  }

  getDropDownAppointmentHeight() {
    return COLLECTOR_ADAPTIVE_SIZE;
  }

  _getAppointmentMinCount() {
    return 0;
  }

  _getAppointmentDefaultWidth() {
    var renderingStrategy = this.getRenderingStrategy();

    if (renderingStrategy.hasAllDayAppointments()) {
      return ADAPTIVE_APPOINTMENT_DEFAULT_WIDTH;
    }

    return super._getAppointmentDefaultWidth();
  }

  _calculateDynamicAppointmentCountPerCell() {
    return Math.floor(this.getRenderingStrategy()._getAppointmentMaxWidth() / this.getRenderingStrategy()._getAppointmentDefaultWidth());
  }

}

export default AdaptivePositioningStrategy;
