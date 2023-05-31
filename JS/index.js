let myInput = document.querySelector(".inp");
let myBtn = document.querySelector(".show-btn");
let myDiv = document.querySelector(".myDiv");

myBtn.addEventListener("click", () => {
  fetch("https://api.imgflip.com/get_memes")
    .then((response) => {
      return response.json();
    })
    .then((fetchedData) => {
      console.log(fetchedData);
      let myData = fetchedData.data;
      console.log(myData);
      let myMemes = myData.memes;
      console.log(myMemes);

      for (let num in myMemes) {
        if (myInput.value < myMemes.length && myInput.value !== "") {
          let showMemes = `
          <h1 class='mb-4'>${myMemes[myInput.value].name}</h1>
          <img src="${myMemes[myInput.value].url}"/>
                    `;
          myDiv.innerHTML = showMemes;
        } else {
          myDiv.innerHTML = "invalid Number";
        }
      }
    });
});
