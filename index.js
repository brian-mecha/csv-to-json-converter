const path = require('path');
const csvToJson = require('convert-csv-to-json');

const convertCsvToJson = () => {
  let csvSourceFile = 'customer-data.xls';
  let jsonOutputFile = 'customer-data.json';

  console.log('Converting...');
  csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(csvSourceFile, jsonOutputFile);
}

convertCsvToJson();
