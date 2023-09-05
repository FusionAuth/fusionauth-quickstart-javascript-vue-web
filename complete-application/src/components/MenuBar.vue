<template>
  <div id="menu-bar" class="menu-bar">
    <RequireAuth>
      <router-link to="/make-change" class="menu-link" active-class="active">Make Change</router-link>
      <router-link to="/account" class="menu-link" active-class="active">Account</router-link>
    </RequireAuth>

    <RequireAnonymous>
      <a class="menu-link">About</a>
      <a class="menu-link">Services</a>
      <a class="menu-link">Products</a>

      <a class="menu-link" style="text-decoration: underline">Home</a>
    </RequireAnonymous>
  </div>
</template>
