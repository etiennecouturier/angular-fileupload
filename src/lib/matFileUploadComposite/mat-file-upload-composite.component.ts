import {Component, Input, ViewChild} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {MatFileUploadQueue} from "../matFileUploadQueue/matFileUploadQueue.component";


/**
 * A material design file upload component.
 */
@Component({
    selector: 'mat-file-upload-composite',
    templateUrl: `./mat-file-upload-composite.component.html`,
    styleUrls: ['./mat-file-upload-composite.scss']
})
export class MatFileUploadComposite {

    @ViewChild(MatFileUploadQueue)
    queue: MatFileUploadQueue;

    @Input()
    withBottoms: Boolean = false;

    @Input()
    httpRequestHeaders: HttpHeaders | {
        [header: string]: string | string[];
    } = new HttpHeaders().set("sampleHeader", "headerValue").set("sampleHeader1", "headerValue1");

    @Input()
    httpRequestParams: HttpParams | {
        [param: string]: string | string[];
    } = new HttpParams().set("sampleRequestParam", "requestValue").set("sampleRequestParam1", "requestValue1");

    public uploadAll() {
        this.queue.uploadAll();
    }

    public removeAll() {
        this.queue.removeAll();
    }

}