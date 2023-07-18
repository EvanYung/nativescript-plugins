/* eslint-disable @typescript-eslint/no-explicit-any */
import { View, Property } from '@nativescript/core'

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

export class AMapOptionsCommon {
  constructor(private $aMapOptions, private $LatLng, private $CameraPosition) {}

  get get$AMapOptions() {
    return this.$aMapOptions
  }

  /**
   * 设置地图初始化时的地图状态， 默认地图中心点为北京天安门，缩放级别为 10.0f
   * */
  camera(camera: CameraPosition): AMapOptionsCommon {
    const target = new this.$LatLng(camera.target.latitude, camera.target.longitude)
    const cameraPosition = new this.$CameraPosition(target, camera.zoom, camera.tilt, camera.bearing)

    this.$aMapOptions.camera(cameraPosition)
    return this
  }

  /**
   * 获取初始化选项中地图状态。
   * */
  getCamera(): CameraPosition {
    return this.$aMapOptions.getCamera()
  }

  /**
   * 设置指南针是否可用
   * */
  compassEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.compassEnabled(enabled)
    return this
  }

  /**
   * 返回初始化选项中指南针功能是否可用
   * */
  getCompassEnabled(): boolean {
    return this.$aMapOptions.getCompassEnabled()
  }

  /**
   * 获取初始化选项“高德地图”Logo的位置
   * */
  getLogoPosition(): number {
    return this.$aMapOptions.getLogoPosition()
  }

  /**
   * 返回初始化选项中地图模式
   * */
  getMapType(): number {
    return this.$aMapOptions.getMapType()
  }

  /**
   * 返回初始化选项中地图旋转手势是否可用
   * */
  getRotateGesturesEnabled(): boolean {
    return this.$aMapOptions.getRotateGesturesEnabled()
  }

  /**
   * 返回初始化选项中比例尺功能是否可用
   * */
  getScaleControlsEnabled(): boolean {
    return this.$aMapOptions.getScaleControlsEnabled()
  }

  /**
   * 返回初始化选项中拖动手势是否可用
   * */
  getScrollGesturesEnabled(): boolean {
    return this.$aMapOptions.getScrollGesturesEnabled()
  }

  /**
   * 返回初始化选项中地图倾斜手势（显示3D效果）是否可用
   * */
  getTiltGesturesEnabled(): boolean {
    return this.$aMapOptions.getTiltGesturesEnabled()
  }

  /**
   * 返回初始化选项中地图是否允许缩放
   * */
  getZoomControlsEnabled(): boolean {
    return this.$aMapOptions.getZoomControlsEnabled()
  }

  /**
   * 返回初始化选项中缩放手势是否可用
   * */
  getZoomGesturesEnabled(): boolean {
    return this.$aMapOptions.getZoomGesturesEnabled()
  }

  /**
   * 设置“高德地图”Logo的位置
   * */
  logoPosition(position: LogoPosition): AMapOptionsCommon {
    this.$aMapOptions.logoPosition(position)
    return this
  }

  /**
   * 设置地图模式，默认普通地图
   * */
  mapType(mapType: MapType): AMapOptionsCommon {
    this.$aMapOptions.mapType(mapType)
    return this
  }

  /**
   * 设置地图是否可以通过手势进行旋转
   * */
  rotateGesturesEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.rotateGesturesEnabled(enabled)
    return this
  }

  /**
   * 设置地图是否显示比例尺，默认为false
   * */
  scaleControlsEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.scaleControlsEnabled(enabled)
    return this
  }

  /**
   * 设置地图是否可以通过手势滑动
   * */
  scrollGesturesEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.scrollGesturesEnabled(enabled)
    return this
  }

  /**
   * 设置地图是否可以通过手势倾斜（3D效果），默认为true
   * */
  tiltGesturesEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.tiltGesturesEnabled(enabled)
    return this
  }

  /**
   * 设置地图是否允许缩放
   * */
  zoomControlsEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.zoomControlsEnabled(enabled)
    return this
  }

  /**
   * 设置地图是否可以通过手势进行缩放
   * */
  zoomGesturesEnabled(enabled: boolean): AMapOptionsCommon {
    this.$aMapOptions.zoomGesturesEnabled(enabled)
    return this
  }
}

