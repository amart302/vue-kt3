import { createStore } from "vuex";

const posts = [
    {
        id: 1,
        text: "safasfasgf",
        comments: [ "agasdasfds" ]
    }
];

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