angular.module('zhp')
    .service('mainSvc', function ($http) {
        console.log('mainSvc');

        this.getYpSvc = function (name, location, category) {
            // console.log(name, location, category);        

            // Parsing Names and Food Categories
            var searchTerm = name + " " + category;
            return $http({
                method: 'POST',
                url: '/apiCall',
                data: {
                    searchTerm: searchTerm,
                    location: location
                }
            })
                .then(function success(response) {
                    console.log('API DATA');
                    return response.data;
                }, function (err) {
                    console.log('Error')
                })
        };

    });