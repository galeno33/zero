import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServidorproviderProvider } from '../../providers/servidorprovider/servidorprovider';

declare var google:any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //declarando variaveis para implementar o button e chamas as categorias
  categoria: any;
  

   @ViewChild('map') map: ElementRef; 
  constructor(
    public navCtrl: NavController,
    public servidor: ServidorproviderProvider
    ) {

     
  }

  //metodo para ser chamada pelo button
buscarGluten(){
  this.servidor.getBuscar()
  .subscribe(
    //verificar aqui o variavel que vai comportar o valor da latitude e longitude
     data => this.categoria = data,
     
     );
  
}

  ionViewDidLoad(){
    this.showMap();
  }

  //cria o mapa  
  showMap(){                                 //pegar a latitude e longitude do banco de dados
    const position = new google.maps.LatLng(-2.508316, -44.303042);//a posição recebe a localização informada no mapa gerado 
    //objeto
    const options = {
      center: position,//informa a localização acima
      zoom: 15
    };

    const map = new google.maps.Map(this.map.nativeElement, options);

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });

    /*let content = `
      <div id="myid" class="item-thumbnail-left item-text-wrap"
        <ion-item>
          <ion-row>
            <h6> `+marker.title+` </h6>
          </ion-row>
          </ion-item>
      </div>
    ` */
   // this.addinfowindow(marker, content);

  }


  //mostrar as informações no marcador do mapa
/*  addinfowindow(marker, content){ 
    let infowindow = new google.maps.infowindow({
      content: content
    })

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(this.map, marker)
    })
  }*/


}
