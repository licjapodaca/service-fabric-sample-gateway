# Instrucciones para crear el Workspace de varias apps de Sencha ExtJS

Para crear un workspace que alojara varias apps de Sencha ExtJS, solo se tiene que crear una carpeta y acceder a ella con una consola de powershell abierta con derechos elevados y ejecutar o inicializar dicha carpeta como un workspace de la siguiente manera:

```powershell
PS C:\Temp\Workspace> sencha workspace init
```

Posteriormente se debera agregar un archivo de propiedades que alojara la configuracion necesaria para la gestion de apps de ExtJS por medio de Sencha Command, el archivo debera terminar con la extension `*.properties` y con el contenido inicial indicando la ruta donde estaran a lojados las versiones de los framework de ExtJS como se muestra en el siguiente ejemplo:

```
sencha.sdk.path=/Sencha/extjs
```

Posteriormente se debera generar o instalar los framework necesarios para agregarlos al manifiesto del workspace en `workspace.json` con la siguiente instruccion:

```powershell
PS C:\Temp\Workspace> sencha config -file .\config.properties --save
```

La instruccion anterior hara que se guarden dichas propiedades en el archivo de configuracion de Sencha Command ubicado en `C:\Users\usuario_dominio\.sencha\cmd\sencha.cfg` para futuros usos.

Posteriormente se debe generar el framework o frameworks en el workspace actual ejecutando la siguiente instruccion:

```
PS C:\Temp\Workspace> sencha framework add --source C:\Sencha\extjs\ext-6.5.3.57\ --path .\frameworks\ext --key ext
```

>NOTA: Al ejecutar la instruccion anterior favor de corregir la ruta correcta del framework en el archivo de manifiesto del workspace `workspace.json` como la siguiente especificacion:

```json
"frameworks": {
	"ext": {
            "path":"frameworks/ext",
            "version":"6.5.3.57"
        }

    }
```

Finalmente se procede a crear la aplicacion ejecutando la siguiente instruccion:

```powershell
PS C:\Temp\Workspace> sencha generate app -ext -classic Frontend .\apps\frontend
```
