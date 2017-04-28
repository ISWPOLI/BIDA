<?php
/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'wordpress');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'N(agOm}cN+yxR=>.@T{[MRH8L/+>a=fA$;}XM@g$qAIt<QIHq=T+@>[ds46iI^e?');
define('SECURE_AUTH_KEY', '-0-9s|=yCc|G0+jvF3?vcAgl6)-u}f7^;+ZaE<b>8p6Z+*)-J(t`{rKhlJ$6Iy0%');
define('LOGGED_IN_KEY', 'L*5c]H^v=,trV3sv_Cg0s`^qwx@%?R-dWI[qRO`:/yA4aYN%:hih;e|za1v>[mV$');
define('NONCE_KEY', 'Vcucxzm~]f#n5dx<CTww}ZDZynSh%khjHHFK4`{)8d/(+[Zjo^M7d113+~Pd8@jh');
define('AUTH_SALT', 'd,-s?(,([<0=18R13^6E^vm1&mv-pQtb.j^,F;s!ik*G8KNUDjX5zz{^9&W_8 gg');
define('SECURE_AUTH_SALT', ']@)&yN-oCX?_NI5;YW1J u?DuN3SsfF2S=+z9CnVA+ExS8trdC=-gtwmMS5*CWys');
define('LOGGED_IN_SALT', 'J-n>9X+_Tm:>[b8#TY[M7FsO*F?{lOh2@B#m =J]hcgh2J(n?A_]pY#b_T<ux2EB');
define('NONCE_SALT', '~wf@!,U^<^*@Icr8z@s=;sm[epZA-2y:)*yt{kvq+5S]Foi#FCa l@;gaDdi|Q2H');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wp_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

