# gas-imoduru-newLy-built-house

業界最大手の賃貸物件掲載サイトから送られてくるメールの物件URLをslackに通知するGoogle App Script です

以下のサイトの通知メールに対応しています

- [シャーメゾンお部屋探しサイト](https://www.shamaison.com/)
- [ダイワハウスの賃貸住宅「D-room」](https://www.daiwaliving.co.jp/chintai/)

## Use

シャーメゾンはサイトで```新着メールに登録する```で希望条件を登録する

D-roomは```新着メールを受け取る```で希望条件を登録する

- [google/clasp](https://github.com/google/clasp) を利用しています


1. ```git clone``` or [Create a repo from this template on GitHub](https://github.com/d8y/gas-imodutsu-newly-built-house/generate) 
2. ```yarn```

3.clasp.jsonの設定

```.clasp.json
{
    "scriptId": "<YOUR_SCRIPT_ID>",
    "rootDir": "./dist"
}
```

4```clasp login```
5. ```yarn deploy```
6. GASでtriggerの設定
   1. shamaisonは17時(16時にメールがきます)
   2. droomは18時(17時頃にメールがきます)