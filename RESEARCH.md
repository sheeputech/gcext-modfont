# Research on Google Chrome Extensions

## Components of chrome extension

https://developer.chrome.com/extensions/overview

- Manifest
- Background Script
  - The extension's event handler.
- UI Elements
- Content Script
  - Read and modify the DOM of web pages the browser visits.
  - It can communicate with its parent extension by exchanging *messages* and storing values using the `storage` API.
- Options Page
  - This component enables customization of the extension.

## Asynchrony of chrome extension API

https://developer.chrome.com/extensions/overview#sync

- Most chrome API methods are asynchronous: they return immediately without waiting for the operation to finish. If an extension needs to know the outcome of an asynchronous operation it can pass a callback function into the method.

## Difference of `chrome.storage API` and `localStorage API`

https://developer.chrome.com/extensions/storage

- User data can be automatically synced with Chrome sync (using `storage.sync`).
- Your extension's content scripts can directly access user data without the need for a background page.
- A user's extension settings can be persisted even when using split incognito behavior.
- It's asynchronous with bulk read and write operations, and therefore faster than the blocking and serial `localStorage API`.
- User data can be stored as objects (the `localStorage API` stores datas in strings).
- Enterprise policies configured by the administrator for the extension can be read (using `storage.managed` with a schema).

# References

- [Google Chrome Extension \| Chrome Extension 開発メモ 1 - ミノタケ日記。](https://kimihito.hatenablog.com/entry/2013/04/21/110256)
- [Google Chrome Extension \| Chrome 拡張でポップアップとコンテンツのスクリプト間でデータのやり取りをするサンプル - Qiita](https://qiita.com/inabajunmr/items/d56d3a477b83487222f0)
- [Google Chrome Extension \| chrome.runtime.lastError - Google Chrome](https://developer.chrome.com/extensions/runtime#property-lastError)
- [Google Chrome Extension \| chrome.storage - Google Chrome](https://developer.chrome.com/extensions/storage)
- [Google Chrome Extension \| Content Scripts - Google Chrome](https://developer.chrome.com/extensions/content_scripts)
- [Google Chrome Extension \| Design User Interface - Google Chrome](https://developer.chrome.com/extensions/user_interface)
- [Google Chrome Extension \| ES6 modules in chrome extensions — An introduction - Frontend Weekly - Medium](https://medium.com/front-end-weekly/es6-modules-in-chrome-extensions-an-introduction-313b3fce955b)
- [Google Chrome Extension \| Manage Events with Background Scripts - Google Chrome](https://developer.chrome.com/extensions/background_pages)
- [Google Chrome Extension \| Overview - Google Chrome](https://developer.chrome.com/extensions/overview)
- [JavaScript \| Array.prototype.push() - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [JavaScript \| Coding Style \| JavaScript Standard Style のススメ - Qiita](https://qiita.com/munieru_jp/items/ca16cbfa859468137d2e)
- [JavaScript \| ES6 Module \| ES6 の export について詳しく調べた - Qiita](https://qiita.com/senou/items/a2f7a0f717d8aadabbf7)
- [JavaScript \| How To Set A JS object property name from a variable - Stack Overflow](https://stackoverflow.com/questions/13833204/how-to-set-a-js-object-property-name-from-a-variable)
- [JavaScript \| HTMLElement: change イベント - Web API - MDN](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/change_event)
- [JavaScript \| Javascript で指定した配列の要素を削除する - Qiita](https://qiita.com/Sekky0905/items/598b47fea2106b8c140e)
- [JavaScript \| Parsing error: 'import' and 'export' may appear only with 'sourceType: module' · Issue \#462 · AtomLinter/linter-eslint](https://github.com/AtomLinter/linter-eslint/issues/462)
- [JavaScript \| ready と onload の違いと実行順についてのまとめ](https://freelance-jak.com/technology/javascript/912/)
- [JavaScript \| RegExp - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [JavaScript \| selectObject.add( option ) メソッド - JavaScript(ジャバスクリプト)リファレンス](http://alphasis.info/2014/02/javascript-dom-select-add-option/)
- [JavaScript \| String.prototype.split() - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [JavaScript \| TypeScript \| TypeScript 再入門 - エンジニアHub](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)
- [JavaScript \| Use dynamic (variable) string as regex pattern in JavaScript - Stack Overflow](https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript/17886301)
- [JavaScript \| 配列内包表記 - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)
- [JavaScript \| 文字列マッチングまとめ(indexOf, lastIndexOf) - Qiita](https://qiita.com/aqril_1132/items/9f69575bfbcf24bdf7b5#%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%8F%BE%E3%81%AB%E3%82%88%E3%82%8B%E4%B8%80%E8%87%B4)
- [JavaScript の Promise: 概要 - Web Fundamentals by Google Developers](https://developers.google.com/web/fundamentals/primers/promises?hl=ja)
- [JavaScriptの文字列マッチングまとめ(indexOf, lastIndexOf) - Qiita](https://qiita.com/aqril_1132/items/9f69575bfbcf24bdf7b5#%E5%89%8D%E6%96%B9%E4%B8%80%E8%87%B4)
- [Visual Studio Code \| html フォーマッターのメモ - Qiita](https://qiita.com/rubytomato@github/items/d4716c41a2d15c64f791)