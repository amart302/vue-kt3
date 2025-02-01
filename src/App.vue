<template>
  <main>
    <div class="input-container">
      <input type="text" placeholder="Новый пост..." v-model="text">
      <button @click="addPost()">Добавить</button>
    </div>

    <Posts />
    <EditPost v-if="$store.state.showEditComponent" />
  </main>
</template>

<script>
  import EditPost from './components/EditPost.vue';
  import Posts from './components/Posts.vue';
  import store from './store';


  export default {
    components: { Posts, EditPost },
    data(){
      return{
        text: "",
      }
    },
    methods: {
      addPost(){
        if(this.text == "") return;
        const newPost = {
          id: store.state.posts.length + 1,
          title: this.text,
          comments: []
        };
        store.state.posts.push(newPost);
        this.text = "";
      },
    }
  }
</script>

<style scoped>
  .input-container{
    display: grid;
    grid-template-columns: 1fr 170px;
    gap: 20px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
  }
  input{
    border: solid 1px;
    border-radius: 6px;
    padding: 6px;
    font-size: 20px;
  }
  input:focus{
    outline: none;
  }
  .input-container button{
    background-color: #216CFF;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s;
  }
  button:hover{
    opacity: 0.8;
  }
</style>
