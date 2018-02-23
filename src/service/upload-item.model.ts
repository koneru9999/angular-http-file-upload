export class UploadItem {
    method = 'POST';
    url = '';
    headers: any = {};
    formData: any = {};
    withCredentials = false;
    alias = 'file';
    file: any = {};

    xhr: any = {};

    abort() {
        this.xhr.abort();
    }
}
