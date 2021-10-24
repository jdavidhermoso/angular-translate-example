import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-translate-example';

  constructor(private translateService: TranslateService) {
  }

  public changeLanguage(language: string): void {
    this.translateService.use(language);
  }
}
