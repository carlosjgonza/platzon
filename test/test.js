
const expect = require('chai').expect
const platzon = require('../dist/src/platzon').default //Busca un nivel más arriba el archivo que se ejecuta y por el package.json es src/platzon.js

describe('#platzon', function(){
  it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
    const translation = platzon('Programar')
    expect(translation).to.equal('Program')
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
    const translation1 = platzon('Zorro')
    const translation2 = platzon('Zarpar')

    expect(translation1).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function(){
    const translation = platzon('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
    const translation = platzon('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })
})