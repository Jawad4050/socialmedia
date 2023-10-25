//Post slider function
function post(param1,param2,param3,param4,param5,param6){
  var totalItemsPop = $(param2).length; 
    $(window).on('load', function() {
      setTimeout(function(){ 
        currentIndexPop = $(param3).index() + 1;
        //console.log(currentIndexPop);
        if (currentIndexPop == 1) {
          $(param4).css("display","none");
        }
        $(param5).html('' + currentIndexPop + '/' + totalItemsPop + '');
        checkslide=currentIndexPop-totalItemsPop;
        if(totalItemsPop==1){
          $(param5).css("display","none");
        }
        if (checkslide == 0) {
          $(param6).css("display","none");
        }
      }, 1000);

    });
    $(param1).on('slide.bs.carousel', function() {
      setTimeout(function(){ 
        currentIndexPop = $(param3).index() + 1;
        if (currentIndexPop != 1 ) {
          $(param4).css("display","block");
        }else{
          $(param4).css("display","none");
        }
        $(param5).html('' + currentIndexPop + '/' + totalItemsPop + '');
         checkslide=currentIndexPop-totalItemsPop;
        if (checkslide == 0) {
          $(param6).css("display","none");
        }else{
          $(param6).css("display","block");
        }
      }, 1000);
    });
}