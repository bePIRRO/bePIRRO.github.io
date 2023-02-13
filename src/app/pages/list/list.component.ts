import { Component } from '@angular/core'
import sites from '../../../assets/data/sites.json'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [],
})
export class ListComponent {
  constructor() {
    this.getSitesList()
  }

  sitesList: any[] = []

  getSitesList(): void {
    sites.sites.forEach((s) => {
      s.links.forEach((l) => {
        this.sitesList.push(l)
      })
    })
  }
}
