module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    title: DataTypes.STRING,
    created_by: DataTypes.STRING,
    user_location: DataTypes.STRING,
    date_added: DataTypes.NOW,
    site_screenshot: DataTypes.STRING,
    site_url: DataTypes.STRING,
    tags: DataTypes.JSON
  });

  return Site;
}
