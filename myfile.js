 function c(name,age){

        this.name=name,
       this.age=age,
        this.dte=function(){
        console.log(this.name +"great");
        };    
    }
var i=new c("Anila",42);
i.dte()