# Google Chrome Extension - Font Modifier

Modify font of `body` in web pages.

## Implementation

### Required Operations

- Get fonts installed in the local.
- Choose fonts to use on websites.
- Set the fonts to `body` of a CSS property.
- Save the fonts to local storage.
- From the next time, use the saved fonts.

## About Google Chrome Extensions

### Components

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

### Asynchronous API behavior

https://developer.chrome.com/extensions/overview#sync

- Most chrome API methods are asynchronous: they return immediately without waiting for the operation to finish. If an extension needs to know the outcome of an asynchronous operation it can pass a callback function into the method.

### Difference of `chrome.storage API` and `localStorage API`

https://developer.chrome.com/extensions/storage

- User data can be automatically synced with Chrome sync (using `storage.sync`).
- Your extension's content scripts can directly access user data without the need for a background page.
- A user's extension settings can be persisted even when using split incognito behavior.
- It's asynchronous with bulk read and write operations, and therefore faster than the blocking and serial `localStorage API`.
- User data can be stored as objects (the `localStorage API` stores datas in strings).
- Enterprise policies configured by the administrator for the extension can be read (using `storage.managed` with a schema).

## References

### Google Chrome Extension

- [Chrome Extension 開発メモ 1 - ミノタケ日記。](https://kimihito.hatenablog.com/entry/2013/04/21/110256)
- [chrome.storage - Google Chrome](https://developer.chrome.com/extensions/storage)
- [Chrome 拡張でポップアップとコンテンツのスクリプト間でデータのやり取りをするサンプル - Qiita](https://qiita.com/inabajunmr/items/d56d3a477b83487222f0)
- [Content Scripts - Google Chrome](https://developer.chrome.com/extensions/content_scripts)
- [Design User Interface - Google Chrome](https://developer.chrome.com/extensions/user_interface)
- [Manage Events with Background Scripts - Google Chrome](https://developer.chrome.com/extensions/background_pages)
- [Overview - Google Chrome](https://developer.chrome.com/extensions/overview)

#### JavaScript

- [ready と onload の違いと実行順についてのまとめ](https://freelance-jak.com/technology/javascript/912/)
- [Array.prototype.push() - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [ES6 の export について詳しく調べた - Qiita](https://qiita.com/senou/items/a2f7a0f717d8aadabbf7)
- [HTMLElement: change イベント - Web API - MDN](https://developer.mozilla.org/ja/docs/Web/API/HTMLElement/change_event)
- [JavaScript Standard Style のススメ - Qiita](https://qiita.com/munieru_jp/items/ca16cbfa859468137d2e)
- [Javascript で指定した配列の要素を削除する - Qiita](https://qiita.com/Sekky0905/items/598b47fea2106b8c140e)
- [Parsing error: 'import' and 'export' may appear only with 'sourceType: module' · Issue \#462 · AtomLinter/linter-eslint](https://github.com/AtomLinter/linter-eslint/issues/462)
- [selectObject.add( option ) メソッド - JavaScript(ジャバスクリプト)リファレンス](http://alphasis.info/2014/02/javascript-dom-select-add-option/)
- [String.prototype.split() - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [TypeScript 再入門 - エンジニアHub](https://employment.en-japan.com/engineerhub/entry/2019/04/16/103000)
- [配列内包表記 - JavaScript - MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Array_comprehensions)

#### Visual Studio Code

- [Visual Studio Code の html フォーマッターのメモ - Qiita](https://qiita.com/rubytomato@github/items/d4716c41a2d15c64f791)