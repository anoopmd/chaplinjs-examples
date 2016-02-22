'use strict';

var template = require('templates/modal');

module.exports = Chaplin.View.extend({
  optionNames: Chaplin.View.prototype.optionNames.concat(['template', 'title', 'content']),

  autoRender : true,
  template : template,

  getTemplateFunction : function(){
    return this.template;
  },

  getTemplateData : function(){
    return {
      title : this.title,
      content : this.content
    }
  },

  show: function() {
    var self = this;

    this.$modal = $('#' + this.id);
    this.$modal.modal();

    this.$modal.on('hidden.bs.modal', function () {
      self.hide();
    });
  },

  hide: function() {
    this.$modal.modal('hide').remove();
  }
});