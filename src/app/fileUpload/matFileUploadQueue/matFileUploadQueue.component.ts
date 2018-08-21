import {AfterContentInit, Component, ContentChildren, forwardRef, Input, OnDestroy, QueryList} from '@angular/core';
import {MatFileUpload} from '../matFileUpload/matFileUpload.component';
import {Subscription} from 'rxjs/Subscription';
import {merge} from 'rxjs/observable/merge';
import {startWith} from 'rxjs/operators/startWith';
import {HttpHeaders, HttpParams} from '@angular/common/http';


/**
 * A material design file upload queue component.
 */
@Component({
    selector: 'mat-file-upload-queue',
    templateUrl: `matFileUploadQueue.component.html`,
    exportAs: 'matFileUploadQueue',
})
export class MatFileUploadQueue implements OnDestroy, AfterContentInit {

    @ContentChildren(forwardRef(() => MatFileUpload))
    fileUploads: QueryList<MatFileUpload>;

    @Input()
    withBottoms: Boolean = false;

    /** Subscription to remove changes in files. */
    private _fileRemoveSubscription: Subscription | null;

    /** Subscription to changes in the files. */
    private _changeSubscription: Subscription;

    /** Combined stream of all of the file upload remove change events. */
    get fileUploadRemoveEvents() {
        return merge(...this.fileUploads.map(fileUpload => fileUpload.removeEvent));
    }

    private files: Array<any> = [];

    @Input()
    httpUrl: string;

    @Input()
    httpRequestHeaders: HttpHeaders | {
        [header: string]: string | string[];
    } = new HttpHeaders().set("Content-Type", "multipart/form-data");

    @Input()
    httpRequestParams: HttpParams | {
        [param: string]: string | string[];
    } = new HttpParams();

    @Input()
    fileAlias: string = "file";

    ngAfterContentInit() {
        this._changeSubscription = this.fileUploads.changes.pipe(startWith(null)).subscribe(() => {
            if (this._fileRemoveSubscription) {
                this._fileRemoveSubscription.unsubscribe();
            }
            this._listenTofileRemoved();
        });
    }

    private _listenTofileRemoved(): void {
        this._fileRemoveSubscription = this.fileUploadRemoveEvents.subscribe((event: MatFileUpload) => {
            this.files.splice(event.id, 1);
        });
    }

    add(file: any) {
        this.files.push(file);
    }

    public uploadAll() {
        this.fileUploads.forEach((fileUpload) => {
            if (fileUpload.loaded != fileUpload.total && fileUpload.total != 0) {
                fileUpload.upload()
            }
        });
    }

    public removeAll() {
        for (let index = this.files.length -1; index >= 0; index--) {
            let fileUpload = this.fileUploads.find(file => file.id == index);
            if (fileUpload.loaded == 0) {
                fileUpload.remove()
            }
        }
    }

    ngOnDestroy() {
        if (this.files) {
            this.removeAll();
        }
    }

}