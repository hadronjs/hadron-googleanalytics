

module.exports = {
  __module: {
    provides: {
      use_scripts: {after: 'assetManager/hadron'},
      register_assets_dir: {},
      register_views_dir: {},
      contribute_views: {}
    }
  },

  register_assets_dir: function() {
    return __dirname + "/../../assets";
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  },

  use_scripts: function() {
    return {
      admin: 'js/plugin-googleanalytics.js'
    };
  },

  contribute_views: function() {
    return [
      {name: "main-layout-body-footer", view: "plugins/googleanalytics/_layout.jade"},
      {name: "admin-tpl-saveSettings-bottom", view: "plugins/googleanalytics/saveSettings.jade"}
    ];
  }
};