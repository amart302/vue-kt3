<template>
    <div class="posts-container">
        <div class="post-container" v-for="item in $store.state.posts">
            <p>{{ item.text }}</p>
            <hr>
            <div class="post-child-container">
                <button style="background-color: #216CFF;" @click="toggleComments(item.id)">Комментарии</button>
                <span>Количество комментариев - {{ item.comments.length }}</span>
                <button style="background-color: #216CFF;" @click="() => {
                    $store.state.showEditComponent = true;
                    $store.state.editablePost = item;            
                }">Изменить</button>
                <button style="background-color: #FF218B;" @click="removePost(item.id)">Удалить</button>
            </div>
            <Comments v-if="showComments[item.id]" :postData="item" :toggleComments="toggleComments" />
        </div>
    </div>
</template>

<script>
    import store from '../store';
    import Comments from './Comments.vue';

    export default {
        data(){
            return{
                showComments: {}
            }
        },
        components: { Comments },
        methods: {
            removePost(id){
                store.state.posts = store.state.posts.filter(item => item.id != id);
            },
            toggleComments(postId) {
                this.showComments[postId] = !this.showComments[postId];
            }
        }
    }
</script>

<style scoped>
    .posts-container{
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        margin-top: 40px;
    }
    .post-container{
        width: 960px;
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 10px;
    }
    .post-container p{
        width: 100%;
        font-size: 20px;
        word-wrap: break-word;
    }
    .post-child-container{
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