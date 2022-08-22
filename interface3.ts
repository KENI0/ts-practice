interface Person3 {
  name: string;
  age?: number;
  [index: string]: any;
}
function hello3(person: Person3):void {
  console.log(`안녕 ${person.name}입니다.`)
}

const P31: Person3 = {
  name: 'Mark',
  age: 36
};
const P32: Person3 = { 
  name: 'ann',
  sisters: ["Sung","Chan"]
}
const P33: Person3 ={
  name: 'axe', 
  father: P31,
  mother: P32,
}