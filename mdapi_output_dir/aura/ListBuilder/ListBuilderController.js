({


    doInit : function (component, event, helper) {
        //console.log('NOCCasesRelatedToService init');
        helper.setupData(component, event, helper);
    },
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'addRecord':
                helper.addRecord(row);
                break;
            // You might have other buttons as well, handle them in the same way
            //case 'action2':
                //helper.handleAction2(component, row, action);
                //break;
            // etc.
        }
    }
})
