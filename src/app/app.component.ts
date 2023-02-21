import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'x'
  description: string = ''

  getDescription(e: any): void {
    console.log(e)
    this.description = e
  }
}
