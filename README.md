# todo-angular

## firebase hostingについて
- `npm run build`で、初期設定では`dist/[アプリ名]`で出力されるため、publicを`dist/[アプリ名]`にするか、angular.jsonの`outputPath`を変更する必要あり

## dev環境とprod環境について
- ビルド時に明示的にどちらの環境かを指定しなくても初期設定では`fileReplacements`で環境変数の読み込みを変更してくれる
