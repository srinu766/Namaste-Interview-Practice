
function generateAtoZ() {
    const alphabets = [];
    for (let i = 65; i <= 90; i++) {
        alphabets.push(String.fromCharCode(i));
    }
    return alphabets;
}




const res = generateAtoZ();
console.log(res);