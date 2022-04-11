const data = [2, 3, 5, 12, 54, 5, -1, 0, 4, 23, 66, 7];
let data1 = data;

data1.push(0);
data1.unshift(0)

for (let i = 1; i < data.length - 1; i++){
    data1[i-1] = data1[i] * data[i-1] - data[i+1]
}

data1.pop()
data1.pop()

console.log(data1)