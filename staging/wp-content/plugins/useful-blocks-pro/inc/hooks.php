<?php
namespace Ponhiro_Blocks_Pro;
if ( ! defined( 'ABSPATH' ) ) exit;

add_filter( 'usfl_blks_setting_contents', function( $contents ) {
	return '<form method="POST" action="options.php">' . $contents . '</form>';
});

add_action('usfl_blks_after_settings_sections', function( $key ) {
	submit_button( '', 'primary large', 'submit_' . $key );
});

add_action( 'plugins_loaded', function() {
	if ( class_exists( '\Ponhiro_Blocks' ) ) return;
	add_action('usefl_blks_admin_menu', function() {
		echo '<p style="padding:1em">Useful Blocks本体をアップデートしてください。</p>';
	});
}, 99);
