




    const img0=document.getElementById("img0");
    const img1=document.getElementById("img1");
    const img2=document.getElementById("img2");
    const kazandı=document.getElementById("kazandiId")
    const yenildi=document.getElementById("yenildiId")
    const alanId=document.getElementById("alanId");




    var sayilar=[];
    var s0="img/bunny.jpg"
    var s1="img/cat.jpg"
    var s2="img/dug.png"
    var s=[s0,s1,s2];


    console.log(sayilar)
    var i=0;
    var sayi;
    var deste=[]

    while(i<3){
        sayi=Math.floor((Math.random() * 3));
        var yoksa=sayilar.indexOf(sayi);
        if(yoksa==-1){
            deste[sayi]=s[i];
            sayilar.push(sayi);
            i++;
        }
    }
    console.log("mammmmm"+s);


    console.log(sayilar)
    console.log("desteee"+deste)

    for(var j=0;j<3;j++){
        //document.getElementById(`img${j}`).src=deste[j];
    }

    var hak=2;
    function img0click(){
        hak--; 
        
        img0.style.opacity=1;
        if(img0.getAttribute("src")=="img/cat.jpg" && hak>=0){
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
            kazandı.style.display="block"
            alanId.style.display="none"
            
        } 
        if(hak<0){
            alanId.style.display="none"
            yenildi.style.display="block"
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
        }
        console.log(hak)
    }

      
    function img1click(){
        hak--
        img1.style.opacity=1;
        if(img1.getAttribute("src")=="img/cat.jpg" && hak>=0){
            console.log("yaadfas")
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
            kazandı.style.display="block"
            alanId.style.display="none"        
        }   
        if(hak<0){
            yenildi.style.display="block"
            alanId.style.display="none"
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
        }
        console.log(hak)
    }

    
    function img2click(){
        hak--
        img2.style.opacity=1;
        if(img2.getAttribute("src")=="img/cat.jpg" && hak>=0){
            console.log("yaadfas")
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
            kazandı.style.display="block"
            alanId.style.display="none"          
        }  
        if(hak<0){
            yenildi.style.display="block"
            alanId.style.display="none"
            img0.onclick=null
            img1.onclick=null
            img2.onclick=null
        }
        console.log(hak)
    
    }

    

module.exports={
    img2click,
    img1click,
    img0click
    
}




