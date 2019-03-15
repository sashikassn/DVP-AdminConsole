/**
 * Created by Waruna on 1/2/2018.
 */

mainApp.factory('ShareData', function ($http) {
    return {BusinessUnit:'No Assigned Unit' , BusinessUnits: [], MyProfile: {}, UnitUsers: [],GetUserByBusinessUnit:function() {
            return $http({
                method: 'GET',
                url: baseUrls.UserServiceBaseUrl + "BusinessUnit/"+this.BusinessUnit+"/Users"
            }).then(function (response) {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return [];
            });
        },
        listeningCallId:"",
        isInCall:false,

        getUserCountByBusinessUnit : function() {
            return $http({
                method: 'GET',
                url: baseUrls.UserServiceBaseUrl + "BusinessUnit/"+this.BusinessUnit+"/UserCount"
            }).then(function (response) {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return 0;
            });
        },getUserByBusinessUnit : function(pagesize,page) {
            return $http({
                method: 'GET',
                url: baseUrls.UserServiceBaseUrl + "BusinessUnit/"+this.BusinessUnit+"/Users?Page="+page+"&Size="+pagesize
            }).then(function (response) {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return [];
            });
        }, getUsersByRoleWithPaging : function (pagesize,pageno) {

            return $http({
                method: 'POST',
                url: baseUrls.UserServiceBaseUrl + 'UsersByRoles?Page='+pageno+"&Size="+pagesize,
                data:{roles:["admin","supervisor"]}
            }).then(function (response) {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return [];
            })
        },

        getUsersCountByRole : function () {

            return $http({
                method: 'POST',
                url: baseUrls.UserServiceBaseUrl + 'UsersByRoles/Count',
                data:{roles:["admin","supervisor"]}
            }).then(function (response) {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return 0;
            })
        },
        getAgentDetailsCount: function () {
            return $http({
                method: 'GET',
                url: baseUrls.resourceServiceBaseUrl+ "ResourceCount"
            }).then(function(response)
            {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return 0;
            });
        },
        getAgentDetailsWithPaging: function (row,page) {
            return $http({
                method: 'GET',
                url: baseUrls.resourceServiceBaseUrl+ "Resources/"+row+"/"+page
            }).then(function(response)
            {
                if (response.data && response.data.IsSuccess) {
                    return response.data.Result;
                }
                return [];
            });
        },
        UserGroups:[]



    };
});
