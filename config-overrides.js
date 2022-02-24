module.exports = function override(config) {
  const loaders = config.resolve;
  loaders.fallback = {
    fs: false,
    tls: false,
    net: false,
    http: require.resolve('stream-http'),
    https: false,
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    assert: require.resolve('assert/'),
    url: require.resolve('url/'),
    os: require.resolve('os-browserify/browser'),
  };

  return config;
};
