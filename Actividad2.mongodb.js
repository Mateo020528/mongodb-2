db.createCollection('users');
db.users.insertMany(
    [
        {
            nombre : "Mateo",
            apellido : "velez",
            correo: "mateo.velez@gmail.com",
            ciudad : "Medellin",
            pais : "Colombia",
            salario : "1080",
            edad: 22,
            altura: 175,
            peso : 178, 
        },
        {
            nombre: "Juan",
            apellido: "López",
            correo: "juan.lopez@example.com",
            ciudad: "Ciudad de México",
            pais: "México",
            salario: 35000,
            edad: 45,
            altura: 170,
            peso: 180
        },
        {
            nombre: "Emily",
            apellido: "Johnson",
            correo: "emily.johnson@example.com",
            ciudad: "Nueva York",
            pais: "Estados Unidos",
            salario: 65000,
            edad: 30,
            altura: 165,
            peso: 140
        },
        {
            nombre: "Santiago",
            apellido: "Garcia",
            correo: "santiago.garcia@example.com",
            ciudad: "Madrid",
            pais: "España",
            salario: 40000,
            edad: 55,
            altura: 175,
            peso: 160
        },
        {
            nombre: "Maria",
            apellido: "Santos",
            correo: "maria.santos@example.com",
            ciudad: "São Paulo",
            pais: "Brasil",
            salario: 30000,
            edad: 25,
            altura: 160,
            peso: 130
        },
        {
            nombre: "Ahmed",
            apellido: "Khan",
            correo: "ahmed.khan@example.com",
            ciudad: "Lahore",
            pais: "Pakistán",
            salario: 20000,
            edad: 35,
            altura: 172,
            peso: 150
        },
        {
            nombre: "Li",
            apellido: "Wei",
            correo: "li.wei@example.com",
            ciudad: "Beijing",
            pais: "China",
            salario: 55000,
            edad: 40,
            altura: 168,
            peso: 145
        },
        {
            nombre: "Anna",
            apellido: "Novak",
            correo: "anna.novak@example.com",
            ciudad: "Praga",
            pais: "República Checa",
            salario: 45000,
            edad: 33,
            altura: 170,
            peso: 135
        },
        {
            nombre: "José",
            apellido: "Fernández",
            correo: "jose.fernandez@example.com",
            ciudad: "Buenos Aires",
            pais: "Argentina",
            salario: 38000,
            edad: 48,
            altura: 175,
            peso: 170
        },
        {
            nombre: "Fatima",
            apellido: "Ali",
            correo: "fatima.ali@example.com",
            ciudad: "Karachi",
            pais: "Pakistán",
            salario: 22000,
            edad: 28,
            altura: 163,
            peso: 140
        },
        {
            nombre: "Luca",
            apellido: "Rossi",
            correo: "luca.rossi@example.com",
            ciudad: "Roma",
            pais: "Italia",
            salario: 42000,
            edad: 37,
            altura: 178,
            peso: 160
        },
        {
            nombre: "Sophie",
            apellido: "Dubois",
            correo: "sophie.dubois@example.com",
            ciudad: "Paris",
            pais: "Francia",
            salario: 50000,
            edad: 32,
            altura: 165,
            peso: 125
        },
        {
            nombre: "Amir",
            apellido: "Hosseini",
            correo: "amir.hosseini@example.com",
            ciudad: "Teherán",
            pais: "Irán",
            salario: 28000,
            edad: 42,
            altura: 180,
            peso: 170
        },
        {
            nombre: "Elena",
            apellido: "Ivanova",
            correo: "elena.ivanova@example.com",
            ciudad: "Moscú",
            pais: "Rusia",
            salario: 60000,
            edad: 39,
            altura: 170,
            peso: 140
        },
        {
            nombre: "Mohamed",
            apellido: "Abdelaziz",
            correo: "mohamed.abdelaziz@example.com",
            ciudad: "El Cairo",
            pais: "Egipto",
            salario: 25000,
            edad: 29,
            altura: 175,
            peso: 155
        },
        {
            nombre: "Ananya",
            apellido: "Patel",
            correo: "ananya.patel@example.com",
            ciudad: "Bombay",
            pais: "India",
            salario: 33000,
            edad: 31,
            altura: 160,
            peso: 135
        },
        {
            nombre: "Johan",
            apellido: "Andersson",
            correo: "johan.andersson@example.com",
            ciudad: "Estocolmo",
            pais: "Suecia",
            salario: 48000,
            edad: 43,
            altura: 180,
            peso: 175
        },
        {
            nombre: "Gabriela",
            apellido: "Vargas",
            correo: "gabriela.vargas@example.com",
            ciudad: "Bogotá",
            pais: "Colombia",
            salario: 32000,
            edad: 27,
            altura: 165,
            peso: 150
        },
        {
            nombre: "Marco",
            apellido: "Moretti",
            correo: "marco.moretti@example.com",
            ciudad: "Milán",
            pais: "Italia",
            salario: 47000,
            edad: 36,
            altura: 175,
            peso: 160
        },
        {
            nombre: "Priya",
            apellido: "Gupta",
            correo: "priya.gupta@example.com",
            ciudad: "new york",
            pais: "Estados unidos",
            salario: 2700,
            edad: 34,
            altura: 155,
            peso: 130
        },
        {
            nombre: "Miguel",
            apellido: "Fernández",
            correo: "miguel.fernandez@example.com",
            ciudad: "Madrid",
            pais: "España",
            salario: 37000,
            edad: 50,
            altura: 172,
            peso: 175
        }
    ]
)
db.users.find();
//Operaciones de Eliminación

