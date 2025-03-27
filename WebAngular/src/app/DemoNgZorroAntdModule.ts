import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NG-ZORRO Imports
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'; // ✅ Correct spelling
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code'; // Ensure this module exists in the library
// import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // NG-ZORRO Modules
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzModalModule,
    NzFormModule,
    NzSelectModule,
    NzCardModule,
    NzAvatarModule,
    NzDropDownModule,
    NzBadgeModule,
    NzSpinModule,
    NzSwitchModule,
    NzToolTipModule, // ✅ Correct spelling
    NzPopoverModule,
    NzCollapseModule,
    NzPaginationModule,
    NzDividerModule,
    NzProgressModule,
    NzTabsModule,
    NzBreadCrumbModule,
    NzCheckboxModule,
    NzRadioModule,
    NzSliderModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzUploadModule,
    NzResultModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzStepsModule,
    NzAnchorModule,
    NzCascaderModule,
    NzAlertModule,
    NzDrawerModule,
    NzSkeletonModule,
    NzStatisticModule,
    NzAffixModule,
    NzSegmentedModule,
    NzSpaceModule,
    NzResizableModule,
    NzImageModule,
    NzQRCodeModule, // ✅ Correct spelling
    // NzColorPickerModule
  ],
  bootstrap: [AppComponent],
})
export class DemoNgZorroAntdModule {}
