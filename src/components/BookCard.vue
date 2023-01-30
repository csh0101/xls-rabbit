<template>
    <!-- <van-card num="2" price="2.00" desc="描述信息" title="商品标题"
        thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" /> -->
    <van-card :num="book.id" :price="book.price" :desc="book.desc" :title="book.title" :thumb="book.cover">
        <div class="title" data-testid="book-title">{{ book.title }}</div>
    </van-card>
</template>

<script>
export default {
    props: {
        book: {
            type: Object,
            required: true
        }
    },
    mounted() {
        console.log(this.book)
    }
}

</script>