db.users.insertOne({
    nombre: "Miguel",
    apellido: "Fernández",
    correo: "borrar@riwi.io",
    ciudad: "Madrid",
    pais: "España",
    salario: 37000,
    edad: 50,
    altura: 172,
    peso: 175
});

db.users.insertOne({
    nombre: "Juan",
    apellido: "Fernández",
    correo: "",
    ciudad: "Madrid",
    pais: "España",
    salario: 37000,
    edad: 50,
    altura: 172,
    peso: 175
})
db.users.insertOne({
    nombre: "Juan",
    apellido: "Fernández",
    correo: "juan@spam.com",
    ciudad: "Roppongi",
    pais: "Tokyo",
    salario: 1000,
    edad: 20,
    altura: 172,
    peso: 175
})
db.users.insertOne({
    nombre: "camilo",
    apellido: "Flores",
    correo: "juan@gmail.com",
    ciudad: "pekin",
    pais: "china",
    salario: 0,
    edad: 20,
    altura: 172,
    peso: 175
})
db.users.insertOne({
        nombre: "Priya",
        apellido: "Gupta",
        correo: "priya.gupta@example.com",
        ciudad: "new york",
        pais: "Estados unidos",
        salario: 5100,
        edad: 34,
        altura: 155,
        peso: 130
})


// Eliminar todos los usuarios que tienen un salario menor que 2000 dólares.
db.users.deleteOne({ salario: { $lt: 2000 } });

// Eliminar usuarios que tienen una edad menor que 25 años.
db.users.deleteOne({ edad: { $lt: 25 } });

// Borrar todos los usuarios que viven en "París".
db.users.deleteMany({ciudad: { $eq: "Paris"}});

// Eliminar usuarios que tienen un peso superior a 180 libras.

db.users.deleteOne({peso:{$gt: 180}});

// Eliminar usuarios que tienen una altura inferior a 160 centímetros.

db.users.deleteOne({altura: {$lt: 160}});
// Eliminar todos los usuarios que tienen el nombre "John" y el apellido "Doe".

db.users.deleteMany({nombres: { $eq:"Mateo"}});

// Borrar usuarios que tienen una dirección de correo electrónico específica, por ejemplo, "borrar@riwi.com".

db.users.deleteOne({correo: {$eq: "borrar@riwi.io"}});

// Eliminar usuarios que no tienen una dirección de correo electrónico registrada.

db.users.deleteOne({correo: {$exists: false}});

// Eliminar usuarios que viven en "Tokyo".
 db.users.deleteOne({pais: {$eq: "Tokyo"}});

// Borrar todos los usuarios que son menores de 18 años.
db.users.deleteMany({edad: {$eq: 18}});

// Eliminar usuarios que tienen un salario igual a 0.
db.users.deleteOne({salario: {$eq: 0}});

// Borrar usuarios que viven en "New York" y tienen un salario superior a 5000 dólares.

db.users.deleteOne({
    $and:[
        {ciudad: {$eq: "new York"}},
        {salario: {$gt: 5000}}
    ]
});
// Eliminar usuarios que tienen una dirección de correo electrónico que contiene la palabra "spam".

db.users.deleteOne({correo: {$regex: /^spam/}})

// Borrar usuarios que viven en "Bello" y tienen más de 50 años.
db.users.deleteOne({ciudad: {$eq: "Bello"}});

// Eliminar todos los usuarios que tienen el apellido "González".

db.users.deleteMany({apellido: {$eq: "Gonzales"}});

// Borrar usuarios que tienen una edad superior a 70 años.

db.users.deleteOne({edad: {$gt: 70}});


// Eliminar usuarios que tienen un país de residencia igual a "Canadá" y un salario inferior a 4000 dólares.
db.users.deleteOne({
    $and:[
        {pais: {$eq: "Canada"}},
        {salario: {$lt: 4000}}
    ]
});

// Borrar usuarios que tienen un salario entre 1000 y 2000 dólares.
db.users.deleteOne({
    $and:[
        {salario: {$gt: 1000}},
        {salario: {$lt: 2000}}
    ] 
    });
// Eliminar usuarios que tienen una edad igual a 30 años.
db.users.deleteMany({edad: {$gt: 30}});

// Borrar usuarios que tienen una altura superior a 190 centímetros.
db.users.deleteOne({altura: {$lt: 190}});