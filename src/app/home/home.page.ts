import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  map;
  x = 2101520.252157975;
  y = 6495746.574340763;

  constructor() {}

  ngOnInit() {
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: ([this.x, this.y]),
        zoom: 14
      })
    });

  }

  onclick() {
    this.map.on('click', (e)=>{
      console.log(e);
    })
  }
}
