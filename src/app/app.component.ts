import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@JENGUMABON';

  goToktok() {
    window.location.href = "http://www.toktok.ph/delivery/PPS15142560";
  }

  goMangBoks() {
    window.location.href = "http://www.mangboks.ph/PPS15142560";
  }

  goBoyBondat() {
    window.location.href = "http://www.boybondat.ph/ordernow/PPS15142560";
  }

  goSiomaiKing() {
    window.location.href = "http://www.siomaiking.ph/ordernow/PPS15142560";
  }

  goCoppermask() {
    window.location.href = "http://www.coppermask.ph/cpshop/PPS15142560";
  }

  goNinjaion() {
    window.location.href = "http://www.ninjaph.com/cpshop/PPS15142560";
  }

  goShopForMe() {
    window.location.href = "https://toktok.ph/pabiliservice/PPS15142560";
  }

  goJcShop() {
    window.location.href = "https://jcshop.ph/PPS15142560";
  }
}
