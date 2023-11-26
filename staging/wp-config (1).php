<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'xs922478_wp1' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'xs922478_wp1' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 's24hrj62xw' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'localhost' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/|&vWW8&zij%cO lF v8]]VSsUvgMyvo g{qSWT!I .c!{b:rj_GMpu!$<@NXWu)' );
define( 'SECURE_AUTH_KEY',  '[KN[)1k49ulwx^M7C? q:lt@O>tj|Vxou]wu}eVn+@1S|(vhWnCq{HYHmH85UNyX' );
define( 'LOGGED_IN_KEY',    'jk$kYRUP|DpJ8;RtglMf`m%Js(ik+h7eSD2{Z,?bnS^k[[{]ur},/o~!0gZ=//Ih' );
define( 'NONCE_KEY',        'AOI1<r;C7;CHdHo-X JounD5DweR9<&5@tdhD,<<p1sgY(X7Hh;]6@+u3!<4?|<]' );
define( 'AUTH_SALT',        '<>O4i^NdGzF@~?1v |qJ6ApZDG56<QArhX,e/Qg M_%)dBgh9*B7J*K@F$g6o9vt' );
define( 'SECURE_AUTH_SALT', '##hu/27J)]CibF0z{+!WO&=6zW$.IfO(A^4dOMAOIuFMKh!l%z+.B,#fOu4wlAVL' );
define( 'LOGGED_IN_SALT',   'Q~J~ebw[G15Qx6MpL`Fc136X6|@76E7o<xv0jVjI-5^FsJl0WXm.?1xa>)bAi]ci' );
define( 'NONCE_SALT',       't{MG,:ymePoTs9{N3e3[ez&f<e]au:c9YOS*K`}p<Jj$i#D&CQ5n{#w >rjTW-5H' );
define( 'WP_CACHE_KEY_SALT','B$hy,ig}rE`/%Xu[8`Xz_u~[sCmxVcKZv4>#JzFCT&`K9l6|&[r$}smny&vQO2Ck' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wpstg0_'; // Changed by WP STAGING

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* カスタム値は、この行と「編集が必要なのはここまでです」の行の間に追加してください。 */



/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
define('WP_LANG_DIR', __DIR__ . '/wp-content/languages');
define('WP_HOME', 'https://shanai-se.blog/staging-test');
define('WP_SITEURL', 'https://shanai-se.blog/staging-test');
define('WP_CACHE', false);
define('DISABLE_WP_CRON', false);
if ( ! defined( 'WP_ENVIRONMENT_TYPE' ) ) {
    define('WP_ENVIRONMENT_TYPE', 'staging');
}
if ( ! defined( 'WPSTAGING_DEV_SITE' ) ) {
    define('WPSTAGING_DEV_SITE', true);
}
define('UPLOADS', 'wp-content/uploads');
define('WP_PLUGIN_DIR', __DIR__ . "/wp-content/plugins");
define('WP_PLUGIN_URL', 'https://shanai-se.blog/staging-test/wp-content/plugins');
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
