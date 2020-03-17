function addRow(tableID) {
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
            var colCount = table.rows[1].cells.length;
            for(var i=0; i<colCount; i++) {
                var newcell = row.insertCell(i);
                newcell.innerHTML = table.rows[1].cells[i].innerHTML;
                //alert(newcell.childNodes);
                switch(newcell.childNodes[0].type) {
                    case "text":
                            newcell.childNodes[0].value = "";
                            break;
					
                    
                    case "select-one":
                            newcell.childNodes[0].selectedIndex = 0;
                            break;
					case "text":
                            newcell.childNodes[0].value = "";
                            break;
                }
            }
        } 
             function deleteRow(tableID) 
		{
            
            var table = document.getElementById(tableID);
            var rowCount = table.rows.length;
			var td = event.target.parentNode; 
            var tr = td.parentNode;
            for(var i=0; i<rowCount-1; i++) 
			{
                var row = table.rows[i];
                
                
				
                    if(rowCount <=2)
					{
                        alert("maintain atlest one product record");
                        break;
                    }
				    else{
                    tr.parentNode.removeChild(tr);
                    rowCount--;
                    i--;
					}      
            }
			parseFloat(get_textbox_value)=parseFloat(get_textbox_value)-100;
            
        }
		
        
		
		$(document).ready(function(){

	
        $("#dataTable").on('input', '.txtCal', function () {
       var calculated_total_sum = 0;
     
       $("#dataTable .txtCal").each(function () {
           var get_textbox_value = $(this).val();
		   
           if ($.isNumeric(get_textbox_value)) {
              calculated_total_sum += parseFloat(get_textbox_value);
              }  
           		   
            });
              $("#total_sum_value").html(calculated_total_sum);
       });

});
