import { EventData, Page } from '@nativescript/core'
import { DemoSharedNativescriptAmap } from '@demo/shared'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AMapOnReadyData, AMapOptions, MapType, MarkerOptions } from '@evanyung/nativescript-amap'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new DemoModel()
}

export class DemoModel extends DemoSharedNativescriptAmap {
  aMapOptions: AMapOptions

  constructor() {
    super()
    this.aMapOptions = new AMapOptions()
      .rotateGesturesEnabled(false)
      .mapType(MapType.MAP_TYPE_BUS)
      .camera({
        target: {
          latitude: 31.238068,
          longitude: 121.501654,
        },
        zoom: 10,
      })
  }

  onMapReady(args: AMapOnReadyData) {
    const map = args.map
    const uiSettings = map.getUiSettings()

    uiSettings.setZoomControlsEnabled(true)

    const marker = map.addMarker(
      new MarkerOptions()
        .position({
          latitude: 31.238068,
          longitude: 121.501654,
        })
        .title('北京')
        .snippet('DefaultMarker'),
    )
    console.log('🚀 ~ file: nativescript-amap.ts:44 ~ DemoModel ~ onMapReady ~ marker:', marker)
  }
}
