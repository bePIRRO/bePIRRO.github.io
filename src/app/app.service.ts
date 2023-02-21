import { Injectable } from '@angular/core'
import sites from '../assets/data/sites.json'

@Injectable({
  providedIn: 'root',
})
export class AppService {
  sites = sites.sites
  sitesList: any[] = []
  constructor() {
    this.getSitesList()
  }

  getSitesList(): void {
    sites.sites.forEach((s) => {
      s.links.forEach((l) => {
        this.sitesList.push(l)
      })
    })
  }
}
