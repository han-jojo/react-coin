const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  // 정책 변경으로 오늘 하루만 조회가 가능.
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - (60 * 60 * 24 * 1);
  const startDate = Math.floor(Date.now() / 1000);
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}`
  ).then((response) => response.json());
}