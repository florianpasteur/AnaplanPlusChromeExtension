var gDefaultSetting = {
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

var gAutocompleteList = [{
    name: 'ABS(',
    type: 'func',
    label: 'ABS(li/num)',
    desc: ''
  },
  {
    name: 'ADDMONTHS(',
    type: 'func',
    label: 'ADDMONTHS(li/period, num)',
    desc: ''
  },
  {
    name: 'ADDYEARS(',
    type: 'func',
    label: 'ADDYEARS(li/period, num)',
    desc: ''
  },
  {
    name: 'AGENTS(',
    type: 'func',
    label: 'AGENTS(w, t, y, z)',
    desc: ''
  },
  {
    name: 'AGENTSB(',
    type: 'func',
    label: 'AGENTSB(w, y, z)',
    desc: ''
  },
  {
    name: 'AND',
    type: 'func',
    label: 'AND',
    desc: ''
  },
  {
    name: 'ALL:',
    type: 'func',
    label: 'ALL',
    desc: ''
  },
  {
    name: 'ANY:',
    type: 'func',
    label: 'ANY',
    desc: ''
  },
  {
    name: 'AVERAGE:',
    type: 'func',
    label: 'AVERAGE',
    desc: ''
  },
  {
    name: 'ANSWERTIME(',
    type: 'func',
    label: 'ANSWERTIME(x, w, y, z)',
    desc: ''
  },
  {
    name: 'ARRIVALRATE(',
    type: 'func',
    label: 'ARRIVALRATE(x, w, t, z)',
    desc: ''
  },
  {
    name: 'AVGDURATION(',
    type: 'func',
    label: 'AVGDURATION(x, w, t, y)',
    desc: ''
  },
  {
    name: 'AVGWAIT(',
    type: 'func',
    label: 'AVGWAIT(x, y, z)',
    desc: ''
  },
  {
    name: 'BLANK',
    type: 'func',
    label: 'BLANK',
    desc: ''
  },
  {
    name: 'CODE(',
    type: 'func',
    label: 'CODE(x)',
    desc: ''
  },
  {
    name: 'CODE(ITEM(',
    type: 'func',
    label: 'CODE(ITEM(list))',
    desc: ''
  },
  {
    name: 'COLLECT(',
    type: 'func',
    label: 'COLLECT()',
    desc: ''
  },
  {
    name: 'COMPARE(',
    type: 'func',
    label: 'COMPARE(li/text, li/text, [mode], [locale])',
    desc: ''
  },
  {
    name: 'COUPDAYS(',
    type: 'func',
    label: 'COUPDAYS(settlement, maturity, frequency, [basis])',
    desc: ''
  },
  {
    name: 'COUPDAYSBS(',
    type: 'func',
    label: 'COUPDAYSBS(settlement, maturity, frequency, [basis])',
    desc: ''
  },
  {
    name: 'COUPDAYSNC(',
    type: 'func',
    label: 'COUPDAYSNC(settlement, maturity, frequency, [basis])',
    desc: ''
  },
  {
    name: 'COUPNCD(',
    type: 'func',
    label: 'COUPNCD(settlement, maturity, frequency)',
    desc: ''
  },
  {
    name: 'COUPNUM(',
    type: 'func',
    label: 'COUPNUM(settlement, maturity, frequency)',
    desc: ''
  },
  {
    name: 'COUPPCD(',
    type: 'func',
    label: 'COUPPCD(settlement, maturity, frequency)',
    desc: ''
  },
  {
    name: 'CUMIPMT(',
    type: 'func',
    label: 'CUMIPMT(i, p, v, s, e, [mode])',
    desc: ''
  },
  {
    name: 'CUMPRINC(',
    type: 'func',
    label: 'CUMPRINC(i, p, v, s, e, [mode])',
    desc: ''
  },
  {
    name: 'CUMULATE(',
    type: 'func',
    label: 'CUMULATE(li/num, reset?, list)',
    desc: ''
  },
  {
    name: 'CURRENTPERIODEND(',
    type: 'func',
    label: 'CURRENTPERIODEND()',
    desc: ''
  },
  {
    name: 'CURRENTPERIODSTART(',
    type: 'func',
    label: 'CURRENTPERIODSTART()',
    desc: ''
  },
  {
    name: 'CURRENTVERSION(',
    type: 'func',
    label: 'CURRENTVERSION(x)',
    desc: ''
  },
  {
    name: 'DATE(',
    type: 'func',
    label: 'DATE(year, month, day)',
    desc: ''
  },
  {
    name: 'DAY(',
    type: 'func',
    label: 'DAY(x)',
    desc: ''
  },
  {
    name: 'DAYS(',
    type: 'func',
    label: 'DAYS(x)',
    desc: ''
  },
  {
    name: 'DAYSINMONTH(',
    type: 'func',
    label: 'DAYSINMONTH(year, month)',
    desc: ''
  },
  {
    name: 'DAYSINYEAR(',
    type: 'func',
    label: 'DAYSINYEAR(year)',
    desc: ''
  },
  {
    name: 'DECUMULATE(',
    type: 'func',
    label: 'DECUMULATE(x)',
    desc: ''
  },
  {
    name: 'DIVIDE(',
    type: 'func',
    label: 'DIVIDE(dividend, divisor)',
    desc: ''
  },
  {
    name: 'DURATION(',
    type: 'func',
    label: 'DURATION(settlement, maturity, rate, yield, frequency, [basis])',
    desc: ''
  },
  {
    name: 'END(',
    type: 'func',
    label: 'END(x)',
    desc: ''
  },
  {
    name: 'ERLANGB(',
    type: 'func',
    label: 'ERLANGB(x, y, z)',
    desc: ''
  },
  {
    name: 'ERLANGC(',
    type: 'func',
    label: 'ERLANGC(x, y, z)',
    desc: ''
  },
  {
    name: 'EXP(',
    type: 'func',
    label: 'EXP(x)',
    desc: ''
  },
  {
    name: 'FINDITEM(',
    type: 'func',
    label: 'FINDITEM(list, li/text)',
    desc: ''
  },
  {
    name: 'FIND(',
    type: 'func',
    label: 'FIND(text to find, in, [start num])',
    desc: ''
  },
  {
    name: 'FIRSTNONBLANK(',
    type: 'func',
    label: 'FIRSTNONBLANK',
    desc: ''
  },
  {
    name: 'FIRSTNONZERO(',
    type: 'func',
    label: 'FIRSTNONZERO(li/num, li/num, li/num)',
    desc: ''
  },
  {
    name: 'FV(',
    type: 'func',
    label: 'FV(r, n, c, p, t)',
    desc: ''
  },
  {
    name: 'HALFYEARTODATE(',
    type: 'func',
    label: 'HALFYEARTODATE(x)',
    desc: ''
  },
  {
    name: 'HALFYEARVALUE(',
    type: 'func',
    label: 'HALFYEARVALUE(x)',
    desc: ''
  },
  {
    name: 'INPERIOD(',
    type: 'func',
    label: 'INPERIOD(x)',
    desc: ''
  },
  {
    name: 'IPMT(',
    type: 'func',
    label: 'IPMT(i, c, p, v, [f], [mode])',
    desc: ''
  },
  {
    name: 'IRR(',
    type: 'func',
    label: 'IRR(li with cf, [rate]/li with cf, dates, transaction list, [guess])',
    desc: ''
  },
  {
    name: 'ISACTUALVERSION(',
    type: 'func',
    label: 'ISACTUALVERSION()',
    desc: ''
  },
  {
    name: 'ISANCESTOR(',
    type: 'func',
    label: 'ISANCESTOR(a,b)',
    desc: ''
  },
  {
    name: 'ISBLANK(',
    type: 'func',
    label: 'ISBLANK(x)',
    desc: ''
  },
  {
    name: 'ISCURRENTVERSION(',
    type: 'func',
    label: 'ISCURRENTVERSION()',
    desc: ''
  },
  {
    name: 'ISFIRSTOCCURRENCE(',
    type: 'func',
    label: 'ISFIRSTOCCURRENCE(line item, list)',
    desc: ''
  },
  {
    name: 'ISNOTBLANK(',
    type: 'func',
    label: 'ISNOTBLANK(x)',
    desc: ''
  },
  {
    name: 'ITEM(',
    type: 'func',
    label: 'ITEM(x)',
    desc: ''
  },
  {
    name: 'LAG(',
    type: 'func',
    label: 'LAG(x, n, z,[mode])',
    desc: ''
  },
  {
    name: 'LASTNONBLANK',
    type: 'func',
    label: 'LASTNONBLANK:',
    desc: ''
  },
  {
    name: 'LEAD(',
    type: 'func',
    label: 'LEAD(x, n, z,[mode])',
    desc: ''
  },
  {
    name: 'LEFT(',
    type: 'func',
    label: 'LEFT(x, n)',
    desc: ''
  },
  {
    name: 'LEN(',
    type: 'func',
    label: 'LEN(x)',
    desc: ''
  },
  {
    name: 'LENGTH(',
    type: 'func',
    label: 'LENGTH(x)',
    desc: ''
  },
  {
    name: 'LN(',
    type: 'func',
    label: 'LN(x)',
    desc: ''
  },
  {
    name: 'LOOKUP:',
    type: 'func',
    label: 'LOOKUP',
    desc: ''
  },
  {
    name: 'LOG(',
    type: 'func',
    label: 'LOG(x,n)',
    desc: ''
  },
  {
    name: 'LOWER(',
    type: 'func',
    label: 'LOWER(x)',
    desc: ''
  },
  {
    name: 'MAILTO(',
    type: 'func',
    label: 'MAILTO(u, v, w, x, y, z)',
    desc: ''
  },
  {
    name: 'MAKELINK(',
    type: 'func',
    label: 'MAKELINK(display_text, URL)',
    desc: ''
  },
  {
    name: 'MAX(',
    type: 'func',
    label: 'MAX(x,y,[z])',
    desc: ''
  },
  {
    name: 'MAX:',
    type: 'func',
    label: 'MAX:',
    desc: ''
  },
  {
    name: 'MDURATION(',
    type: 'func',
    label: 'MDURATION(settlement, maturity, rate, yield, frequency[, basis])',
    desc: ''
  },
  {
    name: 'MID(',
    type: 'func',
    label: 'MID(x, y, n)',
    desc: ''
  },
  {
    name: 'MIN(',
    type: 'func',
    label: 'MIN(x,y,[z])',
    desc: ''
  },
  {
    name: 'MIN:',
    type: 'func',
    label: 'MIN:',
    desc: ''
  },
  {
    name: 'MOD(',
    type: 'func',
    label: 'MOD(dividend, divisor)',
    desc: ''
  },
  {
    name: 'MONTH(',
    type: 'func',
    label: 'MONTH(x)',
    desc: ''
  },
  {
    name: 'MONTHTODATE(',
    type: 'func',
    label: 'MONTHTODATE(x)',
    desc: ''
  },
  {
    name: 'MONTHVALUE(',
    type: 'func',
    label: 'MONTHVALUE(x)',
    desc: ''
  },
  {
    name: 'MOVINGSUM(',
    type: 'func',
    label: 'MOVINGSUM(x,[f, t, m])',
    desc: ''
  },
  {
    name: 'MROUND(',
    type: 'func',
    label: 'MROUND(x[, y][, r])',
    desc: ''
  },
  {
    name: 'NAME(',
    type: 'func',
    label: 'NAME(x)',
    desc: ''
  },
  {
    name: 'NEXT(',
    type: 'func',
    label: 'NEXT(x)',
    desc: ''
  },
  {
    name: 'NEXTVERSION(',
    type: 'func',
    label: 'NEXTVERSION(x)',
    desc: ''
  },
  {
    name: 'NOT',
    type: 'func',
    label: 'NOT',
    desc: ''
  },
  {
    name: 'NPER(',
    type: 'func',
    label: 'NPER(r, [c], p, [f], [t])',
    desc: ''
  },
  {
    name: 'NPV(',
    type: 'func',
    label: 'NPV(0.1, Cashflow)',
    desc: ''
  },
  {
    name: 'OFFSET(',
    type: 'func',
    label: 'OFFSET(x,n,z)',
    desc: ''
  },
  {
    name: 'OR',
    type: 'func',
    label: 'OR',
    desc: ''
  },
  {
    name: 'PARENT(',
    type: 'func',
    label: 'PARENT(x)',
    desc: ''
  },
  {
    name: 'PARENT(ITEM(',
    type: 'func',
    label: 'PARENT(ITEM(list))',
    desc: ''
  },
  {
    name: 'PARENT(PARENT(',
    type: 'func',
    label: 'PARENT(PARENT(list))',
    desc: ''
  },
  {
    name: 'PERIOD(',
    type: 'func',
    label: 'PERIOD(x)',
    desc: ''
  },
  {
    name: 'PMT(',
    type: 'func',
    label: 'PMT(r, n, p, [f], [t])',
    desc: ''
  },
  {
    name: 'POST(',
    type: 'func',
    label: 'POST(x, n)',
    desc: ''
  },
  {
    name: 'POWER(',
    type: 'func',
    label: 'POWER(number, power)',
    desc: ''
  },
  {
    name: 'PPMT(',
    type: 'func',
    label: 'PPMT(i, c, p, v, [f], [mode])',
    desc: ''
  },
  {
    name: 'PREVIOUS(',
    type: 'func',
    label: 'PREVIOUS(line item)',
    desc: ''
  },
  {
    name: 'PREVIOUSVERSION(',
    type: 'func',
    label: 'PREVIOUSVERSION(line item)',
    desc: ''
  },
  {
    name: 'PRICE(',
    type: 'func',
    label: 'PRICE(settlement, maturity, rate, yield, redemption, frequency[, basis])',
    desc: ''
  },
  {
    name: 'PROFILE(',
    type: 'func',
    label: 'PROFILE(x, y)',
    desc: ''
  },
  {
    name: 'PV(',
    type: 'func',
    label: 'PV(rate, nper, pmt, fv, type)',
    desc: ''
  },
  {
    name: 'QUARTERTODATE(',
    type: 'func',
    label: 'QUARTERTODATE(x)',
    desc: ''
  },
  {
    name: 'QUARTERVALUE(',
    type: 'func',
    label: 'QUARTERVALUE(x)',
    desc: ''
  },
  {
    name: 'RANK(',
    type: 'func',
    label: 'RANK(source to rank, order, ties, include?, group)',
    desc: ''
  },
  {
    name: 'RANKCUMULATE(',
    type: 'func',
    label: 'RANKCUMULATE(value, source to rank, order, include?, group)',
    desc: ''
  },
  {
    name: 'RATE(',
    type: 'func',
    label: 'RATE(n [,c], p, [,f] [,t] [,e])',
    desc: ''
  },
  {
    name: 'RIGHT(',
    type: 'func',
    label: 'RIGHT(x,n)',
    desc: ''
  },
  {
    name: 'ROUND(',
    type: 'func',
    label: 'ROUND(x[,y][,r])',
    desc: ''
  },
  {
    name: 'SELECT:',
    type: 'func',
    label: 'SELECT',
    desc: ''
  },
  {
    name: 'SIGN(',
    type: 'func',
    label: 'SIGN(number)',
    desc: ''
  },
  {
    name: 'SLA(',
    type: 'func',
    label: 'SLA(x, t, y, z)',
    desc: ''
  },
  {
    name: 'SPREAD(',
    type: 'func',
    label: 'SPREAD(x,n)',
    desc: ''
  },
  {
    name: 'SQRT(',
    type: 'func',
    label: 'SQRT(number)',
    desc: ''
  },
  {
    name: 'START(',
    type: 'func',
    label: 'START(x)',
    desc: ''
  },
  {
    name: 'SUM:',
    type: 'func',
    label: 'SUM',
    desc: ''
  },
  {
    name: 'SUBSTITUTE(',
    type: 'func',
    label: 'SUBSTITUTE(x, y, z)',
    desc: ''
  },
  {
    name: 'TEXT(',
    type: 'func',
    label: 'TEXT(li/num)',
    desc: ''
  },
  {
    name: 'TEXTLIST(',
    type: 'func',
    label: 'TEXTLIST(li/text, sep, list, ALL or UNIQUE)',
    desc: ''
  },
  {
    name: 'TEXTLIST:',
    type: 'func',
    label: 'TEXTLIST:',
    desc: ''
  },
  {
    name: 'TIMESUM(',
    type: 'func',
    label: 'TIMESUM(x, [from] , [too], [agg])',
    desc: ''
  },
  {
    name: 'TRIM(',
    type: 'func',
    label: 'TRIM(text)',
    desc: ''
  },
  {
    name: 'UPPER(',
    type: 'func',
    label: 'UPPER(x, [y])',
    desc: ''
  },
  {
    name: 'VALUE(',
    type: 'func',
    label: 'VALUE(x)',
    desc: ''
  },
  {
    name: 'WEEKDAY(',
    type: 'func',
    label: 'WEEKDAY(x,[y])',
    desc: ''
  },
  {
    name: 'WEEKTODATE(',
    type: 'func',
    label: 'WEEKTODATE(x)',
    desc: ''
  },
  {
    name: 'WEEKVALUE(',
    type: 'func',
    label: 'WEEKVALUE(x)',
    desc: ''
  },
  {
    name: 'YEAR(',
    type: 'func',
    label: 'YEAR(x)',
    desc: ''
  },
  {
    name: 'YEARFRAC(',
    type: 'func',
    label: 'YEARFRAC(start, end[, basis])',
    desc: ''
  },
  {
    name: 'YEARTODATE(',
    type: 'func',
    label: 'YEARTODATE(x)',
    desc: ''
  },
  {
    name: 'YEARVALUE(',
    type: 'func',
    label: 'YEARVALUE(x)',
    desc: ''
  },
  {
    name: 'YIELD(',
    type: 'func',
    label: 'YIELD(settlement, maturity, rate, price, redemption, frequency[, basis])',
    desc: ''
  },
];


var gCarretPosition = 0;
var oldTextarea = '.dijitTabContainerTopChildWrapper.dijitVisible .formulaEditorText';
var newTextarea = '.dijitTabContainerTopChildWrapper.dijitVisible .formated_text';

var bpx_bracket_wrong = "#f00";
var bpx_bracket_0 = "green";
var bpx_bracket_1 = "orange";
var bpx_bracket_2 = "magenta";
var bpx_bracket_3 = "brown";
var bpx_bracket_4 = "purple";
var bpx_ite_0 = "#0070c0";
var bpx_ite_1 = "#c53ebc";
var bpx_ite_2 = "#00B0F0";
var bpx_ite_3 = "#7030a0";
var bpx_ite_4 = "#00bd91";
var bpx_func = "blue";
var bpx_brafunc = "darkgreen";
var bpx_braContentStart = "darkgreen";

var bpx_logic = "blue";
var bpx_math = "blue";
var bpx_syntax = "blue";
