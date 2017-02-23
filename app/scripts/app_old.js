'use strict';
var app = angular.module('confusionApp', [])
    //MenuController
    .controller('MenuController', ['$scope', function($scope) {
        $scope.tab = 1;
        var dishes = [{
                name: 'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                comment: ''
            },
            {
                name: 'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label: '',
                price: '1.99',
                description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                comment: ''
            },
            {
                name: 'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
                comment: ''
            },
            {
                name: 'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label: '',
                price: '2.99',
                description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            }
        ];
        $scope.dishes = dishes;
        $scope.filtText = '';
        $scope.showDetails = false;

        $scope.select = function(setTab) {
            $scope.tab = setTab;
            if (setTab === 2) {
                $scope.filtText = 'appetizer';
            } else if (setTab === 3) {
                $scope.filtText = 'mains';
            } else if (setTab === 4) {
                $scope.filtText = 'dessert';
            } else {
                $scope.filtText = '';
            }
        };

        $scope.isSelected = function(checkTab) {
            return ($scope.tab === checkTab);
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        }

    }])
    //Contact Controller
    .controller('ContactController', ['$scope', function($scope) {
        $scope.feedback = {mychannel: "", firstname: "", lastname: "", agree: false, email: ""};
        var channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
        $scope.channels = channels;
        $scope.invalidChannelSelection = false;
    }])
    //Feedback Controller
    .controller('FeedbackController', ['$scope', function($scope) {
        $scope.sendFeedback = function(){
            console.log($scope.feedback);   //feedback var is in ContactController but as FeedbackController is inside ContacController. it inherits all variable. So feedback is available in FeedbackController
            if( $scope.feedback.agree && $scope.feedback.mychannel==""){
                $scope.invalidChannelSelection = true;
                console.log("Incorrect Channel Selection");
            } else {
                //Reset all values
                $scope.invalidChannelSelection = false;
                $scope.feedback = {mychannel: "", firstname: "", lastname: "", agree: false, email: ""};
                $scope.mychannel="";
                $scope.feedbackForm.$setPristine();
                console.log($scope.feedback);
            }   
        }
    }]);