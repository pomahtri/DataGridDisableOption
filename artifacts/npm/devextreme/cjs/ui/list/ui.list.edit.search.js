/**
* DevExtreme (cjs/ui/list/ui.list.edit.search.js)
* Version: 21.1.3
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _uiList = _interopRequireDefault(require("./ui.list.edit"));

var _ui = _interopRequireDefault(require("../widget/ui.search_box_mixin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListSearch = _uiList.default.inherit(_ui.default).inherit({
  _addWidgetPrefix: function _addWidgetPrefix(className) {
    return 'dx-list-' + className;
  },
  _getCombinedFilter: function _getCombinedFilter() {
    var filter;
    var storeLoadOptions;
    var dataSource = this._dataSource;

    if (dataSource) {
      storeLoadOptions = {
        filter: dataSource.filter()
      };

      dataSource._addSearchFilter(storeLoadOptions);

      filter = storeLoadOptions.filter;
    }

    return filter;
  },
  _initDataSource: function _initDataSource() {
    var value = this.option('searchValue');
    var expr = this.option('searchExpr');
    var mode = this.option('searchMode');
    this.callBase();

    if (this._dataSource) {
      value && value.length && this._dataSource.searchValue(value);
      mode.length && this._dataSource.searchOperation(_ui.default.getOperationBySearchMode(mode));
      expr && this._dataSource.searchExpr(expr);
    }
  }
});

var _default = ListSearch;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;
