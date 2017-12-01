<template>
	<div id="app">
		<h1>Vue Static Map</h1>
		<static-map :styles="styles" :google-api-key="apiKey" :language="language" v-on:get-url="getUrl" :paths="paths" :format="format" :markers="markers" :zoom="zoom" :center="center" :size="size" :type="type"></static-map>
		<div>
			<pre>{{url}}</pre>
		</div>
	</div>
</template>

<script>
import StaticMap from './components/StaticMap';

function getUrl(url) {
	this.url = url;
}

export default {
	data: () => {
		const dataValues = {
			apiKey: '',
			center: 'Brooklyn+Bridge,New+York,NY',
			format: 'gif',
			language: 'ja',
			markers: [
				{
					label: 'W', color: 'blue', lat: 40.702147, lng: -74.015794, size: 'normal',
				},
				{
					label: 'Y', color: 'yellow', lat: 40.711614, lng: -74.012318, size: 'tiny',
				},
				{
					label: 'G', color: 'green', lat: 40.718217, lng: -74.015794, size: 'small', icon: 'http://www.airsoftmap.net/images/pin_map.png',
				},
			],
			paths: [
				{
					color: 'blue',
					weight: 8,
					geodesic: false,
					fillcolor: '0xFFFF0033',
					locations: [
						{ startLat: 40.737102, endLng: -73.990318 },
						{ startLat: 40.749825, endLng: -73.987963 },
						{ startLat: 40.752946, endLng: -73.987384 },
						{ startLat: 40.762946, endLng: -73.997399 },
					],
				},
			],
			scale: '1',
			size: [800, 400],
			type: 'roadmap',
			url: '',
			zoom: 13,
			styles: [{ stylers: [] }, { elementType: 'geometry', stylers: [{ color: '#d2e1d2' }] }, { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] }, { elementType: 'labels.text', stylers: [{ color: '#233b3c' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#233b3c' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#f9f9f9' }] }, { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#c5d2c4' }] }, { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#f9f9f9' }] }, { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#d0d0cf' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#c5d2c4' }] }, { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#b0d5de' }] }, { featureType: 'water', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
		};
		return dataValues;
	},
	name: 'app',
	components: {
		StaticMap,
	},
	methods: {
		getUrl,
	},
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

pre {
	white-space: pre-line;
}
</style>
