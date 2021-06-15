"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _component_registrator = _interopRequireDefault(require("../../core/component_registrator"));

var _ui = _interopRequireDefault(require("../widget/ui.search_box_mixin"));

var _extend = require("../../core/utils/extend");

var _uiTree_view = _interopRequireDefault(require("./ui.tree_view.base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// STYLE treeView
var WIDGET_CLASS = 'dx-treeview';
var NODE_CONTAINER_CLASS = "".concat(WIDGET_CLASS, "-node-container");

var TreeViewSearch = _uiTree_view.default.inherit(_ui.default).inherit({
  _addWidgetPrefix: function _addWidgetPrefix(className) {
    return "".concat(WIDGET_CLASS, "-").concat(className);
  },
  _optionChanged: function _optionChanged(args) {
    switch (args.name) {
      case 'searchValue':
        if (this._showCheckboxes() && this._isRecursiveSelection()) {
          this._removeSelection();
        }

        this._initDataAdapter();

        this._updateSearch();

        this._repaintContainer();

        break;

      case 'searchExpr':
        this._initDataAdapter();

        this.repaint();
        break;

      case 'searchMode':
        this.option('expandNodesRecursive') ? this._updateDataAdapter() : this._initDataAdapter();
        this.repaint();
        break;

      default:
        this.callBase(args);
    }
  },
  _updateDataAdapter: function _updateDataAdapter() {
    this._setOptionWithoutOptionChange('expandNodesRecursive', false);

    this._initDataAdapter();

    this._setOptionWithoutOptionChange('expandNodesRecursive', true);
  },
  _getDataAdapterOptions: function _getDataAdapterOptions() {
    return (0, _extend.extend)(this.callBase(), {
      searchValue: this.option('searchValue'),
      searchMode: this.option('searchMode') || 'contains',
      searchExpr: this.option('searchExpr')
    });
  },
  _updateSearch: function _updateSearch() {
    if (this._searchEditor) {
      var editorOptions = this._getSearchEditorOptions();

      this._searchEditor.option(editorOptions);
    }
  },
  _repaintContainer: function _repaintContainer() {
    var $container = this.$element().find(".".concat(NODE_CONTAINER_CLASS)).first();
    var rootNodes;

    if ($container.length) {
      $container.empty();
      rootNodes = this._dataAdapter.getRootNodes();

      this._renderEmptyMessage(rootNodes);

      this._renderItems($container, rootNodes);

      this._fireContentReadyAction();
    }
  },
  _itemContainer: function _itemContainer(isSearchMode) {
    if (this._scrollableContainer && isSearchMode) {
      return (0, _renderer.default)(this._scrollableContainer.content());
    }

    return this.callBase();
  },
  _addWidgetClass: function _addWidgetClass() {
    this.$element().addClass(this._widgetClass());
  },
  _clean: function _clean() {
    this.callBase();

    this._removeSearchBox();
  }
});

(0, _component_registrator.default)('dxTreeView', TreeViewSearch);
var _default = TreeViewSearch;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;