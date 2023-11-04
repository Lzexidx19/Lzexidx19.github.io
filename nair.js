$(document).ready(function () {
    $(".nav-search-bar").click(function () {
        $('.nav-search-bar').css({
            'width': '130px'
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
    //featured prod next and prev
    $(document).ready(function () {
      $(".next").click(function () {
          $('.featprod-content-lav').css({
              'transform': 'translate(-150%)'
          });
          $('.featprod-content-aloe').css({
            'transform': 'translate(-0%)'
          }); 
          $('.p1').css({
            'display': 'none'
          }); 
          $('.p2').css({
            'display': 'block'
          }); 
          $('.prev').css({
            'opacity': '1'
          });
          $('.next').css({
            'opacity': '0.5'
        });  
      });
    });
    $(document).ready(function () {
      $(".prev").click(function () {
          $('.featprod-content-lav').css({
              'transform': 'translate(0%)'
          });
          $('.featprod-content-aloe').css({
            'transform': 'translate(150%)'
          }); 
          $('.p1').css({
            'display': 'block'
          }); 
          $('.p2').css({
            'display': 'none'
          });
          $('.prev').css({
            'opacity': '0.5'
          });
          $('.next').css({
            'opacity': '1'
        }); 
      });
    });
    // slider artile
    $(document).ready(function () {
      $(".slider-next1").click(function () {
          $('.slider-img1').css({
              'transform': 'translatex(-150%)'
          });
          $('.slider-img2').css({
            'transform': 'translatex(0%)'
          });
          $('.slider-deets1').css({
            'display': 'none'
          });  
          $('.slider-deets2').css({
            'display': 'block'
          });  
          $('.slider-next1').css({
            'display': 'none'
          }); 
          $('.slider-next2').css({
            'display': 'block'
          });
          $('.slider-prev1').css({
            'opacity': '1'
          });
          $('.sp1').css({
            'display': 'none'
          }); 
          $('.sp2').css({
            'display': 'block'
        }); 
      });
    });
    $(document).ready(function () {
      $(".slider-next2").click(function () {
          $('.slider-img2').css({
              'transform': 'translatex(-150%)'
          });
          $('.slider-img3').css({
            'transform': 'translatex(0%)'
          }); 
          $('.slider-deets2').css({
            'display': 'none'
          });  
          $('.slider-deets3').css({
            'display': 'block'
          });
          $('.slider-next1').css({
            'display': 'none'
          }); 
          $('.slider-next2').css({
            'display': 'block',
            'opacity': '0.5'
          }); 
          $('.slider-prev1').css({
            'display': 'none'
          }); 
          $('.slider-prev2').css({
            'display': 'block'
          }); 
          $('.sp2').css({
            'display': 'none'
          }); 
          $('.sp3').css({
            'display': 'block'
        }); 
      });
    });
    $(document).ready(function () {
      $(".slider-prev1").click(function () {
          $('.slider-img2').css({
              'transform': 'translatex(150%)'
          });
          $('.slider-img1').css({
            'transform': 'translatex(0%)'
          }); 
          $('.slider-deets1').css({
            'display': 'block'
          });  
          $('.slider-deets2').css({
            'display': 'none'
          });
          $('.slider-next1').css({
            'display': 'block'
          }); 
          $('.slider-next2').css({
            'display': 'none'
          });
          $('.slider-prev1').css({
            'opacity': '0.5'
          }); 
          $('.sp1').css({
            'display': 'block'
          }); 
          $('.sp2').css({
            'display': 'none'
        }); 
      });
    });
    $(document).ready(function () {
      $(".slider-prev2").click(function () {
          $('.slider-img3').css({
              'transform': 'translatex(150%)'
          });
          $('.slider-img2').css({
            'transform': 'translatex(0%)'
          }); 
          $('.slider-deets2').css({
            'display': 'block'
          });  
          $('.slider-deets3').css({
            'display': 'none'
          });
          $('.slider-next1').css({
            'display': 'none'
          }); 
          $('.slider-next2').css({
            'display': 'block',
            'opacity': '1'
          });
          $('.slider-prev2').css({
            'display': 'none'
          });
          $('.slider-prev1').css({
            'display': 'block'
          });
          $('.sp2').css({
            'display': 'block'
          }); 
          $('.sp3').css({
            'display': 'none'
        }); 
      });
    });