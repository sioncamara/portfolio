const path = require('path')
const glob = require('glob')
const withImages = require('next-images')


module.exports = withImages({

  env:{
    EMAILJS_USER_ID: "user_C7stO484c3zDEat6zLXth",
    PRISMIC_API_TOKEN: "MC5Yek4xa0JJQUFDUUE4b25x.77-9TAPvv73vv73vv71M77-9UHTvv71vdFfvv71C77-9Pe-_ve-_ve-_vXgJLe-_ve-_ve-_vTHvv73vv71vcg",
    PRISMIC_REPOSITORY_NAME: "my-portfolio-official",
    PRISMIC_REPOSITORY_LOCALE: "en-us"
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed', // These options are from node-sass: https://github.com/sass/node-sass
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  },
  // exportPathMap: function(defaultPathMap) {
  //   return {
  //     '/': { page: '/' }
  //   }
  // }
}
)