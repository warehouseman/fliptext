if (Meteor.isClient) {

  Template.fliptext-test.rendered = function () {
    console.log("~~~~~~~~~ from test example ~~~~~~~~~");
    $(".flipme").flipText();
  };
}
