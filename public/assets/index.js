//JAVASCRIPT FOR APP IN DOCUMENT.READY
$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
  $("select").formSelect();

  //EVENT LISTENER FOR NEW USER FORM SUBMISSION & POST ROUTE
  $("#newUserForm").on("submit", (event) => {
    event.preventDefault();
    const newName = { full_name: $("#newUser").val() };
    console.log("submitted");
    $.post("/api/create-user", newName).then((data) => {
      console.log(data);
      location.reload();
    });
  });

  //EVENT LISTENER FOR DELETE POST ON CLICK & DELETE ROUTE
  $(".deleteBtn").on("click", function (event) {
    event.preventDefault();
    //console.log("clicked me", this)
    let id = $(this).attr("data-id");
    //console.log($(this).parent());
    $.ajax({
      method: "DELETE",
      url: "/api/post/" + id,
    })
      .then(function (results) {
        console.log(results);
        location.reload();
      })
      .catch((err) => console.log(err));
  });

 //EVENT LISTENER FOR SUBMIT BUTTON ON UPDATE POST BUTTON CLICK
  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr("data-id");
    let userId = $(this).attr("data-user");
    const updatedPost = {
      title: $("#title").val(),
      body: $("#body").val(),
    };
    $.ajax({
      type: "PUT",
      url: "/update/" + id,
      data: updatedPost,
    })
      .then((data) => {
        console.log(data);
        location.replace("/manage/user/" + userId);
      })
      .catch((err) => console.log(err));
  });
 
  //EVENT LISTENER FOR NEW POST SUBMISSION- CREATE ROUTE
  $("#post-id").on("submit", function (event) {
    event.preventDefault();
    // console.log(this);
    // console.log($("#category option:selected").text());

    const category = $("#category option:selected").text();
    const name = $("#name option:selected").val();
    const country = $("#country option:selected").val();
    const title = $("#title").val();
    const insight = $("#body").val();

    const newPost = {
      title: title,
      body: insight,
      category: category,
      CountryId: country,
      UserId: name,
    };
    console.log(newPost);
    $.post("/api/newpost", newPost).then(function (results) {
      console.log(results);
      location.reload();
    });
  });
});
