import { createStore } from "vuex";

const posts = [];

const store = createStore({
    state(){
        return{
            posts: posts,
            editablePost: null,
            showEditComponent: false
        }
    }
});

export default store;