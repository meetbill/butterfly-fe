
//文件上传示例

app.controller('FileUploadCtrl', ['$scope', 'FileUploader', function ($scope, FileUploader) {

    var uploader = $scope.uploader = new FileUploader({
        url: 'js/controllers/upload.aspx'
        //原来写的 'js/controllers/upload.php' ，我给改成 .net 版了
    });

    // FILTERS

    uploader.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });

    // CALLBACKS 回调函数，全部打印的话，控制台出一堆东西，看得眼花，我给注释掉了。

    //uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
    //    console.info('onWhenAddingFileFailed', item, filter, options);
    //};
    //uploader.onAfterAddingFile = function(fileItem) {
    //    console.info('onAfterAddingFile', fileItem);
    //};
    //uploader.onAfterAddingAll = function(addedFileItems) {
    //    console.info('onAfterAddingAll', addedFileItems);
    //};
    //uploader.onBeforeUploadItem = function(item) {
    //    console.info('onBeforeUploadItem', item);
    //};
    //uploader.onProgressItem = function(fileItem, progress) {
    //    console.info('onProgressItem', fileItem, progress);
    //};
    //uploader.onProgressAll = function(progress) {
    //    console.info('onProgressAll', progress);
    //};
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        //console.info('onSuccessItem', fileItem, response, status, headers);
        console.info("上传成功", fileItem.file.name, response);
    };
    //uploader.onErrorItem = function(fileItem, response, status, headers) {
    //    console.info('onErrorItem', fileItem, response, status, headers);
    //};
    //uploader.onCancelItem = function(fileItem, response, status, headers) {
    //    console.info('onCancelItem', fileItem, response, status, headers);
    //};
    //uploader.onCompleteItem = function(fileItem, response, status, headers) {
    //    console.info('onCompleteItem', fileItem, response, status, headers);
    //};
    //uploader.onCompleteAll = function() {
    //    console.info('onCompleteAll');
    //};

    console.info('上传组件对象', uploader);
}]);