import './assets/main.css'
import '@fusionauth/vue-sdk/dist/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FusionAuthVuePlugin from '@fusionauth/vue-sdk';

const app = createApp(App)

app.use(FusionAuthVuePlugin, {
  clientId: "5643bf3c-411b-4bd6-a57d-aec6e1b3e6d2",
  redirectUri: "https://fusionauth-quickstart-javascript-vue-web.cashcat.dev",
  postLogoutRedirectUri: "https://fusionauth-quickstart-javascript-vue-web.cashcat.dev",
  serverUrl: "https://auth.cashcat.dev",
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  scope: 'openid email profile offline_access'
});

app.use(router)

app.mount('#app')
