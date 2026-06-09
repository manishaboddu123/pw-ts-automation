import * as fs from 'fs';
import * as path from 'path';

let text ="sample text for write to file";
let filepath = "../test_data/output.txt";
fs.writeFileSync(path.resolve(__dirname, filepath), text, 'utf-8');