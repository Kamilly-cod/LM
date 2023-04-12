# Tutorial de primeros pasos con Docker, node.js y mocha 
Primeros pasos con el entorno a partir de una sesión de trabajo que incluye instalación de **node.js con Docker**.

## Creación del entorno de trabajo
Una vez instalado el software Docker Desktop en nuestro equipo y comprobado que arranca sin errores, realizar los siguientes pasos:
1. Crear directorio `proyectos-docker` en nuestro directorio de `Documentos`.
2. Descomprimir el fichero `node-mocha.zip` con la opción **Extraer aquí**.
3. Se habrá creado el directorio `node-mocha` dentro de `proyectos-docker`.
4. Abrir Terminal cmd o PowerShell y situarse en el directorio `node-mocha`.
5. Ejecutar el comando de creación de los contenedores y arranque inicial de **docker compose**:
   ```
    docker compose up -d
    ```
6. Comprobar en la aplicación `Docker Desktop` que en el apartado de contenedores tenemos un *grupo* llamado `node-mocha` con un contenedor del mismo nombre. Si están ambos en verde quiere decir que han arrancado bien.

## Arranque y parada de los contenedores
El arranque y parada se puede hacer de dos maneras:
* desde `Docker Desktop`pulsando los botones con lo siconos universales de *play* y *stop*.
* desde una sesión de terminal, en la carpeta donde hemos descargado el fichero `docker-compose.yml` ejecutando los comandos: 
    ```
    docker compose start
    docker compose stop
     ```

## Acceso al contenedor `node-mocha`
El acceso al contenedor se puede conseguir de varias maneras:
1. Desde un terminal ejecutando el comando:
    ```
    docker exec -it node-mocha sh
    ```
2. Desde una apliación que tenga algún nivel de integración con Docker como por ejemplo el editor Visual Studio Code o el IDE IntelliJ.

   2.1. Con **Visual Studio Code**: 
    * Instalar la extensión **Remote - Containers**
    * Ejecutar la opción `Attach to container` seleccionando el contenedor `node-mocha`
    * En la nueva ventana generada, ejecutar **Terminal | Nuevo Terminal**

   2.2. Con **IntelliJ**
    * Activar el panel de **Services** (**View | Tool Windows | Services**)
    * Conectarse a docker pulsando el botón **+** y seleccionando **Docker connection**
    * Elegir la opción **Docker Desktop Windows**
    * De la lista de contenedores seleccionar `node-mocha` y con botón derecho del ratón seleccionar **Create Terminal**

## Ejecución de los tests con `mocha`
Una vez se ha obtenido una conexión al contenedor hay que acceder al directorio donde están los ejercicios que queremos probar con **mocha**.

1. Ir al directorio donde están los ejercicios de la práctica 1
```
~ # cd /home/node/practica1
/home/node/practica1 #
```

2. Ejecutar el comando mocha
Al ejecutar el comando `mocha` en el mismo directorio donde están los ejercicios y sus correspondientes tests, nos dirá qué ejercicios están superados.
```
/home/node/practica1 # mocha


  Practica1
    Ejercicio1
      ✔ Ejercicio misterio1
    Ejercicio2
      1) Ejercicio misterio2
    Ejercicio3
      2) Ejercicio misterio3
    Ejercicio4
      3) Ejercicio misterio4
      ...
```

## Proceso de trabajo
1. Los enunciados de los ejercicios están en el fichero **`practica1.md`**
2. Programamos un ejercicio. Cada ejercicio se debe entregar en su `function`. Para Ejercicio1, en la function `misterio1`, y así sucesivamente.
3. La carpeta **practica1** tiene dos ficheros:
   * **practica1.js**: las funciones sin código a la espera de ser completadas.
   * **tests.js**: los tests que mocha ejecutará para comprobar si lo programado es correcto.
4. Esa carpeta está mapeada con el directorio de `/home/node` en el contenedor, de modo que cualquier modicación en sus ficheros es vista inmediatamente por el contenedor sin necesidad de copiar los ficheros.
4. Cuando queramos probar un ejercicio, desde una sesión abierta en el contenedor y situados en el directorio `/home/node/practica1` ejecutamos `mocha` y obtendremos la lista de los tests que han funcionado y/o los que siguen dando error.
