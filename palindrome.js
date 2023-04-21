let str = "Ankit";
let N = str.length;
let b="";
    for(i=N-1; i>=0; i--){
        b=b+str[i];
    }
    if(b==str){
        console.log("Yes");
    }
   else{
       console.log("No");
   }