/**
 * Created by Divani on 01/26/2018.
 */

'use strict';
mainApp.factory("setupAIService", function ($http, $log, $filter, authService, baseUrls, $auth) 
{
    var tenantID = $auth.getPayload().companyName;
    var getToken = $auth.getToken();

    var createSetupAI = function (setup) {
        return $http({
            method: 'POST',
            url: baseUrls.setupaiAPTUrl,
            data: setup
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response;
            } else {
                return response;
            }
        });
    };

    var updateSetupAI = function (setup) {
        console.log(setup);
        return $http({
            method: 'PUT',
            url: baseUrls.setupaiAPTUrl + "/" + setup._id,
            data: setup
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response;
            } else {
                return response;
            }
        });
    };

    var deleteSetupAI = function (setup) {
        console.log(setup);
        return $http({
            method: 'DELETE',
            url: baseUrls.setupaiAPTUrl + "/" + setup._id,
        }).then(function (response) {
            if (response.data && response.data.IsSuccess) {
                return response;
            } else {
                return response;
            }
        });
    };

    var getAllSetupAI = function () {
        return $http({
            method: 'GET',
            url: baseUrls.setupaiAPTUrl + "s/"
        }).then(function (response) {
            console.log(response);
            if (response.data && response.data.IsSuccess) {
                return response;
            } else {
                return response;
            }
        });
    };

    var getWorkFlow = function () {
        return $http({
            method: 'GET',      
            url: baseUrls.getworkflowAPIUrl + tenantID +".dev.smoothflow.io",
        }).then(function (response) {
            console.log(response.status);
            //debugger;
            if (response.status === 200) {
                return response;

            } else {
                return response;
            }
        });
    };

    return {
        CreateSetupAI: createSetupAI,
        UpdateSetupAI: updateSetupAI,
        DeleteSetupAI: deleteSetupAI,
        GetAllSetupAI: getAllSetupAI,
        GetWorkFlow:getWorkFlow
    }
});