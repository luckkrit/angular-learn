import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news = [
    {
      title:
        '<a href="https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce">"Powered by nopCommerce" link</a>',
      content:
        'Would you like to remove the "Powered by nopCommerce" link in the bottom of the footer? Click <a href="https://www.nopcommerce.com/nopcommerce-copyright-removal-key?utm_source=admin-panel&utm_medium=dashboard&utm_campaign=powered_by_nopcommerce">here</a> for more info.',
    },
    {
      title:
        '<a href="https://www.nopcommerce.com/nopcommerce-premium-support-services?utm_source=admin-panel&utm_medium=dashboard&utm_campaign=premium_support">Premium support services</a>',
      content:
        'Get dedicated support from the nopCommerce team with a guaranteed response within 24 hours. Click <a href="https://www.nopcommerce.com/nopcommerce-premium-support-services?utm_source=admin-panel&utm_medium=dashboard&utm_campaign=premium_support">here</a> for more info. ',
    },
    {
      title:
        '<a href="https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS">Recommended hosting for your store</a>',
      content:
        'Everleap cloud hosting seamlessly scales sites with ease and they move stores for free. <a href="https://www.everleap.com/cloud-hosting/web-app/nopcommerce/hosting/?utm_source=NOPC&utm_medium=TXT&utm_content=PREMCP&utm_campaign=MIG30DYS">Learn more</a> and get a 30 day free trial.',
    },
  ];
  faNewspaper = faNewspaper;
  constructor() {}

  ngOnInit(): void {}
}
