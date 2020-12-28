import { ONE_SAMPLE_CITY } from '../../assets/samples/cities-sample';
import { filterCity, getCitiesAction } from '../../redux/actions';
import cityReducer from '../../redux/reducers/city';
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

describe('Test of cityReducer', () => {
  it('cityReducer returns initialState when action return undefined', done => {
    const res = cityReducer(undefined, {});
    const res2 = cityReducer({ cities: ONE_SAMPLE_CITY }, getCitiesAction);
    expect(res).toEqual({ cities: [] });
    expect(res2).toEqual({ cities: ONE_SAMPLE_CITY });
    done();
  });
});
