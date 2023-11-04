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
        $(".view1").click(function () {
            $('.filter-product-wrapper').css({
                'height': '3350px'
            }); 
            $('.view1').css({
                'display': 'none'
            });
            $('.view2').css({
                'display': 'block'
            });
        });
      });
      $(document).ready(function () {
        $(".view2").click(function () {
            $('.filter-product-wrapper').css({
                'height': '4500px'
            }); 
            $('.view2').css({
                'display': 'none'
            });
            $('.hide').css({
                'display': 'block'
            });
        });
      });
      $(document).ready(function () {
        $(".hide").click(function () {
            $('.filter-product-wrapper').css({
                'height': '1150px'
            }); 
            $('.hide').css({
                'display': 'none'
            });
            $('.view1').css({
                'display': 'block'
            });
        });
      });
      
        $(document).ready(function () {
          $(".pg-more-btn").click(function () {
              $('.filter-product-wrapper').css({
                'height': 'auto'
              });
              $('.pg-more-btn').css({
                'display': 'none'
              });
              $('.pg-hide-btn').css({
                'display': 'block'
              });
            });
          });
          $(document).ready(function () {
            $(".pg-hide-btn").click(function () {
                $('.filter-product-wrapper').css({
                  'height': '1150'
                });
                $('.pg-more-btn').css({
                  'display': 'block'
                });
                $('.pg-hide-btn').css({
                  'display': 'none'
                });
              });
            });
      $(document).ready(function () {
        $(".bg-btn").click(function () {
            $('.filter-product-wrapper').css({
              'height': '1150'
            });
            $('.product-guides').css({
                'display': 'none'
            });
            $('.hair-removal').css({
                'display': 'none'
            }); 
            $('.body-guides').css({
                'display': 'block'
            });
            $('.pg-more-btn').css({
              'display': 'block'
            });
            $('.view1').css({
              'display': 'none'
            });
            $('.view2').css({
              'display': 'none'
            });
            $('.hide').css({
              'display': 'none'
            });
            $('.pg-hide-btn').css({
              'display': 'none'
            });
        });
      });
      $(document).ready(function () {
        $(".pg-btn").click(function () {
            $('.filter-product-wrapper').css({
              'height': '1150'
            });
            $('.product-guides').css({
                'display': 'block'
            });
            $('.hair-removal').css({
                'display': 'none'
            }); 
            $('.body-guides').css({
                'display': 'none'
            });
            $('.pg-more-btn').css({
              'display': 'block'
            });
            $('.view1').css({
              'display': 'none'
            });
            $('.view2').css({
              'display': 'none'
            });
            $('.hide').css({
              'display': 'none'
            });
            $('.pg-hide-btn').css({
              'display': 'none'
            });
        });
      });
      $(document).ready(function () {
        $(".hr-btn").click(function () {
            $('.filter-product-wrapper').css({
              'height': '1150'
            });
            $('.product-guides').css({
                'display': 'none'
            });
            $('.hair-removal').css({
                'display': 'block'
            }); 
            $('.body-guides').css({
                'display': 'none'
            });
            $('.pg-more-btn').css({
              'display': 'block'
            });
            $('.view1').css({
              'display': 'none'
            });
            $('.view2').css({
              'display': 'none'
            });
            $('.hide').css({
              'display': 'none'
            });
            $('.pg-hide-btn').css({
              'display': 'none'
            });
        });
      });
      $(document).ready(function () {
        $(".view-all-btn").click(function () {
            $('.filter-product-wrapper').css({
              'height': '1150'
            });
            $('.product-guides').css({
              'display': 'block'
            });
            $('.body-guides').css({
                'display': 'block'
            }); 
            $('.hair-removal').css({
                'display': 'block'
            });
            $('.view1').css({
              'display': 'block'
            });
            $('.pg-more-btn').css({
              'display': 'none'
            });
            $('.pg-hide-btn').css({
              'display': 'none'
            });
          });
        });
        $(document).ready(function () {
          $(".resp-view-more1").click(function () {
              $('.filter-product-wrapper').css({
                'height': '8600px'
              });
              $('.resp-view-more1').css({
                'display': 'none'
              });
              $('.resp-view-more2').css({
                'display': 'block'
              });
            });
          });
          $(document).ready(function () {
            $(".resp-view-more2").click(function () {
                $('.filter-product-wrapper').css({
                  'height': 'auto'
                });
                $('.resp-view-more2').css({
                  'display': 'none'
                });
                $('.resp-hide').css({
                  'display': 'block'
                });
              });
            });
            $(document).ready(function () {
              $(".resp-hide").click(function () {
                  $('.filter-product-wrapper').css({
                    'height': '3600'
                  });
                  $('.resp-hide').css({
                    'display': 'none'
                  });
                  $('.resp-view-more1').css({
                    'display': 'block'
                  });
                });
              });
              // smaller screen filter buttons
              $(document).ready(function () {
                $(".resp-view-all-btn").click(function () {
                    $('.filter-product-wrapper').css({
                      'height': '3600'
                    });
                    $('.resp-view-more1').css({
                      'display': 'grid'
                    });
                    $('.body-guides').css({
                      'display': 'grid'
                    });
                    $('.product-guides').css({
                      'display': 'grid'
                    });
                    $('.hair-removal').css({
                      'display': 'grid'
                    });
                    $('.resp-more-product').css({
                      'display': 'none'
                    });
                    $('.resp-hide-product').css({
                      'display': 'none'
                    });
                  });
                });
                $(document).ready(function () {
                  $(".resp-pg-btn").click(function () {
                      $('.filter-product-wrapper').css({
                        'height': '3600'
                      });
                      $('.resp-view-more1').css({
                        'display': 'none'
                      });
                      $('.resp-view-more2').css({
                        'display': 'none'
                      });
                      $('.resp-hide').css({
                        'display': 'none'
                      });
                      $('.resp-hide-product').css({
                        'display': 'none'
                      });
                      $('.resp-more-product').css({
                        'display': 'block'
                      });
                      $('.body-guides').css({
                        'display': 'none'
                      });
                      $('.product-guides').css({
                        'display': 'grid'
                      });
                      $('.hair-removal').css({
                        'display': 'none'
                      });
                    });
                  });
                  $(document).ready(function () {
                    $(".resp-bg-btn").click(function () {
                        $('.filter-product-wrapper').css({
                          'height': '3600'
                        });
                        $('.resp-view-more1').css({
                          'display': 'none'
                        });
                        $('.resp-view-more2').css({
                          'display': 'none'
                        });
                        $('.resp-hide').css({
                          'display': 'none'
                        });
                        $('.resp-hide-product').css({
                          'display': 'none'
                        });
                        $('.resp-more-product').css({
                          'display': 'block'
                        });
                        $('.body-guides').css({
                          'display': 'grid'
                        });
                        $('.product-guides').css({
                          'display': 'none'
                        });
                        $('.hair-removal').css({
                          'display': 'none'
                        });
                      });
                    });
                    $(document).ready(function () {
                      $(".resp-hr-btn").click(function () {
                          $('.filter-product-wrapper').css({
                            'height': '3600'
                          });
                          $('.resp-view-more1').css({
                            'display': 'none'
                          });
                          $('.resp-view-more2').css({
                            'display': 'none'
                          });
                          $('.resp-hide').css({
                            'display': 'none'
                          });
                          $('.resp-hide-product').css({
                            'display': 'none'
                          });
                          $('.resp-more-product').css({
                            'display': 'block'
                          });
                          $('.body-guides').css({
                            'display': 'none'
                          });
                          $('.product-guides').css({
                            'display': 'block'
                          });
                          $('.hair-removal').css({
                            'display': 'grid'
                          });
                        });
                      });
                  $(document).ready(function () {
                    $(".resp-more-product").click(function () {
                        $('.filter-product-wrapper').css({
                          'height': 'auto'
                        });
                        $('.resp-more-product').css({
                          'display': 'none'
                        });
                        $('.resp-hide-product').css({
                          'display': 'block'
                        });
                      });
                    });
                    $(document).ready(function () {
                      $(".resp-hide-product").click(function () {
                          $('.filter-product-wrapper').css({
                            'height': '3600px'
                          });
                          $('.resp-more-product').css({
                            'display': 'block'
                          });
                          $('.resp-hide-product').css({
                            'display': 'none'
                          });
                        });
                      });