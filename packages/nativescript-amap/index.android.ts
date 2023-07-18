/* eslint-disable @typescript-eslint/no-explicit-any */
import { AMapOptionsCommon, AMapApiCommon, AMapViewCommon, AMapOnReadyData, LogoPosition, ZoomPosition, LogoMargin, MapType, UiSettingsAPI, MarkerOptionsCommon } from './common'

declare let com

export class AMapView extends AMapViewCommon {
  private mapView: any

  public createNativeView(): globalAndroid.widget.FrameLayout {
    const nativeView = new android.widget.FrameLayout(this._context)

    // 在构造MapView之前必须进行合规检查（OfflineMapManager，LBSTraceClient等也是一样的操作），设置接口之前保证隐私政策合规
    const MapsInitializer = com.amap.api.maps.MapsInitializer
    MapsInitializer.updatePrivacyShow(this._context, true, true)
    MapsInitializer.updatePrivacyAgree(this._context, true)

    setTimeout(() => {
      this.initMap()
    }, 0)

    return nativeView
  }

  initMap() {
    if (this.mapView) return
    const mapOptions = this.aMapOptions.get$AMapOptions || new com.amap.api.maps.AMapOptions()
    this.mapView = new com.amap.api.maps.MapView(this._context, mapOptions)
    this.mapView.onCreate(null)
    this.nativeView.addView(this.mapView)
    this.map = new AMapAPI(this.mapView.getMap())

    this.map.setOnMapLoadedListener(() => {
      this.notify(<AMapOnReadyData>{
        eventName: AMapViewCommon.mapReadyEvent,
        map: this.map,
        mapView: this.mapView,
      })
    })
  }

  getMapView() {
    return this.mapView
  }
}

export class AMapAPI extends AMapApiCommon {
  constructor($map: any) {
    super($map, com.amap.api.maps.AMap.OnMapLoadedListener, new UiSettingsAPI($map, new com.amap.api.maps.AMapOptions()))
  }
}

export class AMapOptions extends AMapOptionsCommon {
  constructor() {
    super(new com.amap.api.maps.AMapOptions(), com.amap.api.maps.model.LatLng, com.amap.api.maps.model.CameraPosition)
  }
}

export class MarkerOptions extends MarkerOptionsCommon {
  constructor() {
    super(new com.amap.api.maps.model.MarkerOptions(), com.amap.api.maps.model.LatLng)
  }
}

export { LogoMargin, LogoPosition, ZoomPosition, MapType }
