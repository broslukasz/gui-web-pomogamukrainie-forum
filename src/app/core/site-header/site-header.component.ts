import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageCode } from '@app/core/translations';
import { CorePath } from '@app/shared/models';
import { AuthService } from '@app/core/auth';

interface Language {
  code: LanguageCode;
  text: string;
}

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
})
export class SiteHeaderComponent {
  isOpen: boolean = false;
  scrolled: boolean = false;

  /** enum */
  corePath = CorePath;

  languages: Language[] = [
    { code: LanguageCode.uk_UA, text: 'український' },
    { code: LanguageCode.ru_RU, text: 'русский' },
    { code: LanguageCode.en_GB, text: 'English' },
    { code: LanguageCode.pl_PL, text: 'Polski' },
  ];
  activeLanguage: Language | undefined;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    public readonly authService: AuthService
  ) {
    this.translateService.onLangChange.subscribe((params) => {
      this.activeLanguage = this.getActiveLanguage(params.lang as keyof typeof LanguageCode);
    });
  }

  getActiveLanguage(langCode: keyof typeof LanguageCode) {
    return this.languages.find((lang: Language) => lang.code === langCode);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  getHeaderClass() {
    return {
      transparent: this.router.url === '/',
      solid: this.router.url !== '/' || this.isOpen || this.scrolled,
    };
  }

  getMenuClass() {
    return {
      opened: this.isOpen,
    };
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  useLanguage(langCode: string) {
    this.translateService.use(langCode);
    this.closeMenu();
  }

  public get isAccountUrl(): boolean {
    return this.router.url.includes(CorePath.MyAccount);
  }
}
