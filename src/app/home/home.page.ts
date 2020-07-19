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
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  x = 2101520.252157975;
  y = 6495746.574340763;

  point1;

  map;

  vectorSource;
  vectorLayer;

 

 

  constructor() {}

  ngOnInit() {
    this.point1 = new Feature({
      geometry: new Point([2101042.6887812307, 6496193.376841301])
    })

    this.point1.setStyle(new Style({
      image: new Icon(({
        color: '#8959A8',
        crossOrigin: 'anonymous',
        src: 'assets/pin.svg',
        imgSize: [20,20]
      }))
    }));

    this.vectorSource = new VectorSource({
      features: [this.point1]
    });

    this.vectorLayer = new VectorLayer({
      source: this.vectorSource
    })

    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        }), 
        this.vectorLayer
      ],
      view: new View({
        center: ([this.x, this.y]),
        zoom: 14,
        // maxZoom: 
        // minZoom
      })
    });


  }

  onclick() {
    this.map.on('click', (e)=>{
      console.log(e);
    })
  }
}
