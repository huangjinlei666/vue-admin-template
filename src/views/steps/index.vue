<template>
  <div class="app-container">
    <el-steps :active="actives">
      <el-step
        title="步骤 1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤 2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      <el-step title="步骤 4" description="这段就没那么长了"></el-step>
    </el-steps>
    <el-button type="primary" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actives: 0,
    };
  },
  methods: {
    next() {
        this.actives>3?this.actives=0:this.actives++
    },
  },
};
</script>

<style>
</style>