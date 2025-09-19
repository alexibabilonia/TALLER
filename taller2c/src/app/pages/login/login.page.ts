import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '../../core/services/translate';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';
  isLoading = false;

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  
  setLanguage(lang: string) {
    this.translateService.setLanguage(lang);
  }

  get currentLang() {
    return this.translateService.getCurrentLanguage();
  }

  
  t(key: string) {
    return this.translateService.translate(key);
  }

  async login() {
    if (!this.email || !this.password) {
      const toast = await this.toastCtrl.create({
        message: this.t('LOGIN.FILL_FIELDS') || 'Por favor ingresa email y contraseña',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    this.isLoading = true;

    
    setTimeout(() => {
      this.isLoading = false;
      
      this.router.navigate(['/home']);
    }, 1500);
  }
}
