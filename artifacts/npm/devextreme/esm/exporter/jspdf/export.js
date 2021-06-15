/**
* DevExtreme (esm/exporter/jspdf/export.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { isDate, isDefined, isObject, isFunction, isNumeric } from '../../core/utils/type';
import { extend } from '../../core/utils/extend';
import dateLocalization from '../../localization/date';
import numberLocalization from '../../localization/number';
import messageLocalization from '../../localization/message';
import { hasWindow } from '../../core/utils/window';
export var Export = {
  getFullOptions: function getFullOptions(options) {
    var fullOptions = extend({}, options);

    if (!(isDefined(fullOptions.jsPDFDocument) && isObject(fullOptions.jsPDFDocument))) {
      throw Error('The "jsPDFDocument" field must contain a jsPDF instance.');
    }

    if (!(isDefined(fullOptions.jsPDFDocument.autoTable) && isFunction(fullOptions.jsPDFDocument.autoTable))) {
      throw Error('The "exportDataGrid" method requires a autoTable plugin for jsPDF object.');
    }

    if (!isDefined(fullOptions.keepColumnWidths)) {
      fullOptions.keepColumnWidths = true;
    }

    if (!isDefined(fullOptions.autoTableOptions)) {
      fullOptions.autoTableOptions = this._getDefaultAutoTableOptions();
    } else {
      if (!isObject(fullOptions.autoTableOptions)) {
        throw Error('The "autoTableOptions" option must be of object type.');
      }

      fullOptions.autoTableOptions = extend(true, {}, this._getDefaultAutoTableOptions(), fullOptions.autoTableOptions);
    }

    if (!isDefined(fullOptions.loadPanel)) {
      fullOptions.loadPanel = {};
    }

    if (!isDefined(fullOptions.loadPanel.enabled)) {
      fullOptions.loadPanel.enabled = true;
    }

    if (!isDefined(fullOptions.loadPanel.text)) {
      fullOptions.loadPanel.text = messageLocalization.format('dxDataGrid-exporting');
    }

    return fullOptions;
  },
  _getDefaultAutoTableOptions: function _getDefaultAutoTableOptions() {
    return {
      theme: 'plain',
      tableLineColor: 149,
      tableLineWidth: 0.1,
      styles: {
        textColor: 51,
        lineColor: 149,
        lineWidth: 0
      },
      columnStyles: {},
      headStyles: {
        fontStyle: 'normal',
        textColor: 149,
        lineWidth: 0.1
      },
      bodyStyles: {
        lineWidth: 0.1
      },
      head: [],
      body: []
    };
  },
  _setLoadPanelOptions: function _setLoadPanelOptions(component, options) {
    if (!hasWindow()) {
      return;
    }

    component._setOptionWithoutOptionChange('loadPanel', options);

    this._renderLoadPanel(component);
  },
  _renderLoadPanel: function _renderLoadPanel(component) {
    var rowsView = component.getView('rowsView');

    rowsView._renderLoadPanel(rowsView.element(), rowsView.element().parent());
  },
  export: function _export(options) {
    var {
      jsPDFDocument,
      autoTableOptions,
      component,
      customizeCell,
      keepColumnWidths,
      selectedRowsOnly,
      loadPanel
    } = options;
    var initialLoadPanelOptions = extend({}, component.option('loadPanel'));

    if ('animation' in component.option('loadPanel')) {
      loadPanel.animation = null;
    }

    this._setLoadPanelOptions(component, loadPanel);

    var dataProvider = component.getDataProvider(selectedRowsOnly);
    var wrapText = !!component.option('wordWrapEnabled');
    return new Promise(resolve => {
      dataProvider.ready().done(() => {
        var columns = dataProvider.getColumns();
        var styles = dataProvider.getStyles();
        var dataRowsCount = dataProvider.getRowsCount();
        var headerRowCount = dataProvider.getHeaderRowCount();
        var mergedCells = [];

        if (keepColumnWidths) {
          var pdfColumnWidths = this._tryGetPdfColumnWidths(autoTableOptions.tableWidth, dataProvider.getColumnsWidths());

          if (isDefined(pdfColumnWidths) && isDefined(autoTableOptions.columnStyles)) {
            this._setColumnWidths(autoTableOptions.columnStyles, pdfColumnWidths);
          }
        }

        for (var rowIndex = 0; rowIndex < dataRowsCount; rowIndex++) {
          var row = [];

          for (var cellIndex = 0; cellIndex < columns.length; cellIndex++) {
            var {
              value,
              cellSourceData: gridCell
            } = dataProvider.getCellData(rowIndex, cellIndex, true);
            var cellStyle = styles[dataProvider.getStyleId(rowIndex, cellIndex)];
            var pdfCell = {
              content: this._getFormattedValue(value, cellStyle.format),
              styles: this._getPDFCellStyles(gridCell.rowType, columns[cellIndex].alignment, cellStyle, wrapText)
            };

            if (gridCell.rowType === 'header') {
              var mergedRange = this._tryGetMergeRange(rowIndex, cellIndex, mergedCells, dataProvider);

              if (mergedRange && mergedRange.rowSpan > 0) {
                pdfCell.rowSpan = mergedRange.rowSpan + 1;
              }

              if (mergedRange && mergedRange.colSpan > 0) {
                pdfCell.colSpan = mergedRange.colSpan + 1;
              }

              var isMergedCell = mergedCells[rowIndex] && mergedCells[rowIndex][cellIndex];

              if (!isMergedCell || pdfCell.rowSpan > 1 || pdfCell.colSpan > 1) {
                if (isFunction(customizeCell)) {
                  customizeCell({
                    gridCell,
                    pdfCell
                  });
                }

                row.push(pdfCell);
              }
            } else if (gridCell.rowType === 'group' && !isDefined(pdfCell.content) && row.length === 1) {
              var _row$0$colSpan;

              row[0].colSpan = (_row$0$colSpan = row[0].colSpan) !== null && _row$0$colSpan !== void 0 ? _row$0$colSpan : 1;
              row[0].colSpan++;
            } else {
              var _pdfCell$content;

              pdfCell.content = (_pdfCell$content = pdfCell.content) !== null && _pdfCell$content !== void 0 ? _pdfCell$content : '';

              if (isFunction(customizeCell)) {
                customizeCell({
                  gridCell,
                  pdfCell
                });
              }

              row.push(pdfCell);
            }
          }

          if (rowIndex < headerRowCount) {
            autoTableOptions.head.push(row);
          } else {
            autoTableOptions.body.push(row);
          }
        }

        jsPDFDocument.autoTable(autoTableOptions);
        resolve();
      }).always(() => {
        this._setLoadPanelOptions(component, initialLoadPanelOptions);
      });
    });
  },
  _getFormattedValue: function _getFormattedValue(value, format) {
    if (isDefined(format)) {
      if (isDate(value)) {
        return dateLocalization.format(value, format);
      }

      if (isNumeric(value)) {
        return numberLocalization.format(value, format);
      }
    }

    return value;
  },
  _getPDFCellStyles: function _getPDFCellStyles(rowType, columnAlignment, cellStyle, wrapText) {
    var {
      alignment: cellAlignment,
      bold
    } = cellStyle;
    var align = rowType === 'header' ? columnAlignment : cellAlignment;
    var pdfCellStyle = {};

    if (align) {
      pdfCellStyle['halign'] = align;
    }

    if (bold && rowType !== 'header') {
      pdfCellStyle.fontStyle = 'bold';
    }

    if (wrapText) {
      pdfCellStyle.cellWidth = 'wrap';
    }

    return pdfCellStyle;
  },
  _tryGetMergeRange: function _tryGetMergeRange(rowIndex, cellIndex, mergedCells, dataProvider) {
    if (!mergedCells[rowIndex] || !mergedCells[rowIndex][cellIndex]) {
      var {
        colspan,
        rowspan
      } = dataProvider.getCellMerging(rowIndex, cellIndex);

      if (colspan || rowspan) {
        for (var i = rowIndex; i <= rowIndex + rowspan || 0; i++) {
          for (var j = cellIndex; j <= cellIndex + colspan || 0; j++) {
            if (!mergedCells[i]) {
              mergedCells[i] = [];
            }

            mergedCells[i][j] = true;
          }
        }

        return {
          rowSpan: rowspan,
          colSpan: colspan
        };
      }
    }
  },

  _tryGetPdfColumnWidths(autoTableWidth, columnWidths) {
    if (isNumeric(autoTableWidth) && isDefined(columnWidths)) {
      var tableWidth = columnWidths.reduce((a, b) => a + b, 0);
      return columnWidths.map(columnWidth => autoTableWidth * columnWidth / tableWidth);
    }
  },

  _setColumnWidths: function _setColumnWidths(autoTableColumnStyles, pdfColumnWidths) {
    pdfColumnWidths.forEach((width, index) => {
      autoTableColumnStyles[index] = autoTableColumnStyles[index] || {};
      autoTableColumnStyles[index].cellWidth = width;
    });
  }
};
