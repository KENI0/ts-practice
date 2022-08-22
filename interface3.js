"use strict";
function hello3(person) {
    console.log(`안녕 ${person.name}입니다.`);
}
const P31 = {
    name: 'Mark',
    age: 36
};
const P32 = {
    name: 'ann',
    sisters: ["Sung", "Chan"]
};
const P33 = {
    name: 'axe',
    father: P31,
    mother: P32,
};
