const str1 = 'a'

const str2 = 'f'

const obj1 = {
    a: 1,
    b: 2,
    c: "str"
}

function strInObj(str, object) {
    return str in object;
}

console.log(strInObj(str1, obj1))

console.log(strInObj(str2, obj1))