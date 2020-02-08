({
    setupData : function (component, event, helper) {
        var actions = [
            { label: 'Show details', name: 'show_details' },
            { label: 'Delete', name: 'delete' }
        ];

        component.set('v.columns', [
            {type:  'action', typeAttributes: { rowActions: actions } },
            {type:  'button', iconName: 'utility:edit', label: 'Edit', name: 'editRecord', title: 'editTitle', disabled: false, value: 'test'},
            {label: 'Name', fieldName: 'Name', type: 'text'}
           
        ]);

        component.set('v.data', [{
            id: 'a',
            Name: 'Cloudhub'
        }]);
    },
    
})
