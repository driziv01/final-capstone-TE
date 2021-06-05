import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
// import mapboxgl from "mapbox-gl";
import * as VueGoogleMaps from 'vue2-google-maps'
import geocoder from "@pderas/vue2-geocoder";
import x5GMaps from 'x5-gmaps'

Vue.use(x5GMaps, 'AIzaSyCmCB0J8g_O-x-sMQh9_qdDGIEJSjiO7wo')

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCmCB0J8g_O-x-sMQh9_qdDGIEJSjiO7wo',
    libraries: 'places',
  },
});

Vue.use(geocoder, {
  defaultCountryCode: null, // e.g. 'CA'
  defaultLanguage:    null, // e.g. 'en'
  defaultMode:        'lat-lng', // or 'address'
  googleMapsApiKey:   'AIzaSyCmCB0J8g_O-x-sMQh9_qdDGIEJSjiO7wo'
});

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

