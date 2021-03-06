import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('podcasts');
  this.resource('schedule');
  this.resource('show', {path: 'show/:id'});
  this.resource('channel');
  this.resource('watch-now', { path:'watch/:stream_id' });
  this.route('vods');
  this.route('search');
});

export default Router;
