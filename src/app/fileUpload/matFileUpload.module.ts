import {NgModule} from '@angular/core';
import {MatFileUpload} from './matFileUpload/matFileUpload.component';
import {MatFileUploadQueue} from './matFileUploadQueue/matFileUploadQueue.component';
import {FileUploadInputFor} from './fileUploadInputFor/fileUploadInputFor.directive';

import {MatProgressBarModule, MatCardModule, MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {BytesPipe} from '../core/pipe/bytes.pipe';
import {CommonModule} from '@angular/common';
import {MatFileUploadComposite} from "./matFileUploadComposite/mat-file-upload-composite.component";


@NgModule({
    imports: [
        MatButtonModule,
        MatProgressBarModule,
        MatIconModule,
        MatCardModule,
        HttpClientModule,
        CommonModule
    ],
    declarations: [
        MatFileUploadComposite,
        MatFileUpload,
        MatFileUploadQueue,
        FileUploadInputFor,
        BytesPipe
    ],
    exports: [
        MatFileUploadComposite,
        MatFileUpload,
        MatFileUploadQueue,
        FileUploadInputFor,
        BytesPipe
    ]
})
export class MatFileUploadModule {
}