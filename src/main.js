import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './index.css';
import MyCounter from './components/MyCounter.vue';


const app = createApp( App );

app.component( 'my-counter', MyCounter )

app.use( router)
app.mount( '#app' )

