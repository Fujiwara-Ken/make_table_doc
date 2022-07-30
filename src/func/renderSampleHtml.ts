//////////////////////////////////////////////
// $ npx ts-node src/func/renderSampleHtml.ts
//////////////////////////////////////////////

import ejs from 'ejs';
import fs from 'fs';

const render = async () => {
  const data = { title: 'ページタイトル', content: 'テスト', foot: 'フッター' };
  await ejs.renderFile('../template/table_def.ejs', data, function (err, html) {
    const filePath = '../../out/table_list.html';
    console.log(html);

    fs.writeFile(filePath, html, 'utf8', (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('保存完了');
      }
    });
  });
};

render();
