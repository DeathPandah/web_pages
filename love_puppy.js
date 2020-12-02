$(document).ready(function () {
  $(".button-01").click(function () {
    $(
      ".start, .output-02, .output-03, .output-04, .output-05, .output-06, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-01").show();
  });
  $(".button-02").click(function () {
    $(
      ".start, .output-01, .output-03, .output-04, .output-05, .output-06, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-02").show();
  });
  $(".button-03").click(function () {
    $(
      ".start, .output-01, .output-02, .output-04, .output-05, .output-06, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-03").show();
  });
  $(".button-04").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-05, .output-06, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-04").show();
  });
  $(".button-05").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-06, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-05").show();
  });
  $(".button-06").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-05, .output-07, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-06").show();
  });
  $(".button-07").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-05, .output-06, .output-08, .output-09, .output-10 "
    ).hide();
    $(".output-07").show();
  });
  $(".button-08").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-05, .output-06, .output-07, .output-09, .output-10 "
    ).hide();
    $(".output-08").show();
  });
  $(".button-09").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-05, .output-06, .output-07, .output-08, .output-10 "
    ).hide();
    $(".output-09").show();
  });
  $(".button-10").click(function () {
    $(
      ".start, .output-01, .output-02, .output-03, .output-04, .output-05, .output-06, .output-07, .output-08, .output-09 "
    ).hide();
    $(".output-10").show();
  });
});
