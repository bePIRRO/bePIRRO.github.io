import { Component, OnDestroy, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import { pipe, Subject, takeUntil } from 'rxjs'
import { AppService } from 'src/app/app.service'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [],
})
export class DetailComponent implements OnInit, OnDestroy {
  site: any
  onDestroy$ = new Subject<void>()

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly appService: AppService,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getSite()
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe((res) => {
      console.log(res)
      this.getSite()
    })
    this.router.setUpLocationChangeListener()
  }

  getId(): void {
    this.route.snapshot.paramMap.get('id')
  }

  getSite(): void {
    const slug = this.getId()
    const x = this.appService.sitesList.find((s) => s.title === slug)
    this.site = {
      id: x.id,
      title: x.title,
      description: x.description,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(x.url),
      img: x.img,
    }
    console.log(slug, this.site)
  }

  ngOnDestroy(): void {
    this.onDestroy$.next()
  }
}
