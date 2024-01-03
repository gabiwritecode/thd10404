// 漢堡包


  const header = document.querySelector('header');



      header.addEventListener('click',function(e){
        const navbarContainer = document.querySelector('.navbar-container');
        

        if(e.target.tagName ==="I"){
          
          if(navbarContainer.style.transform ==='translateX(-600px)'){
            navbarContainer.style.transform ='translateX(-60px)'
          }else{
            navbarContainer.style.transform = 'translateX(-600px)'
          }}

      })

 