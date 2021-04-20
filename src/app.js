// al click dell'hamburgher visualizzare il menu a schermo


var app = new Vue ({

  el: "#app",
  data: {
    display: 'none',
    menuItems: [
      'Home', 'About US','Services','Shop','Our Team','Blog','Contact Us',
    ],
    reviews: [
      {
        id: '6-200x200_1',
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      },
      {
        id: '7-200x200_2',
        name: 'Pete Jones',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      },
      {
        id: '3-200x200_3',
        name: 'Mark Wilson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      }
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
