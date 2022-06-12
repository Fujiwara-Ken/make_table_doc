import ejs from 'ejs';
import fs from 'fs';

//とりあえず出力
const data: ejs.Data = { title: 'ページタイトル', testText: 'テスト' };

const render = async () => {
  await ejs.renderFile('./template.ejs', data, function (err, str) {
    // 出力ファイル名
    const file = './dist/test.html';

    // テキストファイルに書き込む
    fs.writeFile(file, str, 'utf8', (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log('保存完了');
      }
    });
  });
};

render();
