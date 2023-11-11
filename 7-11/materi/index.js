const { resolveSoa } = require('dns');
// CommonJS / ESM = Ecmascript
const http = require('http');
const {testFunction, newFunction} = require('./function');

// var server = http.createServer((req, res) => {
//     res.write('Saya syamil');
//     //untuk mengirim ke user, equals to cout
//     res.end()0;
// });

// PROMISE 
const printAgakTelat = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('mabar');
        }, 1000 * 5 //ini delaynya, dengan satuan milisecond
        );
    });
}

var server = http.createServer((req, res) => {
    switch (req.url) {
        case '/about':
            console.log('hai hhe');
            console.log('otw');
            printAgakTelat()
            .then((value) => {
                console.log(value);
                console.log('gasss');
             } )
            .catch((error) => console.log(error))
            // testFunction();
            // newFunction('Ini berasal dari parameter');
            res.write('Ini about!');
            res.end();
        break;
        case '/contact':
            res.write('Ini contact!');
            res.end();
        break;
        default:
                res.write('404 Not Found');
                res.end();
        break;
    }
    // if(req.url == '/about'){
    //     res.write('Ini about!');
    //     res.end();
    // }else {
    //     res.write('404 Not Found');
    //     res.end();

    // }
});

const port = 3000;
server.listen(port);
console.log(`Server berjalan di http://localhost:${port}`);