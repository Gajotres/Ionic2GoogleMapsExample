import {Page, Platform} from 'ionic/ionic';

@Page({
  templateUrl: 'build/pages/mapPage/mapPage.html',
})

export class MapPage {
	
	constructor(platform: Platform) {
		this.platform = platform;

		this.initializeMap();    
	}

	initializeMap() {

		this.platform.ready().then(() => {
		    var minZoomLevel = 12;

		    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
		        zoom: minZoomLevel,
		        center: new google.maps.LatLng(38.50, -90.50),
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		});
	}  
}
