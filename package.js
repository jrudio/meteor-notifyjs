Package.describe({
  summary: "Notify.js: A jquery plugin notification by jpillora",
  version: "0.0.1",
  name: "jrudio",
  git: "https://github.com/jrudio/meteor-notifyjs.git"
});

Package.on_use(function(api){
  api.use(['jquery'], 'client');
  api.add_files('lib/notify.min.js', 'client');
});