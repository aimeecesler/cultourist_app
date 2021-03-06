//BRING IN SEQUELIZE FOR POSTS TABLE AND ASSOCIATE COUNTRIES & USERS TABLE================

module.exports = function (sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
      title: {
        type: DataTypes.STRING,
      },
      body: {
        type: DataTypes.STRING,
      },
      category: {
          type: DataTypes.STRING
      }
    });

    Post.associate = function(models) {
        // We're saying that a Post should belong to a User
        // A Post can't be created without an User due to the foreign key constraint
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        Post.belongsTo(models.Country, {
          foreignKey: {
            allowNull: false
          }
        });
      };

      // Post.associate = function(models) {
      //   // We're saying that a Post should belong to a User
      //   // A Post can't be created without an User due to the foreign key constraint
        
      // };

    return Post;
  };


