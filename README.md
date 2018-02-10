# Platzon

Proyecto para curso de fundamentos de JS Platzi. Módulo para crear lenguaje inventado.
[Curso de Fundamentos de JS](https://platzi.com/clases/fundamentos-javascript/)

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install platzon
```

## Uso

```
import platzon from 'platzon'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS

```

## Créditos
- [Carlos González](www.sancrisoft.com)

## Licencia
[MIT](https://opensource.org/licenses/MIT)