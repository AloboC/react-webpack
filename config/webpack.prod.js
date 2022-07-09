const common=require('./webpack.common.js');
const {merge}=require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


/**@type {import('webpack').Configuration} */
const prodConfig={
    mode:'production',
    devtool:'source-map',
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    plugins:[
        new MiniCssExtractPlugin()
    ],
    module:{
        rules:[
            {
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                test: /.(css|scss|sass)$/,
            },
        ]
    }
}

module.exports=merge(common,prodConfig);