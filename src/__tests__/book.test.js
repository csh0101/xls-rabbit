import { render, fireEvent } from '@testing-library/vue'
import Book from '../components/Book.vue'
import { createWrapper } from '@vue/test-utils'
import BookCard from '../components/test/BookCard.vue'
// import BookCard from "../components/BookCard.vue"
jest.mock('../lib/book', () => {
    return {
        books: { value: [] },
        getBooksFromApi: jest.fn(() => {
            return Promise.resolve([{ id: 2, title: 'Mock Book' }]);
        })
    };
});
// describe('Book', () => {
//     it('should render MyCard component', () => {
//         render() 
//     })
// })

jest.mock('/Users/csh0101/lab/js-playground/xls-rabbit/src/components/BookCard.vue', () => {
    return {
        __esModule: true,
        default: require('/Users/csh0101/lab/js-playground/xls-rabbit/src/components/test/BookCard.vue').default
    }
});

describe('Book', () => {
    it('should display mock books', async () => {
        const { getByTestId, getByRole } = render(Book
            , {
                components: { BookCard },
            })
        fireEvent.click(getByRole('button'))
        await new Promise(resolve => setTimeout(resolve, 0))
        expect(getByTestId('book-title').textContent).toEqual('Mock Book')
        console.log(getByTestId('book-title').outerHTML)
    });
});
