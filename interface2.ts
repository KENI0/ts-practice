
interface Person2 { 
  name: string;
  age?: number;
}
function hello2(person: Person2):void {
  console.log(`안녕 ${person.name}입니다.`);
}

hello2({name: 'Ann'})