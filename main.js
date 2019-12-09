/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

const tbody = document.querySelector('tbody');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');

let limit = 100;
const url = `https://api.coinlore.com/api/tickers/?start=0&limit=${limit}`;

let page = 1; 

previous.style.display = 'none';

previous.addEventListener('click', () =>{
  page -= 1;
  displayCoins(page);
  next.style.display = 'inline';
  if(page == 1){
    previous.style.display = 'none';
  };
});

next.addEventListener ('click', () => {
  previous.style.display= 'inline';
  page += 1;
  displayCoins(page);
  if (page === limit/10) {
    next.style.display = 'none';
  };
});

const getCoins = async () => {
  const response = await fetch(url);
  const data = await response.json();
  coin = data.data;
  displayCoins(1);
}

const displayCoins = (page) => {
  tbody.innerHTML = "";
  const begin = (page * 10) - 10;
  const end = page * 10;
  for (let i = begin; i < end; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td data-title="💰 Coin">${coin[i].name}</td>
      <td data-title="📄 Code">${coin[i].symbol}</td>
      <td data-title="🤑 Price">&dollar; ${coin[i].price_usd}</td>
      <td data-title="📉 Total Supply">${coin[i].tsupply} ${coin[i].symbol}</td> 
    `;
    tbody.appendChild(tr);
  };
};

getCoins();

