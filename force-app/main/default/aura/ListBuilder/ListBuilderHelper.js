({
    setupData : function (component, event, helper) {
        var button = {
            type:  'button',
            typeAttributes: 
            {
              iconName: 'utility:add',
              label: 'Add', 
              name: 'addRecord', 
              title: 'addRecord', 
              disabled: false, 
              value: 'addRecord'
            }
        };
        var actions = [
            { label: 'Show details', name: 'show_details' },
            { label: 'Delete', name: 'delete' }
        ];

        component.set('v.columns', [            
            button,
            {label: 'Name', fieldName: 'Name', type: 'text'}
           
        ]);
        component.set('v.filteredData',component.get('v.data'));
        
        /*var data1 = {
            id: 'a',
            Name: 'chris'
        };
        var data2 = {
            id: 'a2',
            Name: 'Cloudhub3'
        };
        var data3 = {
            id: 'a3',
            Name: 'baker'
        };
        component.set('v.filteredData', [data1, data2, data3]);
        component.set('v.data', [data1, data2, data3]);
        */
    },
    addRecord : function(component, row) {
        var rowName = row.Name;
        
        console.log('add', rowName);
        var selected = component.get('v.selected');
        if (selected.includes(rowName) == true) {
            console.log('already selected');
        }
        else {
            selected.push(rowName);
            component.set('v.selected', selected);
        }
        
    },
   
    search : function(component, event, helper, searchTerm) {
        var found = 0;
        var foundData = [];
        var dataRows = component.get('v.data');
        console.log('searchTerm', searchTerm);  
            // do the searching
        if (searchTerm.length > 0) {
            for (var dataRow in dataRows) {   
                console.log('dataRow', dataRow);              
                      
                if (dataRows[dataRow] && dataRows[dataRow].Name && dataRows[dataRow].Name.toLowerCase().indexOf( searchTerm.toLowerCase() ) > -1 ) {            
                    foundData.push(dataRows[dataRow]);
                    found++;
                }
            }
            if (found === 0) {
                foundData = dataRows;
            }
        }
        else { 
            foundData = dataRows;
        }
        
        
        component.set('v.filteredData', foundData);
    }
    
})
