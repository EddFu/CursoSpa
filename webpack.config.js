//es parte de node sirve para acceder a la ruta ya sea en la nube o en el desarrollo local.
const path = require ('path');

//archivo para trabajar con html del paquete instalado
const HtmlWebpackPlugin = require ('html-webpack-plugin');

//variable para referenciar el paquete y poder trabajar con css
const CopyWebpackPlugin = require ('copy-webpack-plugin');

module.exports = {
    //este es el punto de entrada
    entry: './src/index.js',
    //este es el punto de salida
    output: {
        //con esto creamos el punto donde saldra el archivo "dist" distribucion ahi saldran los archivos
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //extensiones que se utilizaran en el proyecto
    resolve: {
        extensions: ['.js'],
    },
    //modulo de reglas
    module: {
        rules: [
            {
                //se extablece los valores que vamos a filtrar de los que se utilizaran
                test: /\.m?js$/,
                //excluimos la carpeta de node modules
                exclude: /node_modules/,
                //utilizamos el loader instalado en npm
                use: {
                    loader: 'babel-loader',
                }
            },
            {   //para importar imagenes desde el src
                test:/\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ]
            }
        ]
    },
    //plugins a utiliar
    plugins: [
        new HtmlWebpackPlugin(
            {
            //como voy a injectar a un archivo html algun valor
            inject: true,
            template: './public/index.html',
            filename: './index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
          })
    ]
}