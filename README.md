# todo-angular

## github actionについて
- secrets.FIREBASE_PROJECT_IDにはfirebaseのプロジェクトIDを設定
- secrets.FIREBASE_TOKENには `firebase login:ci`で取得できるトークンを設定

## firebase hostingについて
- `npm run build`で、初期設定では`dist/[アプリ名]`で出力されるため、publicを`dist/[アプリ名]`にするか、angular.jsonの`outputPath`を変更する必要あり

## dev環境とprod環境について
- ビルド時に明示的にどちらの環境かを指定しなくても初期設定では`fileReplacements`で環境変数の読み込みを変更してくれる
