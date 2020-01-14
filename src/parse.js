// loop over all rows
const nodeXlsx = require("node-xlsx");
const workSheetsFromFile = nodeXlsx.parse(`${__dirname}/test.xlsx`);
workSheetsFromFile[0].data.forEach((row, rowIndex) => {
  console.log(`${rowIndex} row => `);
  row.forEach((item, itemIndex) => console.log(`${itemIndex} ${item}`));
});

// // create a csv file from excel
// const xlsx = require("xlsx");
// const workBook = xlsx.readFile(`${__dirname}/test.xlsx`);
// xlsx.writeFile(workBook, "converted.csv", { bookType: "csv" });
