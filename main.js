var gPrevValue = '';
var gConfigData = {
      bpxColor: true,
      bpxIndent: true,
      bpxAutoComplete: true,
      bpxModuleAC: true,
      bpxPropAC: true,
      bpxGrid: true,
      bpxTooltip: true,
      bpxSnippet: true,
      decimal_txt: 'COMMA',
      thousands_txt: 'SPACE',
      negative_txt: 'MINUS_SIGN',
      zero_txt: 'HYPHEN',
      bpxLink: true,
      bpxMap: true,
      bpxToaster: true,
      bpxPalette: true,
      bpxScrollbar: true,
      bpxCellcalculation: true,
      nav_back_color1: '#2B6ECB',
      nav_back_color2: '#102161',
      nav_button_color: '#2bb8ff',
      nav_btntxt_color: '#ffffff',
      slider_back_color2: '#f8f8fa',
      slider_txt_color: '#333333',
      settings_selected_color2: '#102161',
      settings_hover_color: '#2bb8ff',
      label_txt_color: '#2bb8ff',
      editable_cells_color: '#fffed0',
      editable_txt_color: '#0433FF',
      sum1_cells_color: '#C5C5C5',
      sum2_cells_color: '#E0E0E0',
      sum3_cells_color: '#F4F4F4',
      heading3_cells_color: '#F1F1F1',
      sum1_col_bdr: '#cccccc',
      sum2_col_bdr: '#cccccc',
      h1_txt_color: '#102161',
      h1_bg_color: '#ffffff',
      h1_txt_align: 'left',
      h2_txt_color: '#424242',
      h2_bg_color: '#ffffff',
      h2_txt_align: 'left',
      info_bg_color: '#c4ebff',
      blue_btn_color: '#194788',
      blue_btn_hover: '#2bb8ff',
      tbl_font_family: 'helvetica',
      tbl_font_size: '11',
      th_back_color: '#F1F1F1',
      th_txt_color: '#000000',
      ntf_version: 1
    }
;

//Initialize on opening
applyToaster(gConfigData);
applyPalette(gConfigData);
applyScrollbar(gConfigData);
applyFix();
injectJs(chrome.runtime.getURL('injected.js'));

function injectJs(link) {
  var scr = document.createElement('script');
  scr.type = "text/javascript";
  scr.src = link;
  // document.getElementsByTagName('head')[0].appendChild(scr)
  document.getElementsByTagName('body')[0].appendChild(scr);
}


//Initialize elements once loaded
function timeoutFunction() {
  if ($('.ap-gn__logo').length == 0) {
    setTimeout(timeoutFunction, 100);
    console.log("Waiting for page to be fully loaded...");
  } else {
    applyDisableLink(gConfigData.bpxLink);
    applyHideModelmap(gConfigData.bpxMap);
    applySnippet(gConfigData);
    applyToaster(gConfigData);
    applyPalette(gConfigData);
    applyScrollbar(gConfigData);
    applyFix(gConfigData);
  }
}

$(function () {
  setTimeout(timeoutFunction, 100)
});

//Initialize click-dependent elements
$(document).ready(function () {

  $('body').click(function (e) {
    if ($(e.target).closest('.formulaWindow .dijitDialogTitleBar .dijitButton, .formulaWindow .formulaEditorButtonsCell .dijitButton').length) {
      afterModalHidden(e);
    } else {
      setTimeout(function () {
        handleHighlighter(e);
        applyGrid(gConfigData.bpxGrid);
        applyTooltip(gConfigData.bpxTooltip);
      }, 0);
      setTimeout(function () {
        applyTooltip(gConfigData.bpxTooltip);
      }, 1000);
      setTimeout(function () {
        applyTooltip(gConfigData.bpxTooltip);
      }, 2000);
    }
  });
  $('body').click();
});

$(document).keydown(function (e) {
  if ($(newTextarea).length == 0) return;
  var lrud_keys = [37, 38, 39, 40];
  if (lrud_keys.indexOf(event.which) >= 0 && $(oldTextarea).length) {
    if ($(e.target).closest('table.formulaEditorExpressionTable').length) return;
    setTimeout(function () {
      updateFormatting($(oldTextarea).val());
      $(oldTextarea).attr('prev_value', $(oldTextarea).val());
    }, 0);
  }
});


function afterModalHidden(e) {
  setTimeout(function () {
    if ($('.formulaWindow').length) {
      afterModalHidden(e); // wait until the formlar window is removed
    } else {
      e.target = null;
      handleHighlighter(e);
      caretPositionOldToNew();
    }
  }, 0);
}

var prevIsModal = 0;
var curIsModal = 0;

