import {Mongo} from 'meteor/mongo';

export const AddInformation = new Mongo.Collection('addInformation');

Meteor.methods({
	"getAllRecord":function(){
		return AddInformation.find({}).fetch();
	},

	"findResult":function(value){
		return AddInformation.find({$or:[{"id":value},{"name":value},{"gender":value}]}).fetch();
	}
})