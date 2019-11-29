import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    languages = [
        { value: 'English' },
        { value: 'French' },
        { value: 'German' },
        { value: 'Italian' }
    ];

    currentLanguage;

    constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('en');
        this.currentLanguage = 'en';

    }


    onSelectionChange(language) {
        this.currentLanguage = language;
        this.translate.use(language);
    }

}
