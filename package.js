Package.describe({
  name: 'jrudio:notifyjs',
  summary: 'Notify.js - A simple, versatile notification library',
  version: '0.0.2',
  git: 'https://github.com/jrudio/meteor-notifyjs'
});

Npm.depends({
  path: "0.4.9"
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('jquery', 'client');

  var path = Npm.require('path');

  api.addFiles(path.join('notify.js'), 'client');
});