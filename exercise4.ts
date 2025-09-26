

type Userr = {
  name: string;
  id: number;
};

type Adminn = {
  username: string;
  id: number;
};

const people: (Userr | Adminn)[] = [
    {name: "Alice", id: 1},
    {username: "root", id: 99},
    {name: "bob", id: 2}
];

function printPerson(person: Userr | Adminn) {
  if ("name" in person) {
    console.log(`User: ${person.name}, ID: ${person.id}`);
  } else {
    console.log(`Admin: ${person.username}, ID: ${person.id}`);
  }
}

function printAll(people: (Userr | Adminn)[]) {
    people.forEach(peoples => {
        printPerson(peoples)
    })
}

function countRoles(people: (Userr | Adminn)[] ) {
    let users = 0;
    let admins = 0;

    for (const person of people) {
        if ("name" in person) {
            users++;
        } else {
            admins++;
        }
    }
    return {users, admins};
}

printAll(people);

