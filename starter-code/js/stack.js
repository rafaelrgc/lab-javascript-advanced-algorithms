window.onload = function(){
    var pushButton = document.getElementById('add-button');
    var takeButton = document.getElementById('take-button');
    var list = document.getElementById('ul');
    var inputInfo = document.getElementById('input-stack');
    var list = document.getElementById('list');   


    pushButton.addEventListener('click', function() {
        
        if (stack.canPush() == true){
            if (inputInfo.value == '') {
                return console.log('error: input a value');
            } else {
                stack.push(inputInfo.value);
                addStackList();     
            }    
        } else
            return 'Stack Overflow';

        console.log(stack.stackControl);
    });

    takeButton.addEventListener('click', function() {
        
        if (stack.isEmpty() == true){
            return console.log('error: stack is empty!');
        } else {
            stack.stackControl.pop();
            delStackList();
        }    

        console.log(stack.stackControl);
    });

    //LISTA HTML

    function addStackList() {
        var li = document.createElement('li');
        var stackText = document.createTextNode(inputInfo.value);
        li.appendChild(stackText);
        list.insertBefore(li, list.childNodes[2]);  
    }
    
   function delStackList() {
    list.removeChild(list.childNodes[2]);
   }          

}





            /*
           
                    
                    //quando apertar o botao add:
                    //1- ver se stack tem espaço;
                    //2- fazer o push para o array;
                    //3- imprimir no html;
                    //os retornos de over/under flow aparecerão como? alert?
                
            // takeButton.addEventListener('click', function() {
                //    var //id da lista para apagar = document.getElementById('xxxx');
                //});    
                
                    */
        
    

