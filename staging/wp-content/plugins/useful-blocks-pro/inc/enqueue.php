<?php
namespace Ponhiro_Blocks_Pro;
if ( ! defined( 'ABSPATH' ) ) exit;

add_action( 'enqueue_block_editor_assets', function() {
	$asset = include( USFL_BLKS_PRO_PATH. 'dist/blocks/index.asset.php');
	wp_enqueue_script(
		'ponhiro-blocks-pro-script',
		USFL_BLKS_PRO_URL .'dist/blocks/index.js',
		$asset['dependencies'],
		$asset['version'],
		true
	);
}, 9 );
