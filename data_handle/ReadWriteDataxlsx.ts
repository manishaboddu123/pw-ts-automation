import * as xlsx from 'xlsx';
import * as path from 'path';

let filepath = "../test_data/employee_data.xlsx";
let workbook = xlsx.readFile(path.resolve(__dirname, filepath));
let sheetname = workbook.SheetNames[0];

let sheet = workbook.Sheets[sheetname];
let data = xlsx.utils.sheet_to_json(sheet);
console.log(data)

//write data
let newdata = [
    {firstname:"John", lastname:"smith"}
]
let new_sheet = xlsx.utils.json_to_sheet(newdata);
let newworkbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(newworkbook, new_sheet,"empdata")
let newfilepath = "../test_data/NewEmpData.xlsx";
xlsx.writeFile(newworkbook, path.resolve(__dirname, newfilepath));
