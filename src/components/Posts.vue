<template>
    <div class="posts-container">
      <div class="post-container" v-for="item in posts">
        <p>{{ item.text }}</p>
        <hr>
        <div>
          <button style="background-color: #216CFF;">Комментарии</button>
          <span>Количество комментариев - {{ item.comments.length }}</span>
          <button style="background-color: #216CFF;" @click="showEditComponent(item.id)">Изменить</button>
          <button style="background-color: #FF218B;" @click="removePost(item.id)">Удалить</button>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
    props: {
        posts: {
            type: Array,
            required: true
        },
        showEditComponent: {
            type: Function,
            required: true
        },
        removePost: {
            type: Function,
            required: true
        }
    }
 }
</script>

<style>
    .posts-container{
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 40px;
    }
    .post-container{
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 10px;
    }
    .post-container p{
        font-size: 20px;
    }
    .post-container div{
        display: grid;
        grid-template-columns: 160px 1fr 120px 120px;
        gap: 10px;
        text-align: center;
        align-items: center;
    }
    .post-container button{
        color: white;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s;
        padding-block: 6px;
    }
</style>