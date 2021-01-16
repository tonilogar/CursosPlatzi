// Estructuras repetitivas: do-while

// Otra estructura repetitiva es el do-while. A diferencia de la instrucción while,
//  un bucle do…while se ejecuta una vez antes de que se evalúe la expresión condicional.

// Reto, resuelve el bug que tiene el ejercicio.

// var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve())

if (contador === 1) {
  console.log(`Fui a ver si llovía ${contador} vez`)
} else {
  console.log(`Fui a ver si llovía ${contador} veces`)
}
