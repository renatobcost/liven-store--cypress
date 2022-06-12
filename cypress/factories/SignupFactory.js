var faker =  require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    user: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            data: '1998-06-07',
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            password: '12345678',
            passconfirm: '12345678'
        }

        return data

    }

}