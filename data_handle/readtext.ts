import * as fs from 'fs';
import * as path from 'path';

let filepath = "../test_data/CSSSelectors.txt";
let file = fs.readFileSync(path.resolve(__dirname, filepath),'utf-8');
let lines = file.split('\n');
for (let line of lines){
    console.log(line);
}