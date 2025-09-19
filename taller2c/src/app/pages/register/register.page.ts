import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '../../core/services/translate';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  firstName = '';
  lastName = '';
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

  
  async register() {
    if (!this.firstName || !this.lastName || !this.email || !this.password) {
      const toast = await this.toastCtrl.create({
  message: this.t('REGISTER.FILL_FIELDS') || 'Por favor completa todos los campos',
  duration: 2000,
  color: 'warning'
});

      toast.present();
      return;
    }

   
    this.isLoading = true;

  
    setTimeout(() => {
      this.isLoading = false;
      
      this.router.navigate(['/login']);
    }, 1500);
  }
}
