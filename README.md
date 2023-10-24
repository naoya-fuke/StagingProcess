# Stagingサイトの作成手順

## エックスサーバーの管理画面にアクセス
[エックスサーバーの管理画面](https://secure.xserver.ne.jp/xapanel/login/xserver/server/)
にアクセスしてログインします。

## サブドメインの作成
ステージングサイト用のサブドメイン（例: staging.yourdomain.com）を作成します。

- ページの右上に「ドメイン」の項目がありますので、その中から「サブドメイン設定」をクリックします。  

- サブドメインを設定したいドメインの右側にある「選択する」リンクをクリックします。  

- 「サブドメイン設定追加」のタブをクリックします。  

  - サブドメイン名：希望するサブドメインを入力します。
  - ドキュメントルート：上記で入力したサブドメイン名を使用し、仮想ルートディレクトリを選択します（どちらを選択してもOK）。 
  - コメント：サブドメインの内容や目的などの覚書を入力します（未入力でもOK）。  
  - 無料独自SSL：セキュリティ強化のため、このオプションを有効にしておきます。  
  - 入力内容を確認し、問題がなければ「確認画面へ進む」ボタンをクリックします。  
  - 確認画面が表示されるので、再度内容を確認して「追加する」ボタンをクリックします。  

- 「サブドメイン設定の追加が完了しました」というメッセージが表示されれば、設定は完了です。  

- 設定が反映されるまで最大1時間ほど待ちます。「反映待ち」というステータスが消えたら、サブドメインの設定が完了しています。  

## データベースのコピー
本番環境のWordPressのデータベースをコピーして、新しいデータベースを作成します。

- サーバーパネル内の「データベース」の項目から「MySQLバックアップ」を選択します。

- 「現在のMySQLをダウンロード」をクリックします。次に、バックアップを行いたいデータベースの圧縮形式（圧縮しない/gz形式）を選択し、「ダウンロード実行」ボタンをクリックします。
  <img width="768" alt="image" src="https://github.com/naoya-fuke/StagingProcess/assets/79355329/e7d1226e-afcd-44bc-a3eb-fc27b27b6c61">

- バックアップが自動的に開始され、ダウンロードが始まります。ダウンロードが完了したら、保存したファイルを確認してください。

- サーバーパネル内の「データベース」の項目から「MySQL設定」を選択し、「MySQL追加」タブをクリックすることで新しいデータベースを作成します。  
  <img width="756" alt="image" src="https://github.com/naoya-fuke/StagingProcess/assets/79355329/27e02c79-0d05-4e70-a626-218a5665ec32">

- phpMyAdminやエックスサーバーの管理画面を使用して、ダウンロードしたバックアップファイルを新しく作成したデータベースにインポートします。

## ファイルのコピー
本番環境のWordPressのファイルを、新しく作成したサブドメインのディレクトリにコピーします。

- FTPクライアント（例: FileZilla, Cyberduckなど）をインストールして起動します。

- FTPクライアントを使用して、エックスサーバーのFTP情報（ホスト名、ユーザー名、パスワード）を入力して接続します。この情報はエックスサーバーの管理画面や契約時に受け取ったメールに記載されています。

- FTPクライアントを使用して、本番環境のWordPressのファイルが保存されているディレクトリに移動します。

- 全てのファイルとディレクトリを選択し、ローカルのPCにダウンロードします。

- FTPクライアントで新しく作成したサブドメインのディレクトリに移動します。

- 先ほどダウンロードしたWordPressのファイルを選択し、サブドメインのディレクトリにアップロードします。

- 必要に応じて、ファイルやディレクトリのパーミッションを確認・変更します。特に.htaccessやwp-config.phpなどの重要なファイルのパーミッションを確認してください。

- ファイルのコピーが完了したら、新しいサブドメインのURLにアクセスして、サイトが正しく表示されるか確認します。
