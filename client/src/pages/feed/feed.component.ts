import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2'

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedComponent {

  constructor(public navCtrl: NavController) {
    
  }
  
  tituloPost = `Te Vi na Foa `;

  textoPost: string = ` Minha amiguinha é mt fã de um garoto do quarto período de nutri, só que ninguém sabe o nome dele. 
  Ela disse q ele é o oásis do deserto dela hahahah Ajuda minha amiga a descobrir qm é o menino mais misterioso do prédio de nutri...
  `;

  curtidasPost: number = 1;

  comentariosPost: number = 15;

  jaCurtiu: boolean = false;

  curtirPost() { 
    if (!this.jaCurtiu) {
        this.curtidasPost = this.curtidasPost + 1;
        this.jaCurtiu = true;
    } else {
        this.curtidasPost = this.curtidasPost - 1;
        this.jaCurtiu = false;
    }
  }

}
