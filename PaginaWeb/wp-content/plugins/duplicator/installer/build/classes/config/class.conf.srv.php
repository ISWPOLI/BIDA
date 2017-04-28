<?php
// Exit if accessed directly 
if (!defined('DUPLICATOR_INIT')) {
    $_baseURL = "http://".strlen($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : $_SERVER['HTTP_HOST'];
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: $_baseURL");
    exit;
}

/**
 * Class used to update and edit web server configuration files
 *
 * Standard: PSR-2
 * @link http://www.php-fig.org/psr/psr-2 Full Documentation
 *
 * @package SC\DUPX\ServerConfig
 *
 */
class DUPX_ServerConfig
{

    /**
     *  Clear .htaccess and web.config files and backup
     *
     *  @return null
     */
    public static function reset()
    {
        DUPX_Log::info("\nWEB SERVER CONFIGURATION FILE RESET:");
        $timeStamp = date("ymdHis");

        //Apache
        @copy('.htaccess', ".htaccess.{$timeStamp}.orig");
        @unlink('.htaccess');

        //IIS
        @copy('web.config', "web.config.{$timeStamp}.orig");
        @unlink('web.config');

        //.user.ini - For WordFence
        @copy('.user.ini', ".user.ini.{$timeStamp}.orig");
        @unlink('.user.ini');

        DUPX_Log::info("- Backup of .htaccess/web.config made to *.{$timeStamp}.orig");
        DUPX_Log::info("- Reset of .htaccess/web.config files");
        $tmp_htaccess = '# RESET FOR DUPLICATOR INSTALLER USEAGE';
        file_put_contents('.htaccess', $tmp_htaccess);
        @chmod('.htaccess', 0644);
    }

    /**
     *  Resets the .htaccess file to a very slimed down version with new paths
     *
     *  @return null
     */
    public static function setup()
    {

        if (!isset($_POST['url_new'])) {
            return;
        }

        DUPX_Log::info("\nWEB SERVER CONFIGURATION FILE BASIC SETUP:");
        $currdata = parse_url($_POST['url_old']);
        $newdata  = parse_url($_POST['url_new']);
        $currpath = DUPX_Util::add_slash(isset($currdata['path']) ? $currdata['path'] : "");
        $newpath  = DUPX_Util::add_slash(isset($newdata['path'])  ? $newdata['path']  : "");

        $tmp_htaccess = <<<HTACCESS
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase {$newpath}
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . {$newpath}index.php [L]
</IfModule>
# END WordPress
HTACCESS;

        file_put_contents('.htaccess', $tmp_htaccess);
        @chmod('.htaccess', 0644);
        DUPX_Log::info("created basic .htaccess file.  If using IIS web.config this process will need to be done manually.");
    }
}
?>
