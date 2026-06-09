import { randEmail, randFirstName, randFullName, randLastName } from '@ngneat/falso';


export function generateEmpdata(count=5){
    let emparr = [];
    for(let i=0;i<count;i++){
    emparr.push({fname:randFirstName(), lname:randLastName()})
    }
    return emparr;
}
// console.log(generateEmpdata());

import * as fs from 'fs';
import * as path from 'path';

let empDataArr = generateEmpdata();
let flPath = "../test_data/Emp_data.json";
fs.writeFileSync(path.resolve(__dirname, flPath), JSON.stringify(empDataArr, null, 2), 'utf-8');
