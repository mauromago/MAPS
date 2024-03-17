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
var format_lfs_1 = new ol.format.GeoJSON();
var features_lfs_1 = format_lfs_1.readFeatures(json_lfs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lfs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lfs_1.addFeatures(features_lfs_1);cluster_lfs_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_lfs_1
});
var lyr_lfs_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_lfs_1, 
                style: style_lfs_1,
                popuplayertitle: "lfs",
                interactive: true,
                title: '<img src="styles/legend/lfs_1.png" /> lfs'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_lfs_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_lfs_1];
lyr_lfs_1.set('fieldAliases', {'nome': 'nome', 'provincia': 'provincia', 'zona': 'zona', 'indirizzo': 'indirizzo', 'URL': 'URL', 'mail': 'mail', 'regione': 'regione', });
lyr_lfs_1.set('fieldImages', {'nome': 'TextEdit', 'provincia': 'TextEdit', 'zona': 'TextEdit', 'indirizzo': 'TextEdit', 'URL': 'TextEdit', 'mail': 'TextEdit', 'regione': 'TextEdit', });
lyr_lfs_1.set('fieldLabels', {'nome': 'no label', 'provincia': 'no label', 'zona': 'no label', 'indirizzo': 'no label', 'URL': 'no label', 'mail': 'hidden field', 'regione': 'hidden field', });
lyr_lfs_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});