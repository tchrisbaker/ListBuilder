({
    doInit : function(component, event, helper) {
        var listBuilder = component.find("listBuilder");
        // call the aura:method in the child component
        var data = [{id: 'a',Name: 'chris'}, {id: 'b',Name: 'baker'}];
        
        listBuilder.loadData(data);
    }
})
