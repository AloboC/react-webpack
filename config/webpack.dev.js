const common=require('./webpack.common.js');
const {merge}=require('webpack-merge');
const path = require('path');
const ReactRefreshWebpackPlugin =require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');


/**@type {import('webpack').Configuration} */
const devConfig={
    mode:'development',
    devServer:{
        // hot:true,
        port:3000,
        compress: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        },
        static: {
            directory: path.resolve(__dirname, '../public')
        },
        open:true
    },
    plugins:[new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin ()],
    devtool:'eval-source-map',
    module:{
        rules:[
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /.(css|scss|sass)$/,
            }
        ]
    }



}

module.exports=merge(common,devConfig);