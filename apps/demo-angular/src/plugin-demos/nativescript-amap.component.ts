import { Component, NgZone } from '@angular/core'
import { DemoSharedNativescriptAmap } from '@demo/shared'
import {} from '@evanyung/nativescript-amap'

@Component({
  selector: 'demo-nativescript-amap',
  templateUrl: 'nativescript-amap.component.html',
})
export class NativescriptAmapComponent {
  demoShared: DemoSharedNativescriptAmap

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptAmap()
  }
}
