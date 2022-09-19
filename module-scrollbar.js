//////// SCROLLBAR FUNCTIONS ///////////////////////////////
function applyScrollbar(configData) {
  $('#scrollbar-style').remove();
  var cssStr = ""  
    //Scrollbars
    + '.tableOfContentsWrapper::-webkit-scrollbar-thumb {background:' + configData.nav_back_color2 +';} .tableOfContentsWrapper::-webkit-scrollbar {width: 4px; height: 4px}'
    + '.modelContentsTree::-webkit-scrollbar-thumb {background: #C0C0C0;} .modelContentsTree::-webkit-scrollbar {width: 4px; height: 4px}'
    + '.gridhostScrollBars::-webkit-scrollbar-thumb {background: #C0C0C0; -webkit-border-radius: 0px} .gridhostScrollBars::-webkit-scrollbar {width: 12px; height: 2px}'
  ;


  $('head').append("<style id='scrollbar-style'>" + cssStr + "</style>");
  document.getElementById("scrollbar-style").disabled = !configData.bpxScrollbar;
}


