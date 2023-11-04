var wms_layers = [];

var format_RU_MP_0 = new ol.format.GeoJSON();
var features_RU_MP_0 = format_RU_MP_0.readFeatures(json_RU_MP_0, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_RU_MP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RU_MP_0.addFeatures(features_RU_MP_0);
var lyr_RU_MP_0 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_RU_MP_0,
    style: style_RU_MP_0,
    interactive: true,
    title: '<img src="styles/legend/RU_MP_0.png" /> RU_MP'
});
var format_RU_LP_1 = new ol.format.GeoJSON();
var features_RU_LP_1 = format_RU_LP_1.readFeatures(json_RU_LP_1, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_RU_LP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RU_LP_1.addFeatures(features_RU_LP_1);
var lyr_RU_LP_1 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_RU_LP_1,
    style: style_RU_LP_1,
    interactive: true,
    title: '<img src="styles/legend/RU_LP_1.png" /> RU_LP'
});
var format_RU_CP_2 = new ol.format.GeoJSON();
var features_RU_CP_2 = format_RU_CP_2.readFeatures(json_RU_CP_2, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_RU_CP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RU_CP_2.addFeatures(features_RU_CP_2);
var lyr_RU_CP_2 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_RU_CP_2,
    style: style_RU_CP_2,
    interactive: true,
    title: '<img src="styles/legend/RU_CP_2.png" /> RU_CP'
});
var format_PP_PF_3 = new ol.format.GeoJSON();
var features_PP_PF_3 = format_PP_PF_3.readFeatures(json_PP_PF_3, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_PP_PF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_PF_3.addFeatures(features_PP_PF_3);
var lyr_PP_PF_3 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PP_PF_3,
    style: style_PP_PF_3,
    interactive: true,
    title: '<img src="styles/legend/PP_PF_3.png" /> PP_PF'
});
var format_PP_PC_4 = new ol.format.GeoJSON();
var features_PP_PC_4 = format_PP_PC_4.readFeatures(json_PP_PC_4, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_PP_PC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PP_PC_4.addFeatures(features_PP_PC_4);
var lyr_PP_PC_4 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_PP_PC_4,
    style: style_PP_PC_4,
    interactive: true,
    title: '<img src="styles/legend/PP_PC_4.png" /> PP_PC'
});
var format_IE_RG_5 = new ol.format.GeoJSON();
var features_IE_RG_5 = format_IE_RG_5.readFeatures(json_IE_RG_5, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_IE_RG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IE_RG_5.addFeatures(features_IE_RG_5);
var lyr_IE_RG_5 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_IE_RG_5,
    style: style_IE_RG_5,
    interactive: true,
    title: '<img src="styles/legend/IE_RG_5.png" /> IE_RG'
});
var format_IE_PT_6 = new ol.format.GeoJSON();
var features_IE_PT_6 = format_IE_PT_6.readFeatures(json_IE_PT_6, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_IE_PT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IE_PT_6.addFeatures(features_IE_PT_6);
var lyr_IE_PT_6 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_IE_PT_6,
    style: style_IE_PT_6,
    interactive: true,
    title: '<img src="styles/legend/IE_PT_6.png" /> IE_PT'
});
var format_EQUIPAMIENTO_7 = new ol.format.GeoJSON();
var features_EQUIPAMIENTO_7 = format_EQUIPAMIENTO_7.readFeatures(json_EQUIPAMIENTO_7, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_EQUIPAMIENTO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EQUIPAMIENTO_7.addFeatures(features_EQUIPAMIENTO_7);
var lyr_EQUIPAMIENTO_7 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_EQUIPAMIENTO_7,
    style: style_EQUIPAMIENTO_7,
    interactive: true,
    title: '<img src="styles/legend/EQUIPAMIENTO_7.png" /> EQUIPAMIENTO'
});
var format_CA_8 = new ol.format.GeoJSON();
var features_CA_8 = format_CA_8.readFeatures(json_CA_8, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_CA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CA_8.addFeatures(features_CA_8);
var lyr_CA_8 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_CA_8,
    style: style_CA_8,
    interactive: true,
    title: '<img src="styles/legend/CA_8.png" /> CA'
});
var format_AU_UP_9 = new ol.format.GeoJSON();
var features_AU_UP_9 = format_AU_UP_9.readFeatures(json_AU_UP_9, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AU_UP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_UP_9.addFeatures(features_AU_UP_9);
var lyr_AU_UP_9 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AU_UP_9,
    style: style_AU_UP_9,
    interactive: true,
    title: '<img src="styles/legend/AU_UP_9.png" /> AU_UP'
});
var format_AU_RN_10 = new ol.format.GeoJSON();
var features_AU_RN_10 = format_AU_RN_10.readFeatures(json_AU_RN_10, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AU_RN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_RN_10.addFeatures(features_AU_RN_10);
var lyr_AU_RN_10 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AU_RN_10,
    style: style_AU_RN_10,
    interactive: true,
    title: '<img src="styles/legend/AU_RN_10.png" /> AU_RN'
});
var format_AU_11 = new ol.format.GeoJSON();
var features_AU_11 = format_AU_11.readFeatures(json_AU_11, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AU_11.addFeatures(features_AU_11);
var lyr_AU_11 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AU_11,
    style: style_AU_11,
    interactive: true,
    title: '<img src="styles/legend/AU_11.png" /> AU'
});
var format_AREAS_VERDES_12 = new ol.format.GeoJSON();
var features_AREAS_VERDES_12 = format_AREAS_VERDES_12.readFeatures(json_AREAS_VERDES_12, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AREAS_VERDES_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_VERDES_12.addFeatures(features_AREAS_VERDES_12);
var lyr_AREAS_VERDES_12 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AREAS_VERDES_12,
    style: style_AREAS_VERDES_12,
    interactive: true,
    title: '<img src="styles/legend/AREAS_VERDES_12.png" /> AREAS_VERDES'
});
var format_AR_PSC_13 = new ol.format.GeoJSON();
var features_AR_PSC_13 = format_AR_PSC_13.readFeatures(json_AR_PSC_13, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AR_PSC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_PSC_13.addFeatures(features_AR_PSC_13);
var lyr_AR_PSC_13 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AR_PSC_13,
    style: style_AR_PSC_13,
    interactive: true,
    title: '<img src="styles/legend/AR_PSC_13.png" /> AR_PSC'
});
var format_AR_AGR_14 = new ol.format.GeoJSON();
var features_AR_AGR_14 = format_AR_AGR_14.readFeatures(json_AR_AGR_14, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AR_AGR_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AR_AGR_14.addFeatures(features_AR_AGR_14);
var lyr_AR_AGR_14 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AR_AGR_14,
    style: style_AR_AGR_14,
    interactive: true,
    title: '<img src="styles/legend/AR_AGR_14.png" /> AR_AGR'
});
var format_APU_15 = new ol.format.GeoJSON();
var features_APU_15 = format_APU_15.readFeatures(json_APU_15, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_APU_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APU_15.addFeatures(features_APU_15);
var lyr_APU_15 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_APU_15,
    style: style_APU_15,
    interactive: true,
    title: '<img src="styles/legend/APU_15.png" /> APU'
});
var format_AP_16 = new ol.format.GeoJSON();
var features_AP_16 = format_AP_16.readFeatures(json_AP_16, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_16.addFeatures(features_AP_16);
var lyr_AP_16 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AP_16,
    style: style_AP_16,
    interactive: true,
    title: '<img src="styles/legend/AP_16.png" /> AP'
});
var format_AE_17 = new ol.format.GeoJSON();
var features_AE_17 = format_AE_17.readFeatures(json_AE_17, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AE_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE_17.addFeatures(features_AE_17);
var lyr_AE_17 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AE_17,
    style: style_AE_17,
    interactive: true,
    title: '<img src="styles/legend/AE_17.png" /> AE'
});
var format_AC_18 = new ol.format.GeoJSON();
var features_AC_18 = format_AC_18.readFeatures(json_AC_18, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
var jsonSource_AC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AC_18.addFeatures(features_AC_18);
var lyr_AC_18 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_AC_18,
    style: style_AC_18,
    interactive: true,
    title: '<img src="styles/legend/AC_18.png" /> AC'
});
var group_CLASIFICACIONPDU2015 = new ol.layer.Group({
    layers: [lyr_RU_MP_0, lyr_RU_LP_1, lyr_RU_CP_2, lyr_PP_PF_3, lyr_PP_PC_4, lyr_IE_RG_5, lyr_IE_PT_6, lyr_EQUIPAMIENTO_7, lyr_CA_8, lyr_AU_UP_9, lyr_AU_RN_10, lyr_AU_11, lyr_AREAS_VERDES_12, lyr_AR_PSC_13, lyr_AR_AGR_14, lyr_APU_15, lyr_AP_16, lyr_AE_17, lyr_AC_18, ],
    title: "CLASIFICACION PDU 2015"
});

