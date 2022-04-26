<template>
  <div class="student-exams-wrapper">
    <h1>Exam: {{ this.$store.state.exams.length }}</h1>
    <div v-for="exam in this.$store.state.exams" :key="exam.id">
       <div>
        <h4>Question ID: {{ exam.id }}</h4>
        <div
          v-for="q in exam.questions"
          :key="q.id"
          :class="
            this.show && this.incorrectsAnswers.includes(q.id)
              ? 'incorrect'
              : this.show && 'correct'
          "
          id="question"
        >
          <h2>{{ q.id }}. {{ q.question }}</h2>
          <div>
            <p v-for="a in q.answers" :key="a.id">
              <label
                >{{ a.answer }}
                <input
                  type="checkbox"
                  @change="(e) => onChange(q.id, a.id, e.target.checked)"
                />
              </label>
              <span v-if="this.show && a.status === true">{{
                a.status
              }}</span>
            </p>
          </div>
        </div>
        <footer>
          <div v-if="this.show">
            <p>Correct Answers: {{ this.correct }}</p>
            <p>
              Incorrect Answers:
              {{ this.incorrect }}
            </p>
            <p>
              Incorrect Questions:
              {{ this.incorrectsAnswers.length }}
            </p>
          </div>
          <div>
            <button class="submit-btn" @click="isOpen = true">
              Submit
            </button>
            <SubmitModal :open="isOpen" @close="isOpen = !isOpen">
              <h3 class="success-text">Exam submitted successfully!</h3>
            </SubmitModal>
           </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitModal from "@/components/SubmitModal.vue"
import { ref } from "vue"
export default {
  name: 'StudentExams',
  components: { SubmitModal },
    data() {
    return {
      exam: {},
      answers: new Map(),
      incorrect: 0,
      correct: 0,
      incorrectsAnswers: [],
    };
  },
  async mounted() {
    this.exam = this.$store.state.exams.find(
      (exam) => exam.id === this.$route.params.id
    );
  },
  methods: {
    isSelected(questionId, answerId) {
      const key = questionId + "-" + answerId;
      return this.answers.get(key) === true;
    },
    onChange(questionId, answerId, answer) {
      const key = questionId + "-" + answerId;
      this.answers.set(key, answer);
    },
        correctingAnswers(id, correctAnswer, question) {
      if (correctAnswer) {
        if (this.answers.get(id)) {
          this.correct = this.correct + 1;
        } else {
          this.incorrect = this.incorrect + 1;
          this.incorrectsAnswers.push(question);
        }
      }
    },
  },
  setup() {
    const isOpen = ref(false);

    return { isOpen };
  },
}
</script>

<style scoped>
  .student-exams-wrapper {
    display: flex;
    flex-direction: column;
    background-color: lightgrey;
    padding: 50px;
  }

  .submit-btn {
    background-color: rgb(61, 140, 177);
    padding: 10px 25px;
    color: whitesmoke;
  }

  .submit-btn:hover {
    background-color: rgb(90, 198, 248);
    font-size: 120%;
  }

  .submitted-btn {
    background-color: lightgrey;
    color: rgb(74, 73, 73);
  }

  .success-text {
    color: green;
  }

</style>