/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */
const tbody = document.querySelector('tbody');
const url = 'https://api.coinlore.com/api/tickers/?start=1&limit=100';


fetch(url)
  .then(response => response.json())
  .then(data => {
      data.data.map((coin) => {
        const tr = document.createElement('tr');
        tr.innerHTML = 
          ` <td>${coin.name}</td>
            <td>${coin.symbol}</td>
            <td>${coin.price_usd}</td>
            <td>${coin.tsupply}</td>  `;
        tbody.appendChild(tr);  
      })
      
  })
  .catch(error => error)
  

 