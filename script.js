const all = 'https://restcountries.com/v3.1/all';
const select_one = document.querySelector(".select-one");
const select_all = document.querySelector(".select-all");
const findCountry = document.querySelector(".findCountry");
const button = document.querySelector("button")

button.addEventListener("click", (e)=>{
  e.preventDefault();
  fetch(all).then((response) => response.json())
  .then((qwer) =>{
    const find = findCountry.value;
      const seek = qwer.find((top) => top.name.common == find)
      if (seek) {
        select_one.innerHTML = 
        `<div class="col-lg-3 g-3 ${seek.name.common}">
          <div class="card" style="width: 100%;">
            <img src="${seek.flags.png}" class="card-img-top" alt="${seek.name.common}">
            <div class="card-body">
              <h5 class="card-title">Name: ${seek.name.common}</h5>
              <p class="card-text">Capital: ${seek.capital}</p>
              <a href="${seek.maps.googleMaps}" target="_blank">Location</a>
              <span class="d-block"> Area: ${seek.area} km<sup>2</sup></span>
            </div>
          </div>
        </div>`
      }
      else{
        select_one.innerHTML = `<p class="text-light display-5">Please write full name or learn the NAME!!!</p>`
      }
  })
})      

// fetch(all).then(response =>response.json())
//   .then((country) => {
//     const davlat = country.map((name) =>{
//         return `
//         <div class="col-md-3 g-3 ${name.name.common}">
//         <div class="card" style="width: 100%;">
//           <img src="${name.flags.png}" class="card-img-top" alt="${name.name.common}">
//           <div class="card-body">
//             <h5 class="card-title">Name: ${name.name.common}</h5>
//             <p class="card-text">Capital: ${name.capital}</p>
//             <a href="${name.maps.googleMaps}">Location</a>
//             <span class="d-block"> Area: ${name.area} km<sup>2</sup></span>
//           </div>
//         </div>
//         </div>`
//     })
//   select_all.innerHTML = davlat.join(); 
// })
