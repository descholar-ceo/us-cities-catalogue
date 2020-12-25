const { default: filterReducer } = require('../../redux/reducers/filter');

describe('Test of filterReducer', () => {
  it('filterReduce returns initialState when action return undefined', done => {
    const res = filterReducer(undefined, {});
    expect(res).toEqual('All');
    done();
  });

  it('filterReducer handles FILTER_CITY action', done => {
    done();
  });
});
