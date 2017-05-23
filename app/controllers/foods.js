import Ember from 'ember';

export default Ember.Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  menuLength: Ember.computed.alias('model.length'),
  availableItems: Ember.computed.filterBy('model', 'isAvailable', true),
  actions: {
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
      }).save()
      this.set('newItem', '')
    }
  }
});
