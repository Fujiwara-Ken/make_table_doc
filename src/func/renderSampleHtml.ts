//////////////////////////////////////////////
// $ npx ts-node src/func/renderSampleHtml.ts
//////////////////////////////////////////////

import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

const templatePath = './src/template/table_def.ejs';
const dataPath = './src/data/sample-table-list.json';
const outputPath = './out/';

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log(data);

const render = async () => {
  await ejs.renderFile(templatePath, { data }, (error, output) => {
    if (error) {
      console.log(error);
    } else {
      fs.writeFileSync(path.join(outputPath, `tabe_def.html`), output);
    }
  });
};

render();
