//neste arquivo é trabalhado com massa de testes dinâmica e padrão page object

import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'


describe('Cadastro', () => {

    var user = signupFactory.user()

    it('Cadastro bem sucedido de usuário', function() {     
        SignupPage.acessar()
        SignupPage.preencherForm(user)
        SignupPage.submit()
        SignupPage.validacao()
    })

    it('CPF incorreto', function() {
        user.cpf = '000000141aa'

        SignupPage.acessar()
        SignupPage.preencherForm(user)
        SignupPage.submit()
        SignupPage.alerta('CPF inválido')
    })

    it('Email incorreto', function(){
        user.email = 'user.com.br'

        SignupPage.acessar()
        SignupPage.preencherForm(user)
        SignupPage.submit()
        SignupPage.alerta('Email inválido')
    })

    it('senha com menos de 8 caracteres', function(){
        user.passconfirm = '123'

        SignupPage.acessar()
        SignupPage.preencherForm(user)
        SignupPage.submit()
        SignupPage.alerta('Senhas diferentes')
    })

    it('senhas diferentes', function(){
        user.password = '123'

        SignupPage.acessar()
        SignupPage.preencherForm(user)
        SignupPage.submit()
        SignupPage.alerta('Mínimo de 8 caracteres')
    })

    //o teste abaixo é não procedural, ou seja, executará todos os steps
     context('Campos obrigatórios', function(){

        const messages = [
            { field: 'name', output: 'Campo obrigatório' },
            { field: 'email', output: 'Campo obrigatório' },
            { field: 'birthday', output: 'Campo obrigatório' },
            { field: 'cpf', output: 'Campo obrigatório' },
            { field: 'password', output: 'Campo obrigatório' },
            { field: 'passwordConfirmation', output: 'Campo obrigatório' }
        ]

        before(function(){
            SignupPage.acessar()
            SignupPage.submit()
        })

        messages.forEach(function(msg){
            it('${msg.field} is required', function(){
                SignupPage.alerta(msg.output)
            })
        })

    })  

})