/// <reference types = "cypress"/>

import login from '../pages/Login'

describe ('Cenários de login', ()=> {   
    
    beforeEach( function() {
        cy.fixture('user').then( (u)=> {
            this.user = u
        })
    })
    
    it('Login bem sucedido', function(){
        login.acessar()
        login.preencherForm(this.user.user)
        login.submit()
        login.validacao()
    })

    it('Login senha incorreta (abaixo do mínimo)', function(){
        login.acessar()
        login.preencherForm(this.user.pass_inv)
        login.submit()
        login.alerta('Senha deve ter no minimo 6 caracteres')
    })

    it('Login com email incorreto', function(){
        login.acessar()
        login.preencherForm(this.user.email_inv)
        login.submit()
        login.alerta('Email inválido')
    })

    it('Tentativa de login sem informar credenciais', function(){
        login.acessar()
        login.submit()
        login.alerta('Campo obrigatório')
    })

})