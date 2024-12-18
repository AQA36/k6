import http from 'k6/http';

export default async () => {
  const urlOne = `https://httpbin.test.k6.io/delay/${randomInt(1, 5)}`;
  const urlTwo = `https://httpbin.test.k6.io/delay/${randomInt(1, 5)}`;
  const urlThree = `https://httpbin.test.k6.io/delay/${randomInt(1, 5)}`;

  const one = http.asyncRequest('GET', urlOne);
  const two = http.asyncRequest('GET', urlTwo);
  const three = http.asyncRequest('GET', urlThree);

  console.log('Racing:');
  console.log(urlOne);
  console.log(urlTwo);
  console.log(urlThree);

  const res = await Promise.race([one, two, three]);
  console.log('winner is', res.url, 'with duration of', res.timings.duration + 'ms');
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}