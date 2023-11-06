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
    $(document).ready(function () {
      $(".filter-openmenu").click(function () {
          $('.filter-content').css({
              'height': '260px'
          });
          $('.filter-openmenu').css({
            'display': 'none'
        });
          $('.filter-closemenu').css({
            'display': 'block'
        });
      });
    });
    //responsive filter open close button
    $(document).ready(function () {
      $(".resp-filter-openmenu").click(function () {
          $('.filter-content').css({
              'height': '600px'
          });
          $('.resp-filter-openmenu').css({
            'display': 'none'
        });
          $('.resp-filter-closemenu').css({
            'display': 'block'
        });
      });
    });
    $(document).ready(function () {
      $(".resp-filter-closemenu").click(function () {
          $('.filter-content').css({
              'height': '70px'
          });
          $('.resp-filter-openmenu').css({
            'display': 'block'
        });
          $('.resp-filter-closemenu').css({
            'display': 'none'
        });
      });
    });
    $(document).ready(function () {
      $(".filter-closemenu").click(function () {
          $('.filter-content').css({
              'height': '70px'
          });
          $('.filter-closemenu').css({
            'display': 'none'
          });
          $('.filter-openmenu').css({
            'display': 'block'
        }); 
      });
    });
    //filter show more button
    $(document).ready(function () {
      $(".filter-smbtn1").click(function () {
        $('.prodlist-container').css({
            'height': 'auto'
        });
        $('.first-showmore').css({
          'display': 'grid'
      });
        $('.filter-smbtn1').css({
          'display': 'none'
        });
        $('.filter-smbtn2').css({
          'display': 'block'
        });
      });
    });
    $(document).ready(function () {
      $(".filter-smbtn2").click(function () {
        $('.prodlist-container').css({
            'height': 'auto'
        });
        $('.second-showmore').css({
          'display': 'grid'
      });
        $('.filter-smbtn2').css({
          'display': 'none'
        });
        $('.filter-hidebtn').css({
          'display': 'block'
        });
      });
    });
    $(document).ready(function () {
      $(".filter-hidebtn").click(function () {
        $('.prodlist-container').css({
            'height': 'auto'
        });
        $('.filter-hidebtn').css({
          'display': 'none'
        });
        $('.filter-smbtn1').css({
          'display': 'block'
        });
        $('.first-showmore').css({
          'display': 'none'
        });
        $('.second-showmore').css({
          'display': 'none'
        });
      });
    });
    