import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/index.css'
import router from './router'
import { registerGlobalComponent } from './utils/import'
// import AOS from 'aos';
import 'aos/dist/aos.css'
import ScrollAnimation from '@/utils/scrollAnimation'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

const app = createApp(App)
app.directive('scrollanimation', ScrollAnimation);
app.use(VCalendar, {})
registerGlobalComponent(app)
app.use(router)
app.mount('#app')
