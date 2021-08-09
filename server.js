/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.dev.js')
const path = require('path')
// const request = require('request')
const app = express()
const compiler = webpack(config)
// const https = require('https')

/* body parsers */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const middleWare = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  // historyApiFallback: true,
})
app.use(middleWare)

// hot module replacement
app.use(
  require('webpack-hot-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  })
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!\n')
})
