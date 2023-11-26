<?php
/**
 * Plugin Name: Useful Blocks Pro-Addon
 * Plugin URI: https://ponhiro.com/useful-blocks/
 * Description: Useful Blocks の機能を拡張します。
 * Version: 1.1.1
 * Author: 了
 * Author URI: https://twitter.com/ddryo_loos
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: useful-blocks-pro
 * Domain Path: /languages
 */
if ( ! defined( 'ABSPATH' ) ) exit;


/**
 * 定数宣言
 */
define( 'USFL_BLKS_PRO_URL', plugins_url( '/', __FILE__ ) );
define( 'USFL_BLKS_PRO_PATH', plugin_dir_path( __FILE__ ) );
if ( ! defined('USFL_BLKS_IS_PRO') ) define( 'USFL_BLKS_IS_PRO', true );


/**
 * plugins_loaded
 */
add_action( 'plugins_loaded', function() {
	require_once USFL_BLKS_PRO_PATH . 'inc/enqueue.php';
	require_once USFL_BLKS_PRO_PATH . 'inc/hooks.php';

	if ( is_admin() ) {
		require_once USFL_BLKS_PRO_PATH . 'inc/update.php';
	}
}, 11);
