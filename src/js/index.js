function fetchDataAndDisplay(apiUrl) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const ini = document.querySelector('#coba');
          ini.innerHTML = data.hasil.description;
          // console.log(data.hasil.description);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Call the function with the API URL
const apiUrl = "https://api.akuari.my.id/islami/kisahnabi";
fetchDataAndDisplay(apiUrl);
