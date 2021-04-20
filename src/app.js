// al click dell'hamburgher visualizzare il menu a schermo


var app = new Vue ({

  el: "#app",
  data: {
    opacity: 'opacity-0'
  },

  methods: {
    menuOn: function() {
      if (this.opacity == 'opacity-0') {
          this.opacity = 'opacity-1' ;
        }else {
          this.opacity ='opacity-0';
        }
    }
  }


});
