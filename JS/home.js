fetch("home.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("HomeContent").innerHTML = data;
  });
