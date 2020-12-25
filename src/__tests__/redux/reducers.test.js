import { filterCity } from '../../redux/actions';
import filterReducer from '../../redux/reducers/filter';

describe('Test of filterReducer', () => {
  it('filterReduce returns initialState when action return undefined', done => {
    const res = filterReducer(undefined, {});
    expect(res).toEqual('All');
    done();
  });

  it('filterReducer handles FILTER_CITY action', done => {
    const res = filterReducer(undefined, filterCity);
    const res2 = filterReducer({ filter: 'Chicago' }, filterCity);
    expect(res).toEqual('All');
    expect(res2).toEqual({ filter: 'Chicago' });
    done();
  });
});

describe('Test of cityReducer', () => {});
