app.controller('AbnTestController', function($scope, $timeout) {
    var apple_selected, tree, treedata_avm, treedata_geography;
    $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "你的选择: " + branch.label;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };
    apple_selected = function(branch) {
      return $scope.output = "苹果: " + branch.label;
    };
    treedata_avm = [
      {
        label: '动物',
        children: [
          {
            label: '狗宝宝',
            data: {
              description: "人类的好伙伴"
            }
          }, {
            label: '猫大人',
            data: {
              description: "星球真正的统治者"
            }
          }, {
            label: '河马',
            data: {
              description: "饿了, 饿了"
            }
          }, {
            label: '鸡',
            children: ['家禽鸡', '火鸡', '时光鸡']
          }
        ]
      }, {
        label: '蔬菜',
        data: {
            definition: "植物或植物部分用作食物，通常作为肉或鱼的搭配，如大白菜、土豆、胡萝卜、豆。 ",
          data_can_contain_anything: true
        },
        onSelect: function(branch) {
            return $scope.output = "蔬菜: " + branch.data.definition;
        },
        children: [
          {
              label: '橙子'
          }, {
            label: '苹果',
            children: [
              {
                label: '绿苹果',
                onSelect: apple_selected
              }, {
                label: '红苹果',
                onSelect: apple_selected
              }, {
                label: '富士山苹果',
                onSelect: apple_selected
              }
            ]
          }
        ]
      }, {
          label: '矿物质',
        children: [
          {
              label: '岩石',
              children: ['火成岩', '沉积岩', '变质岩']
          }, {
              label: '金属',
              children: ['铝', '钢', '铜']
          }, {
              label: '塑料',
            children: [
              {
                  label: '热塑性塑料',
                  children: ['聚乙烯', '聚丙烯', '聚苯乙烯', '聚氯乙烯']
              }, {
                  label: '热固性聚合物',
                  children: ['聚酯', '聚亚安酯', '硫化橡胶', '酚醛树脂', '脲（甲）醛树脂']
              }
            ]
          }
        ]
      }
    ];
    treedata_geography = [
      {
          label: '北美洲',
        children: [
          {
              label: '加拿大',
              children: ['多伦多', '温哥华']
          }, {
            label: '美国',
            children: ['纽约', '洛杉矶']
          }, {
              label: '墨西哥',
              children: ['墨西哥市', '瓜达拉哈拉']
          }
        ]
      }, {
          label: '南美洲',
        children: [
          {
              label: '委内瑞拉',
              children: ['加拉加斯', '马拉开波湾']
          }, {
              label: '巴西',
              children: ['圣保罗', '里约热内卢']
          }, {
              label: '阿根廷',
              children: ['布宜诺斯艾利斯', '科多巴']
          }
        ]
      }
    ];
    $scope.my_data = treedata_avm;
    $scope.try_changing_the_tree_data = function() {
      if ($scope.my_data === treedata_avm) {
        return $scope.my_data = treedata_geography;
      } else {
        return $scope.my_data = treedata_avm;
      }
    };
    $scope.my_tree = tree = {};
    $scope.try_async_load = function() {
      $scope.my_data = [];
      $scope.doing_async = true;
      return $timeout(function() {
        if (Math.random() < 0.5) {
          $scope.my_data = treedata_avm;
        } else {
          $scope.my_data = treedata_geography;
        }
        $scope.doing_async = false;
        return tree.expand_all();
      }, 1000);
    };
    return $scope.try_adding_a_branch = function() {
      var b;
      b = tree.get_selected_branch();
      return tree.add_branch(b, {
        label: '新分支',
        data: {
          something: 42,
          "else": 43
        }
      });
    };
});