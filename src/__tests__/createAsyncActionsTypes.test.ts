import { expect } from 'chai';
import createAsyncActionsTypes from '../functions/createAsyncActionsTypes';

describe('createAsyncActionsTypes is a function', () => {
  it('be a function', async () => {
    return expect(createAsyncActionsTypes).to.be.an('function');
  });
});

describe('createAsyncActionsTypes returns expected values', () => {
  const namespace = 'namespace';
  const actionName = 'actionName';
  const expected = {
    START: `${namespace}/${actionName}_START`,
    SUCCESS: `${namespace}/${actionName}_SUCCESS`,
    ERROR: `${namespace}/${actionName}_ERROR`,
    DISMISS_ERROR: `${namespace}/${actionName}_DISMISS_ERROR`,
  };
  it('returns expected values', async () =>
    expect(createAsyncActionsTypes(namespace, actionName)).to.be.deep.equal(expected));
});
