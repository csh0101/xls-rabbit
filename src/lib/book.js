// books.js
import { ref } from 'vue'

export const books = ref([])

export async function getBooksFromApi() {
    const response = await fetch('https://example.com/books');
    const data = await response.json();
    books.value.push(...data)
}
