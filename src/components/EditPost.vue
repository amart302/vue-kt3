<template>
    <div class="parent">
        <div class="edit-post-container">
            <input type="text" v-model="text">
            <button @click="editPost(editablePost.id, text)">Подтвердить</button>
            <button @click="showEditComponent()">Закрыть</button>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                text: ""
            }
        },
        props: {
            showEditComponent: {
                type: Function,
                required: true
            },
            editablePost: {
                type: Object,
                required: true
            },
            editPost: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style scoped>
    .parent{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(108, 158, 255, 0.5);
    }
    .edit-post-container{
        width: 800px;
        height: 220px;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
    }
    input{
        width: calc(100% - 12px);
        border: solid 1px;
        border-radius: 6px;
        padding: 6px;
        font-size: 20px;
    }
</style>