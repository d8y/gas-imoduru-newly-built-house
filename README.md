# gas-imoduru-newLy-built-house

業界最大手の賃貸物件掲載サイトから送られてくるメールの物件URLをslackに通知するGoogle App Script です

以下のサイトの通知メールに対応しています

- [シャーメゾンお部屋探しサイト](https://www.shamaison.com/)
- [ダイワハウスの賃貸住宅「D-room」](https://www.daiwaliving.co.jp/chintai/)

## Use

- [google/clasp](https://github.com/google/clasp) を利用しています


1. ```git clone``` or [Create a repo from this template on GitHub](https://github.com/d8y/gas-imodutsu-newly-built-house/generate) 
2. .clasp.jsonの設定
```.clasp.json
{
    "scriptId": "<YOUR_SCRIPT_ID>",
    "rootDir": "./dist"
}
```
3. ```clasp login```
4. ```yarn```
5. ```yanrn deploy```
