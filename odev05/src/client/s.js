
const karistir=(s)=>{

    console.log("kkkkkk"+s);

    var sayilar=[];
    var deste=[]
    var i=0;
    var sayi;
    while(i<3){
        sayi=Math.floor((Math.random() * 3));
        var yoksa=sayilar.indexOf(sayi);
        if(yoksa==-1){
            deste[sayi]=s[i];
            sayilar.push(sayi);
            i++;
        }
    }
    return deste;
}

module.exports={
    karistir,
}