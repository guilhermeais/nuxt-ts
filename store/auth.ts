import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios, $cookies } from '@/utils/nuxt-instance'

interface Login {
  email: string
  password: string
}

type Token = string | null

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private token = '' as Token

  @Mutation
  private UPDATE_TOKEN(token: Token) {
    this.token = token
    console.log(token)
  }

  @Action
  async create({ email, password }: Login) {
    const { accessToken } = await $axios.$post('/login', { email, password }) // pegamos o token de acesso recebido

    $cookies.set('token', accessToken, {
      // geramos o cookie que armazena o token
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 Dias
    })

    this.context.commit('UPDATE_TOKEN', accessToken)
  }

  @Action
  public update() {
    const token = $cookies.get('token') || null // atualiza o token
    this.context.commit('UPDATE_TOKEN', token)
  }

  @Action
  public destroy() {
    // apaga o token
    $cookies.remove('token')
    this.context.commit('UPDATE_TOKEN', null)
  }
}
