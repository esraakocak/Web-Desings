
var vize=prompt("vize notunuxu girin");
var final=prompt("final notunuzu girin");
  
    function dersSonucu(vize,final){
        var not=parseInt(vize*0.4 + final*0.6);
             if(not>=50) {
                 alert("geçtiniz "  +not);
             }else{
                 alert("kaldınız");
             }
    } 
      dersSonucu(vize,final);