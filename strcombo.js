//Function to generate all possible combinations of a given string



function combo(str){

     

    var s = ""
    let solo;
    let two_pk
    for(var i=0; i< str.length;i++){

        s =s+ str[i]
 
        solo = str[i]

        console.log(solo)

        for(var j=1; j<str.length;j++){


            
          
         
          two_pk = str[i]+str[j]

          
             console.log( two_pk)

        }    }

       console.log(s)
}

combo("bone")

combo("java")

combo("boat")

combo("lemon")