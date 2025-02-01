<template>
    <div class="comments-container">
        <div class="add-comment-container" style="margin-bottom: 10px;" >
            <input type="text" v-model="text">
            <button style="background-color: #216CFF;" @click="addComment()" >Добавить</button>
        </div>
        <div class="comment-container" v-for="(item, index) in postData.comments" >
            <p>{{ item }}</p>
            <button style="background-color: #FF218B;" @click="remomveComment(index)">Удалить</button>
        </div>
        <button class="close-comments-btn" style="background-color: #216CFF;" @click="toggleComments(postData.id)">Спрятать</button>
    </div>
</template>

<script>
import store from '../store';

    export default {
        data(){
            return{
                text: ""
            }
        },
        props: {
            postData: {
                type: Object,
                required: true
            },
            toggleComments: {
                type: Function,
                required: true
            }
        },
        methods: {
            addComment(){
                store.state.posts.map(item => item.id == this.postData.id ? this.postData.comments.push(this.text) : item)
                this.text = "";
            },
            remomveComment(index){
                this.postData.comments.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .comments-container{
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 50px;
    }
    .add-comment-container{
        display: grid;
        grid-template-columns: 1fr 120px;
        gap: 20px;
    }
    .comment-container{
        display: grid;
        grid-template-columns: 1fr 110px;
        gap: 20px;
    }
    input{
        height: 44px;
        border: solid 1px;
        border-radius: 10px;
        padding-inline: 6px;
        font-size: 18px;
    }
    p{
        height: 34px;
        display: flex;
        align-items: center;
        border: solid 1px;
        border-radius: 10px;
        padding: 6px;
        font-size: 18px;
    }
    button{
        color: white;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s;
        padding-block: 6px;
    }
    .close-comments-btn{
        width: 120px;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>