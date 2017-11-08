module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint-config-airbnb",
        'plugin:vue/recommended'
    ],
    "plugins": [
        "html"
    ],
    "settings": {
        "html/html-extensions": [
            ".html"
        ],
        "html/indent": "0",
        "html/report-bad-indent": "error",
        "html/javascript-mime-types": [
            "text/javascript",
            "text/jsx"
        ]
    },
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "only-multiline"
        ]
    }
};
