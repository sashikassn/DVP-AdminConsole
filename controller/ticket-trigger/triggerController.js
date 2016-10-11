/**
 * Created by Heshan.i on 8/15/2016.
 */
(function(){
    var app =angular.module('veeryConsoleApp');



    var triggerController = function($scope, $state, triggerApiAccess) {
        $scope.triggers = [];
        $scope.trigger = {};

        $scope.showAlert = function (title,content,type) {
            new PNotify({
                title: title,
                text: content,
                type: type,
                styling: 'bootstrap3'
            });
        };

        $scope.removeDeleted = function (item) {

            var index = $scope.triggers.indexOf(item);
            if (index != -1) {
                $scope.triggers.splice(index, 1);
            }

        };

        $scope.reloadPage = function () {
            $state.reload();
        };

        $scope.loadTriggers = function(){
            triggerApiAccess.getTriggers().then(function(response){
                if(response.IsSuccess)
                {
                    $scope.triggers = response.Result;
                }
                else
                {
                    var errMsg = response.CustomMessage;

                    if(response.Exception)
                    {
                        errMsg = response.Exception.Message;
                    }
                    $scope.showAlert('Trigger', errMsg, 'error');
                }
            }, function(err){
                var errMsg = "Error occurred while loading triggers";
                if(err.statusText)
                {
                    errMsg = err.statusText;
                }
                $scope.showAlert('Trigger', errMsg, 'error');
            });
        };

        $scope.saveTrigger = function(){
            triggerApiAccess.createTrigger($scope.trigger).then(function(response){
                if(response.IsSuccess)
                {
                    $scope.triggers = response.Result;
                    $scope.showAlert('Trigger', response.CustomMessage, 'success');
                    $state.reload();
                }
                else
                {
                    var errMsg = response.CustomMessage;

                    if(response.Exception)
                    {
                        errMsg = response.Exception.Message;
                    }
                    $scope.showAlert('Trigger', errMsg, 'error');
                }
            }, function(err){
                var errMsg = "Error occurred while saving trigger";
                if(err.statusText)
                {
                    errMsg = err.statusText;
                }
                $scope.showAlert('Trigger', errMsg, 'error');
            });
        };

        $scope.loadTriggers();
    };

    app.controller('triggerController', triggerController);
}());