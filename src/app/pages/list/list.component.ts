import { Component } from '@angular/core'
import { AppService } from 'src/app/app.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent {
  sitesList: any[] = []
  constructor(private readonly appService: AppService) {
    this.sitesList = this.appService.sitesList
  }
}
