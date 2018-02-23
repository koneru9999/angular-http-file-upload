import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Uploader } from './uploader.service';

@NgModule({
  providers: [
    Uploader
  ],
  imports: [
    CommonModule,
  ]
})
export class UploaderModule { }