export interface AMapOnReadyData {
  eventName: string
  mapView: any
  map: AMapApiCommon
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AMapViewApi {}

export abstract class AMapViewBase extends View implements AMapViewApi {
  protected map: AMapApiCommon
}

// MapView 初始化选项
export const aMapOptionsProperty = new Property<AMapViewBase, AMapOptionsCommon>({ name: 'aMapOptions' })
aMapOptionsProperty.register(AMapViewBase)

export abstract class AMapViewCommon extends AMapViewBase {
  static mapReadyEvent = 'mapReady'

  protected aMapOptions: AMapOptionsCommon;

  [aMapOptionsProperty.setNative](value: AMapOptionsCommon) {
    this.aMapOptions = value
  }
}

export abstract class AMapApiCommon {
  constructor(private $map, private $OnMapLoadedListener, private UiSettings: UiSettingsAPI) {}

  /**
   * 从地图上删除所有的Marker，Overlay，Polyline 等覆盖物
   */
  clear(isKeepMyLocationOverlay: boolean): void {
    this.$map.clear(isKeepMyLocationOverlay)
  }

  /**
   * 返回当前的地图显示类型。可以参考MAP_TYPE_NORMAL, MAP_TYPE_SATELLITE。
   */
  getMapType(): number {
    return this.$map.getMapType()
  }

  /**
   * 返回地图的用户界面设置对象。
   */
  getUiSettings(): UiSettingsAPI {
    return this.UiSettings
  }

  /**
   * 地图加载完成监听接口
   */
  setOnMapLoadedListener(listener: () => void): void {
    this.$map.setOnMapLoadedListener(
      new this.$OnMapLoadedListener({
        onMapLoaded: () => {
          listener()
        },
      }),
    )
  }

  /**
   * 添加点标记
   */
  addMarker(markerOptions: MarkerOptionsCommon): Marker {
    return this.$map.addMarker(markerOptions.get$MarkerOptions)
  }
}

export interface Marker {
  /**
   * 删除当前marker并销毁Marker的图片等资源。
   */
  destroy(): void

  /**
   * 获取Marker覆盖物的透明度,透明度范围[0,1] 1为不透明,默认值为1
   * */
  getAlpha(): number

  /**
   * 获取marker海拔
   * */
  getAltitude(): number

  /**
   * 返回Marker动画帧的图标列表。
   * */

  getIcons(): Array<any>
  /**
   * 返回Marker 的Id，每个marker 的唯一标识，用来区分不同的Marker。
   * */
  getId(): string

  /**
   * 获取Marker覆盖物的附加信息对象，即自定义的Marker的属性。
   * */
  getObject(): any

  /**
   * 获取Marker覆盖物的选项类
   * */
  getOptions()

  /**
   * 得到多少帧刷新一次图片资源。
   * */
  getPeriod(): number

  /**
   * 获取 Marker 覆盖物的位置坐标。
   * */
  getPosition(): LatLng

  /**
   * 获取 Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
   * */
  getRotateAngle(): number

  /**
   * 获取Marker 覆盖物的文字片段。
   * */
  getSnippet(): string

  /**
   * 获取Marker 覆盖物的标题。
   * */
  getTitle(): string

  /**
   * 获取Marker覆盖物的z轴值。
   * */
  getZIndex(): number

  /**
   * 隐藏Marker覆盖物的信息窗口。
   * */
  hideInfoWindow(): void

  /**
   * 获取Maker覆盖物的点击状态,可以通过 Marker.setClickable(boolean) 设置是否可以点击
   * */
  isClickable(): boolean

  /**
   * 获得Marker覆盖物的拖拽状态。
   * */
  isDraggable(): boolean

  /**
   * 返回Marker覆盖物是否是平贴在地图上。
   * */
  isFlat(): boolean

  /**
   * 获取Marker覆盖物是否允许InfoWindow显示, 可以通过 Marker.setInfoWindowEnable(boolean) 进行设置
   * */
  isInfoWindowEnable(): boolean

  /**
   * 返回Marker覆盖物的信息窗口是否显示，true: 显示，false: 不显示。
   * */
  isInfoWindowShown(): boolean

  /**
   * 获取当前Marker是否是被移除状态
   * */
  isRemoved(): boolean

  /**
   * 返回Marker是否可见
   * */
  isVisible(): boolean

  /**
   * 删除当前marker。
   * */
  remove(): void

