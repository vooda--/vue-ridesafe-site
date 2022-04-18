// webpack.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        // If node_modules is excluded from the rule, vuex-composition-helpers should be an exception
        exclude: /node_modules(?!\/vuex-composition-helpers)/,
        options: { appendTsSuffixTo: [/\.vue$/] }
      },
      // это будет применяться к файлам `.js`
      // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // },
      // это будет применяться к файлам `.css`
      // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    // убедитесь что подключили плагин!
    new VueLoaderPlugin()
  ]
}
