

var self = module.exports = {
  __module: {
    provides: {
      "assetManager/use_scripts": {after: 'assetManager/hadron'},
      "assetManager/register_assets_dir": {},
      "assetManager/register_views_dir": {},
      "assetManager/contribute_views": {},
      "assetManager/extend_angular_modules": {}
    }
  },

  ASSETS_DIR: __dirname + "/../../assets",

  register_assets_dir: function() {
    return self.ASSETS_DIR;
  },

  register_views_dir: function() {
    return __dirname + "/../../views";
  },

  use_scripts: function() {
    return {
      admin: {file: 'js/**/*.js', cwd: self.ASSETS_DIR}
    };
  },

  extend_angular_modules: function() {
    return {
      hadronAdmin: ['hadron-googleanalytics']
    }
  },

  contribute_views: function() {
    return [
      {name: "main-layout-body-footer", view: "plugins/googleanalytics/_layout.jade"},
      {name: "admin-tpl-settingsMenuItems", view: "plugins/googleanalytics/adminMenuItem.jade"}
    ];
  }
};