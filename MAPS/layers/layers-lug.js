var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_naz_1 = new ol.format.GeoJSON();
var features_naz_1 = format_naz_1.readFeatures(json_naz_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naz_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naz_1.addFeatures(features_naz_1);cluster_naz_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_naz_1
});
var lyr_naz_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_naz_1, 
                style: style_naz_1,
                popuplayertitle: "naz",
                interactive: true,
                title: '<img src="styles/legend/naz_1.png" /> naz'
            });
var format_lug_2 = new ol.format.GeoJSON();
var features_lug_2 = format_lug_2.readFeatures(json_lug_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lug_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lug_2.addFeatures(features_lug_2);cluster_lug_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_lug_2
});
var lyr_lug_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_lug_2, 
                style: style_lug_2,
                popuplayertitle: "lug",
                interactive: true,
                title: '<img src="styles/legend/lug_2.png" /> lug'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_naz_1.setVisible(true);lyr_lug_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_naz_1,lyr_lug_2];
lyr_naz_1.set('fieldAliases', {'nome': 'nome', 'provincia': 'provincia', 'zona': 'zona', 'URL': 'URL', 'mail': 'mail', 'indirizzo': 'indirizzo', });
lyr_lug_2.set('fieldAliases', {'nome': 'nome', 'provincia': 'provincia', 'zona': 'zona', 'URL': 'URL', 'mail': 'mail', 'indirizzo': 'indirizzo', 'regione': 'regione', 'sezione IL': 'sezione IL', });
lyr_naz_1.set('fieldImages', {'nome': 'TextEdit', 'provincia': 'TextEdit', 'zona': 'TextEdit', 'URL': 'TextEdit', 'mail': 'TextEdit', 'indirizzo': 'TextEdit', });
lyr_lug_2.set('fieldImages', {'nome': 'TextEdit', 'provincia': 'TextEdit', 'zona': 'TextEdit', 'URL': 'TextEdit', 'mail': 'TextEdit', 'indirizzo': 'TextEdit', 'regione': 'TextEdit', 'sezione IL': 'Range', });
lyr_naz_1.set('fieldLabels', {'nome': 'no label', 'provincia': 'hidden field', 'zona': 'hidden field', 'URL': 'inline label - visible with data', 'mail': 'hidden field', 'indirizzo': 'hidden field', });
lyr_lug_2.set('fieldLabels', {'nome': 'no label', 'provincia': 'inline label - visible with data', 'zona': 'inline label - visible with data', 'URL': 'inline label - visible with data', 'mail': 'hidden field', 'indirizzo': 'hidden field', 'regione': 'hidden field', 'sezione IL': 'hidden field', });
lyr_lug_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});