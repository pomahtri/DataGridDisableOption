/*!
* DevExtreme (dx.messages.sl.js)
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
        "sl": {
            "Yes": "Da",
            "No": "Ne",
            "Cancel": "Prekliči",
            "Clear": "Pobriši",
            "Done": "Končano",
            "Loading": "Nalagam...",
            "Select": "Izberi...",
            "Search": "Išči",
            "Back": "Nazaj",
            "OK": "V redu",
            "dxCollectionWidget-noDataText": "Ni podatkov za prikaz",
            "dxDropDownEditor-selectLabel": "Izberi",
            "validation-required": "Obvezen podatek",
            "validation-required-formatted": "Podatek {0} je obvezen",
            "validation-numeric": "Vrednost mora biti število",
            "validation-numeric-formatted": "{0} mora biti število",
            "validation-range": "Vrednost je izven območja",
            "validation-range-formatted": "{0} je izven območja",
            "validation-stringLength": "Neustrezna dolžina podatka",
            "validation-stringLength-formatted": "Dolžina {0} ni ustrezna",
            "validation-custom": "Vrednost ni pravilna",
            "validation-custom-formatted": "Vrednost {0} je nepravilna",
            "validation-compare": "Vrednosti se ne ujemata",
            "validation-compare-formatted": "{0} se ne ujema",
            "validation-pattern": "Vrednost ne ustreza vzorcu",
            "validation-pattern-formatted": "{0} ne ustreza vzorcu",
            "validation-email": "Email je neveljaven",
            "validation-email-formatted": "{0} je neveljaven",
            "validation-mask": "Vrednost je napačna",
            "dxLookup-searchPlaceholder": "Najmanjše število znakov: {0}",
            "dxList-pullingDownText": "Povlecite navzdol za osvežitev...",
            "dxList-pulledDownText": "Spustite za osvežitev...",
            "dxList-refreshingText": "Osvežujem...",
            "dxList-pageLoadingText": "Nalagam...",
            "dxList-nextButtonText": "Več",
            "dxList-selectAll": "Izberi vse",
            "dxListEditDecorator-delete": "Izbriši",
            "dxListEditDecorator-more": "Več",
            "dxScrollView-pullingDownText": "Povlecite navzdol za osvežitev...",
            "dxScrollView-pulledDownText": "Spustite za osvežitev...",
            "dxScrollView-refreshingText": "Osvežujem...",
            "dxScrollView-reachBottomText": "Nalagam...",
            "dxDateBox-simulatedDataPickerTitleTime": "Izberi čas",
            "dxDateBox-simulatedDataPickerTitleDate": "Izberi datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Izberi datum in čas",
            "dxDateBox-validation-datetime": "Vrednost mora biti datum ali čas",
            "dxFileUploader-selectFile": "Izberi datoteko",
            "dxFileUploader-dropFile": "ali spusti datoteko tukaj",
            "dxFileUploader-bytes": "bajtov",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Naloži",
            "dxFileUploader-uploaded": "Naloženo",
            "dxFileUploader-readyToUpload": "Pripravljeno za nalaganje",
            "dxFileUploader-uploadAbortedMessage": "TODO",
            "dxFileUploader-uploadFailedMessage": "Nalaganje je spodletelo",
            "dxFileUploader-invalidFileExtension": "Tip datoteke ni dovoljen",
            "dxFileUploader-invalidMaxFileSize": "Datoteka je prevelika",
            "dxFileUploader-invalidMinFileSize": "Datoteka je premajhna",
            "dxRangeSlider-ariaFrom": "Od",
            "dxRangeSlider-ariaTill": "Do",
            "dxSwitch-switchedOnText": "Vklopljeno",
            "dxSwitch-switchedOffText": "Izklopljeno",
            "dxForm-optionalMark": "opcijsko",
            "dxForm-requiredMessage": "Podatek {0} je obvezen",
            "dxNumberBox-invalidValueMessage": "Vrednost mora biti število",
            "dxNumberBox-noDataText": "Ni podatkov",
            "dxDataGrid-columnChooserTitle": "Izbirnik stolpcev",
            "dxDataGrid-columnChooserEmptyText": "Povlecite stolpec sem, da ga skrijete",
            "dxDataGrid-groupContinuesMessage": "Nadaljevanje na naslednji strani",
            "dxDataGrid-groupContinuedMessage": "Nadaljevanje iz prejšnje strani",
            "dxDataGrid-groupHeaderText": "Združi po tem stolpcu",
            "dxDataGrid-ungroupHeaderText": "Razdruži",
            "dxDataGrid-ungroupAllText": "Razdruži vse",
            "dxDataGrid-editingEditRow": "Uredi",
            "dxDataGrid-editingSaveRowChanges": "Shrani",
            "dxDataGrid-editingCancelRowChanges": "Prekliči",
            "dxDataGrid-editingDeleteRow": "Briši",
            "dxDataGrid-editingUndeleteRow": "Razveljavi brisanje",
            "dxDataGrid-editingConfirmDeleteMessage": "Ste prepričani, da želite izbrisati ta zapis?",
            "dxDataGrid-validationCancelChanges": "Prekliči spremembe",
            "dxDataGrid-groupPanelEmptyText": "Povleci glavo stolpca sem za združevanje po tem stolpcu",
            "dxDataGrid-noDataText": "Ni podatkov",
            "dxDataGrid-searchPanelPlaceholder": "Išči...",
            "dxDataGrid-filterRowShowAllText": "(Vse)",
            "dxDataGrid-filterRowResetOperationText": "Ponastavi",
            "dxDataGrid-filterRowOperationEquals": "Enako",
            "dxDataGrid-filterRowOperationNotEquals": "Ni enako",
            "dxDataGrid-filterRowOperationLess": "Manj od",
            "dxDataGrid-filterRowOperationLessOrEquals": "Manj ali enako kot",
            "dxDataGrid-filterRowOperationGreater": "Večje kot",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Večje ali enako kot",
            "dxDataGrid-filterRowOperationStartsWith": "Se začne",
            "dxDataGrid-filterRowOperationContains": "Vsebuje",
            "dxDataGrid-filterRowOperationNotContains": "Ne vsebuje",
            "dxDataGrid-filterRowOperationEndsWith": "Se konča z",
            "dxDataGrid-filterRowOperationBetween": "Je med",
            "dxDataGrid-filterRowOperationBetweenStartText": "Začetek",
            "dxDataGrid-filterRowOperationBetweenEndText": "Konec",
            "dxDataGrid-applyFilterText": "Uporabi filter",
            "dxDataGrid-trueText": "Da",
            "dxDataGrid-falseText": "Ne",
            "dxDataGrid-sortingAscendingText": "Razvrsti naraščajoče",
            "dxDataGrid-sortingDescendingText": "Razvrsti padajoče",
            "dxDataGrid-sortingClearText": "Brez razvrščanja",
            "dxDataGrid-editingSaveAllChanges": "Shrani spremembe",
            "dxDataGrid-editingCancelAllChanges": "Zavrzi spremembe",
            "dxDataGrid-editingAddRow": "Dodaj vrstico",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min od {1} je {0}",
            "dxDataGrid-summaryMax": "Maks: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maks od {1} je {0}",
            "dxDataGrid-summaryAvg": "Povpr: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Povpr. od {1} je {0}",
            "dxDataGrid-summarySum": "Skupaj: {0}",
            "dxDataGrid-summarySumOtherColumn": "Skupaj od {1} je {0}",
            "dxDataGrid-summaryCount": "Število: {0}",
            "dxDataGrid-columnFixingFix": "Popravi",
            "dxDataGrid-columnFixingUnfix": "Ne popravi",
            "dxDataGrid-columnFixingLeftPosition": "Levo",
            "dxDataGrid-columnFixingRightPosition": "Desno",
            "dxDataGrid-exportTo": "Izvozi",
            "dxDataGrid-exportToExcel": "Izvozi v Excel datoteko",
            "dxDataGrid-exporting": "Izvozi...",
            "dxDataGrid-excelFormat": "Excel datoteka",
            "dxDataGrid-selectedRows": "Izbrane vrstice",
            "dxDataGrid-exportSelectedRows": "Izvozi izbrane vrstice",
            "dxDataGrid-exportAll": "Izvozi vse podatke",
            "dxDataGrid-headerFilterEmptyValue": "(Prazno)",
            "dxDataGrid-headerFilterOK": "V redu",
            "dxDataGrid-headerFilterCancel": "Prekliči",
            "dxDataGrid-ariaColumn": "Stolpec",
            "dxDataGrid-ariaValue": "Vrednost",
            "dxDataGrid-ariaFilterCell": "Filtriraj po celici",
            "dxDataGrid-ariaCollapse": "Skrči",
            "dxDataGrid-ariaExpand": "Razširi",
            "dxDataGrid-ariaDataGrid": "Tabela",
            "dxDataGrid-ariaSearchInGrid": "Išči v tabeli",
            "dxDataGrid-ariaSelectAll": "Izberi vse",
            "dxDataGrid-ariaSelectRow": "Izberi vrstico",
            "dxDataGrid-filterBuilderPopupTitle": "Graditelj filtra",
            "dxDataGrid-filterPanelCreateFilter": "Ustvari filter",
            "dxDataGrid-filterPanelClearFilter": "Pobriši",
            "dxDataGrid-filterPanelFilterEnabledHint": "Omogoči filtriranje",
            "dxTreeList-ariaTreeList": "Drevesni seznam",
            "dxTreeList-editingAddRowToNode": "Dodaj",
            "dxPager-infoText": "Stran {0} od {1} ({2} zapisov)",
            "dxPager-pagesCountText": "od",
            "dxPager-pageSizesAllText": "Vse",
            "dxPivotGrid-grandTotal": "Skupna vsota",
            "dxPivotGrid-total": "{0} skupaj",
            "dxPivotGrid-fieldChooserTitle": "Izbirnik polj",
            "dxPivotGrid-showFieldChooser": "Prikaži izbirnik polj",
            "dxPivotGrid-expandAll": "Razširi vse",
            "dxPivotGrid-collapseAll": "Skrči vse",
            "dxPivotGrid-sortColumnBySummary": "Razvrsti \"{0}\" po tem stolpcu",
            "dxPivotGrid-sortRowBySummary": "Razvrsti \"{0}\" po tej vrstici",
            "dxPivotGrid-removeAllSorting": "Brez razvrščanja",
            "dxPivotGrid-dataNotAvailable": "Ni na voljo",
            "dxPivotGrid-rowFields": "Vrstice",
            "dxPivotGrid-columnFields": "Stolpci",
            "dxPivotGrid-dataFields": "Podatki",
            "dxPivotGrid-filterFields": "Filtri",
            "dxPivotGrid-allFields": "Vsa polja",
            "dxPivotGrid-columnFieldArea": "Povleci stolpce tukaj",
            "dxPivotGrid-dataFieldArea": "Povleci podatke tukaj",
            "dxPivotGrid-rowFieldArea": "Povleci vrstice tukaj",
            "dxPivotGrid-filterFieldArea": "Povleci filtre tukaj",
            "dxScheduler-editorLabelTitle": "Predmet",
            "dxScheduler-editorLabelStartDate": "Datum začetka",
            "dxScheduler-editorLabelEndDate": "Datum konca",
            "dxScheduler-editorLabelDescription": "Opis",
            "dxScheduler-editorLabelRecurrence": "Ponovi",
            "dxScheduler-openAppointment": "Odpri dogodek",
            "dxScheduler-recurrenceNever": "Nikoli",
            "dxScheduler-recurrenceMinutely": "Minutely",
            "dxScheduler-recurrenceHourly": "Hourly",
            "dxScheduler-recurrenceDaily": "Dnevno",
            "dxScheduler-recurrenceWeekly": "Tedensko",
            "dxScheduler-recurrenceMonthly": "Mesečno",
            "dxScheduler-recurrenceYearly": "Letno",
            "dxScheduler-recurrenceRepeatEvery": "Ponovi vsak",
            "dxScheduler-recurrenceRepeatOn": "Ponovi na",
            "dxScheduler-recurrenceEnd": "Zaključi ponavljanje",
            "dxScheduler-recurrenceAfter": "Po",
            "dxScheduler-recurrenceOn": "Vklopljeno",
            "dxScheduler-recurrenceRepeatMinutely": "minute(s)",
            "dxScheduler-recurrenceRepeatHourly": "hour(s)",
            "dxScheduler-recurrenceRepeatDaily": "dan/dni",
            "dxScheduler-recurrenceRepeatWeekly": "teden/tednov",
            "dxScheduler-recurrenceRepeatMonthly": "mesec/mesecev",
            "dxScheduler-recurrenceRepeatYearly": "let",
            "dxScheduler-switcherDay": "Dan",
            "dxScheduler-switcherWeek": "Teden",
            "dxScheduler-switcherWorkWeek": "Delovni teden",
            "dxScheduler-switcherMonth": "Mesec",
            "dxScheduler-switcherAgenda": "Urnik",
            "dxScheduler-switcherTimelineDay": "Dnevna časovnica",
            "dxScheduler-switcherTimelineWeek": "Tedenska časovnica",
            "dxScheduler-switcherTimelineWorkWeek": "Časovnica delovnega tedna",
            "dxScheduler-switcherTimelineMonth": "Mesečna časovnica",
            "dxScheduler-recurrenceRepeatOnDate": "na dan",
            "dxScheduler-recurrenceRepeatCount": "pojavitev",
            "dxScheduler-allDay": "Ves dan",
            "dxScheduler-confirmRecurrenceEditMessage": "Želite urediti samo ta dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Želite izbrisati samo izbrani dogodek ali tudi nadaljne ponovitve?",
            "dxScheduler-confirmRecurrenceEditSeries": "Uredi niz dogodkov",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Izbriši niz dogodkov",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Uredi dogodek",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Izbriši dogodek",
            "dxScheduler-noTimezoneTitle": "Brez časovnega pasa",
            "dxScheduler-moreAppointments": "še {0}",
            "dxCalendar-todayButtonText": "Danes",
            "dxCalendar-ariaWidgetName": "Koledar",
            "dxColorView-ariaRed": "Rdeča",
            "dxColorView-ariaGreen": "Zelena",
            "dxColorView-ariaBlue": "Modra",
            "dxColorView-ariaAlpha": "Prosojno",
            "dxColorView-ariaHex": "Koda barve (hex)",
            "dxTagBox-selected": "{0} izbranih",
            "dxTagBox-allSelected": "Vsi izbrani ({0})",
            "dxTagBox-moreSelected": "še {0}",
            "vizExport-printingButtonText": "Natisni",
            "vizExport-titleMenuText": "Izvozi/Natisni",
            "vizExport-exportButtonText": "{0} datoteka",
            "dxFilterBuilder-and": "In",
            "dxFilterBuilder-or": "Ali",
            "dxFilterBuilder-notAnd": "In ne",
            "dxFilterBuilder-notOr": "Ali ne",
            "dxFilterBuilder-addCondition": "Dodaj pogoj",
            "dxFilterBuilder-addGroup": "Dodaj skupino",
            "dxFilterBuilder-enterValueText": "<vnesi vrednost>",
            "dxFilterBuilder-filterOperationEquals": "Enako",
            "dxFilterBuilder-filterOperationNotEquals": "Ni enako",
            "dxFilterBuilder-filterOperationLess": "Je manj kot",
            "dxFilterBuilder-filterOperationLessOrEquals": "Je manj ali enako kot",
            "dxFilterBuilder-filterOperationGreater": "Je večje kot",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Je večje ali enako kot",
            "dxFilterBuilder-filterOperationStartsWith": "Se začne z",
            "dxFilterBuilder-filterOperationContains": "Vsebuje",
            "dxFilterBuilder-filterOperationNotContains": "Ne vsebuje",
            "dxFilterBuilder-filterOperationEndsWith": "Se konča z",
            "dxFilterBuilder-filterOperationIsBlank": "Je prazno",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ni prazno",
            "dxFilterBuilder-filterOperationBetween": "Je med",
            "dxFilterBuilder-filterOperationAnyOf": "Je karkoli izmed",
            "dxFilterBuilder-filterOperationNoneOf": "Ni nič izmed",
            "dxHtmlEditor-dialogColorCaption": "Zamenjaj barvo pisave",
            "dxHtmlEditor-dialogBackgroundCaption": "Zamenjaj barvo ozadja",
            "dxHtmlEditor-dialogLinkCaption": "Dodaj povezavo",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Odpri povezvo v novem oknu",
            "dxHtmlEditor-dialogImageCaption": "Dodaj sliko",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Dodatno besedilo",
            "dxHtmlEditor-dialogImageWidthField": "Širina (px)",
            "dxHtmlEditor-dialogImageHeightField": "Višina (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableColumnsField": "!TODO",
            "dxHtmlEditor-dialogInsertTableCaption": "!TODO",
            "dxHtmlEditor-heading": "Naslov",
            "dxHtmlEditor-normalText": "Običajno besedilo",
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
            "dxFileManager-newDirectoryName": "Neimenovana mapa",
            "dxFileManager-errorNoAccess": "Dostop zavrnjen. Operacija ne more biti končana.",
            "dxFileManager-errorDirectoryExistsFormat": "Mapa '{0}' že obstaja.",
            "dxFileManager-errorFileExistsFormat": "Datoteka '{0}' že obstaja.",
            "dxFileManager-errorFileNotFoundFormat": "Datoteka '{0}' ni bila najdena",
            "dxFileManager-errorDefault": "Neznana napaka.",
            "dxFileManager-rootDirectoryName": "TODO",
            "dxFileManager-errorDirectoryNotFoundFormat": "TODO",
            "dxFileManager-errorWrongFileExtension": "TODO",
            "dxFileManager-errorMaxFileSizeExceeded": "TODO",
            "dxFileManager-errorInvalidSymbols": "TODO",
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
