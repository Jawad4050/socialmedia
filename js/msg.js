$(document).ready(function(){
	$(".massege-send-list").click(function(){
	    $("#mainmassegepage").addClass("disp-mobile-none");
	    $("#innermassegepage").removeClass("disp-mobile-none");
	});

	$(".closebtnmassege").click(function(){
	    $("#mainmassegepage").removeClass("disp-mobile-none");
	    $("#innermassegepage").addClass("disp-mobile-none");
	});
})
  /* Massege Tab Bar */
function openmassege(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" massegeactive", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " massegeactive";
}
/* End Massege Tab Bar */
$.fileup({
  url: '',
  inputID: 'upload-2',
    filesLimit: 5,
  dropzoneID: 'upload-2-dropzone',
  templateFile:  '<div id="fileup-[INPUT_ID]-[FILE_NUM]" class="fileup-file [TYPE]">' +
        '<img src="[PREVIEW_SRC]" alt="[NAME]" class="imgshow">' + 
        '<div class="fileup-container">' +
        '<div class="fileup-controls">' +
        '<span class="fileup-remove" onclick="$.fileup(\'[INPUT_ID]\', \'remove\', \'[FILE_NUM]\');" title="[REMOVE]"></span>' +
        '<div class="fileup-result"></div>' +
        '</div>' +
        '</div>' +
        '<div class="fileup-clear"></div>' +
        '</div>',
  queueID: 'upload-2-queue',
  onSelect: function(file) {
    $('#multiple .control-button').show();
  },
  onRemove: function(file, total) {
  if (file === '*' || total === 1) {
    $('#multiple .control-button').hide();
  }
  },
  onSuccess: function(response, file_number, file) {
    $.growl.notice({ title: "Upload success!", message: file.name });
  },
  onError: function(event, file, file_number) {
    $.growl.error({ message: "Upload error!" });
  }
});