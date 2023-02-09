



function printTable(){
     
    var tables= document.querySelector(".tables");
    var num = document.querySelector("input").value;

    console.log("hello");
    tables.innerHTML=" ";
    tables.style="display:inline-block";

    for (let i=1;i<11;i++){
           var product=num*i;
           tables.innerHTML += (num + " X " + i + " = " + product  );
           tables.innerHTML+="<br>"    
    }


   
}

// function remove(){
//     tables.innerHTML=" ";
    
//     for (let i=1;i<11;i++){
//         var product=num*i;
//         tables.innerHTML += (num + " X " + i + " = " + product  );
//         tables.innerHTML+="<br>"    
//  }

// }




