import { Component, OnDestroy } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { Subject } from 'rxjs'
import { AppService } from 'src/app/app.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [],
})
export class DetailComponent implements OnDestroy {
  site: any
  onDestroy$ = new Subject<void>()

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly appService: AppService,
    private readonly sanitizer: DomSanitizer
  ) {
    this.router.events.subscribe((res) => {
      if (res)
        this.route.paramMap.subscribe((p) => {
          const id = p.get('id')
          this.getSite(id ?? '')
        })
    })
  }

  getSite(slug: string): void {
    const x = this.appService.sitesList.find((s) => s.title === slug)
    this.site = {
      id: x.id,
      title: x.title,
      description: x.description,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(x.url),
      img: x.img,
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
  }
}
