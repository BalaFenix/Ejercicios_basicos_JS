//Ejercicio 1

const jedi = { nombre: 'Luke Skywalker', edad: 19 }
jedi.edad = 25 //modificación de la edad de la variable jedi
console.log(jedi)
//Ejercicio 2

const Nombre = 'Leia'
const Apellido = 'Organa'
const Edad = 20
const Mensaje = `Soy ${Nombre} ${Apellido} ,tengo ${Edad} años y soy una princesa de Alderaan`
console.log(Mensaje)
//Ejercicio 3

const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

console.log(sable1.precio + sable2.precio) //3500
//Ejercicio 4

let precioBaseGlobal = 10000

precioBaseGlobal = 25000
console.log(precioBaseGlobal)

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}
nave1.precioFinal = nave1.precioBase + precioBaseGlobal
console.log(nave1)
nave2.precioFinal = nave2.precioBase + precioBaseGlobal
console.log(nave2)
