<?php
namespace Ponhiro_Blocks_Pro;
if ( ! defined( 'ABSPATH' ) ) exit;


add_action( 'after_setup_theme', function() {
	// アップデートチェック
	if ( ! class_exists( '\Puc_v4_Factory' ) ) {
		require_once( USFL_BLKS_PRO_PATH . 'inc/update/plugin-update-checker.php' );
	}

	try {
		\Puc_v4_Factory::buildUpdateChecker(
			'https://ponhiro.com/useful-blocks/dl/pro/update.json',
			USFL_BLKS_PRO_PATH . 'useful-blocks-pro.php',
			'useful-blocks-pro'
		);
	} catch (\Throwable $e) {
		echo "Update Error: " . $e->getMessage() . PHP_EOL;
	}
}, 21 ); // Useful Blocks 本体 よりあと
