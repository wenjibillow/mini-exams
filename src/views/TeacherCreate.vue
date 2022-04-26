<template>
  <div class="create-exam-container">
    <div class="question-form-wrapper">
      <div v-for="q in this.questions" :key="q.id">
        <QuestionForm :examQuestion="q" @on-save="onSaveQuestion" />
      </div>
    </div>
    <div class="button-wrapper">
      <button class="add-question-btn" @click="onAddQuestion" v-if="save === false">
        Add Question
      </button>
      <button class="preview-btn" @click="onPreview" v-if="save === true">
        Preview
      </button>
      <button
        v-if="this.questions.length !== 0"
        :class="[save ? 'saved-btn' : 'save-btn']"
        @click="onSaveExam"
      >
        {{ save ? "Saved Exam" : "Save Exam" }}
      </button>
    </div>
  </div>
</template>

<script>
import QuestionForm from '@/components/QuestionForm.vue' 

export default {
  name: 'TeacherCreate',
  components: {
    QuestionForm,
  },
  data() {
    return {
      count: 0,
      questions: [],
      save: false,
    }
  },
  methods: {
    onAddQuestion() {
      this.count = this.count + 1;
      this.questions.push({
        question: "",
        id: this.count,
        answers: [],
      });
    },
    onSaveQuestion(updatedQuestion) {
      let foundIndex = this.questions.findIndex(
        (question) => question.id === updatedQuestion.id
      );
      this.questions[foundIndex] = updatedQuestion;
    },
    onPreview() {
      this.$router.push({ path: '/preview/exam' })
    }, 
    onSaveExam() {
      if (this.save === false) {
        this.save = true;
      }
      const examId = (Math.random() + 1).toString(36).substring(7);
      this.$store.dispatch("addExam", {
        id: examId,
        questions: this.questions,
      });
    },
  }
 
}
</script>

<style scoped>
.create-exam-container {
  background-color: rgb(216, 222, 225);
  padding: 20px;
  margin: 50px;
}

.button-wrapper {
  margin-top: 16px;
}

.add-question-btn, 
.preview-btn {
  margin-right: 10px;
  padding: 15px;
  background-color: rgb(24, 98, 115);
  color: seashell;
}

.add-question-btn:hover,
.preview-btn:hover {
  background-color: rgb(83, 205, 195);
  font-size: 120%;
}

.save-btn {
  background-color: #9f4c37;
  color: white;
  padding: 15px;
}

.save-btn:hover {
  background-color: #e76f51;
  font-size: 120%;
}

.saved-btn {
  background-color: lightgray;
  color: rgba(0, 0, 0, 0.63);
  padding: 15px;
}

</style>