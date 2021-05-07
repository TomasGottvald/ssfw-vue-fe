<template functional>
  <hr
    :class="[data.class, data.staticClass, 'sf-divider']"
    :style="[data.style, data.staticStyle]"
  />
</template>
<script>
export default {
  name: "SfDivider",
};
</script>
<style lang="scss">
@import "storefrontUI/styles/styles/components/atoms/SfDivider.scss";
</style>
