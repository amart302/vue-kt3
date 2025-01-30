<template>
  <main>
    <div class="input-container">
      <input type="text" placeholder="Новый пост..." v-model="text">
      <button @click="addPost()">Добавить</button>
    </div>

    <Posts :posts="posts" :removePost="removePost" :showEditComponent="showEditComponent" />
    <EditPost v-if="editComponent" :editablePost="editablePost" :showEditComponent="showEditComponent" :editPost="editPost" />
  </main>
</template>

<script>
  import EditPost from './components/EditPost.vue';
  import Posts from './components/Posts.vue';


  export default {
    components: { Posts, EditPost },
    data(){
      return{
        posts: [
          {
            id: 1,
            text: "safasfasgf",
            comments: []
          }
        ],
        text: "",
        editablePost: null,
        editComponent: false
      }
    },
    methods: {
      addPost(){
        if(this.text == "") return;
        const newPost = {
          id: this.posts.length + 1,
          text: this.text,
          comments: []
        };
        this.posts.push(newPost);
        this.text = "";
      },
      editPost(id, text){
        if(text){
          this.posts.map(item => { if(item.id == id) item.text = text })
          this.showEditComponent();
        }
      },
      showEditComponent(id = null){
        if(!this.editComponent){
          this.editComponent = true;
          this.editablePost = this.posts.find(item => item.id == id);
        }else{
          this.editComponent = false;
          this.editablePost = null;
        }
      },
      removePost(id){
        this.posts = this.posts.filter(item => item.id != id);
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
