const Mode = require('frontmatter-markdown-loader/mode')

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: {
        mode: [Mode.REACT],
        react: {
          root: 'content',
        },
      },
    })
    return config
  },
}
