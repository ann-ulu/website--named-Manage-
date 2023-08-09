// navbar add bg white color

// navbar mobile
document.addEventListener('DOMContentLoaded', function(){
    const navbar_use = document.querySelector('.use_nav');
    const icon_open = document.querySelector('.open');
    const icon_close = document.querySelector('.close');
    const linkz = document.querySelectorAll('.link');
    
    icon_open.addEventListener('click', function(){
    navbar_use.classList.toggle('activeit');
    icon_open.style.display = "none";
    icon_close.style.display = "block";
    
    });
    
    icon_close.addEventListener('click', function(){
        navbar_use.classList.remove('activeit');
        icon_open.style.display = "block";
        icon_close.style.display = "none";
        
        });
    
        document.addEventListener('click', function(event) {
            if (navbar_use.classList.contains('activeit') &&
                !event.target.closest('.use_nav') &&
                !event.target.closest('.open') &&
                !event.target.closest('.close')
            ) {
                navbar_use.classList.remove('activeit');
                icon_open.style.display = 'block';
                icon_close.style.display = 'none';
            }
        });
    
        linkz.forEach(function(link) {
            link.addEventListener('click', function(event){
              navbar_use.classList.remove('activeit');
              icon_open.style.display = 'block';
              icon_close.style.display = 'none';

            });
          });
          
    
    
})

