$(document).ready(function () {
    $(".search-logo-open").click(function () {
        $('.nav-search-bar').css({
            'width': '170px'
        });
        $('.search-logo-open').css({
          'display': 'none'
      });
      $('.search-logo-close').css({
        'display': 'block'
    });
    });
  $(".search-logo-close").click(function () {
      $('.nav-search-bar').css({
          'width': '0px'
      });
      $('.search-logo-close').css({
        'display': 'none'
    });
    $('.search-logo-open').css({
      'display': 'block'
  });
  });
  });
  
  
  
  // why nair dropdown menu
  $(document).ready(function () {
    $(".whynair-btn").click(function () {
        $('.whynair-dropdown-container').css({
          'display': 'block'
        });
        $('.whynair').css({
          'display': 'none'
        });
        $('.whynair-close').css({
          'display': 'flex'
        });
        
      });
    });
    $(document).ready(function () {
      $(".whynair-close").click(function () {
          $('.whynair-dropdown-container').css({
            'display': 'none'
          });
          $('.whynair-close').css({
            'display': 'none'
          });
          $('.whynair').css({
            'display': 'block'
          });
          
        });
      });
  // responsive hidden menu 
  $(document).ready(function () {
    $(".nav-open").click(function () {
        $('.resp-nav-menu').css({
          'transform': 'translateX(0)'
        });
        $('.nav-open').css({
          'display': 'none'
        });
        $('.nav-close').css({
          'visibility': 'visible'
        });
      });
    });
  
  $(document).ready(function () {
    $(".nav-close").click(function () {
        $('.resp-nav-menu').css({
            'transform': 'translatex(-150%)'
        });
        $('.nav-close').css({
          'visibility': 'hidden'
        });
        $('.nav-open').css({
          'display': 'block'
        });
      });
    });
  
    // responsive whynair hidden menu under Li
  
    $(document).ready(function () {
      $(".resp-whynair").click(function () {
          $('.resp-whynair-menu').css({
              'display': 'block'
          });
          $('.resp-whynair').css({
            'display': 'none'
          });
          $('.resp-whynair-close').css({
            'display': 'block',
            'color': 'rgb(223, 30, 143)',
            'font-weight': '700'
        });   
      });
    });
    $(document).ready(function () {
      $(".resp-whynair-close").click(function () {
          $('.resp-whynair-menu').css({
              'display': 'none'
          });
          $('.resp-whynair').css({
            'display': 'block'
          });
          $('.resp-whynair-close').css({
            'display': 'none'
        });   
      });
    });
    //article slides
    $(document).ready(function () {
      $(".next1").click(function () {
        $('.next1').css({
          'display': 'none'
          });
          $('.prev1').css({
            'opacity': '1'
          });
          $('.next2').css({
            'display': 'block'
          });
          $('.img1').css({
              'transform': 'translatex(-180%)'
          });
          $('.img2').css({
            'transform': 'translatex(-102%)',
          });
          $('.deets1').css({
            'display' : 'none',
          });
          $('.deets2').css({
            'display' : 'block',
          });
          $('.p1').css({
            'display' : 'none',
          });
          $('.p2').css({
            'display' : 'block',
          });
          $('.p3').css({
            'display': 'none'
          });
      });
    });
  $(document).ready(function () {
    $(".next2").click(function () {
      $('.next2').css({
        'display': 'block',
        'opacity' : '0.5'
        });
        $('.prev1').css({
          'display': 'none'
        });
        $('.prev2').css({
          'display': 'block'
        });
        $('.img2').css({
            'transform': 'translatex(-280%)'
        });
        $('.img3').css({
          'transform': 'translatex(-201%)'
        });
        $('.img4').css({
          'transform': 'translatex(201%)'
        });
        $('.p2').css({
          'display': 'none'
        });
        $('.p3').css({
          'display': 'block'
        });
        $('.deets2').css({
          'display': 'none'
        });
        $('.deets3').css({
          'display': 'block'
        });
      });
    });
  $(document).ready(function () {
    $(".prev1").click(function () {
      $('.prev1').css({
        'opacity': '0.5'
        });
        $('.next1').css({
        'display': 'block'
        });
        $('.next2').css({
          'display': 'none'
        });
        $('.img2').css({
            'transform': 'translatex(250%)'
        });
        $('.img1').css({
          'transform': 'translatex(0%)',
        });
        $('.img4').css({
          'transform': 'translatex(201%)'
        });
        $('.deets1').css({
          'display' : 'block',
        });
        $('.deets2').css({
          'display' : 'none',
        });
        $('.p2').css({
          'display' : 'none',
        });
        $('.p1').css({
          'display' : 'block',
        });
      });
    });
    $(document).ready(function () {
      $(".prev2").click(function () {
        $('.prev1').css({
          'display': 'block',
          });
        $('.prev2').css({
          'display': 'none',
          });
        $('.next2').css({
          'display': 'block',
          'opacity': '1'
          });
        $('.img3').css({
            'transform': 'translatex(500%)'
            });
        $('.img2').css({
          'transform': 'translatex(-100%)'
          });
        $('.deets3').css({
          'display': 'none'
          });
        $('.deets2').css({
          'display': 'block'
          });
        $('.p3').css({
          'display': 'none'
          });
        $('.p2').css({
          'display': 'block'
          });
        });
      });
// mobile other products slides
  $(document).ready(function () {
    $(".op-next1").click(function () {
      $('.op-next1').css({
        'opacity': '0.5'
        });
      $('.op-prev1').css({
        'opacity': '1'
        });
      $('.op-box1').css({
        'transform': 'translatex(-150%)'
        });
      $('.op-box2').css({
        'transform': 'translatex(0%)'
      });
      $('.op-p1').css({
        'display': 'none'
    });
      $('.op-p2').css({
        'display': 'block'
    });
  });
});
$(document).ready(function () {
  $(".op-prev1").click(function () {
    $('.op-next1').css({
      'opacity': '1'
      });
    $('.op-prev1').css({
      'opacity': '0.5'
      });
    $('.op-box1').css({
      'transform': 'translatex(0%)'
      });
    $('.op-box2').css({
      'transform': 'translatex(150%)',
    });
    $('.op-p1').css({
      'display': 'block',
  });
    $('.op-p2').css({
      'display': 'none',
  });
});
});