<template>
  <div class="preview">
    <header>Exams: {{ exams.length }}</header>
    <div v-for="exam in exams" :key="exam.id" class="exam">
      <h1>Exam: {{ exam.id }}</h1>
      <div v-for="q in exam.questions" :key="q.id">
        <h2>{{ q.id }}. {{ q.question }}</h2>
        <div class="choicesWrapper">
          <p v-for="a in q.answers" :key="a.id">
            <span>{{ a.answer }}</span>
            <input
              type="checkbox"
              disabled
              :checked="a.status ? true : false"
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewExam',
  components: {},
  data() {
    return {
      exams: this.$store.state.exams,
    };
  },
}
</script>