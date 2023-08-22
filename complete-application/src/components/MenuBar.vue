<template>
  <div id="menu-bar" class="menu-bar">
    <RequireAuth>
      <a class="menu-link">Make Change</a>
      <a class="menu-link" style="text-decoration: underline">Account</a>
    </RequireAuth>

    <RequireAnonymous>
      <a class="menu-link">About</a>
      <a class="menu-link">Services</a>
      <a class="menu-link">Products</a>

      <a class="menu-link" style="text-decoration: underline">Home</a>
    </RequireAnonymous>
  </div>
</template>
