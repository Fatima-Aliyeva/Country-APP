let searchInp = document.querySelector(".search-inp");
let searchBtn = document.querySelector(".search-btn");
let result = document.querySelector(".result");
let container = document.querySelector(".container");

const API_KEY = "NmoC6QE3yS6ad68HAb5TtqAN7amXu6IpeVHAl7bO";

async function data() {
  const country = searchInp.value;
  const url = `https://countryapi.io/api/name/${country}?apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    const mydata = await response.json();

    if (!response.ok) {
      console.log("Olmadi");
    } else {
      melumatGoster(mydata);
      console.log(mydata);
      container.classList.add("up");
    }
  } catch (err) {
    console.error(err.message);
  }
}

async function melumatGoster(data) {
  const olkeyegoreData = Object.values(data)[0];
  const currencies = Object.values(olkeyegoreData.currencies).map(
    (currency) => currency.name
  );
  const currencySymbol = Object.values(olkeyegoreData.currencies)
    .map((currency) => currency.symbol)
    .join(", ");
  const languages = Object.values(olkeyegoreData.languages).join(", ");
  result.innerHTML = `
  <img src="${olkeyegoreData.flag.medium}" alt="">
            <h1>${olkeyegoreData.name}</h1>
            <p> Capital: <span>${olkeyegoreData.capital}</span></p>
            <p> Region: <span>${olkeyegoreData.region}</span></p>
            <p> Population: <span>${olkeyegoreData.population}</span></p>
            <p> Area: <span>${olkeyegoreData.area} km<sup>2<sup/> </span></p>
            <p> Currency: <span>${currencies} - ${currencySymbol}</span></p>
            <p> Language: <span>${languages}</span></p>
            <p> Calling Code: <span>${olkeyegoreData.callingCode}</span></p>
            <p> Borders: <span>${olkeyegoreData.borders}</span></p>
             
            `;
}

searchBtn.addEventListener("click", data);
