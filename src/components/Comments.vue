<template>
    <div class="comments-container">
        <div class="comment-container" v-for="item in postData.comments" >
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            postData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>