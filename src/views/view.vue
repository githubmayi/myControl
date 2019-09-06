<template>
  <div>
    <transfer
      :leftData="leftData"
      :rightData="rightData"
      :titles="['Avaliable', 'Selected']"
      @transfer="handleTransfer"
      @handleSort="handleSort"
    ></transfer>
  </div>
</template>
<script>
import view from "./view.js";
export default view;
</script>