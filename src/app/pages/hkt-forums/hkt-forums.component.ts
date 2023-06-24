import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hkt-forums',
  templateUrl: './hkt-forums.component.html',
  styleUrls: ['./hkt-forums.component.scss']
})
export class HKTForumsComponent implements OnInit, OnDestroy {
  public TestHTML: any = null;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // this.http.get('https://hkt.demo.forums.hktinterapp.com/index.php/', {responseType: 'text'}).subscribe(res => {
    //   debugger
    //   this.TestHTML = this.sanitizer.bypassSecurityTrustHtml(res);
    // });
  }
  ngOnDestroy() {
  }

}
