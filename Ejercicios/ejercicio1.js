//CONSIGNA = 11, 33, 2, -1, 110, 99, 8 obtener segundo mayor impar

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
});

let nums = [11, 33, 2, -1, 110, 99, 8]

function calcularImpares() {
    let impares = []

    for (let a = 0; a < nums.length + 1; a++) {
        let num = nums[a]

        if (num % 2 != 0) {
            if (impares.length < 2) {
                impares[impares.length] = num
            }
            else{
                if (num > impares[0]) {
                    if(num > impares[1]){
                        if (impares[1] > impares[0]) {
                            impares[0] = num
                        }
                        else{
                            impares[1] = num
                        }
                    }
                    else{
                        impares[0] = num
                    }
                }
                else if(num > impares[1]){
                    impares[1] = num
                }
            }
            
        }
    }

    if (impares[1] > impares[0]) {
        return impares[0]
    }
    else{
        return impares[1]
    }

}

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(calcularImpares())
});