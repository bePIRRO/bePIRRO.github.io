import { Component } from '@angular/core'
import sites from '../../../assets/data/sites.json'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  links = sites
}