  /**
   * 设置Marker覆盖物的透明度
   * */
  setAlpha(alpha: number): void

  /**
   * 设置marker海拔
   * */
  setAltitude(altitude: number): void

  /**
   * 设置Marker覆盖物的锚点比例。
   * */
  setAnchor(anchorU: number, anchorV: number): void

  /**
   * 设置动画,动画包含，旋转，缩放，消失，平移以及它们的组合动画
   * */
  setAnimation(animation: any): void

  /**
   * 设置Marker覆盖物是否可以点击
   * */
  setClickable(clickable: boolean): void

  /**
   * 设置Marker覆盖物是否允许拖拽。
   * */
  setDraggable(draggable: boolean): void

  /**
   * 设置Marker覆盖物是否平贴在地图上。
   * */
  setFlat(flat: boolean): void

  /**
   * 设置 Marker覆盖物的图标
   * */
  setIcon(icon: any): void

  /**
   * 设置Marker覆盖物的动画帧图标列表，多张图片模拟gif的效果。
   * */
  setIcons(icons: Array<any>): void

  /**
   * 设置Marker覆盖物的InfoWindow是否允许显示,默认为true 设置为false之后, 调用Marker.showInfoWindow() 将不会生效
   * */
  setInfoWindowEnable(enable: boolean): void

  /**
   * 设置Marker覆盖物的属性选项类 通过markerOption 给marker设置属性
   * */
  setMarkerOptions(markerOption): void

  /**
   * 设置Marker覆盖物的附加信息对象。
   * */
  setObject(object: any): void

  /**
   * 设置多少帧刷新一次图片资源，Marker动画的间隔时间，值越小动画越快。
   * */
  setPeriod(period: number): void

  /**
   * 设置 Marker 覆盖物的位置坐标。
   * */
  setPosition(position: LatLng): void

  /**
   * 设置marker覆盖物在屏幕的像素坐标。
   * */
  setPositionByPixels(x: number, y: number): void

  /**
   * 设置Marker覆盖物图片旋转的角度，从正北开始，逆时针计算。
   * */
  setRotateAngle(angle: number): void

  /**
   * 设置Marker 覆盖物的文字片段。
   * */
  setSnippet(snippet: string): void

  /**
   * 设置Marker 覆盖物的标题。
   * */
  setTitle(title: string): void

  /**
   * 设置当前marker在最上面。
   * */
  setToTop(): void

  /**
   * 设置 Marker 覆盖物的可见属性。
   * */
  setVisible(visible: boolean): void

  /**
   * 设置Marker覆盖物的z轴值。
   * */
  setZIndex(zIndex: number): void

  /**
   * 显示 Marker 覆盖物的信息窗口。
   * */
  showInfoWindow(): void

  /**
   * 开始动画
   * */
  startAnimation(): void
}

export class MarkerOptionsCommon {
  constructor(private $markerOptions, private $LatLng) {}

  get get$MarkerOptions() {
    return this.$markerOptions
  }

  /**
   * 设置Marker覆盖物的透明度
   * */
  alpha(alpha: number) {
    this.$markerOptions.alpha(alpha)
    return this
  }

  /**
   * marker的海拔
   * */
  altitude(altitude: number) {
    this.$markerOptions.altitude(altitude)
    return this
  }

  /**
   * 设置Marker覆盖物的锚点比例。
   * */
  anchor(u: number, v: number) {
    this.$markerOptions.anchor(u, v)
    return this
  }

  /**
   * 设置Marker覆盖物是否可拖拽。
   * */
  draggable(draggable: boolean) {
    this.$markerOptions.draggable(draggable)
    return this
  }

  /**
   * 获取Marker覆盖物的透明度,透明度范围[0,1] 1为不透明,默认值为1
   * */
  getAlpha(): number {
    return this.$markerOptions.getAlpha()
  }

  /**
   * 获取marker海拔高度
   * */
  getAltitude(): number {
    return this.$markerOptions.getAltitude()
  }

  /**
   * 获取Marker覆盖物锚点在水平范围的比例。
   * */
  getAnchorU(): number {
    return this.$markerOptions.getAnchorU()
  }

  /**
   * 获取Marker覆盖物锚点垂直范围的比例。
   * */
  getAnchorV(): number {
    return this.$markerOptions.getAnchorV()
  }

  /**
   * 获取Marker覆盖物的图标。
   * */
  getIcon(): any {
    return this.$markerOptions.getIcon()
  }

