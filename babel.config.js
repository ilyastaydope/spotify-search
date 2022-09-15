module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '~/assets': './src/assets',
            '~/components': './src/components',
            '~/constants': './src/constants',
            '~/hooks': './src/hooks',
            '~/navigation': './src/navigation',
            '~/providers': './src/providers',
            '~/screens': './src/screens',
          },
        },
      ],
    ],
  }
}