lyr_RU_MP_0.setVisible(true);
lyr_RU_LP_1.setVisible(true);
lyr_RU_CP_2.setVisible(true);
lyr_PP_PF_3.setVisible(true);
lyr_PP_PC_4.setVisible(true);
lyr_IE_RG_5.setVisible(true);
lyr_IE_PT_6.setVisible(true);
lyr_EQUIPAMIENTO_7.setVisible(true);
lyr_CA_8.setVisible(true);
lyr_AU_UP_9.setVisible(true);
lyr_AU_RN_10.setVisible(true);
lyr_AU_11.setVisible(true);
lyr_AREAS_VERDES_12.setVisible(true);
lyr_AR_PSC_13.setVisible(true);
lyr_AR_AGR_14.setVisible(true);
lyr_APU_15.setVisible(true);
lyr_AP_16.setVisible(true);
lyr_AE_17.setVisible(true);
lyr_AC_18.setVisible(true);
var layersList = [group_CLASIFICACIONPDU2015];
lyr_RU_MP_0.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_RU_LP_1.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_RU_CP_2.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_PP_PF_3.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_PP_PC_4.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_IE_RG_5.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_IE_PT_6.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_EQUIPAMIENTO_7.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_CA_8.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AU_UP_9.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AU_RN_10.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AU_11.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AREAS_VERDES_12.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AR_PSC_13.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AR_AGR_14.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_APU_15.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AP_16.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AE_17.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_AC_18.set('fieldAliases', {
    'DXF_LAYER': 'DXF_LAYER',
    'name': 'name',
    'descriptio': 'descriptio',
    'LAYERS': 'LAYERS',
    'COLOR_1': 'COLOR_1',
    'COLOR_2': 'COLOR_2',
    'TRANS_1': 'TRANS_1',
    'TRANS_2': 'TRANS_2',
    '_NAME': '_NAME',
    'COMENTARIO': 'COMENTARIO',
});
lyr_RU_MP_0.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_RU_LP_1.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_RU_CP_2.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_PP_PF_3.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_PP_PC_4.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_IE_RG_5.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_IE_PT_6.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_EQUIPAMIENTO_7.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_CA_8.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AU_UP_9.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AU_RN_10.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AU_11.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AREAS_VERDES_12.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AR_PSC_13.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AR_AGR_14.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_APU_15.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AP_16.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AE_17.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_AC_18.set('fieldImages', {
    'DXF_LAYER': 'TextEdit',
    'name': 'TextEdit',
    'descriptio': 'TextEdit',
    'LAYERS': 'TextEdit',
    'COLOR_1': 'TextEdit',
    'COLOR_2': 'TextEdit',
    'TRANS_1': 'TextEdit',
    'TRANS_2': 'TextEdit',
    '_NAME': 'TextEdit',
    'COMENTARIO': 'TextEdit',
});
lyr_RU_MP_0.set('fieldLabels', {});
lyr_RU_LP_1.set('fieldLabels', {});
lyr_RU_CP_2.set('fieldLabels', {});
lyr_PP_PF_3.set('fieldLabels', {});
lyr_PP_PC_4.set('fieldLabels', {});
lyr_IE_RG_5.set('fieldLabels', {});
lyr_IE_PT_6.set('fieldLabels', {});
lyr_EQUIPAMIENTO_7.set('fieldLabels', {});
lyr_CA_8.set('fieldLabels', {});
lyr_AU_UP_9.set('fieldLabels', {});
lyr_AU_RN_10.set('fieldLabels', {});
lyr_AU_11.set('fieldLabels', {});
lyr_AREAS_VERDES_12.set('fieldLabels', {});
lyr_AR_PSC_13.set('fieldLabels', {});
lyr_AR_AGR_14.set('fieldLabels', {});
lyr_APU_15.set('fieldLabels', {});
lyr_AP_16.set('fieldLabels', {});
lyr_AE_17.set('fieldLabels', {});
lyr_AC_18.set('fieldLabels', {});
lyr_AC_18.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});