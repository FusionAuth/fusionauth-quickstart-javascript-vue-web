import './assets/main.css'
import '@fusionauth/vue-sdk/dist/style.css';

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import FusionAuthVuePlugin from '@fusionauth/vue-sdk';

const app = createApp(App)

app.use(FusionAuthVuePlugin, {
  clientId: 'ec526002-35cc-4e6e-8f5b-0e4fba2b08c8',
  serverUrl: 'https://fatestlogin.ngrok.dev',
  redirectUri: 'http://changebank.codegremlins.net',
  postLogoutRedirectUri: 'http://changebank.codegremlins.net/logged-out',
  shouldAutoFetchUserInfo: true,
  shouldAutoRefresh: true,
  scope: 'openid email profile offline_access'
});

app.use(router)

app.mount('#app')
