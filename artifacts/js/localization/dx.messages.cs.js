/*!
* DevExtreme (dx.messages.cs.js)
* Version: 21.2.0
* Build date: Tue Jun 15 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"));
        });
    } else if(typeof module === "object" && module.exports) {
        factory(require("devextreme/localization"));
    } else {
        factory(DevExpress.localization);
    }
}(this, function(localization) {
    localization.loadMessages({
        "cs": {
            "Yes": "Ano",
            "No": "Ne",
            "Cancel": "Zrušit",
            "Clear": "Smazat",
            "Done": "Hotovo",
            "Loading": "Nahrávání...",
            "Select": "Výběr...",
            "Search": "Hledat",
            "Back": "Zpět",
            "OK": "OK",
            "dxCollectionWidget-noDataText": "Žádná data k zobrazení",
            "dxDropDownEditor-selectLabel": "Výběr",
            "validation-required": "povinné",
            "validation-required-formatted": "{0} je povinných",
            "validation-numeric": "Hodnota musí být číslo",
            "validation-numeric-formatted": "{0} musí být číslo",
            "validation-range": "Hodnota je mimo rozsah",
            "validation-range-formatted": "{0} je mimo rozsah",
            "validation-stringLength": "Délka textového řetezce není správná",
            "validation-stringLength-formatted": "Délka textu {0} není správná",
            "validation-custom": "Neplatná hodnota",
            "validation-custom-formatted": "{0} je neplatných",
            "validation-async": "Neplatná hodnota",
            "validation-async-formatted": "{0} je neplatných",
            "validation-compare": "Hodnoty se neshodují",
            "validation-compare-formatted": "{0} se neshoduje",
            "validation-pattern": "Hodnota neodpovídá vzoru",
            "validation-pattern-formatted": "{0} neodpovídá vzoru",
            "validation-email": "Neplatný email",
            "validation-email-formatted": "{0} není platný",
            "validation-mask": "Hodnota není platná",
            "dxLookup-searchPlaceholder": "Minimální počet znaků: {0}",
            "dxList-pullingDownText": "Stáhněte dolů pro obnovení...",
            "dxList-pulledDownText": "Uvolněte pro obnovení...",
            "dxList-refreshingText": "Obnovuji...",
            "dxList-pageLoadingText": "Nahrávám...",
            "dxList-nextButtonText": "Více",
            "dxList-selectAll": "Vybrat vše",
            "dxListEditDecorator-delete": "Smazat",
            "dxListEditDecorator-more": "Více",
            "dxScrollView-pullingDownText": "Stáhněte dolů pro obnovení...",
            "dxScrollView-pulledDownText": "Uvolněte pro obnovení...",
            "dxScrollView-refreshingText": "Obnovuji...",
            "dxScrollView-reachBottomText": "Nahrávám...",
            "dxDateBox-simulatedDataPickerTitleTime": "Vyberte čas",
            "dxDateBox-simulatedDataPickerTitleDate": "Vyberte datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Vyberte datum a čas",
            "dxDateBox-validation-datetime": "Hodnota musí být datum nebo čas",
            "dxFileUploader-selectFile": "Vyberte soubor",
            "dxFileUploader-dropFile": "nebo přeneste soubor sem",
            "dxFileUploader-bytes": "bytů",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Nahrát",
            "dxFileUploader-uploaded": "Nahráno",
            "dxFileUploader-readyToUpload": "Připraveno k nahrání",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Nahrávání selhalo",
            "dxFileUploader-invalidFileExtension": "",
            "dxFileUploader-invalidMaxFileSize": "",
            "dxFileUploader-invalidMinFileSize": "",
            "dxRangeSlider-ariaFrom": "Od",
            "dxRangeSlider-ariaTill": "Do",
            "dxSwitch-switchedOnText": "ZAP",
            "dxSwitch-switchedOffText": "VYP",
            "dxForm-optionalMark": "volitelný",
            "dxForm-requiredMessage": "{0} je vyžadováno",
            "dxNumberBox-invalidValueMessage": "Hodnota musí být číslo",
            "dxNumberBox-noDataText": "Žádná data",
            "dxDataGrid-columnChooserTitle": "Výběr sloupců",
            "dxDataGrid-columnChooserEmptyText": "Přesuňte sloupec zde pro skytí",
            "dxDataGrid-groupContinuesMessage": "Pokračovat na další straně",
            "dxDataGrid-groupContinuedMessage": "Pokračování z předchozí strany",
            "dxDataGrid-groupHeaderText": "Sloučit sloupce",
            "dxDataGrid-ungroupHeaderText": "Oddělit",
            "dxDataGrid-ungroupAllText": "Oddělit vše",
            "dxDataGrid-editingEditRow": "Upravit",
            "dxDataGrid-editingSaveRowChanges": "Uložit",
            "dxDataGrid-editingCancelRowChanges": "Zrušit",
            "dxDataGrid-editingDeleteRow": "Smazat",
            "dxDataGrid-editingUndeleteRow": "Obnovit",
            "dxDataGrid-editingConfirmDeleteMessage": "Opravdu chcete smazat tento záznam?",
            "dxDataGrid-validationCancelChanges": "Zrušit změny",
            "dxDataGrid-groupPanelEmptyText": "Přeneste hlavičku sloupce zde pro sloučení",
            "dxDataGrid-noDataText": "Žádná data",
            "dxDataGrid-searchPanelPlaceholder": "Hledání...",
            "dxDataGrid-filterRowShowAllText": "(Vše)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Rovná se",
            "dxDataGrid-filterRowOperationNotEquals": "Nerovná se",
            "dxDataGrid-filterRowOperationLess": "Menší",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menší nebo rovno",
            "dxDataGrid-filterRowOperationGreater": "Větší",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Větší nebo rovno",
            "dxDataGrid-filterRowOperationStartsWith": "Začíná na",
            "dxDataGrid-filterRowOperationContains": "Obsahuje",
            "dxDataGrid-filterRowOperationNotContains": "Neobsahuje",
            "dxDataGrid-filterRowOperationEndsWith": "Končí na",
            "dxDataGrid-filterRowOperationBetween": "Mezi",
            "dxDataGrid-filterRowOperationBetweenStartText": "Začíná",
            "dxDataGrid-filterRowOperationBetweenEndText": "Končí",
            "dxDataGrid-applyFilterText": "Použít filtr",
            "dxDataGrid-trueText": "Platí",
            "dxDataGrid-falseText": "Neplatí",
            "dxDataGrid-sortingAscendingText": "Srovnat vzestupně",
            "dxDataGrid-sortingDescendingText": "Srovnat sestupně",
            "dxDataGrid-sortingClearText": "Zrušit rovnání",
            "dxDataGrid-editingSaveAllChanges": "Uložit změny",
            "dxDataGrid-editingCancelAllChanges": "Zrušit změny",
            "dxDataGrid-editingAddRow": "Přidat řádek",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min {1} je {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max {1} je {0}",
            "dxDataGrid-summaryAvg": "Prům.: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Průměr ze {1} je {0}",
            "dxDataGrid-summarySum": "Suma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Suma {1} je {0}",
            "dxDataGrid-summaryCount": "Počet: {0}",
            "dxDataGrid-columnFixingFix": "Uchytit",
            "dxDataGrid-columnFixingUnfix": "Uvolnit",
            "dxDataGrid-columnFixingLeftPosition": "Vlevo",
            "dxDataGrid-columnFixingRightPosition": "Vpravo",
            "dxDataGrid-exportTo": "Export",
            "dxDataGrid-exportToExcel": "Export do sešitu Excel",
            "dxDataGrid-exporting": "Export...",
            "dxDataGrid-excelFormat": "soubor Excel",
            "dxDataGrid-selectedRows": "Vybrané řádky",
            "dxDataGrid-exportSelectedRows": "Export vybraných řádků",
            "dxDataGrid-exportAll": "Exportovat všechny záznamy",
            "dxDataGrid-headerFilterEmptyValue": "(prázdné)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Zrušit",
            "dxDataGrid-ariaColumn": "Sloupec",
            "dxDataGrid-ariaValue": "Hodnota",
            "dxDataGrid-ariaFilterCell": "Filtrovat buňku",
            "dxDataGrid-ariaCollapse": "Sbalit",
            "dxDataGrid-ariaExpand": "Rozbalit",
            "dxDataGrid-ariaDataGrid": "Datová mřížka",
            "dxDataGrid-ariaSearchInGrid": "Hledat v datové mřížce",
            "dxDataGrid-ariaSelectAll": "Vybrat vše",
            "dxDataGrid-ariaSelectRow": "Vybrat řádek",
            "dxDataGrid-filterBuilderPopupTitle": "Tvorba Filtru",
            "dxDataGrid-filterPanelCreateFilter": "Vytvořit Filtr",
            "dxDataGrid-filterPanelClearFilter": "Smazat",
            "dxDataGrid-filterPanelFilterEnabledHint": "Povolit Filtr",
            "dxTreeList-ariaTreeList": "Tree list",
            "dxTreeList-editingAddRowToNode": "Přidat",
            "dxPager-infoText": "Strana {0} ze {1} ({2} položek)",
            "dxPager-pagesCountText": "ze",
            "dxPager-pageSizesAllText": "Vše",
            "dxPivotGrid-grandTotal": "Celkem",
            "dxPivotGrid-total": "{0} Celkem",
            "dxPivotGrid-fieldChooserTitle": "Výběr pole",
            "dxPivotGrid-showFieldChooser": "Zobrazit výběr pole",
            "dxPivotGrid-expandAll": "Rozbalit vše",
            "dxPivotGrid-collapseAll": "Sbalit vše",
            "dxPivotGrid-sortColumnBySummary": "Srovnat \"{0}\" podle tohoto sloupce",
            "dxPivotGrid-sortRowBySummary": "Srovnat \"{0}\" podle tohoto řádku",
            "dxPivotGrid-removeAllSorting": "Odstranit veškeré třídění",
            "dxPivotGrid-dataNotAvailable": "nedostupné",
            "dxPivotGrid-rowFields": "Pole řádků",
            "dxPivotGrid-columnFields": "Pole sloupců",
            "dxPivotGrid-dataFields": "Pole dat",
            "dxPivotGrid-filterFields": "Filtrovat pole",
            "dxPivotGrid-allFields": "Všechna pole",
            "dxPivotGrid-columnFieldArea": "Zde vložte pole sloupců",
            "dxPivotGrid-dataFieldArea": "Zde vložte pole dat",
            "dxPivotGrid-rowFieldArea": "Zde vložte pole řádků",
            "dxPivotGrid-filterFieldArea": "Zde vložte filtr pole",
            "dxScheduler-editorLabelTitle": "Předmět",
            "dxScheduler-editorLabelStartDate": "Počáteční datum",
            "dxScheduler-editorLabelEndDate": "Koncové datum",
            "dxScheduler-editorLabelDescription": "Popis",
            "dxScheduler-editorLabelRecurrence": "Opakovat",
            "dxScheduler-openAppointment": "Otevřít schůzku",
            "dxScheduler-recurrenceNever": "Nikdy",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Denně",
            "dxScheduler-recurrenceWeekly": "Týdně",
            "dxScheduler-recurrenceMonthly": "Měsíčně",
            "dxScheduler-recurrenceYearly": "Ročně",
            "dxScheduler-recurrenceRepeatEvery": "Každý",
            "dxScheduler-recurrenceRepeatOn": "Repeat On",
            "dxScheduler-recurrenceEnd": "Konec opakování",
            "dxScheduler-recurrenceAfter": "Po",
            "dxScheduler-recurrenceOn": "Zap",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dní",
            "dxScheduler-recurrenceRepeatWeekly": "týdnů",
            "dxScheduler-recurrenceRepeatMonthly": "měsíců",
            "dxScheduler-recurrenceRepeatYearly": "roků",
            "dxScheduler-switcherDay": "Den",
            "dxScheduler-switcherWeek": "Týden",
            "dxScheduler-switcherWorkWeek": "Pracovní týden",
            "dxScheduler-switcherMonth": "Měsíc",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Časová osa den",
            "dxScheduler-switcherTimelineWeek": "Časová osa týden",
            "dxScheduler-switcherTimelineWorkWeek": "Časová osa pracovní týden",
            "dxScheduler-switcherTimelineMonth": "Časová osa měsíc",
            "dxScheduler-recurrenceRepeatOnDate": "na den",
            "dxScheduler-recurrenceRepeatCount": "výskytů",
            "dxScheduler-allDay": "Celý den",
            "dxScheduler-confirmRecurrenceEditMessage": "Chcete upravit pouze tuto schůzku nebo celou sérii?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Chcete smazat pouze tuto schůzku nebo celou sérii?",
            "dxScheduler-confirmRecurrenceEditSeries": "Upravit sérii",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Smazat sérii",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Upravit schůzku",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Smazat schůzku",
            "dxScheduler-noTimezoneTitle": "Bez časové zóny",
            "dxScheduler-moreAppointments": "{0} navíc",
            "dxCalendar-todayButtonText": "Dnes",
            "dxCalendar-ariaWidgetName": "Kalendář",
            "dxColorView-ariaRed": "Červená",
            "dxColorView-ariaGreen": "Zelená",
            "dxColorView-ariaBlue": "Modrá",
            "dxColorView-ariaAlpha": "Průhledná",
            "dxColorView-ariaHex": "Kód barvy",
            "dxTagBox-selected": "{0} vybráno",
            "dxTagBox-allSelected": "Vše vybráno ({0})",
            "dxTagBox-moreSelected": "{0} navíc",
            "vizExport-printingButtonText": "Tisk",
            "vizExport-titleMenuText": "Export/import",
            "vizExport-exportButtonText": "{0} souborů",
            "dxFilterBuilder-and": "A",
            "dxFilterBuilder-or": "NEBO",
            "dxFilterBuilder-notAnd": "NAND",
            "dxFilterBuilder-notOr": "NOR",
            "dxFilterBuilder-addCondition": "Přidat podmínku",
            "dxFilterBuilder-addGroup": "Přidat skupinu",
            "dxFilterBuilder-enterValueText": "<vložte hodnotu>",
            "dxFilterBuilder-filterOperationEquals": "Rovná se",
            "dxFilterBuilder-filterOperationNotEquals": "Nerovná se",
            "dxFilterBuilder-filterOperationLess": "Menší než",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menší nebo rovno než",
            "dxFilterBuilder-filterOperationGreater": "Větší než",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Větší nebo rovno než",
            "dxFilterBuilder-filterOperationStartsWith": "Začíná na",
            "dxFilterBuilder-filterOperationContains": "Obsahuje",
            "dxFilterBuilder-filterOperationNotContains": "Neobsahuje",
            "dxFilterBuilder-filterOperationEndsWith": "Končí na",
            "dxFilterBuilder-filterOperationIsBlank": "Je prázdné",
            "dxFilterBuilder-filterOperationIsNotBlank": "Není prázdné",
            "dxFilterBuilder-filterOperationBetween": "Mezi",
            "dxFilterBuilder-filterOperationAnyOf": "Libovolný z",
            "dxFilterBuilder-filterOperationNoneOf": "Žádný z",
            "dxHtmlEditor-dialogColorCaption": "!TODO!",
            "dxHtmlEditor-dialogBackgroundCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkCaption": "!TODO!",
            "dxHtmlEditor-dialogLinkUrlField": "!TODO!",
            "dxHtmlEditor-dialogLinkTextField": "!TODO!",
            "dxHtmlEditor-dialogLinkTargetField": "!TODO!",
            "dxHtmlEditor-dialogImageCaption": "!TODO!",
            "dxHtmlEditor-dialogImageUrlField": "!TODO!",
            "dxHtmlEditor-dialogImageAltField": "!TODO!",
            "dxHtmlEditor-dialogImageWidthField": "!TODO!",
            "dxHtmlEditor-dialogImageHeightField": "!TODO!",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "!TODO!",
            "dxHtmlEditor-normalText": "!TODO!",
            "dxHtmlEditor-background": "TODO",
            "dxHtmlEditor-bold": "TODO",
            "dxHtmlEditor-color": "TODO",
            "dxHtmlEditor-font": "TODO",
            "dxHtmlEditor-italic": "TODO",
            "dxHtmlEditor-link": "TODO",
            "dxHtmlEditor-image": "TODO",
            "dxHtmlEditor-size": "TODO",
            "dxHtmlEditor-strike": "TODO",
            "dxHtmlEditor-subscript": "TODO",
            "dxHtmlEditor-superscript": "TODO",
            "dxHtmlEditor-underline": "TODO",
            "dxHtmlEditor-blockquote": "TODO",
            "dxHtmlEditor-header": "TODO",
            "dxHtmlEditor-increaseIndent": "TODO",
            "dxHtmlEditor-decreaseIndent": "TODO",
            "dxHtmlEditor-orderedList": "TODO",
            "dxHtmlEditor-bulletList": "TODO",
            "dxHtmlEditor-alignLeft": "TODO",
            "dxHtmlEditor-alignCenter": "TODO",
            "dxHtmlEditor-alignRight": "TODO",
            "dxHtmlEditor-alignJustify": "TODO",
            "dxHtmlEditor-codeBlock": "TODO",
            "dxHtmlEditor-variable": "TODO",
            "dxHtmlEditor-undo": "TODO",
            "dxHtmlEditor-redo": "TODO",
            "dxHtmlEditor-clear": "TODO",
            "dxHtmlEditor-insertTable": "TODO",
            "dxHtmlEditor-insertRowAbove": "TODO",
            "dxHtmlEditor-insertRowBelow": "TODO",
            "dxHtmlEditor-insertColumnLeft": "TODO",
            "dxHtmlEditor-insertColumnRight": "TODO",
            "dxHtmlEditor-deleteColumn": "TODO",
            "dxHtmlEditor-deleteRow": "TODO",
            "dxHtmlEditor-deleteTable": "TODO",
            "dxHtmlEditor-list": "TODO",
            "dxHtmlEditor-ordered": "TODO",
            "dxHtmlEditor-bullet": "TODO",
            "dxHtmlEditor-align": "TODO",
            "dxHtmlEditor-center": "TODO",
            "dxHtmlEditor-left": "TODO",
            "dxHtmlEditor-right": "TODO",
            "dxHtmlEditor-indent": "TODO",
            "dxHtmlEditor-justify": "TODO",
            "dxFileManager-newDirectoryName": "TODO",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorNoAccess": "TODO",
            "dxFileManager-errorDirectoryExistsFormat": "TODO",
            "dxFileManager-errorFileExistsFormat": "TODO",
            "dxFileManager-errorFileNotFoundFormat": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
            "dxFileManager-errorDefault": "TODO",
            "dxFileManager-errorDirectoryOpenFailed": "TODO",
            "dxDiagram-categoryGeneral": "TODO",
            "dxDiagram-categoryFlowchart": "TODO",
            "dxDiagram-categoryOrgChart": "TODO",
            "dxDiagram-categoryContainers": "TODO",
            "dxDiagram-categoryCustom": "TODO",
            "dxDiagram-commandExportToSvg": "TODO",
            "dxDiagram-commandExportToPng": "TODO",
            "dxDiagram-commandExportToJpg": "TODO",
            "dxDiagram-commandUndo": "TODO",
            "dxDiagram-commandRedo": "TODO",
            "dxDiagram-commandFontName": "TODO",
            "dxDiagram-commandFontSize": "TODO",
            "dxDiagram-commandBold": "TODO",
            "dxDiagram-commandItalic": "TODO",
            "dxDiagram-commandUnderline": "TODO",
            "dxDiagram-commandTextColor": "TODO",
            "dxDiagram-commandLineColor": "TODO",
            "dxDiagram-commandLineWidth": "TODO",
            "dxDiagram-commandLineStyle": "TODO",
            "dxDiagram-commandLineStyleSolid": "TODO",
            "dxDiagram-commandLineStyleDotted": "TODO",
            "dxDiagram-commandLineStyleDashed": "TODO",
            "dxDiagram-commandFillColor": "TODO",
            "dxDiagram-commandAlignLeft": "TODO",
            "dxDiagram-commandAlignCenter": "TODO",
            "dxDiagram-commandAlignRight": "TODO",
            "dxDiagram-commandConnectorLineType": "TODO",
            "dxDiagram-commandConnectorLineStraight": "TODO",
            "dxDiagram-commandConnectorLineOrthogonal": "TODO",
            "dxDiagram-commandConnectorLineStart": "TODO",
            "dxDiagram-commandConnectorLineEnd": "TODO",
            "dxDiagram-commandConnectorLineNone": "TODO",
            "dxDiagram-commandConnectorLineArrow": "TODO",
            "dxDiagram-commandFullscreen": "TODO",
            "dxDiagram-commandUnits": "TODO",
            "dxDiagram-commandPageSize": "TODO",
            "dxDiagram-commandPageOrientation": "TODO",
            "dxDiagram-commandPageOrientationLandscape": "TODO",
            "dxDiagram-commandPageOrientationPortrait": "TODO",
            "dxDiagram-commandPageColor": "TODO",
            "dxDiagram-commandShowGrid": "TODO",
            "dxDiagram-commandSnapToGrid": "TODO",
            "dxDiagram-commandGridSize": "TODO",
            "dxDiagram-commandZoomLevel": "TODO",
            "dxDiagram-commandAutoZoom": "TODO",
            "dxDiagram-commandFitToContent": "TODO",
            "dxDiagram-commandFitToWidth": "TODO",
            "dxDiagram-commandAutoZoomByContent": "TODO",
            "dxDiagram-commandAutoZoomByWidth": "TODO",
            "dxDiagram-commandSimpleView": "TODO",
            "dxDiagram-commandCut": "TODO",
            "dxDiagram-commandCopy": "TODO",
            "dxDiagram-commandPaste": "TODO",
            "dxDiagram-commandSelectAll": "TODO",
            "dxDiagram-commandDelete": "TODO",
            "dxDiagram-commandBringToFront": "TODO",
            "dxDiagram-commandSendToBack": "TODO",
            "dxDiagram-commandLock": "TODO",
            "dxDiagram-commandUnlock": "TODO",
            "dxDiagram-commandInsertShapeImage": "TODO",
            "dxDiagram-commandEditShapeImage": "TODO",
            "dxDiagram-commandDeleteShapeImage": "TODO",
            "dxDiagram-commandLayoutLeftToRight": "TODO",
            "dxDiagram-commandLayoutRightToLeft": "TODO",
            "dxDiagram-commandLayoutTopToBottom": "TODO",
            "dxDiagram-commandLayoutBottomToTop": "TODO",
            "dxDiagram-unitIn": "TODO",
            "dxDiagram-unitCm": "TODO",
            "dxDiagram-unitPx": "TODO",
            "dxDiagram-dialogButtonOK": "TODO",
            "dxDiagram-dialogButtonCancel": "TODO",
            "dxDiagram-dialogInsertShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageTitle": "TODO",
            "dxDiagram-dialogEditShapeImageSelectButton": "TODO",
            "dxDiagram-dialogEditShapeImageLabelText": "TODO",
            "dxDiagram-uiExport": "TODO",
            "dxDiagram-uiProperties": "TODO",
            "dxDiagram-uiSettings": "TODO",
            "dxDiagram-uiShowToolbox": "TODO",
            "dxDiagram-uiSearch": "TODO",
            "dxDiagram-uiStyle": "TODO",
            "dxDiagram-uiLayout": "TODO",
            "dxDiagram-uiLayoutTree": "TODO",
            "dxDiagram-uiLayoutLayered": "TODO",
            "dxDiagram-uiDiagram": "TODO",
            "dxDiagram-uiText": "TODO",
            "dxDiagram-uiObject": "TODO",
            "dxDiagram-uiConnector": "TODO",
            "dxDiagram-uiPage": "TODO",
            "dxDiagram-shapeText": "TODO",
            "dxDiagram-shapeRectangle": "TODO",
            "dxDiagram-shapeEllipse": "TODO",
            "dxDiagram-shapeCross": "TODO",
            "dxDiagram-shapeTriangle": "TODO",
            "dxDiagram-shapeDiamond": "TODO",
            "dxDiagram-shapeHeart": "TODO",
            "dxDiagram-shapePentagon": "TODO",
            "dxDiagram-shapeHexagon": "TODO",
            "dxDiagram-shapeOctagon": "TODO",
            "dxDiagram-shapeStar": "TODO",
            "dxDiagram-shapeArrowLeft": "TODO",
            "dxDiagram-shapeArrowUp": "TODO",
            "dxDiagram-shapeArrowRight": "TODO",
            "dxDiagram-shapeArrowDown": "TODO",
            "dxDiagram-shapeArrowUpDown": "TODO",
            "dxDiagram-shapeArrowLeftRight": "TODO",
            "dxDiagram-shapeProcess": "TODO",
            "dxDiagram-shapeDecision": "TODO",
            "dxDiagram-shapeTerminator": "TODO",
            "dxDiagram-shapePredefinedProcess": "TODO",
            "dxDiagram-shapeDocument": "TODO",
            "dxDiagram-shapeMultipleDocuments": "TODO",
            "dxDiagram-shapeManualInput": "TODO",
            "dxDiagram-shapePreparation": "TODO",
            "dxDiagram-shapeData": "TODO",
            "dxDiagram-shapeDatabase": "TODO",
            "dxDiagram-shapeHardDisk": "TODO",
            "dxDiagram-shapeInternalStorage": "TODO",
            "dxDiagram-shapePaperTape": "TODO",
            "dxDiagram-shapeManualOperation": "TODO",
            "dxDiagram-shapeDelay": "TODO",
            "dxDiagram-shapeStoredData": "TODO",
            "dxDiagram-shapeDisplay": "TODO",
            "dxDiagram-shapeMerge": "TODO",
            "dxDiagram-shapeConnector": "TODO",
            "dxDiagram-shapeOr": "TODO",
            "dxDiagram-shapeSummingJunction": "TODO",
            "dxDiagram-shapeContainerDefaultText": "TODO",
            "dxDiagram-shapeVerticalContainer": "TODO",
            "dxDiagram-shapeHorizontalContainer": "TODO",
            "dxDiagram-shapeCardDefaultText": "TODO",
            "dxDiagram-shapeCardWithImageOnLeft": "TODO",
            "dxDiagram-shapeCardWithImageOnTop": "TODO",
            "dxDiagram-shapeCardWithImageOnRight": "TODO",
            "dxGantt-dialogTitle": "TODO",
            "dxGantt-dialogStartTitle": "TODO",
            "dxGantt-dialogEndTitle": "TODO",
            "dxGantt-dialogProgressTitle": "TODO",
            "dxGantt-dialogResourcesTitle": "TODO",
            "dxGantt-dialogResourceManagerTitle": "TODO",
            "dxGantt-dialogTaskDetailsTitle": "TODO",
            "dxGantt-dialogEditResourceListHint": "TODO",
            "dxGantt-dialogEditNoResources": "TODO",
            "dxGantt-dialogButtonAdd": "TODO",
            "dxGantt-contextMenuNewTask": "TODO",
            "dxGantt-contextMenuNewSubtask": "TODO",
            "dxGantt-contextMenuDeleteTask": "TODO",
            "dxGantt-contextMenuDeleteDependency": "TODO",
            "dxGantt-dialogTaskDeleteConfirmation": "TODO",
            "dxGantt-dialogDependencyDeleteConfirmation": "TODO",
            "dxGantt-dialogResourcesDeleteConfirmation": "TODO",
            "dxGantt-dialogConstraintCriticalViolationMessage": "TODO",
            "dxGantt-dialogConstraintViolationMessage": "TODO",
            "dxGantt-dialogCancelOperationMessage": "TODO",
            "dxGantt-dialogDeleteDependencyMessage": "TODO",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "TODO",
            "dxGantt-undo": "TODO",
            "dxGantt-redo": "TODO",
            "dxGantt-expandAll": "TODO",
            "dxGantt-collapseAll": "TODO",
            "dxGantt-addNewTask": "TODO",
            "dxGantt-deleteSelectedTask": "TODO",
            "dxGantt-zoomIn": "TODO",
            "dxGantt-zoomOut": "TODO",
            "dxGantt-fullScreen": "TODO",
            "dxGantt-quarter": "TODO"
        }
    });
}));
