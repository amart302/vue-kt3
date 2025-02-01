<template>
    <div class="parent">
        <div class="edit-post-container">
            <textarea type="text" v-model="text"></textarea>
            <div class="btns">
                <button style="background-color: #216CFF;" @click="editPost($store.state.editablePost.id)">Подтвердить</button>
                <button style="background-color: #FF218B;" @click="() => {
                    $store.state.showEditComponent = false;
                    $store.state.editablePost = null;
                }">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store';

    export default {
        data(){
            return{
                text: store.state.editablePost.title
            }
        },
        methods: {
            editPost(id){
                console.log(store.state.editablePost);
                if(this.text){
                store.state.posts.map(item => { if(item.id == id) item.title = this.text })
                store.state.showEditComponent = false;
                }
            },
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
        position: relative;
        width: 800px;
        height: 220px;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
    }
    textarea{
        height: 160px;
        width: calc(100% - 12px);
        border: solid 1px;
        border-radius: 6px;
        padding: 6px;
        font-size: 20px;
        resize: none;
    }
    .btns{
        position: absolute;
        bottom: 20px;
        right: 20px;
        display: flex;
        gap: 20px;
    }
    button{
        width: 120px;
        height: 34px;
        border: none;
        border-radius: 10px;
        color: white;
        cursor: pointer;
    }
</style>