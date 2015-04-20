$(document).ready(function(event) {

  var HalfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var QuarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    }
  });


  var ThirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= message %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[3];
      $(row).append(this.$el);
    }
  });


  var data = { title: "Title 1 for half", message: "Content 1 half"}
  var halfOne = new HalfCardView(data);

  var data = { title: "Title 2 for half", message: "Content 2 half"};
  var halfTwo = new HalfCardView(data);


  var data = { title: "Title 1 for Quarter", message: "Content 1 half"}
  var quarterOne = new QuarterCardView(data);

  var data = { title: "Title 2 for Quarter", message: "Content 2 half"};
  var quarterTwo = new QuarterCardView(data);

  var data = { title: "Title 1 for Third", message: "Content 1 half"}
  var ThirdOne = new ThirdCardView(data);

  var data = { title: "Title 2 for Third", message: "Content 2 half"};
  var ThirdTwo = new ThirdCardView(data);

});