function handleHighlighter(e) {
  if ($('.formulaWindow').length > 0) {
    curIsModal = 1;
  } else {
    curIsModal = 0;
  }
  if (!gConfigData.bpxColor &&
    !gConfigData.bpxIndent &&
    !gConfigData.bpxAutoComplete &&
    !gConfigData.bpxModuleAC &&
    !gConfigData.bpxPropAC
  ) return;
  if ($(e.target).closest('.dijitTabInner.qa-tab').length) {
    setTimeout(function () {
      if ($('.formulaEditorText').length) {
        $('.formulaEditorText').on('keydown', function (e) {
          if (e.key === "Escape" || e.which == 13) {
            afterModalHidden(e);
          }
        });
      }
    }, 0);
  }
  if ($(oldTextarea).length == 0) return;
  // emulate label click
  if ($(e.target).closest('.formulaEditorRowLabelCell').length) {
    caretPositionOldToNew()
    return;
  }
  // dismiss click on edit panel
  if ($(e.target).closest('table.formulaEditorExpressionTable').length) return;
  let curValue = $(oldTextarea).val();
  if (initHighLighter() || ($(e.target).data('dojo-attach-point') == "_wrapper") || curValue != gPrevValue) {
    updateFormatting(curValue);
  }
  toggleHighlighter(gConfigData.bpxColor || gConfigData.bpxIndent || gConfigData.bpxAutoComplete || gConfigData.bpxModuleAC || gConfigData.bpxPropAC);
  applyColor(gConfigData.bpxColor);
  applyIndent(gConfigData.bpxIndent);
  applyAutocomplete(gConfigData.bpxAutoComplete);
  // refreshHighlighter();

  // // if clicked tab
  if ($(e.target).closest('.dijitTabInner.qa-tab').length) {
    if (prevIsModal != curIsModal) {
      caretPositionOldToNew();
    }
  }

  if (($('.formulaWindow').length == 0) && ($('.formulaEditorLabelTable .formulaEditorButtonsCell > span').length > 0 && $('.formulaEditorLabelTable .formulaEditorButtonsCell > span').eq(0).css('visibility') != 'hidden')) {
    // in edit mode or modal
    caretPositionOldToNew();
  }

  $(oldTextarea).attr('prev_value', curValue);
  gPrevValue = curValue;
  prevIsModal = curIsModal;

}

//////// EXTENSION FUNCTIONS //////////////////////////
// chrome.extension.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     switch (request.action) {
//       case 'apply-indent':
//         gConfigData.bpxIndent = true;
//         refreshHighlighter();
//         break;
//       case 'disable-indent':
//         gConfigData.bpxIndent = false;
//         refreshHighlighter();
//         break;
//       case 'apply-color':
//         gConfigData.bpxColor = true;
//         refreshHighlighter();
//         break;
//       case 'disable-color':
//         gConfigData.bpxColor = false;
//         refreshHighlighter();
//         break;
//       case 'apply-autocomplete':
//         gConfigData.bpxAutoComplete = true;
//         refreshHighlighter();
//         break;
//       case 'disable-autocomplete':
//         gConfigData.bpxAutoComplete = false;
//         refreshHighlighter();
//         break;
//       case 'apply-moduleac':
//         gConfigData.bpxModuleAC = true;
//         refreshHighlighter();
//         break;
//       case 'disable-moduleac':
//         gConfigData.bpxModuleAC = false;
//         refreshHighlighter();
//         break;
//       case 'apply-propac':
//         gConfigData.bpxPropAC = true;
//         refreshHighlighter();
//         break;
//       case 'disable-propac':
//         gConfigData.bpxPropAC = false;
//         refreshHighlighter();
//         break;
//       case 'apply-grid':
//         gConfigData.bpxGrid = true;
//         applyGrid(true);
//         break;
//       case 'disable-grid':
//         gConfigData.bpxGrid = false;
//         applyGrid(false);
//         break;
//       case 'apply-tooltip':
//         gConfigData.bpxTooltip = true;
//         applyTooltip(true);
//         break;
//       case 'disable-tooltip':
//         gConfigData.bpxTooltip = false;
//         applyTooltip(false);
//         break;
//       case 'apply-snippet':
//         gConfigData.bpxSnippet = true;
//         applySnippet(request.data);
//         break;
//       case 'disable-snippet':
//         gConfigData.bpxSnippet = false;
//         applySnippet(request.data);
//         break;
//       case 'apply-link':
//         gConfigData.bpxLink = false;
//         applyDisableLink(false);
//         break;
//       case 'disable-link':
//         gConfigData.bpxLink = true;
//         applyDisableLink(true);
//         break;
//       case 'show-map':
//         gConfigData.bpxMap = false;
//         applyHideModelmap(false);
//         break;
//       case 'hide-map':
//         gConfigData.bpxMap = true;
//         applyHideModelmap(true);
//         break;
//       case 'apply-toaster':
//         gConfigData.bpxToaster = true;
//         applyToaster(true);
//         break;
//       case 'disable-toaster':
//         gConfigData.bpxToaster = false;
//         applyToaster(false);
//         break;
//       case 'apply-palette':
//         gConfigData.bpxPalette = true;
//         applyPalette(request.data);
//         break;
//       case 'disable-palette':
//         gConfigData.bpxPalette = false;
//         applyPalette(request.data);
//         break;
//       case 'apply-scrollbar':
//         gConfigData.bpxScrollbar = true;
//         applyScrollbar(request.data);
//         break;
//
//       case 'disable-scrollbar':
//         gConfigData.bpxScrollbar = false;
//         applyScrollbar(request.data);
//         break;
//       case 'apply-cellcalculation':
//         gConfigData.bpxCellcalculation = true;
//         // applyCellcalculation(true);
//         break;
//       case 'disable-cellcalculation':
//         gConfigData.bpxCellcalculation = false;
//         // applyCellcalculation(false);
//         break;
//       case 'style_change':
//         applyPalette(request.data);
//         break;
//     }
//   }
// );

function refreshHighlighter() {
  if ($(oldTextarea).length == 0) return;
  if (initHighLighter() && (gConfigData.bpxColor || gConfigData.bpxIndent || gConfigData.bpxAutoComplete || gConfigData.bpxModuleAC || gConfigData.bpxPropAC)) updateFormatting($(oldTextarea).val());
  toggleHighlighter(gConfigData.bpxColor || gConfigData.bpxIndent || gConfigData.bpxAutoComplete || gConfigData.bpxModuleAC || gConfigData.bpxPropAC);

  applyColor(gConfigData.bpxColor);
  applyIndent(gConfigData.bpxIndent);
  applyAutocomplete(gConfigData.bpxAutoComplete);
}

function readSettings() {
  chrome.storage.local.get(gDefaultSetting, function (items) {
    gConfigData = items;
    checkNotification();
  });
}

readSettings();
