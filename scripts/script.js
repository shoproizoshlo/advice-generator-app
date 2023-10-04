// GET Request to fetch JSON data
const axiosGet = () => {
  axios
    .get("https://api.adviceslip.com/advice")
    .then(function (response) {
      // Handle successful response
      console.log(response.data);

      document.getElementById("advice-id").innerHTML = response.data.slip.id;
      document.getElementById(
        "advice-text"
      ).innerHTML = `"${response.data.slip.advice}"`;
    })
    .catch(function (error) {
      // Handle error
      console.error(error);
    });
};
document.getElementById("button").addEventListener("click", (e) => {
  e.preventDefault;
  axiosGet();
});

axiosGet();
