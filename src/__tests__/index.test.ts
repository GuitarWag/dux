import { expect } from 'chai';
import * as functions from '../functions';
import * as dux from '..';

describe('functions', () => {
  it('its an object', async () => expect(functions).to.be.a('object'));
  it('has createAsyncActionsTypes', async () => expect(functions).to.haveOwnProperty('createAsyncActionsTypes'));
  it('createAsyncActionsTypes its a function', async () => {
    const { createAsyncActionsTypes } = functions;
    return expect(createAsyncActionsTypes).to.be.a('function');
  });
  it('createAsyncActionsTypes its a function', async () => {
    const { createAsyncActionsTypes } = functions;
    const namespace = 'namespace';
    const actionName = 'actionName';
    const expected = {
      START: `${namespace}/${actionName}_START`,
      SUCCESS: `${namespace}/${actionName}_SUCCESS`,
      ERROR: `${namespace}/${actionName}_ERROR`,
      DISMISS_ERROR: `${namespace}/${actionName}_DISMISS_ERROR`,
    };
    return expect(createAsyncActionsTypes(namespace, actionName)).to.be.deep.equal(expected);
  });
});

describe('dux', () => {
  it('returns expected values', async () => expect(dux).to.be.a('object'));
});
