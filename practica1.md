## Ejercicio1
* La función recibe un parámetro.
* Debe comprobar que es un número y que está entre 18 y 120.
* Si la `edad` está entre 18 y 120 devolverá una cadena de caracteres `Puedes conducir`. 
* En caso contrario devolverá: `Introduce un numero válido`
  
## Ejercicio2
* La función recibe un parámetro.
* Será un número del 1 al 12 (o un string-numero) 
* Devolverá el nombre del mes (primera con mayúscula):
  `"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"`
* Si no es correcto el parámetro devolverá `No es un mes`
  
## Ejercicio3
* La función recibe tres parámetros: `operación`, `numero1` y `numero2`
* Operación debe ser "suma", "resta", "multiplicación" o "división". 
* Los números deben ser números.
* Si no son números devolverá: `Los valores no son números`
* Si la operación no es ninguna de las citadas devolverá: `Introduce operación válida`
* Si todo es válido devolverá el resultado de la operación numero1*numero2, por ejemplo.
* En el caso de la división si el segundo es 0 devolverá: `No dividir por 0`
  
## Ejercicio4
* La función recibe dos parámetros.
* Número y letra de DNI
* Debe ser un número entre 0 y 999999999 o devolverá: `El número no es válido`
* Si es válido devolverá (si la letra es el módulo 23 del número en el array de letras que se expone a continuación): `El DNI es correcto`
* En caso contrario devolverá: `La letra o el número proporcionados no son correctos`.
```js
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
   'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
letra = letratoUpperCase();
```
   
## Ejercicio5
* La función recibe un parámetro.
* Si no es un array devolverá: `No es posible`
* Si es un array devolverá el tercer valor del array. 
* Si no hay tercer valor devolverá `No es posible`
  
## Ejercicio6
* La función recibe un parámetro. 
* Comprobará si es A,B,C,D o E. 
* Pasará las notas de A a E (mayúsculas a texto)
* Si no es una de las letras pondrá: `Introduce una nota válida`
* Si es A: `Nota entre 8 y 10`
* Si es B: `Nota entre 6.5 y 8`
* Si es C: `Nota entre 5 y 6.5`
* Si es D: `Nota entre 4 y 5`
* Si es E: `Nota entre 0 y 4`
  
## Ejercicio7
* La función recibe un parámetro.
* Comprobará que es un número positivo. (o string-numero)
* Si es positivo devolverá cuántas veces se debe sumar para llegar o superar 100. 
* Si no es un entero positivo devolverá: `Introduce un número positivo`

## Ejercicio8
* La función recibe un parámetro.
* Comprobará que es un número del 1 al 9 (o string-numero)
* Si no es un número posible devolverá: `Introduce un número de 1 a 9`
* Si es posible devolverá la tabla de multiplicar del número en el siguiente formato: 
  Tabla del 1: `1x1=1,2x1=2,3x1=3,4x1=4,5x1=5,6x1=6,7x1=7,8x1=8,9x1=9`.
  Tabla del 6: `1x6=6,2x6=12,3x6=18,4x6=24,5x6=30,6x6=36,7x6=42,8x6=48,9x6=54`.

## Ejercicio9
* La función recibe dos parámetros. Filas y columnas.
* Los números deben ser números menores que 10. (No valen string-numeros). 
* Generará un string con una tabla html con x filas y x columnas.
* Si no se cumplen los requisitos devolverá:
`Introduce dos números positivos menores que 10`
* Si se cumplen devolverá la tabla (sin espacios), ejemplos:
Tabla 1x1:
`<table><tr><td></td></tr></table>`
Tabla 2x3
`<table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>`
 
## Ejercicio10
* La función toma la fecha actual y devuelve en un string el día y el mes en el siguiente formato: 
* El número del día se obtiene con `.getDay()` y el del mes `.getMonth()`
  
## Ejercicio11
* La función recibe un parámetro.
* Comprueba si es un string. 
* Si no lo es devolverá: `Mete un string`
* Si es un string devolverá:
  * Si su longitud es mayor que 10: `substring:` y los caracteres 2,3,4. Por ejemplo: con `pruebaotravez`devuelve `substring:rue`
  * Si su longitud es menor o igual a 10: `longitud:` y su longitud `longitud:3`
  
## Ejercicio12
* La función recibe un parámetro.
* Comprueba si es un string. 
* Si no lo es, devolverá: `Mete un string`
* Si es un string devolverá el string invertido. Para `hola` devuelve `aloh`
  
## Ejercicio13
* La función recibe un parámetro.
* Comprueba si es un string. Si no lo es, devolverá: `Mete un string`
* Si es un string devolverá el string en mayúsculas `hola`=> `HOLA`
  
## Ejercicio14
* La función recibe un parámetro.
* Comprueba si es un string. Si no lo es, devolverá: `Mete un string`
* Si es un string, devolverá: 
  * `true` si contiene `DAW`
  * `false` en caso contrario
* `DAW` debe ir en mayúsculas
* Ejemplos: `Estoy en daw` => false; `Curso DAW`=> true
  
## Ejercicio15
* La función recibe tres parámetros.
* Comprueba si son string. 
* Si alguno no lo es, devolverá:`Alguno no es string`
* Si todos son string, debe devolver un stringify de un json generado:
  `{nombre:nombre,apellido1:apellido1,apellido2:apellido2}`

## Ejercicio16
* La función recibe un parámetro.
* Comprueba si es un string. 
* Si no lo es devolverá: `Mete un string`
* Si es un string, devolverá el mismo string. pero cambiando `suspender` por `aprobar`.

## Ejercicio17
* La función recibe un parámetro. 
* Será siempre un array numérico (No hace falta comprobarlo) 
* Devuelve un string en el que haya una lista no ordenada html con los elementos del array. (sin espacios)
  
## Ejercicio18
* La función recibe un parámetro.
* Será siempre un array numérico (No hace falta comprobarlo)
* Devuelve un string en el que haya una lista ordenada html con los elementos del array en orden inverso. (sin espacios)
  
## Ejercicio19
* La función recibe un parámetro. 
* Será siempre un JSON (No hace falta comprobarlo)
* El JSON tendrá las claves nombre, apellido1 y apellido2, pero pueden venir en cualquier orden. 
* Devuelve un string con nombre apellido1 apellido2. (Con espacios y un . Final)

## Ejercicio20:
* La función recibe dos parámetros. 
* El primero será siempre un array y el segundo un número (No hace falta comprobarlo).
* Debe devolver un stringify de un json generado de la posicion
  `{resultado:array[posicion]};`
* Si no existe el valor, o no es un array o no es un número,devolverá: `No es posible`