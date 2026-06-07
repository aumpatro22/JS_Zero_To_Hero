var singnal="green";
var message="";
switch(singnal){
    case"red":
    message="stop imm";
    console.log("message:"+message)
    case"green":
    message="pass imm";
    console.log("txt"+message)
    default:
        message="dead zone"
        console.log("message:"+message)
}