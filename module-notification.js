var cur_ntf_version = "0.2.1.0";
var ntfText = '<p style="font-size:15px; margin:0px; color: white"><b>A+ for Anaplan update (v0.2.1)</b></p>'
    + '<p style="font-size:13px; margin-top:6px; margin-bottom:6px; font-weight:bold; color: white">🎉 Happy new year 🎉</p>'
    + '<p style="font-size:13px; margin-top:6px; margin-bottom:0px; line-height: normal; color: white">We are launching... cell calculation <span style="color:yellow; font-size:16px">÷×√π</span><br> '
    + 'Activate it and type "=" in any number input<br>cell followed by an operation <span style="font-style:italic;">(=123*45%)</span>.<br> '
    + 'To see it in action, click <u><a href="https://www.bipixconsulting.com/a-for-anaplan-cellcalc?lang=en" style="color:white" target="_blank">here (link).</a></u></p> ';

function closeNotification() {
    var ntf_version = {
        ntf_version: cur_ntf_version
    }
    chrome.storage.local.set(ntf_version);
}

function checkNotification() {
    if (gConfigData.ntf_version != cur_ntf_version) {
        showNotification();
    }
}

function showNotification() {

    var ntfWrapper = document.createElement("DIV");
    var html = '<div id="notify-container" style="min-width:240px; position:fixed; right: 12px; top: 60px; border-radius: 6px; background:#102161; padding: 20px 30px 20px 30px; color: white; box-shadow: 2px 2px 5px #888888;"><div class="ana-ntf-text" style="font-size:13px">' + ntfText + '</div><div id="ana-ntf-btn-close" style="display:inline-block; font-size: 14px; width: 10px; height: 10px; position: absolute; right: 6px; top: 6px; color: white; cursor:pointer">X</div></div>';
    ntfWrapper.innerHTML = html;
    document.getElementsByTagName('body')[0].appendChild(ntfWrapper);
    document.getElementById('ana-ntf-btn-close').addEventListener('click', function (e) {
        document.getElementById('notify-container').parentElement.remove();
        closeNotification();
    });
}
