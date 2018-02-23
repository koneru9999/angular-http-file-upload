import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Uploader } from './service/uploader.service';

export function UploaderFactory() {
  return new Uploader();
}

@NgModule({
  imports: [
    CommonModule,
  ]
})
export class UploaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UploaderModule,
      providers: [
        {
          provide: Uploader,
          useFactory: UploaderFactory
        }
      ]
    };
  }
}
