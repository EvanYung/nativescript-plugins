import { Observable, EventData, Page } from '@nativescript/core'
import { DemoSharedNativescriptAmap } from '@demo/shared'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AMap, AMapOnReadyData, AMapOptionsForAndroid, MapType, UiSettings } from '@evanyung/nativescript-amap'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new DemoModel()
}

export class DemoModel extends DemoSharedNativescriptAmap {
  aMapOptions: AMapOptionsForAndroid

  constructor() {
    super()
    this.aMapOptions = new AMapOptionsForAndroid()
    this.aMapOptions.rotateGesturesEnabled(false)
    this.aMapOptions.mapType(MapType.MAP_TYPE_BUS)
  }

  onMapReady(args: AMapOnReadyData): void {
    const map: AMap = args.map
    const uiSettings: UiSettings = map.getUiSettings()
    uiSettings.setZoomControlsEnabled(false)
  }
}
