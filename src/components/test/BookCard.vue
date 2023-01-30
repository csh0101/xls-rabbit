<template>
    <div>
        <!-- <img slot="thumb" :src="book.value.cover" alt=""> -->
        <div slot="title" data-testid="book-title">{{ book.title }}</div>
        <!-- <div slot="desc">{{ book.value.author }}</div> -->
        <!-- <div data-testid="book-title">Mock Book</div> -->
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, onBeforeMount } from 'vue';
export default defineComponent({
    name: "BookCard",
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        onBeforeMount(() => {
            console.log('MyCard is before mounted');
            try {
                console.log(props.book)
            } catch (e) {
                console.log("MyCard Inner error" + e)
            }
        });

        onMounted(() => {
            console.log('MyCard is  mounted');
            try {
                console.log(props.book)
            } catch (e) {
                console.log("MyCard Inner error" + e)
            }
        });
        return { book: props.book, onMounted }
    },
});

</script>
