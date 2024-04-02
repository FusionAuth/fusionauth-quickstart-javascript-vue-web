<template>
  <div id="logo-header">
    <img src="@/assets/changebank.svg" alt="Change Bank" width="257" height="55"/>

    <RequireAuth>
      <div class="h-row">
        <p class="header-email" v-if="userInfo">
          {{ userInfo.email }}
        </p>
        <a class="button-lg" style="cursor: pointer" @click="fusionAuth.logout()">Logout</a>
      </div>
    </RequireAuth>

    <RequireAnonymous>
      <a class="button-lg" style="cursor: pointer" @click="fusionAuth.login()">Login</a>
    </RequireAnonymous>

  </div>
</template>

<script setup lang="ts">
import {useFusionAuth, type UserInfo} from "@fusionauth/vue-sdk";
import {onMounted, ref} from "vue";

const userInfo = ref<UserInfo | null>(null);

const fusionAuth = useFusionAuth();

onMounted(async () => {
  if (fusionAuth.isLoggedIn()) {
    userInfo.value = await fusionAuth.getUserInfo();
  }
});
</script>
