({
    handleRemove : function(component, event, helper) {
        var selectedPill = component.get('v.pillLabel');
        console.log('remove pill ', selectedPill);
        var compEvent = component.getEvent("selectedRemoved");
        var param = {
            "name" : selectedPill
        };
        compEvent.setParams(
            {"parameter" : param }
        );             
        compEvent.fire();

    }
})
