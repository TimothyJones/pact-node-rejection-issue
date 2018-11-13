const example = require('./index.js');
const pact = require('@pact-foundation/pact');

describe('A simple example', () => {
  it("Should not explode", () => {
    return example().rejects.toEqual('Boom');
  });
});
