const path = require('path');

module.export = {
    entity: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
    
}