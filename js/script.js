$(".search-button").click(function () {
  let userInput = $(".search-term").val();
  console.log(userInput);

  let apiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      for (let i = 0; i < 3; i++) {
        let randomNum = Math.floor(Math.random() * data.data.length);
        console.log(randomNum);

        let randomGif = data.data[randomNum].images.original.url;
        $(".main").append(`<img src="${randomGif}">`);
        console.log(data.data.length);
      }
    });
});
