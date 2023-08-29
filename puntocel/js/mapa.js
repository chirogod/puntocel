// Function to initialize and display the map
function initMap(latitude, longitude) {
    const map = new google.maps.Map(document.getElementById("mapa"), {
      center: { lat: latitude, lng: longitude },
      zoom: 12,
    });

    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: map,
      title: "Sucursal seleccionada",
    });
  }

  // Event listener to handle "Ver en el mapa" button clicks
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("ver-mapa-btn")) {
      const latitude = parseFloat(event.target.dataset.latitude);
      const longitude = parseFloat(event.target.dataset.longitude);
      initMap(latitude, longitude);
    }
  });