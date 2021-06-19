import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@JENGUMABON';

  goToktok() {
    window.location.href = "http://www.toktok.ph/delivery/1111073097";
  }

  goMangBoks() {
    window.location.href = "http://www.mangboks.ph/1111073097";
  }

  goBoyBondat() {
    window.location.href = "http://www.boybondat.ph/ordernow/1111073097";
  }

  goSiomaiKing() {
    window.location.href = "http://www.siomaiking.ph/ordernow/1111073097";
  }

  goCoppermask() {
    window.location.href = "http://www.coppermask.ph/cpshop/1111073097";
  }

  goNinjaion() {
    window.location.href = "http://www.ninjaph.com/cpshop/1111073097";
  }

  goShopForMe() {
    window.location.href = "https://toktok.ph/pabiliservice/1111073097";
  }

  goJcShop() {
    window.location.href = "https://jcshop.ph/1111073097";
  }

  goToktokmall() {
    window.location.href = "https://www.toktokmall.ph/PPS15142560";
  }
}
