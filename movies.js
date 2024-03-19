$("#submitBtn").on("click", function (e) {
  e.preventDefault();
  // on submit
  let movie = $(".inputs").eq(0).val(); //pull value from movie input
  let rating = $(".inputs").eq(1).val(); // pull value from rating input
  if (rating.length && rating >= 0 && rating <= 10 && movie.length >= 2) {
    // set params
    $("ul").append(
      //creating LI's with movie/rating value to append to UL. breaks for better visual
      "<li><b>Movie:</b> " +
        movie +
        "</br><b>Rating: </b>" +
        rating +
        "</br></li>"
    );
    $(".inputs").val(""); //resetting forms to blank
    deleteButton = $("<button />").addClass("deleteBtn").text("Delete"); //create delete button
    $("li:last").append(deleteButton); //append delete button the the last li
  } else {
    //if params fail, alert
    alert(
      "All fields required. Movies titles should be at least 2 characters long, and ratings are between 0 and 10."
    );
  }
});

//set up on click on UL container so delete buttons can become active on LI after added/page loaded
$(".ul-container").on("click", ".deleteBtn", function () {
  $(this).closest("li").remove(); //remove the LI
});
