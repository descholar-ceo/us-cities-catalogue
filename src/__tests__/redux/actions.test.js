import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { filterCity, getCitiesAction } from '../../redux/actions';
import { FILTER_CITY, GET_ALL_CITIES } from '../../redux/actions/actionsTypes';
import { API_FOR_TEST } from '../../assets/samples/apis';
import CITIES_FOR_TEST from '../../assets/samples/cities-sample';

describe('Test filterCity action', () => {
  it('The filter action returns the filterString and actiontype', done => {
    const res = filterCity('Chicago');
    expect(res).toHaveProperty('type');
    expect(res.type).toEqual(FILTER_CITY);
    expect(res).toHaveProperty('mFilter');
    expect(res.mFilter).toEqual('Chicago');
    done();
  });

  it('The filter action returns an undefined value when it is not passed a parameter', done => {
    const res = filterCity();
    expect(res.mFilter).toBe(undefined);
    done();
  });
});

describe('Test getCitiesAction action', () => {
  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  it('The getCities action dispatches cities after fetching them from the API', () => {
    fetchMock.getOnce(API_FOR_TEST, {
      body: {
        cities: [CITIES_FOR_TEST],
      },
      headers: { 'content-type': 'application/json' },
    });
    const expectedAction = [{ cities: CITIES_FOR_TEST, type: GET_ALL_CITIES }];
    const store = mockStore({ cities: [] });
    return store.dispatch(getCitiesAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
