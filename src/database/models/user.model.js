'use strict';
import { Model, DataTypes } from 'sequelize';


export class User extends Model {
  static associate(models) {
    // define association here
    /*
     Tipo de Asociaciones 

     1. BelongsTo --- Pertenece a uno
     2. HasOne --- Uno a uno
     3. HasMany --- Uno a muchos
     4. ManyToMany --- Muchos a muchos

    **/
  }


}

export default (sequelize) => {
  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      surname: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      dpi: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      nit: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'user',
      tableName: 'tb_user',
      timestamps: true,
      paranoid: true,
    }
  );

  return User;
}