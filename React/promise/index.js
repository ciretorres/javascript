async function getData() {
    return await Promise.resolve("Hello!");
}
const data = getData();
console.log(data);

console.log(Promise.resolve(123));

function resolveAfter10Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 10000);
    });
}
console.log(resolveAfter10Seconds());