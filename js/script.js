$(document).ready(function(){

  //initialize the slider
  var slider =  $("#ex12c").slider({ id: "slider12c", min: 1000, max: 1000000, range: true, value: [20000, 999999] });
  //reaction for slider's value change
  $(document).on("slide", "#ex12c" ,function(value){
    $("#from").val(parseInt(slider.slider('getValue')[0]));
    $("#to").val(parseInt(slider.slider('getValue')[1]));
  })
  //reaction for click on brand
  $(".middle-row-item").click(function(){
    if ($(this).children("input").is(":checked"))
      $(this).children("input").prop("checked",  false)
    else
      $(this).children("input").prop("checked",  true)

  })

  //on feature click
  $(".features-list-item input[type='checkbox']").click(function(){
      if ($(this).is(":checked"))
        $(this).next().css('color', '#c6061e');
      else
        $(this).next().css('color', '#252525');
  })

  //on feature's text click - same as prev reaction
  $(".features-list-item div").click(function(){

      if (!$(this).siblings('input').is(":checked")){
        $(this).css('color', '#c6061e');
        $(this).siblings('input').prop("checked", true)
      }
      else{
        $(this).css('color', '#252525');
        $(this).siblings('input').prop("checked", false)
      }
  })
})
