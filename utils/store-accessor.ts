import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Books from '@/store/books'
import Auth from '@/store/auth'

let auth: Auth
let books: Books

function initializeStores(store: Store<any>): void {
  books = getModule(Books,store)
  auth = getModule(Auth,store)
}


export { initializeStores, books, auth }
