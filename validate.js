window.onload = function(){

    //there will be one span element for each input field
    // when the page is loaded, we create them and append them to corresponding input elements 
	// they are initially empty and hidden

	var email = document.getElementById("email");
    var span1 = document.createElement("span");
	span1.style.display = "none"; 
    span1.style.fontWeight="bold"
    email.parentNode.appendChild(span1);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const validatePwd = (pwd) =>{
        return String(pwd)
            .match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

    }


    email.onfocus = function(){
           span1.style.display="inline";
           span1.textContent="email must be in format: text@domain1.domain2 ";
        }
    

    email.onblur = function(){
        span1.style.display = "none";
    }


    var pwd = document.getElementById("pwd");
    var span2 = document.createElement("span");
	span2.style.display = "none"; 
    span2.style.fontWeight="bold"
    pwd.parentNode.appendChild(span2);
    pwd.onfocus = function(){

           span2.style.display="inline";
           span2.textContent="password should include at least six characters";
        }

    

    pwd.onblur = function(){
        span2.style.display = "none";
    }

    var confPwd = document.getElementById("confirm");
    var span3 = document.createElement("span");
    span3.style.fontWeight="bold"
	span3.style.display = "none"; 
    confPwd.parentNode.appendChild(span3);  
    confPwd.onfocus = function(){
           span3.style.display="inline";
           span3.textContent="Please confirm the password";     
        }
    confPwd.onblur = function(){
        span3.style.display = "none";
    }

    
    var form = document.getElementById("myForm");
    form.onsubmit = function(e){
        e.preventDefault()
        var email = document.getElementById("email");
        var pwd = document.getElementById("pwd");
        var confPwd = document.getElementById("confirm");

        email.onfocus = function(){
            email.classList.remove('error')
        }
        pwd.onfocus = function(){
            pwd.classList.remove('error')
        }
        confPwd.onfocus = function(){
            confPwd.classList.remove('error')
        }


        if(email.value==""){
            email.classList.add('error')
            span1.style.display="inline"
            span1.textContent="email field cannot be blank"
        }else if(!validateEmail(email.value)){
            email.classList.add('error')
            span1.style.display="inline";
            span1.textContent="email must be in format: text@domain1.domain2 ";
        }else if(pwd.value==''){
            pwd.classList.add('error')
            span2.style.display="inline"
            span2.textContent="Password field cannot be blank"
        }else if(!validatePwd(pwd.value)){
            pwd.classList.add('error')
            span2.style.display="inline";
            span2.textContent="The password should contain at least six characters, one uppercase , one number and one special character";
        }else if(confPwd.value==''){
            confPwd.classList.add('error')
            span3.style.display="inline"
            span3.textContent="Password confirmation field cannot be blank"
        }
        else if(pwd.value!=confPwd.value){
            pwd.classList.add('error')
            confPwd.classList.add('error')
            span3.style.display="inline";
            span3.textContent="Passwords do not match";
        }else{email.classList.remove('error')
        pwd.classList.remove('error')
        confPwd.classList.remove('error')
        form.submit();
        }

        


    

    }


}


