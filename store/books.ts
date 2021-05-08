import { Module, VuexModule } from 'vuex-module-decorators'

@Module
export default class Counter2 extends VuexModule {
    books = ['livroTestes1', 'livroteste1']
}