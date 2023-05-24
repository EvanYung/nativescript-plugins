import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { NativescriptAmapComponent } from './nativescript-amap.component'

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAmapComponent }])],
  declarations: [NativescriptAmapComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAmapModule {}
