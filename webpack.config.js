const path = require('path');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/main.js'
    },
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        alias: {
            TweenLite: 'gsap/src/minified/TweenLite.min.js',
            TweenMax: 'gsap/src/minified/TweenMax.min.js',
            TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
            TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
            ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
            'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
            'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
        }
    },
    mode: 'development',
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new MomentLocalesPlugin({
            localesToKeep: ['es-us', 'ru']
        })
    ]
};
