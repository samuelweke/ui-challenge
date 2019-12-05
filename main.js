/* 
 * ✅ Use the Coinlore API (Coins) 
 *    https://www.coinlore.com/cryptocurrency-data-api
 * 
 *    Get 10 coins per "page"
 */

const tbody = document.querySelector('tbody');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
let page = 1; 

previous.style.display = 'none'

previous.addEventListener('click', () =>{
    page -= 1;
    displayCoins(page);
    next.style.display = 'block'
    if(page == 1){
      previous.style.display = 'none'
    }
})

next.addEventListener ('click', () => {
  previous.style.display= 'block';
  page += 1;
  displayCoins(page);

  if (page === 5) {
      next.style.display = 'none';
  }
})
const getCoins = async () => {
  const response = await fetch('https://api.coinlore.com/api/tickers/?start=0&limit=50');
  const data = await response.json();
  coin = data.data;
  displayCoins(1);
}

const displayCoins = (page) => {
    tbody.innerHTML = "";
    const rowPerPage = 10;
    const begin = (page * rowPerPage) - rowPerPage;
    const end = page * rowPerPage;
    for (let i = begin; i < end; i+= 1) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
          <td data-title="💰 Coin">${coin[i].name}</td>
          <td data-title="📄 Code">${coin[i].symbol}</td>
          <td data-title="🤑 Price">&dollar; ${coin[i].price_usd}</td>
          <td data-title="📉 Total Supply">${coin[i].tsupply}</td>`;
        tbody.appendChild(tr)
    }
}
getCoins();

