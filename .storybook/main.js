module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    // scss を読み込む
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 1 => postcss-loader
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    })
    return { ...baseConfig }
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
