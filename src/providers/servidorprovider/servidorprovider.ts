import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


/*
  Generated class for the ServidorproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorproviderProvider {

  url: string ="http://localhost/phpmyadmin/db_structure.php?server=1&db=loja1_appzero&token=dfdf4a040728eb407e5f94f4f02b1346";

  constructor(public http: Http) {
    console.log('Hello ServidorproviderProvider Provider');
  }

  getBuscar(){
    return this.http.get(this.url+'resultado.php').pipe(map(res => res.json()));
  }

}
