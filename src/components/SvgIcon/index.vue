<template>
  <div>
    <svg style="{width, height,}">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: "#icon-",
  },
  //svg 矢量图标的名称
  name: String,
  //   svg 图标的颜色
  color: {
    type: String,
    default: "",
  },
  //   svg 的宽度
  width: {
    type: String,
    default: "16px",
  },
  // svg 的高度
  height: {
    type: String,
    default: "16px",
  },
});
</script>

<style></style>
