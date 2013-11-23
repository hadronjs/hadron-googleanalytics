
module.exports = function(Settings) {
  Settings.property('googleAnalyticsCode', String);
  return Settings;
};

module.exports.__module = {
  args: ['data/models/Settings']
};
