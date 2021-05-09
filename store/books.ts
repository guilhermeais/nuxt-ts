import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show{ 
    id: Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[] // preparamos um estado para receber todos livros
  private book = {} as Book // e outro estado para receber apenas um livro

  public get $all() {
    // um método para retornar todos livros
    return this.books
  }

  public get $single() {
    // um método para retornar um livro especifico
    return this.book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    // aqui setamos plea mutation, todos books
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    // aqui setamos pla mutation, o valor do book único
    this.book = book
  }

  @Action
  public async index(){
    const books = await $axios.$get('/books') // o $axios refere o axios do NUXT e o $get é uma propriedade exclusiva do axios no nuxt, no qual, nos retorna somente os dados da requisição

    this.context.commit('SET_ALL', books) // e aqui, fazemos um commit para a mutation set_all setar os valores de todos books
  }

  @Action
  public async Show(data: Show){
    const book = await $axios.$get(`/books/${data.id}`)

    this.context.commit('SET_SINGLE', book) 
  }
}
