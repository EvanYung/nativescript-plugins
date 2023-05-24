import { View, Property } from '@nativescript/core'

declare let com

export enum LogoPosition {
  LOGO_POSITION_BOTTOM_LEFT = 0,
  LOGO_POSITION_BOTTOM_CENTER = 1,
  LOGO_POSITION_BOTTOM_RIGHT = 2,
}

export enum LogoMargin {
  LOGO_MARGIN_LEFT = 0,
  LOGO_MARGIN_RIGHT = 1,
  LOGO_MARGIN_BOTTOM = 2,
}

export enum ZoomPosition {
  ZOOM_POSITION_RIGHT_CENTER = 1,
  ZOOM_POSITION_RIGHT_BUTTOM = 2,
}

export enum MapType {
  MAP_TYPE_NORMAL = 1,
  MAP_TYPE_SATELLITE = 2,
  MAP_TYPE_NIGHT = 3,
  MAP_TYPE_NAVI = 4,
  MAP_TYPE_BUS = 5,
}

/**
 * AMapOptions（for android）
 * MapView 初始化选项
 * com.amap.api.maps.AMapOptions
 */
export class AMapOptionsForAndroid {
  private _AMapOptions: any

  getAMapOptions(): any {
    return this._AMapOptions
  }

  constructor() {
    this._AMapOptions = new com.amap.api.maps.AMapOptions()
  }

  // 设置指南针是否可用
  compassEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.compassEnabled(enabled)
    return this
  }

  // 返回初始化选项中指南针功能是否可用
  getCompassEnabled(): boolean {
    return this._AMapOptions.getCompassEnabled()
  }

  // 获取初始化选项“高德地图”Logo的位置
  getLogoPosition(): number {
    return this._AMapOptions.getLogoPosition()
  }

  // 返回初始化选项中地图模式
  getMapType(): number {
    return this._AMapOptions.getMapType()
  }

  // 返回初始化选项中地图旋转手势是否可用
  getRotateGesturesEnabled(): boolean {
    return this._AMapOptions.getRotateGesturesEnabled()
  }

  // 返回初始化选项中比例尺功能是否可用
  getScaleControlsEnabled(): boolean {
    return this._AMapOptions.getScaleControlsEnabled()
  }

  // 返回初始化选项中拖动手势是否可用
  getScrollGesturesEnabled(): boolean {
    return this._AMapOptions.getScrollGesturesEnabled()
  }

  // 返回初始化选项中地图倾斜手势（显示3D效果）是否可用
  getTiltGesturesEnabled(): boolean {
    return this._AMapOptions.getTiltGesturesEnabled()
  }

  // 返回初始化选项中地图是否允许缩放
  getZoomControlsEnabled(): boolean {
    return this._AMapOptions.getZoomControlsEnabled()
  }

  // 返回初始化选项中缩放手势是否可用
  getZoomGesturesEnabled(): boolean {
    return this._AMapOptions.getZoomGesturesEnabled()
  }

  // 设置“高德地图”Logo的位置
  logoPosition(position: LogoPosition): AMapOptionsForAndroid {
    this._AMapOptions.logoPosition(position)
    return this
  }

  // 设置地图模式，默认普通地图
  mapType(mapType: MapType): AMapOptionsForAndroid {
    this._AMapOptions.mapType(mapType)
    return this
  }

  // 设置地图是否可以通过手势进行旋转
  rotateGesturesEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.rotateGesturesEnabled(enabled)
    return this
  }

  // 设置地图是否显示比例尺，默认为false
  scaleControlsEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.scaleControlsEnabled(enabled)
    return this
  }

  // 设置地图是否可以通过手势滑动
  scrollGesturesEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.scrollGesturesEnabled(enabled)
    return this
  }

  // 设置地图是否可以通过手势倾斜（3D效果），默认为true
  tiltGesturesEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.tiltGesturesEnabled(enabled)
    return this
  }

  // 设置地图是否允许缩放
  zoomControlsEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.zoomControlsEnabled(enabled)
    return this
  }

  // 设置地图是否可以通过手势进行缩放
  zoomGesturesEnabled(enabled: boolean): AMapOptionsForAndroid {
    this._AMapOptions.zoomGesturesEnabled(enabled)
    return this
  }
}

