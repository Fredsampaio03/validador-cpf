/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test ("Testar se o CPF valido", function() {

  var resultado =  validarCPF ('22260187005')

  expect(resultado).toBe(true)
})

test ("Testar se o CPF invalido", function() {

    var resultado =  validarCPF ('15423687456')
  
    expect(resultado).toBe(false)
  })
