import { Component } from '@angular/core';
import { TranslateService } from '../../core/services/translate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.page.html',
  styleUrls: ['./update-user-info.page.scss'],
  standalone: false
})
export class UpdateUserInfoPage {
  currentLang: string;
  firstName: string = '';
  lastName: string = '';
  isLoading: boolean = false;

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

  updateProfile() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      alert(this.t('UPDATE.SUCCESS') || 'Datos actualizados');
      this.router.navigate(['/home']); 
    }, 1000);
  }

  cancelUpdate() {
    this.router.navigate(['/home']);
  }
}
