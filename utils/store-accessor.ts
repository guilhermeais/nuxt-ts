import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'

let booksStore: Books

function initializeStores(store: Store<any>): void {
  booksStore = getModule(Books,store)
}

export { initializeStores, booksStore }
