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
    ],
    services: [
      {
        img: 'img/avadabarbers-trimcut-icon-before.png',
        title: 'Trim & Cut',
        description: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.',
      },
      {
        img: 'img/avadabarbers-washndry-icon.png',
        title: 'Wash & Dry',
        description: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.',
      },
      {
        img: 'img/avadabarbers-beardtrim-icon.png',
        title: 'Beard Tidy',
        description: 'Tame the tangles and untidy facial hairs like a gentleman with our Beard Tidy services from Avada Barbers.',
      },
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
