let num = 0;
       let value = document.getElementById('value');
       let add = document.getElementById('add');
       let sub = document.getElementById('sub');
       add.addEventListener("click", function(){
        num = num + 1
        value.innerText = num
       })
       sub.addEventListener("click",function(){
        num = num - 1;
        value.innerText = num
       })
       let reset = document.getElementById("reset");

       reset.addEventListener("click", function () {
       num = 0;
       value.innerText = num;
       });