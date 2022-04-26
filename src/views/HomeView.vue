<template>
  <div class="wrapper">
    <h1>Who are you?</h1>
    <div class="flex-container">
      <div class="boxed boxed-teacher">
        <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="a light bulb">
        <div class="text">I am a teacher</div>
        <button 
          class="btn-teacher"
          @click="onTeacherSignin"
        >
        Sign in
        </button>
      </div>
      <div class=" boxed boxed-student">
        <img src="https://images.unsplash.com/photo-1588287028941-99e3c7601d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80" alt="a book">
        <div class="text">I am a student</div>
        <button 
          class="btn-student"
          @click="onStudentSignin"
        >Sign in</button>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'HomeView',
    components: {
      
    },
    methods: {
      onTeacherSignin() {
         this.$router.push({ path: '/teacher/create' })
      },

      onStudentSignin() {
        this.$router.push({ path: '/student/exams' })
      },
    }

  }
</script>

<style scoped>
  .wrapper {
    height: 800px;
    background-image: url("https://images.unsplash.com/photo-1518548235008-15c2e3a4fdd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80");
    background-color: #cccccc; 
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
    padding: 20px
  }
  .flex-container {
    
    display:flex;
    margin-top: 50px;
    margin-left: 200px;
    margin-right: 200px;
   
  }

  .boxed {
    flex: 1;
    border: 1px solid rgb(72, 189, 239);
    padding: 10px;
    height: 200px;
    justify-content: center;
    align-items: center;
  }

  .boxed:first-child {
    margin-right: 20px;
  }

  .boxed-teacher {
    background:rgb(125, 248, 248, 0.5);
  }
  
  .boxed-student {
    background:rgb(244, 183, 183, 0.5);
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 15px;
  }
  
  .text {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  button {
    width: 200px;
    height: 30px;
  }

  .btn-teacher {
     background-color: rgb(6, 62, 62);
     color: seashell
  }

    .boxed-teacher .btn-teacher:hover {
    background-color: rgb(48, 179, 179);
    font-size: 120%;
  }

  .btn-student {
     background-color: rgba(85, 48, 48);
     color: seashell
  }

  .boxed-student .btn-student:hover {
    background-color: rgb(178, 103, 103);
    font-size: 120%;
  }
</style>
