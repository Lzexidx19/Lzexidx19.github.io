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
  // general questions
  $(document).ready(function () {
    $(".qbtn1").click(function () {
        $('.ans1').css({
            'display': 'block'
        });
        $('.qclose1').css({
          'display': 'block'
        });
        $('.qbtn1').css({
          'display': 'none'
        }); 
    $(".qclose1").click(function () {
        $('.ans1').css({
            'display': 'none'
        });
        $('.qclose1').css({
          'display': 'none'
        });
        $('.qbtn1').css({
          'display': 'block'
      });   
    });  
  });
});
$(document).ready(function () {
  $(".qbtn2").click(function () {
      $('.ans2').css({
          'display': 'block'
      });
      $('.qclose2').css({
        'display': 'block'
      });
      $('.qbtn2').css({
        'display': 'none'
      }); 
  $(".qclose2").click(function () {
      $('.ans2').css({
          'display': 'none'
      });
      $('.qclose2').css({
        'display': 'none'
      });
      $('.qbtn2').css({
        'display': 'block'
    });   
  });  
});
});

$(document).ready(function () {
  $(".qbtn3").click(function () {
      $('.ans3').css({
          'display': 'block'
      });
      $('.qclose3').css({
        'display': 'block'
      });
      $('.qbtn3').css({
        'display': 'none'
      }); 
  $(".qclose3").click(function () {
      $('.ans3').css({
          'display': 'none'
      });
      $('.qclose3').css({
        'display': 'none'
      });
      $('.qbtn3').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn4").click(function () {
      $('.ans4').css({
          'display': 'block'
      });
      $('.qclose4').css({
        'display': 'block'
      });
      $('.qbtn4').css({
        'display': 'none'
      }); 
  $(".qclose4").click(function () {
      $('.ans4').css({
          'display': 'none'
      });
      $('.qclose4').css({
        'display': 'none'
      });
      $('.qbtn4').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn5").click(function () {
      $('.ans5').css({
          'display': 'block'
      });
      $('.qclose5').css({
        'display': 'block'
      });
      $('.qbtn5').css({
        'display': 'none'
      }); 
  $(".qclose5").click(function () {
      $('.ans5').css({
          'display': 'none'
      });
      $('.qclose5').css({
        'display': 'none'
      });
      $('.qbtn5').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn6").click(function () {
      $('.ans6').css({
          'display': 'block'
      });
      $('.qclose6').css({
        'display': 'block'
      });
      $('.qbtn6').css({
        'display': 'none'
      }); 
  $(".qclose6").click(function () {
      $('.ans6').css({
          'display': 'none'
      });
      $('.qclose6').css({
        'display': 'none'
      });
      $('.qbtn6').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn7").click(function () {
      $('.ans7').css({
          'display': 'block'
      });
      $('.qclose7').css({
        'display': 'block'
      });
      $('.qbtn7').css({
        'display': 'none'
      }); 
  $(".qclose7").click(function () {
      $('.ans7').css({
          'display': 'none'
      });
      $('.qclose7').css({
        'display': 'none'
      });
      $('.qbtn7').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn8").click(function () {
      $('.ans8').css({
          'display': 'block'
      });
      $('.qclose8').css({
        'display': 'block'
      });
      $('.qbtn8').css({
        'display': 'none'
      }); 
  $(".qclose8").click(function () {
      $('.ans8').css({
          'display': 'none'
      });
      $('.qclose8').css({
        'display': 'none'
      });
      $('.qbtn8').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn9").click(function () {
      $('.ans9').css({
          'display': 'block'
      });
      $('.qclose9').css({
        'display': 'block'
      });
      $('.qbtn9').css({
        'display': 'none'
      }); 
  $(".qclose9").click(function () {
      $('.ans9').css({
          'display': 'none'
      });
      $('.qclose9').css({
        'display': 'none'
      });
      $('.qbtn9').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn10").click(function () {
      $('.ans10').css({
          'display': 'block'
      });
      $('.qclose10').css({
        'display': 'block'
      });
      $('.qbtn10').css({
        'display': 'none'
      }); 
  $(".qclose10").click(function () {
      $('.ans10').css({
          'display': 'none'
      });
      $('.qclose10').css({
        'display': 'none'
      });
      $('.qbtn10').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn11").click(function () {
      $('.ans11').css({
          'display': 'block'
      });
      $('.qclose11').css({
        'display': 'block'
      });
      $('.qbtn11').css({
        'display': 'none'
      }); 
  $(".qclose11").click(function () {
      $('.ans11').css({
          'display': 'none'
      });
      $('.qclose11').css({
        'display': 'none'
      });
      $('.qbtn11').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn12").click(function () {
      $('.ans12').css({
          'display': 'block'
      });
      $('.qclose12').css({
        'display': 'block'
      });
      $('.qbtn12').css({
        'display': 'none'
      }); 
  $(".qclose12").click(function () {
      $('.ans12').css({
          'display': 'none'
      });
      $('.qclose12').css({
        'display': 'none'
      });
      $('.qbtn12').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn13").click(function () {
      $('.ans13').css({
          'display': 'block'
      });
      $('.usage-ul').css({
        'display': 'block'
    });
      $('.qclose13').css({
        'display': 'block'
      });
      $('.qbtn13').css({
        'display': 'none'
      }); 
  $(".qclose13").click(function () {
      $('.ans13').css({
          'display': 'none'
      });
      $('.qclose13').css({
        'display': 'none'
      });
      $('.qbtn13').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn14").click(function () {
      $('.ans14').css({
          'display': 'block'
      });
      $('.qclose14').css({
        'display': 'block'
      });
      $('.qbtn14').css({
        'display': 'none'
      }); 
  $(".qclose14").click(function () {
      $('.ans14').css({
          'display': 'none'
      });
      $('.qclose14').css({
        'display': 'none'
      });
      $('.qbtn14').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn15").click(function () {
      $('.ans15').css({
          'display': 'block'
      });
      $('.qclose15').css({
        'display': 'block'
      });
      $('.qbtn15').css({
        'display': 'none'
      }); 
  $(".qclose15").click(function () {
      $('.ans15').css({
          'display': 'none'
      });
      $('.qclose15').css({
        'display': 'none'
      });
      $('.qbtn15').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn16").click(function () {
      $('.ans16').css({
          'display': 'block'
      });
      $('.qclose16').css({
        'display': 'block'
      });
      $('.qbtn16').css({
        'display': 'none'
      }); 
  $(".qclose16").click(function () {
      $('.ans16').css({
          'display': 'none'
      });
      $('.qclose16').css({
        'display': 'none'
      });
      $('.qbtn16').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn17").click(function () {
      $('.ans17').css({
          'display': 'block'
      });
      $('.qclose17').css({
        'display': 'block'
      });
      $('.qbtn17').css({
        'display': 'none'
      }); 
  $(".qclose17").click(function () {
      $('.ans17').css({
          'display': 'none'
      });
      $('.qclose17').css({
        'display': 'none'
      });
      $('.qbtn17').css({
        'display': 'block'
    });   
  });  
});
});
$(document).ready(function () {
  $(".qbtn18").click(function () {
      $('.ans18').css({
          'display': 'block'
      });
      $('.qclose18').css({
        'display': 'block'
      });
      $('.qbtn18').css({
        'display': 'none'
      }); 
  $(".qclose18").click(function () {
      $('.ans18').css({
          'display': 'none'
      });
      $('.qclose18').css({
        'display': 'none'
      });
      $('.qbtn18').css({
        'display': 'block'
    });   
  });  
}); 
});
$(document).ready(function () {
  $(".qbtn19").click(function () {
      $('.ans19').css({
          'display': 'block'
      });
      $('.qclose19').css({
        'display': 'block'
      });
      $('.qbtn19').css({
        'display': 'none'
      }); 
  $(".qclose19").click(function () {
      $('.ans19').css({
          'display': 'none'
      });
      $('.qclose19').css({
        'display': 'none'
      });
      $('.qbtn19').css({
        'display': 'block'
    });   
  });  
});
});