Package.describe({
  name: 'warehouseman:fliptext',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Test the javascript function "flipext"',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/warehouseman/fliptext',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
//  api.use('jquery', 'client');

  api.addFiles('fliptext.js');

  api.export('flipText');    //  Critically important
});

Package.onTest(function(api) {
  // Standard
  api.use('warehouseman:fliptext');
  api.use('tinytest');
  api.addFiles('./tests/fliptext-tests.js', ["client"]);
});
