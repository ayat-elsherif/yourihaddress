/************** the offCanvas - left side bar**************************/
$(function () {

  $(".offcanvas-header, .setAddress.setAddressLarge:not('#accordion') a").click(function () {
      $('.mobile-offcanvas').toggleClass("showCanvas");
  });

  $('.setAddressSmall').click(function(e){
      e.stopPropagation();
     $('.menuGroupCont .dropdown-menu').removeClass('show');
      $('.mobile-offcanvas').toggleClass("showCanvas");
      $('.setAddressSmall span').toggleClass("down");
  });

/**********************************the dropdown menu close****************************** */
// /*collapse close*/
// $(document).on('click',function(){
//   $('.collapse').collapse('hide');
// })
  /*****************************toggle close/search buttons******************************* */

  let searchInput = $(".searchInput");
  let cancelIcon = $(".searchMap .cancel");
  let searchIcon = $(".searchMap .search");

  $(searchInput).keyup(function () {
    if ((searchInput.val()).length > 0) {
      $(cancelIcon).show();
      $(searchIcon).hide();
      $(".searchMap img").click(function () {
        searchInput.val("");
        $(cancelIcon).hide();
        $(searchIcon).show();
      });
    } else {
      $(cancelIcon).hide();
      $(searchIcon).show();
    }
  });

});


/*************************preview photos before upload***********************/
$(".buttonFile").click(function () {
  let hidFile = $(this).next(".hiddenFile");
  hidFile.click().change(function () {
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          hidFile.prev().children('.displayImg').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
    readURL(this);
    $(this).prev().addClass("changed");

    let fileVal = $(this).val();
    fileVal = fileVal.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    $(this).next(".fileDesc").text(fileVal);
  });

});


/************************************slide from photos hint to photos uplaod***********************************/

$(".hintPhotos .fileButton a").click(function () {
  $(this).parents(".hintPhotos").animate({
    left: '-100%'
  }).fadeOut('fast', function () {
    $(".uploadPhotos").css({
      transform: 'translateX(0%)'
    });
  });
});


/********************************************************************************** */


/******************************Add a property MultiForm***************************** */
let nextIH=document.getElementsByClassName('nextIH')
let backIH=document.getElementsByClassName('backIH')
let createIH=document.getElementsByClassName('createIH')
let step1=document.getElementsByClassName('step1');
let step2=document.getElementsByClassName('step2');
$(nextIH).click(function(e){
  e.stopPropagation();
  if($('#validationCustom04').change())
  {
  $(step1).hide();
  $(step2).show();
  }
  else return false;
});

$(backIH).click(function(e){
  $(step2).hide();
  $(step1).show();
});

/***************************End Add a property MultiForm************************** */



/**************************************open social media from android in mobile view**************************************** */
if($(window).width()<767){

  
const shareButton = document.querySelector('.IHShare');
// const shareDialog = document.querySelector('.collapseIHShare');
// const closeButton = document.querySelector('.close-button');

$(shareButton).on('click', event => {
  if (navigator.share) { 
   navigator.share({
      title: 'IH Address',
      url: 'https://ihaddress.com',
      text:'971.34.344.7777'
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
    }
    //  else {
    //     shareDialog.classList.add('show');
    // }
});

// closeButton.addEventListener('click', event => {
//   shareDialog.classList.remove('show');
// });
}