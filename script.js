// ! I completed the project but not that way i wanted . i had trouble with selecting those items and
// ! search system . i think i should put the data inside a func in line 50, but i don know how to use
// !than func and specially i have no time ... thanks ^_^

const button = document.querySelector(".form-control");
const form = document.querySelector("#form");
const glass = document.getElementById("glass");
const select = document.querySelector(".form-select");
const search = document.querySelector('input[type="search"]');
const resDiv = document.querySelector(".result");
const refreshBtn = document.querySelector(".float");
refreshBtn.addEventListener("click", () => {
  location.reload();
});
//?  here i wanna take the form and add an event listener for search
// todo

// form.addEventListener("keyup", async function (e) {
//   e.preventDefault();
//   console.log(search.value);
//   const searchTerm = search.value;
//   const config = { params: { q: searchTerm } };
//   const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
//   makeImages(res.data);
//   // search.value = "";
// });

// const makeImages = (shows) => {
//   shows.filter((fil) => {
//     if (fil.show.name.includes(search.value)) {
//       const img = document.createElement("IMG");

//       img.src = fil.show.image.medium;
//       resDiv.append(img);
//     }
//   });
//   // for (let result of shows) {
//   //   if (result.show.image) {
//   //     const img = document.createElement("IMG");
//   //     img.src = result.show.image.medium;
//   //     glass.append(img);
//   //   }
//   // }
// };

const episodes = async () => {
  //  ? trying to bring the api to website and making a select tag for it
  const res = await axios.get("https://api.tvmaze.com/shows/5/episodes");
  return res;
};

const data = episodes().then((res) => {
  console.log(res);
  for (let i = 0; i < res.data.length; i++) {
    const ses = res.data[i].season;
    const epi = res.data[i].number;
    const option = document.createElement("option");
    select.append(option);
    const seriesImage = res.data[i].image.medium;
    const seriesSum = res.data[i].summary;
    const seriesName = res.data[i].name;
    const seriesUrl = res.data[i].url;
    const divCard = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const cardATag = document.createElement("a");
    const seasonCard = document.createElement("h6");
    divCard.className = "card";
    divCard.style = "width: 18rem;";
    cardImg.className = "card-img-top";
    cardImg.src = seriesImage;
    cardImg.alt = seriesName;
    cardBody.className = "card-body";
    cardTitle.textContent = seriesName;
    cardTitle.className = "card-title";
    seasonCard.className = "card-title";
    seasonCard.textContent = `S0${ses}E0${epi}`;
    cardText.innerHTML = seriesSum;
    cardText.className = "card-text";
    cardATag.href = seriesUrl;
    cardATag.className = "btn btn-danger";
    cardATag.textContent = "WATCH";
    divCard.style.margin = "25px";
    divCard.append(cardImg);
    cardBody.append(cardTitle, seasonCard, cardText, cardATag);
    divCard.append(cardBody);
    glass.append(divCard);
    option.textContent = `${seriesName}`;
    option.value = `${seriesName}-S0${ses}E0${epi}`;
    // * search input code *****************************************************
    search.addEventListener("keydown", () => {
      let searchTerm = search.value;
      select.value = "All";
      if (
        res.data[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        res.data[i].summary.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        divCard.classList.remove("hidden");
      } else {
        divCard.classList.add("hidden");
      }
    });
    // * select input code *****************************************************
    select.addEventListener("change", (e) => {
      console.log(e.target.value);
      if (cardTitle.textContent === !e.target.value) {
        console.log(divCard);
        divCard.classList.add("hidden");
      } else {
        divCard.classList.remove("hidden");
      }
      if (e.target.value === "Open this select menu") {
        divCard.classList.remove("hidden");
      }
    });
  }
  // ? appending all the series with name , season , summary , image and link
  //  ? trying to bring the api to website and making a select tag for it
});

// // ! from search
// // todo complete the code below, then make a refresh button to refresh search and select results , finally make a footer for site
// const data2 = episodes().then((res) => {
//   console.log(res);

//   const search = document.getElementById("search");
//   const results = glass;
//   let searchTerm = "";

//   const showList = () => {
//     results.innerHTML = "";
// const seriesSum = res.data[i].summary;
// const seriesName = res.data[i].name;
//     res.data
//       .filter((item) => {
//         console.log(item);
//         return (
//           item.summary.toLowerCase().includes(searchTerm) ||
//           item.name.toLowerCase().includes(searchTerm)
//         );
//       })
//       .forEach((e) => {
//         console.log(e);

//       });
//   };

//   showList();

//   search.addEventListener("input", (event) => {
//     searchTerm = event.target.value.toLowerCase();
//     showList();
//   });
// });

// ========================================================================
// ========================================================================

// const search = document.querySelector("input");

//   return data;

// const search = getData().then((res) => {
//   for (var i = 0; i < res.data.length; i++) {
//     console.log(res.data[i].name);
//     if (res[i].data.named) {

//     }
//   }
// });

// const cccc = document.querySelectorAll(".cards");
// console.log(cccc);
