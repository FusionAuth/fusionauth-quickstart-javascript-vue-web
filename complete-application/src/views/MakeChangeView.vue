<template>
  <div class="app-container change-container">
    <h3>We Make Change</h3>

    <div class="change-message" v-if="change">
      We can make change for {{ dollarUS.format(change.total) }} with {{ change.nickels }} nickels and {{ change.pennies }} pennies!
    </div>

    <form @submit="makeChange">
      <div class="h-row">
        <div class="change-label">Amount in USD: $</div>
        <input class="change-input" name="amount" type="number" step=".01" v-model="amount"/>
        <input class="change-submit" type="submit" value="Make Change"/>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const amount = ref<number>(0);
const change = ref<{ total: number; nickels: number; pennies: number } | null>();

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  useGrouping: false,
});

const makeChange = (e: Event) => {
  e.stopPropagation();
  e.preventDefault();

  const total = amount.value;
  const nickels = Math.floor(amount.value / 0.05);
  const pennies = Math.round((amount.value - nickels * 0.05) * 100);
  change.value = {total, nickels, pennies};
};
</script>
