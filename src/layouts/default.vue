<template>
  <CommonHeader v-if="!disableHeaderRouteNames.includes(route.name)" />
  <NuxtPage />
  <CommonFooter v-if="!disableFooterRouteNames.includes(route.name)" />
</template>

<script setup>
const route = useRoute();
const disableHeaderRouteNames = useState(() => []);
const disableFooterRouteNames = useState(() => []);
</script>
