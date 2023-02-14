import { Component } from '@angular/core'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  links: any[] = []

  constructor(private readonly appService: AppService) {
    this.links = this.appService.sites
  }
}
