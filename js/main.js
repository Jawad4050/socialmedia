$(document).ready(function(){
  $("#openpopup,#openpopup2").on("click",function(){
    $("#createpopupbox").removeClass("d-none");
    $("body").css("overflow","hidden");
  })

  $("#createclosebtn").on("click",function(){
    $("#createpopupbox").addClass("d-none");
    $("body").css("overflow","auto");
  })
    $("#searchdrop-box").on("keyup",function(){
      //$("#searchdrop-outer").css("display","block");
      var search_val=$(this).val();
      $.ajax({
        url:"search.php",
        method:"POST",
        data:{serach:search_val},
        success:function(data){
          if (data!="") {
            $("#searchdrop-outer").html(data);
            $("#remove-model").removeClass("d-none");
          }else{
            $("#searchdrop-outer").empty();
          }
        }
      })
    })

    $("#remove-model").click(function(){
      $("#searchdrop-outer").empty();
      $("#remove-model").addClass("d-none");
      $("#searchdrop-box").val("");
    })
  })





//Webinar image preview

function preview_image2() {
  $('#webinar-upload-queue').empty();
  var total_file = document.getElementById("webinar-upload").files.length;
  for (var i = 0; i < total_file; i++) {
    $('#webinar-upload-queue').append("<img src='" + URL.createObjectURL(event.target.files[i]) + "' class='w-100'></div>");
  }
};
    
$(document).ready(function(){
  $(".saved").click(function(){
    $(this).toggleClass("saved-change");
  })
  // Header Model Open Post model
  $("#post-btn-open").click(function(){
    $("#add-posts-model").toggleClass("d-none");
    $("#remove-model").removeClass("d-none");
  })
  $("#remove-model").click(function(){
    $("#add-posts-model").addClass("d-none");
    $("#remove-model").addClass("d-none");
  })

  // Page post Post model
  $("#post-popup-open").click(function(){
    $("#post-popup").toggleClass("d-none");
    $("#remove-model").removeClass("d-none");
  })
  $("#remove-model").click(function(){
    $("#post-popup").addClass("d-none");
    $("#remove-model").addClass("d-none");
  })

  // Webinar Popup model
  $("#webinar-btn-open").click(function(){
    $("#web-popup").toggleClass("d-none");
    $("#remove-model").removeClass("d-none");
  })
  $("#remove-model").click(function(){
    $("#web-popup").addClass("d-none");
    $("#remove-model").addClass("d-none");
  })

   // Survay Popup model
   $("#survy-popup-btn").click(function(){
    $("#survy-popup").toggleClass("d-none");
    $("#remove-model").removeClass("d-none");
  })
  $("#remove-model").click(function(){
    $("#survy-popup").addClass("d-none");
    $("#remove-model").addClass("d-none");
  })

  // Notification model
  $("#notification-open-btn").click(function(){
    $("#notification-model").toggleClass("d-none");
    $("#remove-model").removeClass("d-none");
  })
  $("#remove-model").click(function(){
    $("#notification-model").addClass("d-none");
    $("#remove-model").addClass("d-none");
  })



  /*$("#course-opener").click(function(){
    $(".coursesnav-inner").toggleClass('d-none');
    $("#back-overall").toggleClass('d-none');
  })
  $("#back-overall").click(function(){
    $(".coursesnav-inner").addClass('d-none');
    $("#back-overall").addClass('d-none');
  })
  $("#start-course").click(function(){
    $("#main-discover").addClass('d-none');
    $("#start-discover").removeClass('d-none');
    $("#course-opener").removeClass('d-none');
  })
  $("#course-playbtn").click(function(){
    $(".course-detail-vid video").trigger('play');
    $(this).css('display','none');
  })
  $(".course-detail-vid video").click(function(){
    $(this).trigger('pause');
    $("#course-playbtn").css('display','block');
  })
  $("#plybtn").click(function(){
    $(".vid video").trigger('play');
    $(this).css('display','none');
  })*/


  // Menu on Mobile display
  $("#menu-btn").click(function(){
    $(".left-bar-main").css('transform','translateX(0%)');
    $(".col-lg-9").addClass("over-flow-hidn");
  })
  $("#closesidenav").click(function(){
    $(".left-bar-main").css('transform','translateX(-100%)');
    $(".col-lg-9").removeClass("over-flow-hidn");
  })


  $(".vid video").click(function(){
    $(this).trigger('pause');
    $("#plybtn").css('display','block');
  })


  //InputField Focus 
	$("input,textarea").on("focus",function(){
		$(".form button").css("opacity","1");
		$(".form button").css("box-shadow","0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 1%)");
	})
	$(".input").on("focusout",function(){
		$(".form button").css("opacity",".4");
		$(".form button").css("box-shadow","none");
	})

  //Create group popup
  $("#main-popup-msg-open").on("click",function(){
    $(".main-popup-msg").toggleClass("d-none");
    $("#boxall").removeClass("d-none");
  })
  $("#boxall").on("click",function(){
    $(".main-popup-msg").addClass("d-none");
    $(".profile-edit-popup").addClass("d-none");
    $("#boxall").addClass("d-none");
  })
  
  $(".profile-edit-btn").on("click",function(){
    $(".profile-edit-popup").toggleClass("d-none");
    $("#boxall").removeClass("d-none");
  })
  $("#create-open-btn").on("click",function(){
    $("#massege-leftside-main").addClass("d-none");
    $(".group-step-1").removeClass("d-none");
    $(".main-popup-msg").addClass("d-none");
    $("#boxall").addClass("d-none");
  })
  
  $("#close-main-cg").on("click",function(){
    $("#massege-leftside-main").removeClass("d-none");
    $(".group-step-1").addClass("d-none");
    $(".main-popup-msg").addClass("d-none");
    $("#boxall").addClass("d-none");
  })

  // like on post
  $(".like").click(function(){
    $(this).toggleClass('fas');
    $(this).toggleClass('red-text');
    $(this).toggleClass('far');
  })
  /*End InputField */

  /*Passwod Show*/
	$(".password2").click(function(){
    var password=$(".passwordinput2");
    var passwordeye=$(this);

    if (password.prop("type")=="password") {
      password.attr('type','text');
      passwordeye.attr('src','img/showeye.svg');
    }else{
      password.attr('type','password');
      passwordeye.attr('src','img/eye.svg');
    }
  })
	$(".password").click(function(){
    var password=$(".passwordinput");
    var passwordeye=$(this);

    if (password.prop("type")=="password") {
      password.attr('type','text');
      passwordeye.attr('src','img/showeye.svg');
    }else{
      password.attr('type','password');
      passwordeye.attr('src','img/eye.svg');
    }
	})
  /* End Password Show */
})

/* Selct Box */
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
          and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
  }
  function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
/*End Select Box Code:*/


/*Story Stop On Focus*/
function stopstory(){
  $(".story-viewer").addClass("paused");
  $(".active video").trigger('pause');
}
function playstory(){
    $(".story-viewer").removeClass("paused");
    $(".active video").trigger('play');
}
/*End Story Stop On Focus*/




  /* Top posts and famous doctor */
function explore(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("exptabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("exptablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" exploreactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " exploreactive";
}
/* Top posts and famous doctor */


  /* My Courses Tab */
function course(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("coursetabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("coursetablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" exploreactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " exploreactive";
}
/* My Courses Tab */


  /* My Lecture Tab */
function lecture(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("lectabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("lectablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" lecactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " lecactive";
}