  /**
   * 获取Marker覆盖物的动画帧图标列表，动画的描点和大小以第一帧为准，建议图片大小保持一致。
   * */
  getIcons(): Array<any> {
    return this.$markerOptions.getIcons()
  }

  /**
   * 获取Marker覆盖物的水平偏移距离
   * */
  getInfoWindowOffsetX(): number {
    return this.$markerOptions.getInfoWindowOffsetX()
  }

  /**
   * 获取Marker覆盖物的垂直偏移距离
   * */
  getInfoWindowOffsetY(): number {
    return this.$markerOptions.getInfoWindowOffsetY()
  }

  /**
   * 得到多少帧刷新一次图片资源，值越小动画越快。
   * */
  getPeriod(): number {
    return this.$markerOptions.getPeriod()
  }

  /**
   * 获取Marker覆盖物的坐标位置。
   * */
  getPosition(): LatLng {
    return this.$markerOptions.getPosition()
  }

  /**
   * 获取 Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
   * */
  getRotateAngle(): number {
    return this.$markerOptions.getRotateAngle()
  }

  /**
   * 获取Marker覆盖物的文字片段。
   * */
  getSnippet(): string {
    return this.$markerOptions.getSnippet()
  }

  /**
   * 获取Marker覆盖物的标题。
   * */
  getTitle(): string {
    return this.$markerOptions.getTitle()
  }

  /**
   * 获取Marker覆盖物zIndex。
   * */
  getZIndex(): number {
    return this.$markerOptions.getZIndex()
  }

  /**
   * 设置Marker覆盖物的图标。
   * */
  icon(icon: any) {
    this.$markerOptions.icon(icon)
    return this
  }

  /**
   * 设置Marker覆盖物的动画帧图标列表，多张图片模拟gif的效果。
   * */
  icons(icons: Array<any>) {
    this.$markerOptions.icons(icons)
    return this
  }

  /**
   * 设置Marker覆盖物的InfoWindow是否允许显示,默认为true
   * */
  infoWindowEnable(enable: boolean) {
    this.$markerOptions.infoWindowEnable(enable)
    return this
  }

  /**
   * 获取Marker覆盖物的拖拽状态。
   * */
  isDraggable(): boolean {
    return this.$markerOptions.isDraggable()
  }

  /**
   * 获取Marker覆盖物是否平贴地图。
   * */
  isFlat(): boolean {
    return this.$markerOptions.isFlat()
  }

  /**
   * 获取Marker覆盖物的坐标是否是Gps，默认为false。
   * */
  isGps(): boolean {
    return this.$markerOptions.isGps()
  }

  /**
   * 获取Marker覆盖物的InfoWindow是否允许显示, 可以通过 IMarkerOptions.infoWindowEnable(boolean) 进行设置
   * */
  isInfoWindowEnable(): boolean {
    return this.$markerOptions.isInfoWindowEnable()
  }

  /**
   * 获取Marker覆盖物是否可见。
   * */
  isVisible(): boolean {
    return this.$markerOptions.isVisible()
  }

  /**
   * 设置多少帧刷新一次图片资源，Marker动画的间隔时间，值越小动画越快
   * */
  period(period: number) {
    this.$markerOptions.period(period)
    return this
  }

  /**
   * 设置Marker覆盖物的位置坐标。
   */
  position(position: LatLng) {
    const target = new this.$LatLng(position.latitude, position.longitude)
    this.$markerOptions.position(target)
    return this
  }

  /**
   * 设置Marker覆盖物的图片旋转角度，从正北开始，逆时针计算。
   * */
  rotateAngle(angle: number) {
    this.$markerOptions.rotateAngle(angle)
    return this
  }

  /**
   * 设置Marker覆盖物是否平贴地图
   * */
  setFlat(flat: boolean) {
    this.$markerOptions.setFlat(flat)
    return this
  }

  /**
   * 设置Marker覆盖物的坐标是否是Gps，默认为false。
   * */
  setGps(gps: boolean) {
    this.$markerOptions.setGps(gps)
    return this
  }

  /**
   * 设置Marker覆盖物的InfoWindow相对Marker的偏移。
   * */
  setInfoWindowOffset(offsetX: number, offsetY: number) {
    this.$markerOptions.setInfoWindowOffset(offsetX, offsetY)
    return this
  }

