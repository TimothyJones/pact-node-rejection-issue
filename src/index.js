module.exports = () =>
  Promise.reject('Boom').then(() => 'this bit is only here for the example');
