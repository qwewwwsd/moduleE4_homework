function hostFunc(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(key, object[key]);
        }
    }
    return Object.keys(object);
}

const obj1 = {
    a: 1,
    b: 2,
    c: "str"
}

const some_func = hostFunc(obj1)

console.log(some_func);