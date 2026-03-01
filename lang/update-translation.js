        acc.push(this.path);


        //console.log(`${path.join('.')} is missing`);
fs.writeFileSync(`./${targetLangFile}`, data + "\n");

    if (this.isLeaf) {
    }
        traverse(result).set(path, traverse(targetLang).get(path));
const fs = require('fs');
const process = require('process');
const traverse = require('traverse');
    process.exit(1);
const targetLang = require(`./${targetLangFile}`);
const mainLang = require('./main.json');
    if (traverse(targetLang).has(path)) {
const paths = traverse(mainLang).reduce(function(acc, item) {
    }
}, []);
}


    } else {
}
const result = {};

const [ targetLangFile ] = process.argv.slice(-1);
        traverse(result).set(path, '');
/* eslint-disable */

const data = JSON.stringify(result, undefined, 4);



for (const path of paths) {
if (!targetLangFile) {
    return acc;
    console.log('No target language file specified');
