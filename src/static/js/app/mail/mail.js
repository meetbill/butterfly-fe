app.controller('MailCtrl', ['$scope', function ($scope) {
    $scope.folds = [
      { name: '收件信箱', filter: '' },
      { name: '标星邮件', filter: 'starred' },
      { name: '发件信箱', filter: 'sent' },
      { name: '重要邮件', filter: 'important' },
      { name: '草稿信箱', filter: 'draft' },
      { name: '废件信箱', filter: 'trash' }
    ];

    $scope.labels = [
      { name: 'Angular', filter: 'angular', color: '#23b7e5' },
      { name: 'Bootstrap', filter: 'bootstrap', color: '#7266ba' },
      { name: '客户', filter: 'client', color: '#fad733' },
      { name: '工作', filter: 'work', color: '#27c24c' }
    ];

    $scope.addLabel = function () {
        $scope.labels.push(
          {
              name: $scope.newLabel.name,
              filter: angular.lowercase($scope.newLabel.name),
              color: '#ccc'
          }
        );
        $scope.newLabel.name = '';
    }

    $scope.labelClass = function (label) {
        return {
            'b-l-info': angular.lowercase(label) === 'angular',
            'b-l-primary': angular.lowercase(label) === 'bootstrap',
            'b-l-warning': angular.lowercase(label) === 'client',
            'b-l-success': angular.lowercase(label) === 'work'
        };
    };

}]);

app.controller('MailListCtrl', ['$scope', 'mails', '$stateParams', function ($scope, mails, $stateParams) {
    $scope.fold = $stateParams.fold;
    mails.all().then(function (mails) {
        $scope.mails = mails;
    });
}]);

app.controller('MailDetailCtrl', ['$scope', 'mails', '$stateParams', function ($scope, mails, $stateParams) {
    mails.get($stateParams.mailId).then(function (mail) {
        $scope.mail = mail;
    })
}]);

app.controller('MailNewCtrl', ['$scope', function ($scope) {
    $scope.mail = {
        to: '',
        subject: '',
        content: ''
    }
    $scope.tolist = [
      { name: '西门庆', email: 'xmq@qq.com' },
      { name: '潘金莲', email: 'pjl@qq.com' },
      { name: '武大郎', email: 'wdl@qq.com' }
    ];
}]);

angular.module('app').directive('labelColor', function () {
    return function (scope, $el, attrs) {
        $el.css({ 'color': attrs.color });
    }
});