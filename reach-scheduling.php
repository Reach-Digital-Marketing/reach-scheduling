<?php

/**
 * Plugin Name: Reach Scheduling
 * Description: A scheduling application in React
 * Version: 1.0
 * Text Domain: reach-scheduling
 * Author: Reach
 */

function reach_scheduling()
{
  wp_enqueue_script(
    "reach_scheduling_js",
    plugin_dir_url(__FILE__) . "/build/index.js",
    ["wp-element"],
    "0.1.0",
    true
  );
  wp_enqueue_style(
    "reach_scheduling_css",
    plugin_dir_url(__FILE__) . "/build/index.css"
  );
  return "<div id='reach-scheduling'></div>";
}

add_shortcode('reach_scheduling', 'reach_scheduling');
