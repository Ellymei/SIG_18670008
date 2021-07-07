var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_INDONESIA_KECsiswa_1 = new ol.format.GeoJSON();
var features_INDONESIA_KECsiswa_1 = format_INDONESIA_KECsiswa_1.readFeatures(json_INDONESIA_KECsiswa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDONESIA_KECsiswa_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDONESIA_KECsiswa_1.addFeatures(features_INDONESIA_KECsiswa_1);var lyr_INDONESIA_KECsiswa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDONESIA_KECsiswa_1, 
                style: style_INDONESIA_KECsiswa_1,
    title: 'INDONESIA_KECsiswa<br />\
    <img src="styles/legend/INDONESIA_KECsiswa_1_0.png" />  3343.00- 6839.00 Sangat Sedikit<br />\
    <img src="styles/legend/INDONESIA_KECsiswa_1_1.png" />  6839.00-10335.00 Sedikit<br />\
    <img src="styles/legend/INDONESIA_KECsiswa_1_2.png" /> 10335.00-13831.00 Sedang <br />\
    <img src="styles/legend/INDONESIA_KECsiswa_1_3.png" />  13831.00-17327.00 Banyak<br />\
    <img src="styles/legend/INDONESIA_KECsiswa_1_4.png" />  17327.00-20823.00 Sangat Banyak<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_INDONESIA_KECsiswa_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_INDONESIA_KECsiswa_1];
lyr_INDONESIA_KECsiswa_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'jmlsiswaSD': 'jmlsiswaSD', 'jmlsswaSMP': 'jmlsswaSMP', 'jmlsswaSMA': 'jmlsswaSMA', 'jmlsswaSMK': 'jmlsswaSMK', 'TOTALGURU': 'TOTALGURU', });
lyr_INDONESIA_KECsiswa_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'jmlsiswaSD': 'TextEdit', 'jmlsswaSMP': 'TextEdit', 'jmlsswaSMA': 'TextEdit', 'jmlsswaSMK': 'TextEdit', 'TOTALGURU': 'TextEdit', });
lyr_INDONESIA_KECsiswa_1.set('fieldLabels', {'Kecamatan': 'inline label', 'jmlsiswaSD': 'inline label', 'jmlsswaSMP': 'inline label', 'jmlsswaSMA': 'inline label', 'jmlsswaSMK': 'inline label', 'TOTALGURU': 'inline label', });
lyr_INDONESIA_KECsiswa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});