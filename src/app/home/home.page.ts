import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import VectorImageLayer from 'ol/layer/VectorImage';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  x = 2101520.252157975;
  y = 6495746.574340763;

  map;

  osmHumanitarian = new TileLayer({
    source: new OSM({
      url: 'http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png'
    }),
    visable: false,
    title: 'osmHumanitarian'
  })

  osmStandard = new TileLayer({
    source: new OSM(),
    visable: false,
    title: 'osmStandard'
  });

  // points = VectorImageLayer({
  //   source: new VectorSource({
  //     url: '../../assets/data/map.geojason',
  //     format: new GeoJSON()
  //   }),
  //   visible: true,
  //   title: 'points'
     
  // })

  // stamenTerrain = new TileLayer({
  //   source: new XYZ({
  //     url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
  //     attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
  //   }),
  //   visable: true,
  //   title: 'stamenTerrain'
  // });

  // baseLayerGroup = new TileLayer.Group({
  //   layers: [this.osmStandard, this.osmHumanitarian, this.stamenTerrain]
  // })

 

  constructor() {}

  ngOnInit() {
    this.map = new Map({
      target: 'hotel_map',
      view: new View({
        center: ([this.x, this.y]),
        zoom: 14,
        // maxZoom: 
        // minZoom
      })
    });

    // this.map.addLayer(this.stamenTerrain);
    // this.map.addLayer(this.osmHumanitarian);
    this.map.addLayer(this.osmStandard);
    // this.map.addLayer(this.points);

  }

  onclick() {
    this.map.on('click', (e)=>{
      console.log(e);
    })
  }
}
