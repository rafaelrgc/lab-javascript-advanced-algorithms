window.onload = function(){
    var pushButton = document.getElementById('add-button');
    var takeButton = document.getElementById('take-button');
    var inputInfo = document.getElementById('input-stack');

    pushButton.addEventListener('click', function() {
        StackDataStructure.push(inputInfo);
        document.getElementById('list1').innerHTML = inputInfo;

        
         //quando apertar o botao add:
        //1- ver se stack tem espaço;
        //2- fazer o push para o array;
        //3- imprimir no html;
        //os retornos de over/under flow aparecerão como? alert?
    });

    //takeButton.addEventListener('click', function () { });
    
    
   // =  this.pop;

/*
 quando apertar o botao take:
 1- funcao pop;
 2- retorno ou retira
*/