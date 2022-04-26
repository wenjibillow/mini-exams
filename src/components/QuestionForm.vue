<template>
  <div class="form-wrapper">
    <div class="question-wrapper">
      <label class="label">
        Question
        <textarea class="q-input" v-model="update.question" />
      </label>
    </div>
    <div class="answers-wrapper">
      <label class="label">Answers</label>
      <div class="options">
        <div v-for="a in this.update.answers" :key="a.id">
          <MultiAnswers
            :answer="a"
            @on-change-checkbox="onChangeCheckbox"
            @on-change-text="onChangeText"
          />
        </div>
        
        <button class="add-answer-btn" @click="onAddAnswer">Add Answer</button>
      </div>
      
    </div>
  </div>
</template>

<script>
import MultiAnswers from "./MultiAnswers.vue";
export default {
  name: "QuestionForm",
  components: { MultiAnswers },
  data() {
    return {
      count: 0,
      update: this.examQuestion,
      disable: false,
    };
  },
  props: {
    examQuestion: Object,
  },
  methods: {
    onAddAnswer() {
      this.count = this.count + 1;
      this.update.answers.push({
        id: this.count,
        answer: "",
        status: false,
      });
    },
    onChangeText(updatedAnswer) {
      let foundIndex = this.update.answers.findIndex(
        (answer) => answer.id === updatedAnswer.id
      );
      this.update.answers[foundIndex] = updatedAnswer;
      this.$emit("on-save", this.update);
    },
    onChangeCheckbox(updatedAnswer) {
      let foundIndex = this.update.answers.findIndex(
        (answer) => answer.id === updatedAnswer.id
      );
      this.update.answers[foundIndex] = updatedAnswer;
      this.$emit("on-save", this.update);
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgba(159, 184, 182);
  width: inherit;
}

/* .question-wrapper .answers-wrapper {
  width: 750px;
  
} */

.question-wrapper {
  margin-bottom: 20px;
  width: 80%;
}

.answers-wrapper {
  width: inherit;
}

.options {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 10px;
}

.label {
  display: flex;
  flex-direction: column;
  font-size: 20px;
}

.add-answer-btn {
  background-color: rgb(31, 105, 64);
  color: seashell;
  /* height: 30px; */
  padding: 15px;
}

.add-answer-btn:hover {
  background-color: rgb(83, 205, 195);
  font-size: 120%;
}

/* .q-input {
  width: 80%;
} */
</style>

