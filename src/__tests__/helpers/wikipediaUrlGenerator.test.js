import WikipediaUrlGenerator from '../../helpers/wikipediaUrlGenerator';

describe('Test for wikipediaUrlGenerator', () => {
  it('Returns the url to wikipedia depending on the passed city', done => {
    const generatedUrl = WikipediaUrlGenerator('chicago');
    expect(generatedUrl).toEqual('https://en.wikipedia.org/wiki/chicago');
    done();
  });
});
