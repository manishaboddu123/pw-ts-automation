let busarrived = false;
let waiting =0;

while(!busarrived){
    console.log("waiting for bus:"+waiting+"minutes");
    waiting++;
    if(waiting ==5){
        busarrived = true;
        console.log("the bus arrived");
    }
}

//do while
let num =1;
do{
    console.log("number:"+num);
    num++;
} while(num<=5);