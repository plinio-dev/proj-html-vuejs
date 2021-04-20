// al click dell'hamburgher visualizzare il menu a schermo


var app = new Vue ({

  el: "#app",
  data: {
    display: 'none',
    menuItems: [
      'Home', 'About US','Services','Shop','Our Team','Blog','Contact Us',
    ]
  },

  methods: {
    menuOn: function() {
      if (this.display == 'none') {
          this.display = 'flex' ;
        }else {
          this.display ='none';
        }
    }
  }


});
