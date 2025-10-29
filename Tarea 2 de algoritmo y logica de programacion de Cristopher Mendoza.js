//Bloque 1:Ejercicios con cadenas
//1. Contar caracteres de una frase publicitaria
//Pseudocodigo
//Entrada: frase(leer), c(leer)
//Proceso: c= frase.length
//salida: Escribir la frase tiene (c) caracteres
// Javascript
function ContadorDeFrases() {
    let frase =prompt("Ingrese una frase")
    let c= frase.length
    console.log(`la frase tiene: ${c}, caracteres`)
}
ContadorDeFrases()
//2. Contar apariciones de una vocal en un titulo
//Pseudocodigo
//Entrada: titulo(leer), vocal(leer), c(asignar)
//Proceso: leer titulo, leer vocal
//Mientras (i=0;i<titulo.length;i++)
// si(titulo[i]==vocal)
//c=c+1
//Salida: Escribir la vocal (vocal) aparece (c) veces en el titulo
// Javascript
function contadorDeVocales() {
    let titulo = prompt("ingrese un titulo")
    let vocal = prompt("ingrese una vocal a buscar")
    let c=0
    for (let i=0; i<titulo.length;i++){
        if(titulo[i].toLowerCase==vocal.toLowerCase){
            c=c+1
        }
    }
    console.log(`la vocal ${vocal}apareces ${c}veces en el titulo`)
}
contadorDeVocales()
//3. Invertir un nombre de producto
//Pseudocodigo
//Entrada: nombre(leer), innombre(asignar),i(asignar)
//Proceso: leer nombre,leer innombre=""
//mientras(i=nombre.length-1;i>=0;i--)
// innmonbre= innombre+nombre[i]
//Salida Escribir el nombre invertido es (innombre)
// Javascript
function InvertirNombre() {
    let nombre =prompt("ingrese un nombre del producto") 
    let innombre=""
    for (let i=nombre.length-1;i>=0;i-- ){
        innombre= innombre+nombre[i]
    }    
    console.log(`el nombre invertido es: ${innombre}`)
}
InvertirNombre()
//4. Comparar nombres de ciudades por longitud
//Pseudocodigo
//Entrada: ciudad1(leer), ciudad2(leer), l1(asignar), l2(asignar)
//Proceso: leer ciudad1, leer ciudad2
//l1= ciudad1.length
//l2= ciudad2.length
//si(l1>l2)
//Escribir la palabra (ciudad1) es mas larga 
//si no (l2>l1)
//Escribir la palabra (ciudad2) es mas larga
//si no
//Salida Escribir las dos palabras tienen la misma longitud
// Javascript
function CompararNombres() {
    let ciudad1 = prompt("ingresar el nombre de una ciudad")
    let ciudad2 = prompt("ingresar el nombre de otra ciudad")
    l1 =ciudad1.length
    l2 =ciudad2.length
    if (l1>l2){
        console.log(`la palabra:${ciudad1}, es mas larga`)
    }else if (l2>l1){
            console.log(`la palabra:${ciudad2}, es mas larga`)
        }else{ 
            console.log("las dos palabras tiene la mimsa longitud")
        }
        }
    CompararNombres
