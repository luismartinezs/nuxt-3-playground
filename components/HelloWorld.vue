<script setup>
import useCount from "@/composables/useCount"

const msg = ref("World")
const greeting = computed(() => `Hello ${msg.value}!`)
const { count, double } = useCount(1)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="greeting">{{ greeting }}</p>
  <p>
    <button @click="count++">count is: {{ count }}</button>
    <br>
    <span>double of count is: {{ double }}</span>
  </p>
</template>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>