<template>
  <div class="options">
    <input class="input-answer" v-model="update.answer" @change="onChangeText" />
    <label class="checkbox">
      <input
        class="status"
        type="checkbox"
        v-model="update.status"
        @change="onChangeChackbox"
      />
      {{ update.status ? "Correct" : "Incorrect" }}
    </label>
  </div>
</template>

<script>
export default {
  name: "MultiAnswers",
  components: {},
  props: {
    answer: Object,
  },
  data() {
    return {
      update: this.answer,
    };
  },
  methods: {
    onChangeText() {
      this.$emit("on-change-text", this.update);
    },
    onChangeCheckbox() {
      this.$emit("on-change-checkbox", this.update);
    },
  },
};
</script>

<style scoped>
  .options {
    display: flex;
  }

</style>