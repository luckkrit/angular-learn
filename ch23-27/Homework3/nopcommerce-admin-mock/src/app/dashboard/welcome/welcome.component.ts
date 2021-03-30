import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faCopyright,
  faCreditCard,
  faEnvelope,
  faGlobe,
  faInfo,
  faPencilAlt,
  faPercent,
  faShoppingCart,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  faStar = faStar;
  faPencilAlt = faPencilAlt;
  faGlobe = faGlobe;
  faTruck = faTruck;
  faCreditCard = faCreditCard;
  faPercent = faPercent;
  faShoppingCart = faShoppingCart;
  faEnvelope = faEnvelope;
  faInfo = faInfo;
  faCopyright = faCopyright;
  steps = [
    {
      circleColor: '#e7e247',
      icon: faPencilAlt,
      title: '1. Personalize your store',
      description: 'Choose a beautiful theme for your store and add your logo',
    },
    {
      circleColor: '#824c71',
      icon: faGlobe,
      title: '2.   Add your store info',
      description:
        'Enter your store details and protect your customers using SSL',
    },
    {
      circleColor: '#ba5c12',
      icon: faTruck,
      title: '3.   Set up shipping',
      description: 'Set up shipping methods to deliver orders to customers',
    },
    {
      circleColor: '#ff7f11',
      icon: faCreditCard,
      title: '4.   Set up payments',
      description: 'Choose how your customers will pay for their orders',
    },
    {
      circleColor: '#b76d68',
      icon: faPercent,
      title: '5.   Set up taxes',
      description:
        'Configure rates manually or choose a tax service to automate all tax things',
    },
    {
      circleColor: '#1b9aaa',
      icon: faShoppingCart,
      title: '6.   Create products',
      description:
        'Build a catalog with attractive product descriptions and pictures',
    },
    {
      circleColor: '#140d4f',
      icon: faEnvelope,
      title: '7.   Set up email accounts',
      description: 'It allows you to send notifications to your customers',
    },
    {
      circleColor: '#64b650',
      icon: faInfo,
      title: '8.   Edit services info',
      description: 'Add info pages describing shipping, return policy and more',
    },
    {
      circleColor: '#3d3b30',
      icon: faCopyright,
      title: '9.   “Powered by” link',
      description: 'Remove the “Powered by nopCommerce” link from the footer',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
