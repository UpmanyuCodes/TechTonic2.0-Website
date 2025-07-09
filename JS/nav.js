fetch('nav.html') 
  .then(res => res.text())
  .then(data => {
    document.getElementById('Navbar').innerHTML = data;
  });
