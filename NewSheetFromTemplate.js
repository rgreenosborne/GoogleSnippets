function onOpen() {
  var ui = SpreadsheetApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('Create new week', 'myNewSheet')
  //    .addSeparator()
  //    .addSubMenu(ui.createMenu('Sub-menu')
  //        .addItem('Second item', 'menuItem2'))
      .addToUi();
}
//test menu item
function menuItem1() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
     .alert('You clicked the first menu item!');
}
function myNewSheet() {
  //set variables
 var ss = SpreadsheetApp.getActiveSpreadsheet();
 var templateSheet = ss.getSheetByName('Week 1');
 var baseName = "Week ";
 var numberOfSheets = ss.getNumSheets();
 var newSheetName = baseName.concat(numberOfSheets +1);
 var LastWeekDate =  ss.getSheetByName(baseName.concat(numberOfSheets)).getRange('B2').getValue();
  //automagically add 7 days to most recent sheet week
  var date1 = new Date(LastWeekDate);
 date1.setDate(date1.getDate() + 7); //This adds days to date for some reason.
  
 // log check
// Logger.log("template: " + templateSheet.getSheetName() + ", Last week start: " + LastWeekDate + ", This week start: " + date1 + " , new sheet name: "+ newSheetName) ;
 ss.insertSheet(newSheetName, {template: templateSheet});  
  toActivate = ss.getSheetByName(newSheetName);
  toActivate.activate()
  SpreadsheetApp.getActiveSheet().getRange('B2').setValue(date1); 
  
  
}
// copypasta that doesn't do anything:
function doTest() {
  SpreadsheetApp.getActiveSheet().getRange('B2').setValue('Hello');
var first = ss.getSheetByName("first");
 first.activate();


var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
 Logger.log(values[0][0]);
  
}
