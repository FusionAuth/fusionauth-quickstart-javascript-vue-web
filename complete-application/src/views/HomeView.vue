
<template>
  <div class="column-container">
    <div class="content-container">
      <div style="margin-bottom: 100px;">
        <h1>Welcome to Changebank</h1>
        <p>
            To get started,
            <button className="button-redirect" style = "cursor: pointer"  @click="fusionAuth.login()">
            log in
            </button>
            or
            <button className="button-redirect" style = "cursor: pointer"  @click="fusionAuth.register()">
            create a new account.
            </button>
          </p>
      </div>
    </div>

    <div style="flex: 0">
      <img src="@/assets/money.jpg" style="max-width: 800px;" alt=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useFusionAuth} from "@fusionauth/vue-sdk";

const fusionAuth = useFusionAuth();

</script>