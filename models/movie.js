const sequelize = require('../sequelize ')
const Sequelize = require('sequelize')
const moment = require('moment') //
//
const tag = sequelize.define('tag', {
        id: {
            type: Sequelize.INTEGER(11), //
            primaryKey: true, //
            autoIncrement: true //
        },
        name: {
            type: Sequelize.STRING,
            unique: { //
                msg: ''
            }
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {
                // this.getDataValue value
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm')
            }
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm')
            }
        }
    },
    {
        // sequelizedefine true
        freezeTableName: true
    })
module.exports = tag
