app.controller('UiGridDemoCtrl', ['$scope', 'uiGridConstants', 'i18nService', function ($scope, uiGridConstants, i18nService) {

    //将uiGrid设置为中文
    i18nService.setCurrentLang("zh-cn");

    //一、简单示例
    $scope.gridOptionsSimple = {
        rowHeight: 36,
        columnDefs: [
            { field: 'name', displayName: '姓名' },
            { field: 'gender', displayName: '性别' },
            { field: 'company', displayName: '公司' }
        ],
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol"
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud"
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity"
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko"
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech"
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys"
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli"
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium"
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa"
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba"
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract"
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet"
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi"
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag"
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace"
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate"
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx"
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft"
          },
          {
              "name": "Letitia Vasquez",
              "gender": "female",
              "company": "Slumberia"
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica"
          }
        ]
    };


    //二、复杂示例
    $scope.gridOptionsComplex = {
        enableFiltering: true,
        showColumnFooter:true,
        //showGridFooter: true,
        rowHeight: 36,
        columnDefs: [
          { displayName: '姓名', name: 'name', aggregationType: uiGridConstants.aggregationTypes.count, width: 150 },
          {
              displayName: '性别',
              name: 'gender', filter: { term: 'male' }, width: 150, enableCellEdit: false,
              cellClass: function (grid, row, col, rowRenderIndex, colRenderIndex) {
                  if (grid.getCellValue(row, col) === 'male') {
                      return 'text-success';
                  } else if (grid.getCellValue(row, col) === 'female') {
                      return 'text-danger';
                  }
              }
          },
          { displayName:'年龄', name: 'age', aggregationType: uiGridConstants.aggregationTypes.avg, width: 100 },
          { displayName: '公司', name: 'company', enableFiltering: false }
        ],
        data: [
          {
              "name": "Ethel Price",
              "gender": "female",
              "company": "Enersol",
              "age": 25
          },
          {
              "name": "Claudine Neal",
              "gender": "female",
              "company": "Sealoud",
              "age": 19
          },
          {
              "name": "Beryl Rice",
              "gender": "female",
              "company": "Velity",
              "age": 44
          },
          {
              "name": "Wilder Gonzales",
              "gender": "male",
              "company": "Geekko",
              "age": 26
          },
          {
              "name": "Georgina Schultz",
              "gender": "female",
              "company": "Suretech",
              "age": 53
          },
          {
              "name": "Carroll Buchanan",
              "gender": "male",
              "company": "Ecosys",
              "age": 64
          },
          {
              "name": "Valarie Atkinson",
              "gender": "female",
              "company": "Hopeli",
              "age": 35
          },
          {
              "name": "Schroeder Mathews",
              "gender": "male",
              "company": "Polarium",
              "age": 29
          },
          {
              "name": "Lynda Mendoza",
              "gender": "female",
              "company": "Dogspa",
              "age": 49
          },
          {
              "name": "Sarah Massey",
              "gender": "female",
              "company": "Bisba",
              "age": 40
          },
          {
              "name": "Robles Boyle",
              "gender": "male",
              "company": "Comtract",
              "age": 32
          },
          {
              "name": "Evans Hickman",
              "gender": "male",
              "company": "Parleynet",
              "age": 38
          },
          {
              "name": "Dawson Barber",
              "gender": "male",
              "company": "Dymi",
              "age": 21
          },
          {
              "name": "Bruce Strong",
              "gender": "male",
              "company": "Xyqag",
              "age": 61
          },
          {
              "name": "Nellie Whitfield",
              "gender": "female",
              "company": "Exospace",
              "age": 54
          },
          {
              "name": "Jackson Macias",
              "gender": "male",
              "company": "Aquamate",
              "age": 49
          },
          {
              "name": "Pena Pena",
              "gender": "male",
              "company": "Quarx",
              "age": 25
          },
          {
              "name": "Lelia Gates",
              "gender": "female",
              "company": "Proxsoft",
              "age": 54
          },
          {
              "name": "Alfred Oscar",
              "gender": "male",
              "company": "Transprop",
              "age": 34
          },
          {
              "name": "John Alfred",
              "gender": "male",
              "company": "Haymans",
              "age": 70
          },
          {
              "name": "Leonie Warren",
              "gender": "female",
              "company": "Hilltop",
              "age": 25
          },
          {
              "name": "Belinda Gosford",
              "gender": "female",
              "company": "Archison",
              "age": 42
          },
          {
              "name": "Tracey Misoni",
              "gender": "female",
              "company": "Verizona",
              "age": 34
          },
          {
              "name": "Trevino Moreno",
              "gender": "male",
              "company": "Conjurica",
              "age": 31
          }
        ]
    };
}]);
