import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  isAvailable: attr('boolean'),
  description: attr('string'),
  imageUrl: attr('string')
});
