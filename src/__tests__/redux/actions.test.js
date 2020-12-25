import { filterCity } from '../../redux/actions';
import { FILTER_CITY } from '../../redux/actions/actionsTypes';

describe('Test actions', () => {
  it('The filter action returns the filterString and actiontype', done => {
    const res = filterCity('Chicago');
    expect(res).toHaveProperty('type');
    expect(res.type).toEqual(FILTER_CITY);
    expect(res).toHaveProperty('mFilter');
    expect(res.mFilter).toEqual('Chicago');
    done();
  });
});
