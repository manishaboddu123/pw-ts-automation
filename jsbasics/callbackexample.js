function waitfor1second(cb){
    setTimeout(()=> {
        console.log("wait for 1 second")
        cb();
    },1000)
}

function waitfor2seconds(){
    setTimeout(()=> {
        console.log("wait for 2 seconds")
    },2000)
}

function waitfor3seconds(cb1, cb2){
    setTimeout(()=>{
        console.log("wait for 3 seconds")
        cb1(cb2);
    },3000)
}

waitfor3seconds(waitfor1second,waitfor2seconds)
