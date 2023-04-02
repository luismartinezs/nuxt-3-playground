<script setup lang="ts">
import useCount from "@/composables/useCount"

const props = withDefaults(defineProps<{
  foo: string
  bar?: number
}>(), {
  bar: 1
})

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
  <div>{{ props.foo }}</div>
  <div>{{ props.bar }}</div>
</template>

<style scoped>
.greeting {
  color: red;
  font-weight: bold;
}
</style>