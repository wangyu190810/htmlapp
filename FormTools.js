var Form = {
    
    get_form_obj_data:function(form_id){
    form_doc = window.document.getElementById(form_id);
    // var elements = new Array();  
    var obj = new Object();
    var tagElements = form_doc.getElementsByTagName('input');  
    for (var j = 0; j < tagElements.length; j++){ 
    //    elements.push(tagElements[j])
       if (tagElements[j].name != ""){
            obj[tagElements[j].name] = tagElements[j].value
       }
    } 
    return obj  
},
    

}



function pop_alter(){
    alter("hello")
}

if (typeof exports !== 'undefined') exports.FormTools = Form;
else window.FormTools = Form ;