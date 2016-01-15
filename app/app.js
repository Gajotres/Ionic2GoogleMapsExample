import {App, Platform, Config} from 'ionic/ionic';
import {MapPage} from './pages/mapPage/mapPage';

@App({
  templateUrl: 'build/app.html'
})

export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();

    this.root = MapPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
