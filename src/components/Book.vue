<template>
    <div class="books">
        <book-card v-for="book in books" :book="book" :key="book.id"></book-card>
    </div>
    <!-- <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="book in books" :key="book.id">
            <book-card :book="book"></book-card>
        </van-cell>
    </van-list> -->
    <!-- test  -->
    <button @click="loadMore">Load More</button>
</template>
<script>
import { defineComponent, ref } from 'vue';
import BookCard from './BookCard.vue'
// import BookCard from './test/BookCard.vue';
import { getBooksFromApi } from '../lib/book'
export default defineComponent({
    name: "Book",
    components: {
        BookCard,
    },
    setup(_, ctx) {

        const loading = ref(false);
        const finished = ref(false);
        const books = ref([]);
        async function loadMore() {
            try {
                const newBooks = await getBooksFromApi()
                books.value.push(...newBooks)
            } catch (err) {
                console.log("Components Inner Err:" + err)
            }
        };
        const onLoad = () => {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    books.value.push({ "id": "csh0101", "desc": "一本好书", "title": "九天", "price": 15.5, "cover": "https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" })
                }

                // 加载状态结束
                loading.value = false;

                // 数据全部加载完成
                if (books.value.length >= 40) {
                    finished.value = true;
                }
            }, 1000);
        };
        // return { books, loadMore, loading, finished }
        return { books, loadMore, loading, finished, onLoad }
    },
})
</script>