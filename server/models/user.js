export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Firstname field cannot be empty'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Allows only alphanumeric characters'
        }
      },
      set(value) {
        this.setDataValue('firstname', value.toString().toLowerCase().trim());
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Lastname field cannot be empty'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Allows only alphanumeric characters'
        }
      },
      set(value) {
        this.setDataValue('lastname', value.toString().toLowerCase().trim());
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email field cannot be empty'
        },
        isEmail: {
          args: true,
          msg: 'Please supply the right email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password field cannot be empty'
        },
        len: {
          args: [8],
          msg: 'Password must contain a minimum of 8 characters'
        }
      },
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  // associate the models
  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'events'
    });
    User.hasMany(models.Center, {
      foreignKey: 'userId',
      as: 'centers'
    });
  };
  return User;
};
