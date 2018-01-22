export default (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Center name cannot be empty'
        },
      },
      set(value) {
        this.setDataValue('name', value.toString().toLowerCase().trim());
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide a description for this center'
        },
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide the location for this center'
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide the address for this center'
        },
      }
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please provide the capacity for this center'
        },
      }
    },
    avaliability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  // associate the models
  Center.associate = (models) => {
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
      as: 'events'
    });
    Center.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Center;
};
