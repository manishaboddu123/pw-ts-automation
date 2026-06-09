const { error } = require("node:console");

function waitfortimeout(timeout) {
    return new Promise((resolve, reject) => {
        if (timeout>5){
            reject("I can't wait for more than 5 seconds");
        }
        else{
            setTimeout(() => {
                console.log("waiting for" + timeout + "seconds")
                let iswaitingsuccess = true;
                if (iswaitingsuccess) {
                    resolve();
                }
                else {
                    reject("waiting failed");
                }
            }, timeout * 1000);
        }
    });
}


// waitfortimeout(1).then(()=>{
//     console.log("this is after 1 second");
// }).catch((error)=>{
//     console.log(error);
// });

waitfortimeout(1).then(() => waitfortimeout(19).then(() => waitfortimeout(10).then(() => { console.log("wait for timeout completed") })).catch((error) => { console.log(error) }));