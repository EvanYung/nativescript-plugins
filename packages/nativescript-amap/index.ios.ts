import { AMapViewBase } from './common'

export class AMapView extends AMapViewBase {
  public createNativeView(): object {
    const nativeView = new android.widget.FrameLayout(this._context)
    return nativeView
  }
}
