'use strict'

const pages = {}
const titles = {
  'index': 'Home',
  'user': 'User',
  'categaries/categary-a': 'Category A',
  'categaries/categary-b': 'Category B',
}

const glob = require('glob')
glob.sync('./src/pages/**/main.js').forEach(path => {
  const pageName = path.split('./src/pages/')[1].split('/main.js')[0]
  pages[pageName] = {
    entry: path,
    filename: pageName + '.html',
    template: pageName + '.html', // If doesn't exist, fallback to 'public/index.html'
    title: titles[pageName],
    chunks: ['chunk-vendors', 'chunk-common', pageName],
  }
})

const isDev = (process.env.NODE_ENV === "development")

module.exports = {
  pages,
  productionSourceMap: isDev,
  runtimeCompiler: true,
}
