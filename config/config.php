<?php

# Site Root
define('SITE_ROOT', str_replace('config\config.php', '', __FILE__));

# Database
DEFINE('ISN_DB_HOST', 'localhost');
DEFINE('ISN_DB_NAME', 'incursion-shiny-network');
DEFINE('ISN_DB_USER', 'incursion-unite');
DEFINE('ISN_DB_PASS', 'rpfnenmA3J48hLBzBqBrhyqKFhxhFwpRhe4LWmHbmGLm8R8x');

require(SITE_ROOT . 'config/lib/db.php');