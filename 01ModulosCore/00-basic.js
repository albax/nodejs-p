/*
Organizacion de Codigo JS

	Librerias/modulos
	constantes
	objetos/variables
	funciones
	eventos
	ejecuciones

Usar camelCase

	Tipos de camelCase
		UpperCamelCase
			Date()
			EventEmmiter()
		lowerCamelCase
			getElementById()
			createServer()

*/

'use strict' //modo estricto
console.log('hola mundo desde la consola')

console.log(2+5)

//console.log(window) //objeto del browser, nodeJs no lo tiene

console.log(global) // objeto de nodeJS

setInterval(function(){
	console.log('Hola HERK')
},1000)