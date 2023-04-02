export default function useCount(val: number) {
  const count = ref(val)
  const double = computed(() => count.value * 2)

  return {
    count,
    double
  }
}
