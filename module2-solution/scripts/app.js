

(function () {

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    function ShoppingListCheckOffService() {
        var chkOffService = this;

        chkOffService.boughtItems = [];
        chkOffService.toBuyItems = [];

        chkOffService.getBoughtItems = function () {
            return chkOffService.boughtItems;
        };

        chkOffService.buyItem = function (index) {
            console.log("buy ", index);
            chkOffService.boughtItems.push(chkOffService.toBuyItems[index]);
            chkOffService.toBuyItems.splice(index,1);
            
        };

    }

    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {

        var toBuyCtrl = this;
        toBuyCtrl.toBuyList = [{ name: "Apple", quantity: 10 }, { name: "Cookies", quantity: 5 }, { name: "Milk", quantity: 2 }, { name: "Tea", quantity: 3 }, { name: "Cheese", quantity: 7 }];

        console.log('Original List:', toBuyCtrl.toBuyList);
        ShoppingListCheckOffService.toBuyItems = toBuyCtrl.toBuyList;

        toBuyCtrl.buy = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }



    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {

        var boughtCtrl = this;
        boughtCtrl.boughtList = ShoppingListCheckOffService.boughtItems;


    }
        





})();