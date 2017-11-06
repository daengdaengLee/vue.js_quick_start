var webpack = require('webpack');
module.exports = {
    entry: {
        처음 로드하는 파일을 지정합니다.
        진입 파일은 단일 파일로 지정할 수도 있고, 여러 개의 파일을 지정할 수도 있습니다.
        여러 개의 진입 파일을 지정할 때는 객체 형태로 지정하고,
        단일 진입 파일일 때는 문자열로 파일의 경로를 지정합니다.
        [ 단일 진입 파일인 경우 ]
        entry: __dirname + '/src/index.js'
        [ 다중 진입 파일인 경우 ]
        entry: {
            main: __dirname + '/src/index.js',
            app: __dirname + '/src/main.js'
        }
        다중 진입 파일인 경우 진입 파일 개수만큼 번들링된 자바스크립트 코드를 만듭니다.
        __dirname 과 문자열로 경로를 조합합니다.
    },
    output: {
        번들링된 결과물의 출력 방법을 지정합니다.
        publicPath 옵션은 웹서버에서 이용될 때의 사용 경로를 지정합니다.
        filename은 정적인 문자열도 가능하지만 entry이름을 [name] 으로 반영할 수도 있습니다.
        path: __dirname + '/public/dist/',
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            test: /\.js$/, 파일명이 .js로 끝나는 경우
            loader: 'babel-loader',
            exclude: /node_modules/ 트랜스파일 대상에 포함시키지 않을 파일명의 정규식 패턴
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin() 코드 난독화와 압축 기능 제공
    ],
    ......
}