  /**
   * 设置 Marker覆盖物的 文字描述
   */
  snippet(snippet: string) {
    this.$markerOptions.snippet(snippet)
    return this
  }

  /**
   * 设置 Marker覆盖物 的标题
   */
  title(title: string) {
    this.$markerOptions.title(title)
    return this
  }

  /**
   * 设置Marker覆盖物是否可见。
   * */
  visible(visible: boolean) {
    this.$markerOptions.visible(visible)
    return this
  }

  /**
   * 设置Marker覆盖物的zIndex。
   * */
  zIndex(zIndex: number) {
    this.$markerOptions.zIndex(zIndex)
    return this
  }
}

export class UiSettingsAPI {
  private uiSettings: any

  constructor($map: any, private $AMapOptions) {
    this.uiSettings = $map.getUiSettings()
  }

  getLogoPosition(): number {
    return this.uiSettings.getLogoPosition()
  }

  getZoomPosition(): number {
    return this.uiSettings.getZoomPosition()
  }

  isCompassEnabled(): boolean {
    return this.uiSettings.isCompassEnabled()
  }

  isGestureScaleByMapCenter(): boolean {
    return this.uiSettings.isGestureScaleByMapCenter()
  }

  isIndoorSwitchEnabled(): boolean {
    return this.uiSettings.isIndoorSwitchEnabled()
  }

  isMyLocationButtonEnabled(): boolean {
    return this.uiSettings.isMyLocationButtonEnabled()
  }

  isRotateGesturesEnabled(): boolean {
    return this.uiSettings.isRotateGesturesEnabled()
  }

  isScaleControlsEnabled(): boolean {
    return this.uiSettings.isScaleControlsEnabled()
  }

  isScrollGesturesEnabled(): boolean {
    return this.uiSettings.isScrollGesturesEnabled()
  }

  isTiltGesturesEnabled(): boolean {
    return this.uiSettings.isTiltGesturesEnabled()
  }

  isZoomControlsEnabled(): boolean {
    return this.uiSettings.isZoomControlsEnabled()
  }

  isZoomGesturesEnabled(): boolean {
    return this.uiSettings.isZoomGesturesEnabled()
  }

  setAllGesturesEnabled(enabled: boolean): void {
    this.uiSettings.setAllGesturesEnabled(enabled)
  }

  setCompassEnabled(enabled: boolean): void {
    this.uiSettings.setCompassEnabled(enabled)
  }

  setGestureScaleByMapCenter(isGestureScaleByMapCenter: boolean): void {
    this.uiSettings.setGestureScaleByMapCenter(isGestureScaleByMapCenter)
  }

  setIndoorSwitchEnabled(isIndoorSwitchEnabled: boolean): void {
    this.uiSettings.setIndoorSwitchEnabled(isIndoorSwitchEnabled)
  }

  setLogoBottomMargin(pixels: number): void {
    this.uiSettings.setLogoBottomMargin(pixels)
  }
  setLogoLeftMargin(pixels: number): void {
    this.uiSettings.setLogoLeftMargin(pixels)
  }

  setLogoPosition(position: LogoPosition): void {
    this.uiSettings.setLogoPosition(this.$AMapOptions[position])
  }

  setMyLocationButtonEnabled(enabled: boolean): void {
    this.uiSettings.setMyLocationButtonEnabled(enabled)
  }

  setRotateGesturesEnabled(enabled: boolean): void {
    this.uiSettings.setRotateGesturesEnabled(enabled)
  }

  setScaleControlsEnabled(enabled: boolean): void {
    this.uiSettings.setScaleControlsEnabled(enabled)
  }

  setScrollGesturesEnabled(enabled: boolean): void {
    this.uiSettings.setScrollGesturesEnabled(enabled)
  }

  setTiltGesturesEnabled(enabled: boolean): void {
    this.uiSettings.setTiltGesturesEnabled(enabled)
  }

  setZoomControlsEnabled(enabled: boolean): void {
    this.uiSettings.setZoomControlsEnabled(enabled)
  }

  setZoomGesturesEnabled(enabled: boolean): void {
    this.uiSettings.setZoomGesturesEnabled(enabled)
  }

  setZoomPosition(position: ZoomPosition): void {
    this.uiSettings.setZoomPosition(this.$AMapOptions[position])
  }
}
