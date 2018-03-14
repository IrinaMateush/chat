module.export = {
    'extends': 'google', 
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'coma-dangle': [2, 'never'],
        'require-jsdoc': 0, //обязательность комментов, мы не хотим писать Jsdoc
        'max-len': [1, 140] //длина строки
    }
};