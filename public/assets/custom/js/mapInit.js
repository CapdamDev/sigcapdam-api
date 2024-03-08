// Coordenadas que centrarán el mapa al cargar la página
var centerCoordinates = [-104.3470, 19.1149];
var token = sessionStorage.getItem('token');

const AllTiles = {
    OSM: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    Roadmap: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}',
    Terrain: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}',
    AlteredRoadmap: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}',
    SatelliteOnly: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}',
    Hybrid: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',
}

const initialLayer = 'Hybrid';
const initialSource = new ol.source.XYZ({
    url: AllTiles[initialLayer],
    crossOrigin: 'Anonymous',
});

// Crear el mapa
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: initialSource,
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat(centerCoordinates),
        zoom: 18,
        //- maxZoom: 18,
        //- minZoom: 16.5,
    })
});

const mapTypeSelector = document.getElementById('map-type');
mapTypeSelector.addEventListener('change', function () {
    const selectedLayer = mapTypeSelector.value;
    const selectedSource = new ol.source.XYZ({
        url: AllTiles[selectedLayer],
        crossOrigin: 'Anonymous',
    });
    map.getLayers().setAt(0, new ol.layer.Tile({
        source: selectedSource,
    }));
});

const tileLayer = map.getLayers().item(0);
tileLayer.setSource(initialSource);

// Ver las coordenadas del mouse en el mapa
var mousePositionControl = new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});

map.addControl(mousePositionControl);