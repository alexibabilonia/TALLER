import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  // Idioma por defecto
  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  constructor() {}

  // Cambiar idioma
  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
  }

  // Obtener idioma actual
  getCurrentLanguage(): string {
    return this.currentLangSubject.value;
  }

  // Función de traducción 
  translate(key: string): string {
  const translations: any = {
    es: {
      'LOGIN.TITLE': 'Bienvenido',
      'LOGIN.EMAIL': 'Correo electrónico',
      'LOGIN.PASSWORD': 'Contraseña',
      'LOGIN.SUBMIT': 'Iniciar Sesión',
      'LOGIN.REGISTER': 'Registrarse',
      'LOGIN.FILL_FIELDS':'Por favor ingresa email y contraseña',
      'REGISTER.TITLE': 'Registro',
      'REGISTER.FIRSTNAME': 'Nombre',
      'REGISTER.LASTNAME': 'Apellido',
      'REGISTER.EMAIL': 'Correo electrónico',
      'REGISTER.PASSWORD': 'Contraseña',
      'REGISTER.SUBMIT': 'Registrarse',
      'REGISTER.CANCEL': 'Cancelar',
      'LANGUAGE.CURRENT': 'Idioma actual',
      'LOADING.TEXT': 'Cargando...',
      'HOME.TITLE': 'Mis Wallpapers',
      'HOME.EMPTY': 'No hay wallpapers aún',
      'HOME.UPDATE': 'Actualizar Datos',
      'HOME.ADD': 'Agregar Wallpaper',
      'HOME.LOGOUT': 'Cerrar Sesión',
      'UPDATE.TITLE': 'Actualizar Datos',
      'UPDATE.FIRSTNAME': 'Nombre',
      'UPDATE.LASTNAME': 'Apellido',
      'UPDATE.SUBMIT': 'Actualizar',
      'UPDATE.SUCCESS': 'Datos actualizados',
      'UPDATE.CURRENT_LANG': 'Idioma actual',
      'UPDATE.CANCEL': 'Cancelar',
      'UPDATE.LOADING': 'Actualizando',
      'REGISTER.FILL_FIELDS': "Por favor completa todos los campos"
    },
    en: {
      'LOGIN.TITLE': 'Welcome',
      'LOGIN.EMAIL': 'Email',
      'LOGIN.PASSWORD': 'Password',
      'LOGIN.SUBMIT': 'Login',
      'LOGIN.REGISTER': 'Register',
      'LOGIN.FILL_FIELDS':'Please enter email and password',
      'REGISTER.TITLE': 'Register',
      'REGISTER.FIRSTNAME': 'First Name',
      'REGISTER.LASTNAME': 'Last Name',
      'REGISTER.EMAIL': 'Email',
      'REGISTER.PASSWORD': 'Password',
      'REGISTER.SUBMIT': 'Register',
      'REGISTER.CANCEL': 'Cancel',
      'LANGUAGE.CURRENT': 'Current language',
      'LOADING.TEXT': 'Loading...',
      'HOME.TITLE': 'My Wallpapers',
      'HOME.EMPTY': 'No wallpapers yet',
      'HOME.UPDATE': 'Update Profile',
      'HOME.ADD': 'Add Wallpaper',
      'HOME.LOGOUT': 'Logout',
      'UPDATE.TITLE': 'Update Profile',
      'UPDATE.FIRSTNAME': 'First Name',
      'UPDATE.LASTNAME': 'Last Name',
      'UPDATE.SUBMIT': 'Update',
      'UPDATE.SUCCESS': 'Profile updated',
      'UPDATE.CURRENT_LANG': 'Current language',
      'UPDATE.CANCEL': 'Cancel',
      'UPDATE.LOADING': 'Updating',
      'REGISTER.FILL_FIELDS': "Please fill in all fields"
    }
  };

  const lang = this.getCurrentLanguage();
  return translations[lang][key] || key;
}
}
