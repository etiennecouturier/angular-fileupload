import {NgModule} from '@angular/core';
import {MatFileUpload} from './file/matFileUpload.component';
import {MatFileUploadQueue} from './file-queue/matFileUploadQueue.component';
import {FileDrop} from './file-drop/fileUploadInputFor.directive';

import {MatProgressBarModule, MatCardModule, MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {BytesPipe} from '../core/pipe/bytes.pipe';
import {CommonModule} from '@angular/common';
import {MatFileUploadComposite} from "./file-upload-default/mat-file-upload-composite.component";


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
        FileDrop,
        BytesPipe
    ],
    exports: [
        MatFileUploadComposite,
        MatFileUpload,
        MatFileUploadQueue,
        FileDrop,
        BytesPipe
    ]
})
export class MatFileUploadModule {
}