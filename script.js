const dataBase = {};

for (let i = 1; i < 3; i++) {
    dataBase.user = {};
    let name = prompt(`User ${[i]}
    Enter your name: `);
    let age = +prompt(`User ${[i]}
    Enter your age: `);
    dataBase.user = {
        name,
        age
    }

    console.log(`User - ${i}
        Name - ${dataBase.user.name}
        Age - ${dataBase.user.age}`);
}

console.log(dataBase);