({


    doInit : function (component, event, helper) {
        //console.log('NOCCasesRelatedToService init');
        helper.setupData(component, event, helper);
        var searchTerm = 'Cloud';
        
    },
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'addRecord':
                helper.addRecord(component, row);
                
                break;
            // You might have other buttons as well, handle them in the same way
            //case 'action2':
                //helper.handleAction2(component, row, action);
                //break;
            // etc.
        }
    },
    onSearchChange : function(component, event, helper) {
        var searchTerm = component.get('v.search');
        console.log('searchTerm', searchTerm);
        helper.search(component, event, helper,searchTerm   );
    },
    onSelectedRemoved : function(component, event, helper) {
        console.log('onSelectedRemoved');
        var parameter = event.getParam('parameter');
        
        if (parameter) {
            var removedPill = parameter.name;
            console.log('removedPill', removedPill);
            var selected = component.get('v.selected');
            console.log('selected', selected);
           // var findIndex = selected.findIndex(removedPill);
           // console.log('findIndex', findIndex);
            for (var i=0; i < selected.length; i++) {
                console.log('selected[i] ' + selected[i]);
                if (removedPill === selected[i]) {
                    console.log('splice');
                    selected.splice(i, 1);
                }
                
            }
           component.set('v.selected', selected);
        }
    }

})
