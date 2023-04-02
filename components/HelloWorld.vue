<script setup>
const msg = ref("World")
const greeting = computed(() => `Hello ${msg.value}!`)
const count = ref(1)
const double = computed(() => count.value * 2)
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

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>