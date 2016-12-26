$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/wonmi.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed);
      for(var i=0, r=response.courses.completed.length; i<r; i++) {
        $('#badges').append('<div class="course"><h3>'+response.courses.completed[i].title+'</h3><img src="'+response.courses.completed[i].badge+'" alt="'+response.courses.completed[i].title+'"><a href="'+response.courses.completed[i].url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      }
    }
  });
});
