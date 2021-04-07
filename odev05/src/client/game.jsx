import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false,
            hakSayisi:2
        }
    }


    kediSec = (index) => {
        const { kart, kediIndex, kartSayac, oyunSonlandi } = this.state;

        if(!oyunSonlandi){
            const yeniKart = [...kart];
            let durum;

            if(kediIndex===index){
                yeniKart[index] = "img/Kedi.jpg";
                durum = "Kazandınız :)"
            }else {
                yeniKart[index] = "img/Kopek.jpg";
                if(kartSayac===1){
                    durum = "Kaybettiniz :("
                }
            }
            this.setState({
                kart:yeniKart,
                kartSayac: this.state.kartSayac+1,
                durum,
                hakSayisi:this.state.hakSayisi-1
            });

            if(durum){
                this.setState({
                    oyunSonlandi: true
                })
            }

        }
    }

    yeniOyun = () => {
        this.setState({
            kediIndex: Math.floor(Math.random()*3),
            durum: undefined,
            kart: ["img/ArkaKapak.png","img/ArkaKapak.png","img/ArkaKapak.png"],
            kartSayac: 0,
            oyunSonlandi: false,
            hakSayisi:2

        })
    }

    render(){
        const { kart, durum , kartSayac,hakSayisi} = this.state;
        const a=kartSayac;
        return (
            <div>
                
               {kartSayac<2 && <p>{hakSayisi} hakkınız kaldı </p>}
                <p>{durum}</p>
              
                <img className="kart" src={kart[0]} onClick={()=>{this.kediSec(0)}}/>
                <img className="kart" src={kart[1]} onClick={()=>{this.kediSec(1)}}/>
                <img className="kart" src={kart[2]} onClick={()=>{this.kediSec(2)}}/>
                
                <div className="action">
                   
                    {durum && <p>
                        <Link className='play' onClick={this.yeniOyun} >Yeni Oyun</Link> 
                    </p>}
                </div>
            </div>
        );
    }
}