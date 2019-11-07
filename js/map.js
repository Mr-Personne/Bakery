    var lat = 47.618465;
    var lon = 6.154393;
    var macarte = null;
    function initMap() {
        macarte = L.map('map').setView([lat, lon], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
            attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
            minZoom: 17,
            maxZoom: 20
        }).addTo(macarte);
        var marker = L.marker([lat, lon]).addTo(macarte);
    }
    window.onload = function(){
    initMap(); 
};
