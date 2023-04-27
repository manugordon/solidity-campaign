const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // This line delete everything inside, the folder too.

const campaignPath = path.resolve(__dirname, 'contracts','Campaign.sol');
const source = fs.readFileSync(campaignPath,'utf-8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath); //This line checks if the folder exists. If it doesn't, create it.

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':','') + '.json'),
        output[contract]
    );
}