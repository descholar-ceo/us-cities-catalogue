import WikipediaUrlGenerator from '../../helpers/wikipediaUrlGenerator';

describe('Test for wikipediaUrlGenerator', () => {
  it('Returns the url to wikipedia depending on the passed city', done => {
    const generatedUrl = WikipediaUrlGenerator('chicago');
    expect(generatedUrl).toEqual('https://en.wikipedia.org/wiki/chicago');
    done();
  });

  it('Returns the url to wikipedia depending on the passed city, with formatted name when the passed city name is a compund name', done => {
    const generatedUrl = WikipediaUrlGenerator('san francisco');
    expect(generatedUrl).toEqual('https://en.wikipedia.org/wiki/san_francisco');
    done();
  });

  it('Returns nothing when nothimg passed in arguments', done => {
    const generatedUrl = WikipediaUrlGenerator('');
    expect(generatedUrl).toEqual('https://en.wikipedia.org/wiki/');
    done();
  });
});
