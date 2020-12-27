const WikipediaUrlGenerator = city => {
  const cityToSend = city.replace(/\s+/g, '_').toLowerCase();
  return `https://en.wikipedia.org/wiki/${cityToSend}`;
};

export default WikipediaUrlGenerator;