//5. obtener inicicales de un cargo prefesional
//Pseudocodigo
//Entrada: cargo(leer),palabra(asignar) iniciales(asignar), i(asignar)
//Proceso: leer cargo, leer iniciales=""
//palabras= cargo.split("")
//mientras(i=0;i<palabras.length;i++)
//si (palabras >0)
//iniciales=iniciales+palabras[0].toUpperCase()+"."
// Salida Escribir las iniciales son (iniciales)
// Javascript
function Iniciales() {
    let cargo = prompt("ingrese un cargo profesional")
    let iniciales =""
    let palabras = cargo.split("")
    for (let i=0;i<palabras.length;i++){
        if (palabras[i] > 0){
            iniciales=iniciales+palabras[0].toUpperCase()+"."
        }
    }
    console.log(`las inciciales son: ${iniciales}`)
}
Iniciales()
//Bloque 2: versión con arreglos del bloque 1
//1. contar caracteres de varias frases publicitarias
//Pseudocodigo
//Entrada: frases[],c(asignar),i(asignar),n(leer),fs(leer)
//Proceso: frases [],leer n
//mientras(i=0;i<n;i++)
//leer fs
//frases.push(fs)
//mientras(i=0;i<frases.length;i++)
//c=frases[i].length
//Salida Escribir la frase: (frases[i]) tiene (c) caracteres
// Javascript
function arregloContadorFrase() {
    let frases =[]
    let n = parseInt(prompt(`ingrese la cantidad de frases`))
    for (let i=0;i<n;i++){
        let fs =prompt(`ingrese la frase ${i+1}`)
        frases.push(fs)
    }
    for (let i=0;i<frases.length;i++){
        let c=frases[i].length
        console.log(`la frase: ${frases[i]} tiene ${c}, caracteres`)
    }
}
arregloContadorFrase()
//2. Contar apariciones de una vocal en varios titulos
//Pseudocodigo
//Entrada: titulos[],n(leer),i(asignar),tt(leer),vocal(leer),contador(asignar)j(asignar)
//Proceso: titulos[],leer n
//mientras(i=0;i<n;i++)
//leer tt
//titulos.push(tt)
//leer vocal
//mientras(i=0;i<titulos.length;i++)
//contador=o
//si (titulos[i]==vocal)
//contador=contador+1
//Salida Escribir la vocal (vocal ) aparece (contador) veces en el titulo (titulos[i])
// Javascript
function ContadorVocales() {
    let titulos =[]
    let n = parseInt(prompt("ingrese la cantidad de titulos"))
    for (let i=0;i<n;i++){
        let tt = prompt(`ingrese el titulos ${i+1}`)
        titulos.push(tt)
    }
    let vocal =prompt("ingrese una vocal a buscar")
    for (let i=0;i<titulos.length;i++){
         let contador=0
         for (let j = 0; j < titulos[i].length; j++) {
        if (titulos[i][j].toLowerCase()==vocal.toLowerCase){
            contador=contador+1
        }
    }
    console.log(`la vocal ${vocal}aparece ${contador}veces en el titulo ${titulos[i]}`)
}
}
ContadorVocales()
//3. Invertir varios nombres de productos
//Pseudocodigo
//Entrada:nombres[],n(leer);i(asignar),nombre(leer),inmobre(asignar),j(asignar)
//Proceso: nombres[],leer n
//mientras(i=0;i<n;i++)
//leer nombre
//nombres.push(nombre)
//mientras(i=0;i<nombres.length;i++)
//innombre=""
//mientras(j=nombres[i].length-1;j>=0;j--)
//innombre=innombre+nombres[i][j]
//Salida Escibir los nombres invertidos de (nombre) es: (inmombre)
//Javascript
function InvertirNombres() {
    let nombres =[]
    let n= parseInt(prompt("ingrese la cantidad de nombre de productos"))
    for (let i=0;i<n;i++){
        let nombre = prompt(`ingrse el nombre del producto ${i+1}`)
        nombres.push(nombre)
    }
    for (let i=0;i<nombres.length;i++){
        let innombre=""
        for (let j=nombres[i].length-1;j>=0;j--){
            innombre=innombre+nombres[i][j]
        }
    console.log(`los nombres invertidos de "${nombre}" es: ${innombre}`)
}
}
InvertirNombre()
//4. Comparar longitudes de nombres de ciudades
//Pseudocodigo
//Entrada: ciudades[], n(leer), ciudad(leer), mayor(asignar), i(asignar)
//Proceso: ciudades[], leer n
//mientras(i=0; i<n; i++)
//leer ciudad
//ciudades.push(ciudad)
//mayor = ciudades[0]
//mientras(i=1; i<ciudades.length; i++)
//si(ciudades[i].length > mayor.length)
//mayor = ciudades[i]
//Salida: Escribir "La ciudad con más letras es (mayor) con (mayor.length) letras"
//Javascript
function ciudadMasLarga() {
    let ciudades = []
    let n = parseInt(prompt("Ingrese cuántas ciudades va a registrar:"))
    for (let i = 0; i < n; i++) {
        let ciudad = prompt(`Ingrese la ciudad ${i + 1}:`)
        ciudades.push(ciudad);
    }
    let mayor = ciudades[0]
    for (let i = 1; i < ciudades.length; i++) {
        if (ciudades[i].length > mayor.length) {
            mayor = ciudades[i]
        }
    }
    console.log(`La ciudad con más letras es "${mayor}" (${mayor.length} letras)`)
}
ciudadMasLarga()
//5. Obtener iniciales de varios cargos profesionales
//Pseudocodigo
//Entrada: cargos[], n(leer), i(asignar), cargo(leer), palabras[], iniciales(asignar), j(asignar)
//Proceso: cargos[], leer n
//mientras(i=0; i<n; i++)
//leer cargo
//cargos.push(cargo)
//mientras(i=0; i<cargos.length; i++)
//palabras = dividir cargos[i] por espacios
//iniciales = ""
//mientras(j=0; j<palabras.length; j++)
//iniciales = iniciales + primera letra de palabras[j] + "."
//Salida: escribir (cargos[i]) = (iniciales)
//Javascript
function obtenerIniciales() {
    let cargos = [];
    let n = parseInt(prompt("Ingrese la cantidad de cargos profesionales:"))
    for (let i = 0; i < n; i++) {
        let cargo = prompt(`Ingrese el cargo ${i + 1}:`)
        cargos.push(cargo)
    }  
    for (let i = 0; i < cargos.length; i++) {
        let palabras = cargos[i].split(" ")
        let iniciales = ""
        for (let j = 0; j < palabras.length; j++) {
            if (palabras[j].length > 0) {  
                iniciales += palabras[j][0].toUpperCase() + "."
            }
        }
        console.log(`"${cargos[i]}" = ${iniciales}`)
    }
}
obtenerIniciales();
//Bloque3:Ejercicios Individuales con ciclos
//1. Promedio de calificaciones mayores 70
//Entrada: n(leer),suma(asignar),contar(asignar),i(asignar),nota(leer),promedio(calcular)
//Proceso: leer n, suma=0, contador=0
//mientras(i=0;i<n;i++)
//leer nota
//si (nota>=70)
//suma=suma+nota
//contador++
//si (contador>0)
//promedio=suma/contador
//escribir promedio de notas>=70(promedio)
//Salida sino escribir no hay nota >=70
function promedioNotas() {
    let n = parseInt(prompt("Ingrese el número de calificaciones:"))
    let suma = 0
    let contador = 0
    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`))
        if (nota >= 70) {
            suma += nota
            contador++
        }
    }
    if (contador > 0) {
        let promedio = suma / contador;
        console.log(`Promedio de notas ≥ 70: ${promedio.toFixed(2)}`)
    } else {
        console.log("No hay notas ≥ 70")
    }
}
promedioNotas();
//2.Contar cuantos numeros negativos se ingresan
//Pseudocodigo
//Entrada:n(leer),contador(asignar),i(asignar),numero(leer)
//Proceso: leer n
//contador=0
//mientras (i=0;i<n;i++)
//leer numero
//si (numero<0)
//contador++
//Salida Escribir cantidad de numero negativos (contador)
//Javascript
function contarNegativos() {
    let n = parseInt(prompt("Ingrese la cantidad de números:"))
    let contador = 0
    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`))
        if (numero < 0) {
            contador++
        }
    }
    console.log(`Cantidad de números negativos: ${contador}`)
}
contarNegativos();
//3.Promedio de edades: mayores vs menores de edad
//Pseudocodigo
//Entrada:n(leer),sumaMayores(calcular),sumaMenores(calcular),contadoMayores(asignar)
// ,contadorMenores(asingar),i(asignar)edad(leer)promedioMayores(calular),promedioMenores(calular)
//Proceso:leer n  ,sumaMayores = 0,sumaMenores = 0,contadorMayores = 0, contadorMenores = 0;
//mientras(i=0;i<n;i++)
//leer edad
//si (edad>=18)
//sumaMayores+=edad
//contadorMayores++
//sino sumaMenores +=edad
//contaodrMenores++
//si (contadorMayores>0)
//promedioMyoes=sumaMayores/contadorMayores
//sino promedioMayores=0
//si (contadorMenores>0)
//promedioMenores=sumaMenores/contadorMenores
//sino promedioMenores=0
//Escribir promedio de mayores de edad (promedioMayores)
//Salida: escribir promedio de menores de edad (promedioMenores)
//Javascript
function promedioEdades() {
    let n = parseInt(prompt("Ingrese el número de personas:"))
    let sumaMayores = 0
    let sumaMenores = 0
    let contadorMayores = 0
    let contadorMenores = 0
    for (let i = 0; i < n; i++) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`))
        if (edad >= 18) {
            sumaMayores += edad
            contadorMayores++
        } else {
            sumaMenores += edad
            contadorMenores++
        }
    }
    let promedioMayores
    if (contadorMayores > 0) {
        promedioMayores = sumaMayores / contadorMayores
    } else {
        promedioMayores = 0
    }
    let promedioMenores;
    if (contadorMenores > 0) {
        promedioMenores = sumaMenores / contadorMenores
    } else {
        promedioMenores = 0
    }
    console.log(`Promedio de mayores de edad: ${promedioMayores.toFixed(2)}`);
    console.log(`Promedio de menores de edad: ${promedioMenores.toFixed(2)}`);
}
promedioEdades()
//4. Mostrar la tabala de multiplicar de un numero
//Pseudocodigo
//Entrada: numero(leer), i(asignar), producto(calcular)
//Proceso: leer numero
//mientras(i = 1; i <= 10; i++)
//    producto = numero * i
//    escribir "numero"  ×  i  = "producto"
//Salida: tabla completa del numero
//Javascript
function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese un número:"));

    console.log(`Tabla del ${numero}:`)
    for (let i = 1; i <= 10; i++) {
        let producto = numero * i;
        console.log(`${numero} x ${i} = ${producto}`)
    }
}
tablaMultiplicar();
//5. Promedio de números pares e impares
//Pseudocodigo
//Entrada: n(leer), i(asignar), numero(leer), sumaPares(asignar), sumaImpares(asignar)
//, contadorPares(asignar), contadorImpares(asignar), promedioPares(calcular), promedioImpares(calcular)
//Proceso: leer n, sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0
//mientras(i = 0; i < n; i++)
//    leer numero
//    si(numero % 2 == 0)
//        sumaPares += numero
//        contadorPares++
//    sino
//        sumaImpares += numero
//        contadorImpares++
//si(contadorPares > 0)
//    promedioPares = sumaPares / contadorPares
//sino
//    promedioPares = 0
//si(contadorImpares > 0)
//    promedioImpares = sumaImpares / contadorImpares
//sino
//    promedioImpares = 0
//Salida: escribir "Promedio de números pares: ", promedioPares
//Salida: escribir "Promedio de números impares: ", promedioImpares
//Javascript
function promedioParesImpares() {
    let n = parseInt(prompt("Ingrese la cantidad de números:"))
    let sumaPares = 0
    let sumaImpares = 0
    let contadorPares = 0
    let contadorImpares = 0
    for (let i = 0; i < n; i++) {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`))
        if (numero % 2 === 0) {
            sumaPares += numero
            contadorPares++
        } else {
            sumaImpares += numero
            contadorImpares++
        }
    }
    let promedioPares
    if (contadorPares > 0) {
        promedioPares = sumaPares / contadorPares
    } else {
        promedioPares = 0
    }
    let promedioImpares
    if (contadorImpares > 0) {
        promedioImpares = sumaImpares / contadorImpares
    } else {
        promedioImpares = 0
    }
    console.log(`Promedio de números pares: ${promedioPares.toFixed(2)}`)
    console.log(`Promedio de números impares: ${promedioImpares.toFixed(2)}`)
}
promedioParesImpares()
//Bloque4:Version con arreglos(version con arreglos del bloque 3)
//1. Promedio de calificaciones mayores a 70
//Pseudocodigo
//Entrada: calificaciones[], n(leer), i(asignar), nota(leer), suma(asignar), contador(asignar), promedio(calcular)
//Proceso: leer n, calificaciones[] 
//mientras(i = 0; i < n; i++)
//    leer nota
//    calificaciones.push(nota)
//suma = 0, contador = 0
//mientras(i = 0; i < calificaciones.length; i++)
//    si(calificaciones[i] >= 70)
//        suma += calificaciones[i]
//        contador++
//si(contador > 0)
//    promedio = suma / contador
//sino
//    promedio = 0
//Salida: escribir "Promedio de calificaciones ≥ 70: ", promedio
//Javascript
function promedioCalificacionesUsuario() {
    let calificaciones = []
    let n = parseInt(prompt("Ingrese la cantidad de calificaciones:"))
    for (let i = 0; i < n; i++) {
        let nota = parseFloat(prompt(`Ingrese la calificación ${i + 1}:`))
        calificaciones.push(nota)
    }
    let suma = 0
    let contador = 0
    for (let i = 0; i < calificaciones.length; i++) {
        if (calificaciones[i] >= 70) {
            suma += calificaciones[i]
            contador++
        }
    }
    let promedio
    if (contador > 0) {
        promedio = suma / contador
    } else {
        promedio = 0
    }
    console.log(`Promedio de calificaciones ≥ 70: ${promedio.toFixed(2)}`)
}
promedioCalificacionesUsuario();
//2. Contar cuántos números negativos
//Pseudocodigo
//Entrada: numeros[], n(leer), i(asignar), num(leer), contador(asignar)
//Proceso: leer n, numeros[] 
//mientras(i = 0; i < n; i++)
//    leer num
//    numeros.push(num)
//contador = 0
//mientras(i = 0; i < numeros.length; i++)
//    si(numeros[i] < 0)
//        contador++
//Salida: escribir "Cantidad de números negativos: ", contador
//Javascript
function contarNegativosUsuario() {
    let numeros = [];
    let n = parseInt(prompt("Ingrese la cantidad de números:"))

    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`))
        numeros.push(num);
    }

    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < 0) {
            contador++;
        }
    }

    console.log(`Cantidad de números negativos: ${contador}`)
}

contarNegativosUsuario();
//3. Promedio de edades: mayores vs menores
//Pseudocodigo
//Entrada: edades[], n(leer), i(asignar), edad(leer), sumaMayores(asignar), sumaMenores(asignar), contadorMayores(asignar), contadorMenores(asignar), promedioMayores(calcular), promedioMenores(calcular)
//Proceso: leer n, edades[] = [], sumaMayores = 0, sumaMenores = 0, contadorMayores = 0, contadorMenores = 0
//mientras(i = 0; i < n; i++)
//    leer edad
//    edades.push(edad)
//mientras(i = 0; i < edades.length; i++)
//    si(edades[i] >= 18)
//        sumaMayores += edades[i]
//        contadorMayores++
//    sino
//        sumaMenores += edades[i]
//        contadorMenores++
//si(contadorMayores > 0)
//    promedioMayores = sumaMayores / contadorMayores
//sino
//    promedioMayores = 0
//si(contadorMenores > 0)
//    promedioMenores = sumaMenores / contadorMenores
//sino
//    promedioMenores = 0
//Salida: escribir "Promedio de mayores de edad: ", promedioMayores
//Salida: escribir "Promedio de menores de edad: ", promedioMenores
//Javascript
function promedioEdadesUsuario() {
    let edades = [];
    let n = parseInt(prompt("Ingrese la cantidad de personas:"))
    for (let i = 0; i < n; i++) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1}:`))
        edades.push(edad);
    }
    let sumaMayores = 0, sumaMenores = 0
    let contadorMayores = 0, contadorMenores = 0
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            sumaMayores += edades[i]
            contadorMayores++;
        } else {
            sumaMenores += edades[i]
            contadorMenores++;
        }
    }
    let promedioMayores, promedioMenores
    if (contadorMayores > 0) {
        promedioMayores = sumaMayores / contadorMayores
    } else {
        promedioMayores = 0
    }
    if (contadorMenores > 0) {
        promedioMenores = sumaMenores / contadorMenores
    } else {
        promedioMenores = 0
    }
    console.log(`Promedio de mayores de edad: ${promedioMayores.toFixed(2)}`)
    console.log(`Promedio de menores de edad: ${promedioMenores.toFixed(2)}`)
}
promedioEdadesUsuario()
//4. Tabla de multiplicar de varios números
//Pseudocodigo
//Entrada: numeros[], n(leer), i(asignar), num(leer), j(asignar), producto(calcular)
//Proceso: leer n, numeros[] = []
//mientras(i = 0; i < n; i++)
//    leer num
//    numeros.push(num)
//mientras(i = 0; i < numeros.length; i++)
//    escribir "Tabla del ", numeros[i]
//    mientras(j = 1; j <= 10; j++)
//        producto = numeros[i] * j
//        escribir numeros[i], " × ", j, " = ", producto
//Salida: mostrar todas las tablas
//Javascript
function tablaMultiplicarUsuario() {
    let numeros = []
    let n = parseInt(prompt("¿Cuántos números quiere para mostrar su tabla de multiplicar?"))
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1}:`))
        numeros.push(num);
    }
    for (let i = 0; i < numeros.length; i++) {
        console.log(`Tabla del ${numeros[i]}:`)
        for (let j = 1; j <= 10; j++) {
            console.log(`${numeros[i]} × ${j} = ${numeros[i] * j}`)
        }
    }
}
tablaMultiplicarUsuario()
//5. Promedio de números pares e impares
//Pseudocodigo
//Entrada: numeros[], n(leer), i(asignar), num(leer), sumaPares(asignar), sumaImpares(asignar), contadorPares(asignar), contadorImpares(asignar), promedioPares(calcular), promedioImpares(calcular)
//Proceso: leer n, numeros[] = [], sumaPares = 0, sumaImpares = 0, contadorPares = 0, contadorImpares = 0
//mientras(i = 0; i < n; i++)
//    leer num
//    numeros.push(num)
//mientras(i = 0; i < numeros.length; i++)
//    si(numeros[i] % 2 == 0)
//        sumaPares += numeros[i]
//        contadorPares++
//    sino
//        sumaImpares += numeros[i]
//        contadorImpares++
//si(contadorPares > 0)
//    promedioPares = sumaPares / contadorPares
//sino
//    promedioPares = 0
//si(contadorImpares > 0)
//    promedioImpares = sumaImpares / contadorImpares
//sino
//    promedioImpares = 0
//Salida: escribir "Promedio de números pares: ", promedioPares
//Salida: escribir "Promedio de números impares: ", promedioImpares
//Javascript
function promedioParesImparesUsuario() {
    let numeros = [];
    let n = parseInt(prompt("Ingrese la cantidad de números:"))
    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`))
        numeros.push(num)
    }
    let sumaPares = 0, sumaImpares = 0;
    let contadorPares = 0, contadorImpares = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            sumaPares += numeros[i]
            contadorPares++;
        } else {
            sumaImpares += numeros[i]
            contadorImpares++
        }
    }
    let promedioPares, promedioImpares;
    if (contadorPares > 0) {
        promedioPares = sumaPares / contadorPares;
    } else {
        promedioPares = 0
    }
    if (contadorImpares > 0) {
        promedioImpares = sumaImpares / contadorImpares
    } else {
        promedioImpares = 0
    }
    console.log(`Promedio de números pares: ${promedioPares.toFixed(2)}`)
    console.log(`Promedio de números impares: ${promedioImpares.toFixed(2)}`)
}
promedioParesImparesUsuario()





