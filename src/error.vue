<template>
  <CommonHeader v-if="!disableHeaderRouteNames.includes(route.name)" />
  error page
  <CommonFooter v-if="!disableFooterRouteNames.includes(route.name)" />
</template>

<script setup>
const route = useRoute();
const disableHeaderRouteNames = useState(() => []);
const disableFooterRouteNames = useState(() => []);

const { error } = defineProps({
  error: Object,
});

console.log('err:::', error.statusCode, error.message, error.stack);
</script>