export interface AMap {
  /**
   * 定义Amap组件可用接口
   */

  // 从地图上删除所有的Marker，Overlay，Polyline 等覆盖物，如果isKeepMyLocationOverlay为true，那么myLocationOverlay（内置定位覆盖物）不会被删除
  clear(isKeepMyLocationOverlay: boolean): void
  // 返回当前的地图显示类型
  getMapType(): number
  // 返回地图的用户界面设置对象
  getUiSettings(): UiSettings
}

export interface UiSettings {
  // 获取“高德地图”Logo的位置
  getLogoPosition(): number
  // 获取设置的缩放按钮位置
  getZoomPosition(): number
  // 获取指南针状态 可用/不可用。
  isCompassEnabled(): boolean
  // 返回是否以地图中心点缩放
  isGestureScaleByMapCenter(): boolean
  // 返回室内地图楼层切换控件是否显示。
  isIndoorSwitchEnabled(): boolean
  // 返回当前地图是否显示了定位按钮
  isMyLocationButtonEnabled(): boolean
  // 返回旋转手势是否可用
  isRotateGesturesEnabled(): boolean
  // 返回比例尺功能是否可用
  isScaleControlsEnabled(): boolean
  // 返回当前地图是否允许通过手势移动地图
  isScrollGesturesEnabled(): boolean
  // 返回倾斜手势是否可用
  isTiltGesturesEnabled(): boolean
  // 返回当前地图是否显示了缩放按钮
  isZoomControlsEnabled(): boolean
  // 返回当前地图是否允许通过手势缩放地图
  isZoomGesturesEnabled(): boolean
  // 设置当前地图是否支持所有手势
  setAllGesturesEnabled(enabled: boolean): void
  // 这个方法设置了地图是否允许显示指南针
  setCompassEnabled(enabled: boolean): void
  // 设置是否以地图中心点缩放
  setGestureScaleByMapCenter(isGestureScaleByMapCenter: boolean): void
  // 设置室内地图楼层切换控件是否可见
  setIndoorSwitchEnabled(isIndoorSwitchEnabled: boolean): void
  // 设置Logo下边界距离屏幕底部的边距
  setLogoBottomMargin(pixels: number): void
  // 设置Logo左边界距离屏幕左侧的边距
  setLogoLeftMargin(pixels: number): void
  // N 设置“高德地图”Logo的位置
  setLogoPosition(position: LogoPosition): void
  // 设置定位按钮是否显示
  setMyLocationButtonEnabled(enabled: boolean): void
  // 设置旋转手势是否可用
  setRotateGesturesEnabled(enabled: boolean): void
  // 设置比例尺功能是否可用
  setScaleControlsEnabled(enabled: boolean): void
  // 这个方法设置了地图是否允许通过手势来移动
  setScrollGesturesEnabled(enabled: boolean): void
  // 设置倾斜手势是否可用
  setTiltGesturesEnabled(enabled: boolean): void
  // 这个方法设置了地图是否允许显示缩放按钮。如果允许，则在地图上显示。默认缩放按钮为显示。
  setZoomControlsEnabled(enabled: boolean): void
  // 这个方法设置了地图是否允许通过手势来缩放
  setZoomGesturesEnabled(enabled: boolean): void
  // 设置缩放按钮的位置
  setZoomPosition(position: ZoomPosition): void
}

export interface AMapOnReadyData {
  eventName: string
  object: any
  map: AMap
  android: any
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AMapViewApi {}

export abstract class AMapViewCommonBase extends View implements AMapViewApi {
  protected map: AMap
}

// MapView 初始化选项
export const aMapOptionsProperty = new Property<AMapViewCommonBase, AMapOptionsForAndroid>({ name: 'aMapOptions' })
aMapOptionsProperty.register(AMapViewCommonBase)

export abstract class AMapViewBase extends AMapViewCommonBase {
  static mapReadyEvent = 'mapReady'

  protected aMapOptions: AMapOptionsForAndroid;

  [aMapOptionsProperty.setNative](value: AMapOptionsForAndroid) {
    this.aMapOptions = value
  }
}

export abstract class AMapCommon {}
