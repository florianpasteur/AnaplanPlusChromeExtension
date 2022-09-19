//////// PALETTE FUNCTIONS ///////////////////////////////
function applyPalette(configData) {
  $('#palette-style').remove();
  var cssStr = ""
    //Fonts
    +
    'body{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}.classic td, .classic th{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}' +
    '.aui a{font-size:' + configData.tbl_font_size + 'px;font-family:' + configData.tbl_font_family + ';}' +
    '.original .classic.dashboardWidget .pageSelectorToolbar .toolbarLabel{color:' + configData.simple_txt_color + ';}'
    //Launchpad
    +
    '.filters a.filter-selected{background-color:' + configData.nav_back_color2 + '; color:' + configData.nav_btntxt_color + ';}' +
    '.not-iOS body.list .model.ready:hover{background-color:' + configData.settings_hover_color + '!important; color:' + configData.nav_btntxt_color + '!important;}' +
    '.not-iOS .tiles .model.ready:hover{background-color:' + configData.settings_hover_color + '!important; color:' + configData.nav_btntxt_color + '!important;}' +
    '.black a.model-icon{color:' + configData.settings_hover_color + ';}' +
    '.popup-row-content-list div:hover{background-color:' + configData.settings_hover_color + '!important; color:' + configData.nav_btntxt_color + '!important;}'
    //Model Title Color 
    +
    'a{color:' + configData.label_txt_color + ';}' +
    '.original #banner a{color:' + configData.label_txt_color + ';} .claro .dijitSelectLabel{color:' + configData.label_txt_color + ';} .claro .dijitTextBox .dijitInputInner{color:' + configData.label_txt_color + ';}'
    //Toaster
    +
    '.original .dijitToasterContainer{width: 300px;}' +
    '.original .dijitToasterContent{width: 260px; font-size:10px; background-color:c4ebff; opacity:0.8; color:' + configData.nav_back_color2 + ';}'
    //Editable Cells Color
    +
    '.classic .editable {background-color:' + configData.editable_cells_color + '; color:' + configData.editable_txt_color + ';}' +
    '.original .classic table.grid .bb{background-size: 18%;}' +
    '.thin .editable {background-color:' + configData.editable_cells_color + '; color:' + configData.editable_txt_color + ';}' +
    '.original .thin table.grid .bb{background-size: 18%;}' +
    '.clean .editable {background-color:' + configData.editable_cells_color + '; color:' + configData.editable_txt_color + ';}' +
    '.original .clean table.grid .bb{background-size: 18%;}' +
    '.zebra .editable {background-color:' + configData.editable_cells_color + '; color:' + configData.editable_txt_color + ';}' +
    '.original .zebra table.grid .bb{background-size: 18%;}' +
    '.original .cell .cellValue {background-color:' + configData.editable_cells_color + '; color:' + configData.editable_txt_color + ';}' +
    '.original .cellReadOnly .cellValue {background-color: #FFFFFF ; color: #000000;}'
    //All cells aligned
    //+ '.gridrownormal:not(.gridrowheader) {text-align: right;}'
    //NavBar Background Color
    +
    'nav.ap-gn{background: linear-gradient(90deg,' + configData.nav_back_color1 + ',' + configData.nav_back_color2 + ') ;}'
    //Slider Background Color
    +
    '.original #slideout{background:linear-gradient(to bottom, ' + configData.slider_back_color2 + ', ' + configData.slider_back_color2 + ');}' +
    '.original #content_tablist > .dijitTabListWrapper{background:linear-gradient(to top, #ccc 1px, ' + configData.slider_back_color2 + ' 1px);}'
    //Slider Text Color
    +
    '.aui .ap-expanding-panel .ap-header .ap-header-title{color:' + configData.slider_txt_color + ';} .aui .table-of-contents .panels .ap-expanding-panel .ap-tree .ap-tree-item a{color:' + configData.slider_txt_color + ';} .original .dojoxExpandoTitle{color:' + configData.slider_txt_color + ';}' +
    '.ap-gn-icon-btn--circle .ap-gn-icon-btn__icon {background-color: rgba(255, 255, 255, 0.0);}' +
    '.aui .table-of-contents .panels .ap-expanding-panel {height: 110%; background: rgba(0, 0, 0, 0.02); margin: 6px; margin-right: 6px; border-radius: 4px;}' +
    '.aui .ap-expanding-panel .ap-header .icon {margin: 0 -2px -4px 2px;}' +
    '.aui .table-of-contents .panels .ap-expanding-panel .ap-tree .ap-tree-item.selected-parent {border-left: 5px solid' + configData.nav_button_color + ';}'
    //Selection Color
    +
    '.claro .dijitTreeRowSelected{background:' + configData.settings_selected_color2 + ';} .claro .dijitTreeRowHover{background:' + configData.settings_hover_color + ';} .claro .dijitTreeRowSelected.dijitTreeRowHover{background:' + configData.settings_hover_color + ';}' +
    '.original .sortableList .dojoDndItemSelected{background:' + configData.settings_selected_color2 + ';} .original .sortableList .dojoDndItemOver{background:' + configData.settings_hover_color + ';}' +
    '.original .masterSelector .dojoDndItemSelected{background:' + configData.settings_selected_color2 + ';} .original .masterSelector .dojoDndItemOver{background:' + configData.label_txt_color + ';} .original .masterSelector .dojoDndItemSelected .dojoDndItemOver{background:' + configData.label_txt_color + ';} .original .history .previewTable tr.selected td{background:' + configData.label_txt_color + ';}'
    //Other Labels Color (model size, time settings, etc.)
    +
    '.original .modelContentsHeadline .modelSize{color:' + configData.label_txt_color + ';}' +
    '.original .primary-button .dijitButtonNode{background:' + configData.nav_back_color2 + ';}' +
    '.original .primary-button.dijitHover .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.original .formulaBar .formulaBarRowLabelCell .dijitButtonText, .original .formulaEditor .formulaEditorRowLabelCell .dijitButtonText {color: ' + configData.label_txt_color + ';}' +
    '.claro.original .pageSelectorToolbar .dijitDropDownButton .dijitButtonText, .claro.original .pageSelectorToolbar .dijitOpened .dijitButtonText{color:' + configData.label_txt_color + ';}' +
    '.original .modelContentsTree .dijitTreeNode .newItemLabel {color: ' + configData.label_txt_color + ';}' +
    '.original .dashboardWidgetMoveHandle{background-color:' + configData.nav_back_color2 + ';}' +
    '.original .dashboardDesignMode .dashboardWidgetSelected .dashboardWidgetContainerNode{outline-color:' + configData.nav_back_color2 + ';}'
    //Button Color
    +
    'button.actionButton{background:' + configData.nav_back_color2 + ';}' +
    '.claro.original .dijitToolbar .dijitDropDownButtonHover .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.claro.original .dijitToolbar .dijitDropDownButtonHoverFocused .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.claro .dojoDndItemAnchor{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.aui .btn-primary{background:' + configData.nav_back_color2 + '; background-color:' + configData.nav_back_color2 + ';}' +
    '.aui .ap-btn-toolbar.btn-primary.dropdown-toggle[disabled], .aui .ap-btn-toolbar.btn-primary[disabled]{background:' + configData.nav_back_color2 + '; background-color:' + configData.nav_back_color2 + ';}' +
    '.aui .ap-tab-toolbar .ap-tab-toolbar__inner .ap-toolbar .ap-btn-toolbar.aui-is-selected{background:' + configData.nav_back_color2 + '; background-color:' + configData.nav_back_color2 + ';}' +
    '.aui .ap-btn-toolbar.btn-default:hover:not([disabled]){background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.claro.original .dijitToolbar .dijitDropDownButtonOpenedHover .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.claro.original .dijitToolbar .dijitButtonHover .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.original .dashboardWidget-BUTTON .primary-button .dijitButtonNode{background:' + configData.nav_back_color2 + '; background-color:' + configData.nav_back_color2 + ';}' +
    '.original .dashboardWidget-BUTTON .primary-button .dijitHover .dijitButtonNode{background:' + configData.nav_button_color + '; background-color:' + configData.nav_button_color + ';}' +
    '.original .dashboardWidget-BUTTON .hyperlink .dijitButtonNode, .original .dashboardWidget-BUTTON .hyperlink .dijitHover .dijitButtonNode{color: ' + configData.label_txt_color + ';}' +
    '.original .tabContainer .dijitTabChecked .tabLabel{color:' + configData.label_txt_color + ';}'
    //Table Row Summary Color
    +
    '.classic .gridrowsummary1{font-weight:bold; background:' + configData.sum1_cells_color + ';}' +
    '.classic .gridrowsummary2{font-weight:bold; background:' + configData.sum2_cells_color + ';}' +
    '.classic .gridrowsummary3{font-weight:bold; background:' + configData.sum3_cells_color + ';}' +
    '.clean .gridrowsummary1{font-weight:bold; background:' + configData.sum1_cells_color + ';}' +
    '.clean .gridrowsummary2{font-weight:bold; background:' + configData.sum2_cells_color + ';}' +
    '.clean .gridrowsummary3{font-weight:bold; background:' + configData.sum3_cells_color + ';}' +
    '.thin .gridrowsummary1{font-weight:bold; background:' + configData.sum1_cells_color + ';}' +
    '.thin .gridrowsummary2{font-weight:bold; background:' + configData.sum2_cells_color + ';}' +
    '.thin .gridrowsummary3{font-weight:bold; background:' + configData.sum3_cells_color + ';}'
    //Table Row Color
    +
    '.classic .gridcolumnheader{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsView .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsSettings .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .dijitLayoutContainerFocused .classic .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '}' +
    '.classic .gridcrosshairs{background: transparent}' +
    '.clean .gridcolumnheader{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsView .clean .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsSettings .clean .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .dijitLayoutContainerFocused .clean .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '}' +
    '.clean .gridcrosshairs{background-color:' + configData.th_back_color + ';}' +
    '.thin .gridcolumnheader{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsView .thin .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .anaplanTabsSettings .thin .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '} .dijitLayoutContainerFocused .thin .gridcolumnheader.gridlabelhighlight{color:' + configData.th_txt_color + ';background:' + configData.th_back_color + '}' +
    '.thin .gridcrosshairs{background-color:' + configData.th_back_color + ';}'
    //Table Column Summary Color
    +
    '.classic .gridcolumnheadersummary1{font-weight:bold; border-top: 3px solid ' + configData.sum1_col_bdr + ';}' +
    '.classic .gridcolumnsummary1{font-weight:bold; border-left: 3px solid ' + configData.sum1_col_bdr + '; border-right: 3px solid ' + configData.sum1_col_bdr + ';}' +
    '.classic .gridcolumnheadersummary2{font-weight:bold; border-top: 3px solid ' + configData.sum2_col_bdr + ';}' +
    '.classic .gridcolumnsummary2{font-weight:bold; border-left: 3px solid ' + configData.sum2_col_bdr + '; border-right: 3px solid ' + configData.sum2_col_bdr + ';}' +
    '.classic .gridcolumnheadersummary3{font-weight:bold; border-top: 2px solid ' + configData.sum2_col_bdr + ';}' +
    '.classic .gridcolumnsummary3{font-weight:bold; border-left: 2px solid ' + configData.sum2_col_bdr + '; border-right: 2px solid ' + configData.sum2_col_bdr + ';}' +
    '.clean .gridcolumnheadersummary1{font-weight:bold; border-top: 3px solid ' + configData.sum1_col_bdr + ';}' +
    '.clean .gridcolumnsummary1{font-weight:bold; border-left: 3px solid ' + configData.sum1_col_bdr + ';}' +
    '.clean .gridcolumnheadersummary2{font-weight:bold; border-top: 2px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.clean .gridcolumnsummary2{font-weight:bold; border-left: 2px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.clean .gridcolumnheadersummary3{font-weight:bold; border-top: 1px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.clean .gridcolumnsummary3{font-weight:bold; border-left: 1px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.thin .gridcolumnheadersummary1{font-weight:bold; border-top: 3px solid ' + configData.sum1_col_bdr + ';}' +
    '.thin .gridcolumnsummary1{font-weight:bold; border-left: 3px solid ' + configData.sum1_col_bdr + '}' +
    '.thin .gridcolumnheadersummary2{font-weight:bold; border-top: 2px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.thin .gridcolumnsummary2{font-weight:bold; border-left: 2px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.thin .gridcolumnheadersummary3{font-weight:bold; border-top: 1px solid ' + configData.sum2_col_bdr + ' !important;}' +
    '.thin .gridcolumnsummary3{font-weight:bold; border-left: 1px solid ' + configData.sum2_col_bdr + ' !important;}'
    //Table Heading 3 Summary Height
    /* + '.gridrowheading3>.cellWrapper{height: 18px !important;white-space: normal; word-wrap: break-word; text-align: center; font-weight:bold; font-size: 9px; padding-top: 0px !important}'
    + '.gridrowheaderheading3>.cellWrapper {font-style: normal; text-align: left; font-size:' + configData.tbl_font_size + 'px;}'
    + '.thin .gridrowheading3{background-color:'+ configData.heading3_cells_color +';}' */
    //Table Selection
    +
    '.classic .gridselected .selectionborderleft {border-left: 2px solid' + configData.settings_hover_color + ';}' +
    '.classic .gridselected .selectionborderright {border-right: 2px solid' + configData.settings_hover_color + ';}' +
    '.classic .gridselected .selectionbordertop {border-top: 2px solid' + configData.settings_hover_color + ';}' +
    '.classic .gridselected .selectionborderbottom {border-bottom: 2px solid' + configData.settings_hover_color + ';}' +
    '.gridrowheader gridlabelhighlight{border-right: 2px solid' + configData.settings_hover_color + ';}'
    //Text Color
    +
    '.original .dashboardWidget-STATIC_TEXT .heading1{color:' + configData.h1_txt_color + ';background-color:' + configData.h1_bg_color + '; font-weight: bold; text-align:' + configData.h1_txt_align + ';}' +
    '.original .staticTextMenu .heading1 .dijitMenuItemLabel{color:' + configData.h1_txt_color + '; text-indent: 6px;}' +
    '.original .dashboardWidget-STATIC_TEXT .heading2{color:' + configData.h2_txt_color + ';background-color:' + configData.h2_bg_color + '; font-weight: bold; text-align:' + configData.h2_txt_align + ';}' +
    '.original .staticTextMenu .heading2 .dijitMenuItemLabel{color:' + configData.h2_txt_color + ';}' +
    '.original .dashboardWidget-STATIC_TEXT .instruction{background-color:' + configData.info_bg_color + ';}' +
    '.original .staticTextMenu .instruction .dijitMenuItemLabel{background-color:' + configData.info_bg_color + '; text-indent: 6px;}'
    //Comment cells
    +
    '.original .cell .inputContainer .dijitTextBox{border-color:' + configData.settings_hover_color + ';}';


  $('head').append("<style id='palette-style'>" + cssStr + "</style>");
  document.getElementById("palette-style").disabled = !configData.bpxPalette;
}