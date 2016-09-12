var elixir = require('laravel-elixir')

require('laravel-elixir-vueify')
require('laravel-elixir-spritesmith')
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .sass('/frontend/bootstrap.scss', 'public/css/frontend/bootstrap.css')
        .sass('/frontend/home.scss', 'public/css/frontend/home.css')
        .browserify('/frontend/home.js', 'public/js/frontend/home.js')
        .spritesmith('resources/assets/imgs/egg/first', {
            imgOutput: 'public/imgs/',
            imgPath: '../imgs/worm.png',
            imgName: 'worm.png',
            cssName: 'worm.styl',
            cssVarMap(sprite) {
                sprite.name = 'worm-' + sprite.name
            }
        })
        .version([
            'css/frontend/bootstrap.css',
            'css/frontend/home.css',
            'js/frontend/home.js',
            'js/frontend/textUI.js'
        ])
        .browserSync({
            proxy: 'local.itps.dev'
        })
});
