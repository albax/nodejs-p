'use strict'

function singleThread() 
{
	console.log('-----------------------------------------')
	console.log('      EL PROCESO DE NODE JS           ')
	console.log('Id del proceso ..................' + process.pid)
	console.log('Titulo ..........................' + process.title)
	console.log('Directorio de Node ..............' + process.execPath)
	console.log('Directorio actual ...............' + process.cwd())
	console.log('Version de Node .................' + process.version)
	console.log('Versiones dependencias...........' + process.versions)
	console.log('Plataforma (S.O.) ...............' + process.plataform)
	console.log('Arquitectura (S.O.) .............' + process.arch)
	console.log('Tiempo activo de Node ...........' + process.uptime())
	console.log('Argumentos del proceso...........' + process.argv)
	console.log('-----------------------------------------')

	/*
	console.log(
		process.argv[0], 
		process.argv[1]
	)
	*/
	process.argv[2] = 'es un texto'
	process.argv[3] = 19
	process.argv[4] = null 
	process.argv[5] = true

	var key = 0

	for (key in process.argv)
	{
		console.log(process.argv[key]);
	}
}

singleThread()