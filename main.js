/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */


const url = 'https://api.coinlore.com/api/tickers/?start=1&limit=10';

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.data.map((coin) => {
      const tbody = document.querySelector('tbody');
      const tr = document.createElement('tr');
      tr.innerHTML = 
        ` <td>${coin.name}</td>
          <td>${coin.symbol}</td>
          <td>&dollar; ${coin.price_usd}</td>
          <td>${coin.tsupply} ${coin.symbol}</td>  `;
      tbody.appendChild(tr);  
    })
  })
  .catch(error => error)
  

 