const ISS = document.getElementById('ISS');

function MoveAndGetISS() {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response => response.json())
    .then(data => {
      let lat = data.latitude;    
      let lon = data.longitude;   

      
      let x = (lon + 180) * (window.innerWidth / 360);
      let y = (90 - lat) * (window.innerHeight / 180);

      
      ISS.style.position = "absolute";
      ISS.style.left = x + "px";
      ISS.style.top = y + "px";
    });
}

// run every 2 seconds
setInterval(MoveAndGetISS, 100);
