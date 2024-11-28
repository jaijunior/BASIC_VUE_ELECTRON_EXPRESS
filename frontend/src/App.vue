<template>
  <div>
    <nav class="nav">
      <router-link :to="{ name: 'home' }">HOME</router-link>
      <router-link :to="{ name: 'login' }">LOGIN</router-link>
      <router-link :to="{ name: 'dashboard' }">DASHBOARD</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
