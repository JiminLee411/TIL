// webpack 설정
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
module.exports = {
    mode: 'development',
    // 여러개의 파일을 읽어오기
    entry: {
        app: path.join(__dirname, 'src', 'main.js')
    },
    // 관련된 모듈
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    // 앱 모아놓는 곳 -> 배열로 설정
    plugins: [
        new VueLoaderPlugin()
    ],
    // 최종 결과
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}