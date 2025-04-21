import './assets/main.css'
import '@fusionauth/vue-sdk/dist/style.css';

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import FusionAuthVuePlugin from '@fusionauth/vue-sdk';

const app = createApp(App)

app.use(FusionAuthVuePlugin, {
  clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8e',
  serverUrl: 'https://glorious-mostly-giraffe.ngrok-free.app',
  redirectUri: 'http://changebank.codegremlins.net',
  postLogoutRedirectUri: 'http://changebank.codegremlins.net/logged-out',
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  scope: 'openid email profile offline_access'
});

app.use(router)

app.mount('#app')
