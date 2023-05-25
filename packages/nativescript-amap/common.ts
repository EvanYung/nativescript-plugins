/* eslint-disable @typescript-eslint/no-explicit-any */
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

export interface LatLng {
  latitude: number
  longitude: number
}

export interface CameraPosition {
  target: LatLng
  zoom?: number
  tilt?: number
  bearing?: number
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

  // 设置地图初始化时的地图状态， 默认地图中心点为北京天安门，缩放级别为 10.0f
  camera(camera: CameraPosition): AMapOptionsForAndroid {
    const target = new com.amap.api.maps.model.LatLng(camera.target.latitude, camera.target.longitude)
    const cameraPosition = new com.amap.api.maps.model.CameraPosition(target, camera.zoom, camera.tilt, camera.bearing)

    this._AMapOptions.camera(cameraPosition)
    return this
  }

  // 获取初始化选项中地图状态。
  getCamera(): CameraPosition {
    return this._AMapOptions.getCamera()
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

  setOnMapLoadedListener(listener: () => void): void
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

export interface MarkerOptions {
  // 设置Marker覆盖物的透明度
  alpha(alpha: number): MarkerOptions
  // marker的海拔
  altitude(altitude: number): MarkerOptions
  // 设置Marker覆盖物的锚点比例。
  anchor(u: number, v: number): MarkerOptions
  // 设置Marker覆盖物是否可拖拽。
  draggable(draggable: boolean): MarkerOptions
  // 获取Marker覆盖物的透明度,透明度范围[0,1] 1为不透明,默认值为1
  getAlpha(): number
  // 获取marker海拔高度
  getAltitude(): number
  // 获取Marker覆盖物锚点在水平范围的比例。
  getAnchorU(): number
  // 获取Marker覆盖物锚点垂直范围的比例。
  getAnchorV(): number
  // 获取Marker覆盖物的图标。
  getIcon(): any
  // 获取Marker覆盖物的动画帧图标列表，动画的描点和大小以第一帧为准，建议图片大小保持一致。
  getIcons(): Array<any>
  // 获取Marker覆盖物的水平偏移距离
  getInfoWindowOffsetX(): number
  // 获取Marker覆盖物的垂直偏移距离
  getInfoWindowOffsetY(): number
  // 得到多少帧刷新一次图片资源，值越小动画越快。
  getPeriod(): number
  // 获取Marker覆盖物的坐标位置。
  getPosition(): LatLng
  // 获取 Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
  getRotateAngle(): number
  // 获取Marker覆盖物的文字片段。
  getSnippet(): string
  // 获取Marker覆盖物的标题。
  getTitle(): string
  // 获取Marker覆盖物zIndex。
  getZIndex(): number
  // 设置Marker覆盖物的图标。
  icon(icon: any): MarkerOptions
  // 设置Marker覆盖物的动画帧图标列表，多张图片模拟gif的效果。
  icons(icons: Array<any>): MarkerOptions
  // 设置Marker覆盖物的InfoWindow是否允许显示,默认为true
  infoWindowEnable(enable: boolean): MarkerOptions
  // 获取Marker覆盖物的拖拽状态。
  isDraggable(): boolean
  // 获取Marker覆盖物是否平贴地图。
  isFlat(): boolean
  // 获取Marker覆盖物的坐标是否是Gps，默认为false。
  isGps(): boolean
  // 获取Marker覆盖物的InfoWindow是否允许显示, 可以通过 MarkerOptions.infoWindowEnable(boolean) 进行设置
  isInfoWindowEnable(): boolean
  // 获取Marker覆盖物是否可见。
  isVisible(): boolean
  // 设置多少帧刷新一次图片资源，Marker动画的间隔时间，值越小动画越快
  period(period: number): MarkerOptions
  // 设置Marker覆盖物的位置坐标。
  position(position: LatLng): MarkerOptions
  // 设置Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
  rotateAngle(angle: number): MarkerOptions
  // 设置Marker覆盖物是否平贴地图
  setFlat(flat: boolean): MarkerOptions
  // 设置Marker覆盖物的坐标是否是Gps，默认为false。
  setGps(gps: boolean): MarkerOptions
  // 设置Marker覆盖物的InfoWindow相对Marker的偏移。
  setInfoWindowOffset(offsetX: number, offsetY: number): MarkerOptions
  // 设置 Marker覆盖物的 文字描述
  snippet(snippet: string): MarkerOptions
  // 设置 Marker覆盖物 的标题
  title(title: string): MarkerOptions
  // 设置Marker覆盖物是否可见。
  visible(visible: boolean): MarkerOptions
  // 设置Marker覆盖物的zIndex。
  zIndex(zIndex: number): MarkerOptions
}

export interface Marker {
  // 删除当前marker并销毁Marker的图片等资源。
  destroy(): void
  // 获取Marker覆盖物的透明度,透明度范围[0,1] 1为不透明,默认值为1
  getAlpha(): number
  // 获取marker海拔
  getAltitude(): number
  // 返回Marker动画帧的图标列表。
  getIcons(): Array<any>
  // 返回Marker 的Id，每个marker 的唯一标识，用来区分不同的Marker。
  getId(): string
  // 获取Marker覆盖物的附加信息对象，即自定义的Marker的属性。
  getObject(): any
  // 获取Marker覆盖物的选项类
  getOptions(): MarkerOptions
  // 得到多少帧刷新一次图片资源。
  getPeriod(): number
  // 获取 Marker 覆盖物的位置坐标。
  getPosition(): LatLng
  // 获取 Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
  getRotateAngle(): number
  // 获取Marker 覆盖物的文字片段。
  getSnippet(): string
  // 获取Marker 覆盖物的标题。
  getTitle(): string
  // 获取Marker覆盖物的z轴值。
  getZIndex(): number
  // 隐藏Marker覆盖物的信息窗口。
  hideInfoWindow(): void
  // 获取Maker覆盖物的点击状态,可以通过 Marker.setClickable(boolean) 设置是否可以点击
  isClickable(): boolean
  // 获得Marker覆盖物的拖拽状态。
  isDraggable(): boolean
  // 返回Marker覆盖物是否是平贴在地图上。
  isFlat(): boolean
  // 获取Marker覆盖物是否允许InfoWindow显示, 可以通过 Marker.setInfoWindowEnable(boolean) 进行设置
  isInfoWindowEnable(): boolean
  // 返回Marker覆盖物的信息窗口是否显示，true: 显示，false: 不显示。
  isInfoWindowShown(): boolean
  // 获取当前Marker是否是被移除状态
  isRemoved(): boolean
  // 返回Marker是否可见
  isVisible(): boolean
  // 删除当前marker。
  remove(): void
  // 设置Marker覆盖物的透明度
  setAlpha(alpha: number): void
  // 设置marker海拔
  setAltitude(altitude: number): void
  // 设置Marker覆盖物的锚点比例。
  setAnchor(anchorU: number, anchorV: number): void
  // 设置动画,动画包含，旋转，缩放，消失，平移以及它们的组合动画
  setAnimation(animation: any): void
  // 设置Marker覆盖物是否可以点击
  setClickable(clickable: boolean): void
  // 设置Marker覆盖物是否允许拖拽。
  setDraggable(draggable: boolean): void
  // 设置Marker覆盖物是否平贴在地图上。
  setFlat(flat: boolean): void
  // 设置 Marker覆盖物的图标
  setIcon(icon: any): void
  // 设置Marker覆盖物的动画帧图标列表，多张图片模拟gif的效果。
  setIcons(icons: Array<any>): void
  // 设置Marker覆盖物的InfoWindow是否允许显示,默认为true 设置为false之后, 调用Marker.showInfoWindow() 将不会生效
  setInfoWindowEnable(enable: boolean): void
  // 设置Marker覆盖物的属性选项类 通过markerOption 给marker设置属性
  setMarkerOptions(markerOption: MarkerOptions): void
  // 设置Marker覆盖物的附加信息对象。
  setObject(object: any): void
  // 设置多少帧刷新一次图片资源，Marker动画的间隔时间，值越小动画越快。
  setPeriod(period: number): void
  // 设置 Marker 覆盖物的位置坐标。
  setPosition(position: LatLng): void
  // 设置marker覆盖物在屏幕的像素坐标。
  setPositionByPixels(x: number, y: number): void
  // 设置Marker覆盖物图片旋转的角度，从正北开始，逆时针计算。
  setRotateAngle(angle: number): void
  // 设置Marker 覆盖物的文字片段。
  setSnippet(snippet: string): void
  // 设置Marker 覆盖物的标题。
  setTitle(title: string): void
  // 设置当前marker在最上面。
  setToTop(): void
  // 设置 Marker 覆盖物的可见属性。
  setVisible(visible: boolean): void
  // 设置Marker覆盖物的z轴值。
  setZIndex(zIndex: number): void
  // 显示 Marker 覆盖物的信息窗口。
  showInfoWindow(): void
  // 开始动画
  startAnimation(): void
}
