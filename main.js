/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */




const next = document.querySelector('#next');
const previous = document.querySelector('#previous');

previous.style.display = 'none';

const getCoins = (start) => {
  const url = `https://api.coinlore.com/api/tickers/?start=${start}&limit=10`;
  return fetch(url)
  .then(response => response.json())
  .then(data => {
    data.data.map((coin) => {
      const tbody = document.querySelector('tbody');
      const tr = document.createElement('tr');
      const td = document.createElement('td')
      tr.innerHTML = 
        ` <td data-title="💰 Coin">${coin.name}</td>
          <td data-title="📄 Code">${coin.symbol}</td>
          <td data-title="🤑 Price">&dollar; ${coin.price_usd}</td>
          <td data-title="📉 Total Supply">${coin.tsupply} ${coin.symbol}</td>  `;
      tbody.appendChild(tr);  
    })
  })
  .catch(error => error)
};

getCoins(0);



next.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  let dataIndex = parseInt(next.dataset.index)
  dataIndex += 10;
  tbody.innerHTML = '';
  getCoins(dataIndex);
  previous.style.display = 'inline';
  next.dataset.index = dataIndex;
  previous.dataset.index = dataIndex - 10;
})

previous.addEventListener('click', () => {
  const tbody = document.querySelector('tbody');
  let dataIndex = parseInt(previous.dataset.index)
  dataIndex -= 10;
  tbody.innerHTML = '';
  getCoins(dataIndex);
  previous.dataset.index = dataIndex;
  next.dataset.index = dataIndex + 10;
})
