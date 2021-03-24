import React from "react";
import ReactDOM from "react-dom";
import {img2click,img1click,img0click} from "./h"
import {karistir} from "./s"

var hak=2

 //const img0=document.getElementById("img0");
 //console.log("sadas"+document.getElementById("img0"));
//     const img1=document.getElementById("img1");
//     const img2=document.getElementById("img2");
const kazandı=document.getElementById("kazandiId")
const yenildi=document.getElementById("yenildiId")
const alanId=document.getElementById("alanId");

class App extends React.Component{
    constructor(props) { 
        var s0="img/bunny.jpg"
        var s1="img/cat.jpg"
        var s2="img/dug.png"
        var s=[s0,s1,s2];

        super(props);
        this.state = { 
            test:karistir(s)
            
            // click0:img0click(),
            // click1:img1click(),
            // click2:img2click()
          
        } 
      
    }
    
    render(){

        
        console.log(this.state.test[0])
        // {this.state.click1}
        // {this.state.click2}
        // {this.state.click0}
        
        return ( 
            
        <div > 
            
           
            <div className="kart container0"> 
                <img id="img0" className="kart" onClick={this.img0click0} src={this.state.test[0]} alt=""/>
            </div>
            <div className="kart container1">
                <img id="img1" className="kart" onClick={this.img1click1} src={this.state.test[1]} alt=""/>
            </div>
            <div className="kart container2">
               <img id="img2" className="kart" onClick={this.img2click2} src={this.state.test[2]} alt=""/>
            </div>
           
            
           

        </div>
         );
    } 
    
} 
ReactDOM.render(<App/>, document.getElementById("root"));

// img0click0(){
       
        
    //     hak--
    //     img0.style.opacity=1;
    //     //this.img0.style.opacity=1;
    //     if(img0.getAttribute("src")=="img/cat.jpg" && hak>=0){
            
    //         img0.onclick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //         kazandı.style.display="block"
    //         alanId.style.display="none"
            
    //     } 
    //     if(hak<0){
    //         alanId.style.display="none"
    //         yenildi.style.display="block"
    //         img0.onclick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //     }
    // }
    // img1click1(){
    //     hak--
    //     img1.style.opacity=1;
    //     if(img1.getAttribute("src")=="img/cat.jpg" && hak>=0){
    //         console.log("yaadfas")
            
    //         img0.onclick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //         kazandı.style.display="block"
    //         alanId.style.display="none"        
    //     }   
    //     if(hak<0){
    //         yenildi.style.display="block"
    //         alanId.style.display="none"
    //         img0.onclick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //     }
    //     console.log(hak)
    // }

    // img2click2(){
    //     hak--
    //     img2.style.opacity=1;
    //     if(img2.getAttribute("src")=="img/cat.jpg" && hak>=0){
    //         console.log("yaadfas")
    //         img0.onclick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //         kazandı.style.display="block"
    //         alanId.style.display="none"          
    //     }  
    //     if(hak<0){
    //         yenildi.style.display="block"
    //         alanId.style.display="none"
    //         img0.onClick=null
    //         img1.onclick=null
    //         img2.onclick=null
    //     }
    //     console.log(hak)
    // }