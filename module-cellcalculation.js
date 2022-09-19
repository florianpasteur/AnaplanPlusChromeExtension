const getCellcalculationFlag = () => {
  return gConfigData.bpxCellcalculation;
}

const checkValidateExpressEqual = (str) => {
  if (str[0] !== '=') {
    return false;
  }
  if (str.length < 2) return false;
  return true;
}

const getAppendPTagID = (id) => {
  return 'p_' + id;
}

const getAppendInputTagID = (id) => {
  return 'div_' + id;
}
const getOrgInputID = (id) => {
  return id.substr(4);
}

const syncValue = (bindInputID) => {
  const bindEle = document.getElementById(bindInputID);
  const pBindTag = document.getElementById(getAppendPTagID(bindInputID));
  const selectEle = document.getElementById(getOrgInputID(bindInputID));


  let resValue = '';
  if (pBindTag) {
    resValue = pBindTag.innerHTML;
  } else {
    resValue = bindEle.value;
  }


  selectEle.value = resValue;

}

const resultFunc = (evt) => {
  const bindInputID = evt.target.id;
  const bindEle = document.getElementById(bindInputID);
  const pBindTag = document.getElementById(getAppendPTagID(bindInputID));
  const selectEle = document.getElementById(getOrgInputID(bindInputID));

  if (pBindTag) {
    pBindTag.remove();
  }
  if (bindEle) {
    selectEle.setAttribute("style", bindEle.getAttribute("style"));
    bindEle.remove();
  }
}

const appendFakeInput = (selEleId, bindIdSelector) => {
  const selectEle = document.getElementById(selEleId);
  if (!document.getElementById(bindIdSelector)) {
    const inputTag = selectEle.cloneNode(true);
    inputTag.setAttribute("id", bindIdSelector);
    selectEle.parentNode.insertBefore(inputTag, selectEle);
  }
  const bindEle = document.getElementById(bindIdSelector);
  bindEle.value = selectEle.value;
  bindEle.focus();
  bindEle.addEventListener("focusout", resultFunc);
  selectEle.setAttribute("style", "display:none");
}

const appendInformEle = (bindIdSelector) => {
  const bindEle = document.getElementById(bindIdSelector);
  if (!document.getElementById(getAppendPTagID(bindIdSelector))) {
    const pTag = document.createElement("p");
    pTag.setAttribute("id", getAppendPTagID(bindIdSelector));
    pTag.setAttribute("style",
      "display: inline-block; border: #4c4c4c 1px solid; overflow:hidden; text-overflow: ellipsis; width: 90%; text-align: right; position: absolute; height: 15px; top: 3px; padding-left: 4px; padding-right: 4px; padding-top:2px; font-size: 11px; font-style: italic; background: #e6e6e6;"
    );
    const parent = bindEle.parentNode;
    parent.parentNode.insertBefore(pTag, parent);
  }
  bindEle.addEventListener("focusout", resultFunc);
}

const showHint = (equalStr, ele) => {
  express = equalStr.trim().substr(1);
  try {
    if (express[express.length - 1] === '%') {
      express = express.substr(0, express.length - 1) + '/100';
      returnedValue = eval(express);
    } else {
      returnedValue = eval(express);
    }
    if (gConfigData.decimal_txt === 'COMMA') {
      if (gConfigData.thousands_txt === 'SPACE') {
        formattedValue = returnedValue.toLocaleString("fr-FR");
      } else {
        formattedValue = returnedValue.replace(".", ",");
      }
    } else if (gConfigData.decimal_txt === 'FULL_STOP') {
      formattedValue = returnedValue.toLocaleString("en-US");
    }
    console.log(formattedValue);
    ele.innerHTML = formattedValue;
  } catch (ex) {
    ele.innerHTML = '';
  }
}

const caculationEqual = (bindInputSelector) => {
  if (!bindInputSelector.startsWith(getAppendInputTagID('dijit_form_TextBox_'))) {
    return;
  }
  const selEle = document.getElementById(bindInputSelector);
  console.log(selEle);
  let express = selEle.value.trim();

  if (checkValidateExpressEqual(express)) {
    const bindHintSelector = getAppendPTagID(bindInputSelector);
    appendInformEle(bindInputSelector);
    const bindEle = document.getElementById(bindHintSelector);
    showHint(express, bindEle);
  }
  syncValue(bindInputSelector);
}
const getAvailiableExpress = (express) => {
  try {
    eval(express);
    if (express[0] === '=') return false;
    if (express.length === 0) return false;
    return true;
  } catch (ex) {
    return false;
  }
}
const checkIncludeRect = (rect, midx, midy) => {
  return (rect.x < midx && midx < rect.x + rect.width) &&
    (rect.y < midy && midy < rect.y + rect.height);
}

const checkTargetElementExist = (seleEle) => {
  const tdlists = seleEle.parentElement.parentElement.parentElement.getElementsByTagName('td');
  const selRect = seleEle.getBoundingClientRect();
  const midx = selRect.x + selRect.width / 2;
  const midy = selRect.y + selRect.height / 2;

  for (let td of tdlists) {
    const rect = td.getClientRects()[0];
    if (checkIncludeRect(rect, midx, midy)) {
      return true;
    }
  }
  return false;
}

const checkValidInputTag = (selEleId) => {
  if (!selEleId.startsWith('dijit_form_TextBox_')) {
    return false;
  }

  try {
    const selEle = document.getElementById(selEleId);
    const grandEle = selEle.parentElement.parentElement.className;
    if (!grandEle.includes('grideditor')) {
      return false;
    }
    if (!checkTargetElementExist(selEle)) {
      return false;
    }
  } catch (error) {
    return false;
  }

  return true;
}

document.activeElement.addEventListener("focusin", (evt) => {
  if (!getCellcalculationFlag()) return false;
  const selEleId = evt.target.id;
  if (!checkValidInputTag(selEleId)) {
    return;
  }
  const bindIDSelector = getAppendInputTagID(selEleId);
  appendFakeInput(selEleId, bindIDSelector)
  express = document.getElementById(bindIDSelector).value;
  const bindEle = document.getElementById(bindIDSelector);
  bindEle.value = express;
  caculationEqual(bindIDSelector);
});
document.activeElement.addEventListener("keyup", (evt) => {
  if (!getCellcalculationFlag()) return false;
  const selEleId = evt.target.id;
  caculationEqual(selEleId);
});