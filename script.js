const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

console.log(" \n \tEjercicio 1 : \n ")
console.log("\tNúmero\tPosición")
for(let i = 0 ; i < ejercicio1.length ; i++ ) {
  if ( (ejercicio1[i]%3 == 0) ) {
    console.log(" \n\t" + ejercicio1[i] + "\t\t" + i )
  } else {
    continue
  }
};

console.log(" \n \tEjercicio 2 : \n ")
const flag = (people) => {
  if (people.edad < 18 ) {
    console.log("🔞 " + people.nombre + " no puede ingresar");
  } else {
    console.log("🔥 " + people.nombre + " puede ingresar");
  }
};

ejercicio2.forEach((people) => {
  flag(people);
});

console.log(" \n \tEjercicio 3 : \n ")
let a = []
a[1] = 1; 
console.log(a[1]);
a[2] = 1;
console.log(a[2]);
for(let i = 3 ; i < 50 ; i++ ){
  a[i] = a[i-2] + a[i-1];
  console.log(a[i]);
};
