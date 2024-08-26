import './assets/main.css'
import '@fusionauth/vue-sdk/dist/style.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FusionAuthVuePlugin from '@fusionauth/vue-sdk';

const app = createApp(App)

app.use(FusionAuthVuePlugin, {
  clientId: "a475ef66-384b-4d5d-973b-7a9fd63761c3",
  redirectUri: "https://fusionauth-quickstart-javascript-angular-web.cashcat.dev",
  postLogoutRedirectUri: "https://fusionauth-quickstart-javascript-angular-web.cashcat.dev",
  serverUrl: "https://auth.cashcat.dev",
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  scope: 'openid email profile offline_access'
});

app.use(router)

app.mount('#app')
