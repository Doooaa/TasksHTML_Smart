

   
    function EnterNumber(val)
    {
        var Answer=document.getElementById('Answer');
    
        Answer.value += val;  //show
    }
    function EnterOperator(op)
    {
        var Answer=document.getElementById('Answer');
    
        Answer.value += op;//show
        
    }
    function EnterEqual()
    {

        var Answer=document.getElementById('Answer');
        result = eval(Answer.value);
        Answer.value = result; 
    }


    function EnterClear(){
        var Answer=document.getElementById('Answer');
        Answer.value=""; 
    }