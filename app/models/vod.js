import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  fileName: DS.attr('string'),
  show: DS.belongsTo('show', {async: true}),
  chapters: DS.hasMany('chapter', {async: true}),
  vodConfiguration: DS.belongsTo('vod-configuration', {async: true}),
  vodTransactions: DS.hasMany('vod-transaction', {async: true}),
  lastTransaction: DS.belongsTo('vod-transaction', {async: true}),
  isReady: Ember.computed('lastTransaction.transactionType', function() {
  	return this.get('lastTransaction.transactionType') === 5;
  }),
  embedCode: DS.attr('string'),
  url: DS.attr('string')
});
