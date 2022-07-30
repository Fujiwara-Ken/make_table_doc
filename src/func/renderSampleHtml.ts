//////////////////////////////////////////////
// $ npx ts-node src/func/renderSampleHtml.ts
//////////////////////////////////////////////

import ejs from 'ejs';
import path from 'path';
import fs from 'fs';

const templatePath = './src/template/table_def.ejs';
const dataPath = './src/data/data-sample.json';
const outputPath = './out/';

const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

console.log(data);

const render = async () => {
  // const data = { title: 'ページタイトル', content: 'テスト', foot: 'フッター' };
  // await ejs.renderFile(templatePath, data, function (err, html) {
  //   console.log(html);

  //   fs.writeFile(outputPath, html, 'utf8', (err: any) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('保存完了');
  //     }
  //   });
  // });
  data.forEach((item: ejs.Data) => {
    ejs.renderFile(templatePath, item, (error, output) => {
      if (error) {
        console.log(error);
      } else {
        fs.writeFileSync(path.join(outputPath, `${item.filename}.html`), output);
      }
    });
  });
};

render();
