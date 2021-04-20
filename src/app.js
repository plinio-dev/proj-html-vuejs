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
        img: '6-200x200_1',
        name: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      },
      {
        img: '7-200x200_2',
        name: 'Pete Jones',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      },
      {
        img: '3-200x200_3',
        name: 'Mark Wilson',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mollis eleifend ante ut sagittis. Sed sodales, urna et imperdiet placerat, ex nisi aliquam orci, ac varius odio libero et arcu.',
      }
    ],
    products: [
      {
        img: 'img/brush_dark-400x400.png',
        name: 'Brush',
        prize: '$15.00',
      },
      {
        img: 'img/scissors-400x400.png',
        name: 'Scissors',
        prize: '$85.00',
      },
      {
        img: 'img/hot_oil_dark-400x400.png',
        name: 'Hot Oil',
        prize: '$15.00',
      },
      {
        img: 'img/straight_razor_dark-400x400.png',
        name: 'Straight Razor',
        prize: '$30.00',
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
