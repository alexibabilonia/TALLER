import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../../core/services/translate';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})
export class HomePage {
  currentLang: string;
  menuOpen = false;

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) {
    this.currentLang = this.translateService.getCurrentLanguage();
  }


  setLanguage(lang: string) {
    this.translateService.setLanguage(lang);
    this.currentLang = lang;
  }

  t(key: string): string {
    return this.translateService.translate(key);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  updateProfile() {
    console.log('Actualizar datos');
  }

  addWallpaper() {
    console.log('Agregar wallpaper');
  }

  logout() {
    console.log('Cerrar sesión');
    this.router.navigate(['/login']);
  }
}
