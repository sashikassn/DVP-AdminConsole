/**
 * Created by Pawan on 8/1/2016.
 * */



mainApp.factory('companyConfigBackendService', function ($http, authService,baseUrls)
{
    return {

        getCloudEndUser: function () {
            
            return $http({
                method: 'GET',
                url:baseUrls.clusterconfigUrl +"CloudEndUsers"
            }).then(function(response)
            {
                return response;
            });
        },

        saveNewEndUser: function (resource) {
            

            return $http({
                method: 'POST',
                url: baseUrls.clusterconfigUrl +"CloudEndUser",
                data:resource

            }).then(function(response)
            {
                return response;
            });
        },

        updateEndUser: function (resource) {
            

            return $http({
                method: 'PUT',
                url: baseUrls.clusterconfigUrl +"CloudEndUser/"+resource.id,
                data:resource

            }).then(function(response)
            {
                return response;
            });
        },
        getClusters: function () {
            
            return $http({
                method: 'GET',
                url: baseUrls.clusterconfigUrl +"Clouds"
            }).then(function(response)
            {
                return response;
            });
        },
        getContexts: function () {
            
            return $http({
                method: 'GET',
                url: baseUrls.sipUserendpoint +"Contexts"
            }).then(function(response)
            {
                return response;
            });
        },
        saveNewContext: function (resource) {
            

            return $http({
                method: 'POST',
                url: baseUrls.sipUserendpoint +"Context",
                data:resource

            }).then(function(response)
            {
                return response;
            });
        },
        deleteContext: function (resource) {
            

            return $http({
                method: 'DELETE',
                url: baseUrls.sipUserendpoint +"Context/"+resource.Context

            }).then(function(response)
            {
                return response;
            });
        },
        activateTicketTypes: function () {


            return $http({
                method: 'POST',
                url: baseUrls.ticketUrl +"TicketTypes",
                data:{}

            }).then(function(response)
            {
                return response;
            });
        },
        getTicketTypes: function () {


            return $http({
                method: 'GET',
                url: baseUrls.ticketUrl +"TicketTypes"

            }).then(function(response)
            {
                return response.data;
            });
        },
        updateTicketTypes: function (ticketType) {


            return $http({
                method: 'PUT',
                url: baseUrls.ticketUrl +"TicketTypes/"+ticketType._id.toString(),
                data: ticketType

            }).then(function(response)
            {
                return response.data;
            });
        },
        addCustomTicketTypes: function (ticketTypeId, customType) {


            return $http({
                method: 'PUT',
                url: baseUrls.ticketUrl +"TicketTypes/"+ticketTypeId+"/"+customType

            }).then(function(response)
            {
                return response.data;
            });
        },
        removeCustomTicketTypes: function (ticketTypeId, customType) {


            return $http({
                method: 'DELETE',
                url: baseUrls.ticketUrl +"TicketTypes/"+ticketTypeId+"/"+customType

            }).then(function(response)
            {
                return response.data;
            });
        }

    }
});