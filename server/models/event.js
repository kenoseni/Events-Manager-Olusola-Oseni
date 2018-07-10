export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event name cannot be empty'
        },
      },
      set(value) {
        this.setDataValue('name', value.toString().toLowerCase().trim());
      }
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: {
        args: true,
        msg: 'An event has been slated for this date'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event date cannot be empty'
        },
        isDate: {
          args: true,
          msg: 'Enter a valid date'
        }
      }
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      unique: {
        args: true,
        msg: 'An event has been slated for this date'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event date cannot be empty'
        },
        isDate: {
          args: true,
          msg: 'Enter a valid date'
        }
      }
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Event date cannot be empty'
        }
      }
    }
  });
  // associate the models
  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };
  return Event;
};
