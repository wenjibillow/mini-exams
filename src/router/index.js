import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentExams from '../views/StudentExams.vue'
import TeacherCreate from '../views/TeacherCreate.vue'
import PreviewExam from '../views/PreviewExam.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: "/teacher/create",
    name: "create",
    component: TeacherCreate,
  },
  {
    path: '/student/exams',
    name: 'exams',
    component: StudentExams,
  },
  {
    path: '/preview/exam',
    name: 'exam',
    component: PreviewExam,
  }
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
