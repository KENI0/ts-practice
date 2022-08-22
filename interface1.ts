interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1):void {
  console.log(`hi ${person.name}입니다.`);
}
const p1: Person1 = { 
  name: 'Mark',
  age: 39, 
}

hello1(p1);