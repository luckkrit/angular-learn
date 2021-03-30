import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [];
  constructor() {
    this.products = [
      {
        id: 1,
        productName: 'Build your own computer',
        picture: 'file0.jpg',
        sku: 'COMP_CUST',
        price: 1200,
        quantity: 10000,
      },
      {
        id: 2,
        productName: 'Digital Storm VANQUISH 3 Custom Performance PC',
        picture: 'file1.jpg',
        sku: 'DS_VA3_PC',
        price: 1259,
        quantity: 10000,
      },
      {
        id: 3,
        productName: 'Lenovo IdeaCentre 600 All-in-One PC',
        picture: 'file2.jpg',
        sku: 'LE_IC_600',
        price: 500,
        quantity: 10000,
      },
      {
        id: 4,
        productName: 'Apple MacBook Pro 13-inch',
        picture: 'file3.jpg',
        sku: 'AP_MBP_13',
        price: 1800,
        quantity: 10000,
      },
      {
        id: 5,
        productName: 'Asus N551JK-XO076H Laptop',
        picture: 'file4.jpg',
        sku: 'AS_551_LP',
        price: 1500,
        quantity: 10000,
      },
      {
        id: 6,
        productName: 'Samsung Series 9 NP900X4C Premium Ultrabook',
        picture: 'file5.jpg',
        sku: 'SM_900_PU',
        price: 1590,
        quantity: 10000,
      },
      {
        id: 7,
        productName: 'HP Spectre XT Pro UltraBook',
        picture: 'file6.jpg',
        sku: 'HP_SPX_UB',
        price: 1350,
        quantity: 10000,
      },
      {
        id: 8,
        productName: 'HP Envy 6-1180ca 15.6-Inch Sleekbook',
        picture: 'file7.jpg',
        sku: 'HP_ESB_15',
        price: 1460,
        quantity: 10000,
      },
      {
        id: 9,
        productName: 'Lenovo Thinkpad X1 Carbon Laptop',
        picture: 'file8.jpg',
        sku: 'LE_TX1_CL',
        price: 1360,
        quantity: 10000,
      },
      {
        id: 10,
        productName: 'Adobe Photoshop CS4',
        picture: 'file9.jpg',
        sku: 'AD_CS4_PH',
        price: 75,
        quantity: 10000,
      },
      {
        id: 11,
        productName: 'Windows 8 Pro',
        picture: 'file10.jpg',
        sku: 'MS_WIN_8P',
        price: 65,
        quantity: 10000,
      },
      {
        id: 12,
        productName: 'Sound Forge Pro 11 (recurring)',
        picture: 'file11.jpg',
        sku: 'SF_PRO_11',
        price: 54.99,
        quantity: 10000,
      },
      {
        id: 13,
        productName: 'Nikon D5500 DSLR',
        picture: 'file12.jpg',
        sku: 'N5500DS_0',
        price: 670,
        quantity: 10000,
      },
      {
        id: 14,
        productName: 'Nikon D5500 DSLR - Black',
        picture: 'file13.jpg',
        sku: 'N5500DS_B',
        price: 670,
        quantity: 10000,
      },
      {
        id: 15,
        productName: 'Nikon D5500 DSLR - Red',
        picture: 'file14.jpg',
        sku: 'N5500DS_R',
        price: 630,
        quantity: 10000,
      },
      {
        id: 16,
        productName: 'Leica T Mirrorless Digital Camera',
        picture: 'file15.jpg',
        sku: 'LT_MIR_DC',
        price: 530,
        quantity: 10000,
      },
      {
        id: 17,
        productName: 'Apple iCam',
        picture: 'file16.jpg',
        sku: 'APPLE_CAM',
        price: 1300,
        quantity: 10000,
      },
      {
        id: 18,
        productName: 'HTC One M8 Android L 5.0 Lollipop',
        picture: 'file17.jpg',
        sku: 'M8_HTC_5L',
        price: 245,
        quantity: 10000,
      },
      {
        id: 19,
        productName: 'HTC One Mini Blue',
        picture: 'file18.jpg',
        sku: 'OM_HTC_BL',
        price: 100,
        quantity: 10000,
      },
      {
        id: 20,
        productName: 'Nokia Lumia 1020',
        picture: 'file19.jpg',
        sku: 'N_1020_LU',
        price: 349,
        quantity: 10000,
      },
      {
        id: 21,
        productName: 'Beats Pill 2.0 Wireless Speaker',
        picture: 'file20.jpg',
        sku: 'BP_20_WSP',
        price: 79.99,
        quantity: 10000,
      },
      {
        id: 22,
        productName: 'Universal 7-8 Inch Tablet Cover',
        picture: 'file21.jpg',
        sku: 'TC_78I_UN',
        price: 39,
        quantity: 10000,
      },
      {
        id: 23,
        productName: 'Portable Sound Speakers',
        picture: 'file22.jpg',
        sku: 'PT_SPK_SN',
        price: 37,
        quantity: 10000,
      },
      {
        id: 24,
        productName: 'Nike Floral Roshe Customized Running Shoes',
        picture: 'file23.jpg',
        sku: 'NK_FRC_RS',
        price: 40,
        quantity: 10000,
      },
      {
        id: 25,
        productName: 'adidas Consortium Campus 80s Running Shoes',
        picture: 'file24.jpg',
        sku: 'AD_C80_RS',
        price: 27.56,
        quantity: 10000,
      },
      {
        id: 26,
        productName: 'Nike SB Zoom Stefan Janoski "Medium Mint"',
        picture: 'file25.jpg',
        sku: 'NK_ZSJ_MM',
        price: 30,
        quantity: 10000,
      },
      {
        id: 27,
        productName: 'Nike Tailwind Loose Short-Sleeve Running Shirt',
        picture: 'file26.jpg',
        sku: 'NK_TLS_RS',
        price: 15,
        quantity: 10000,
      },
      {
        id: 28,
        productName: 'Oversized Women T-Shirt',
        picture: 'file27.jpg',
        sku: 'WM_OVR_TS',
        price: 24,
        quantity: 10000,
      },
      {
        id: 29,
        productName: 'Custom T-Shirt',
        picture: 'file28.jpg',
        sku: 'CS_TSHIRT',
        price: 15,
        quantity: 10000,
      },
      {
        id: 30,
        productName: `Levi's 511 Jeans`,
        picture: 'file29.jpg',
        sku: 'LV_511_JN',
        price: 43.5,
        quantity: 10000,
      },
    ];
  }
  getAllProducts(): Product[] {
    return this.products;
  }
  getProductById(id: string): Product {
    return this.products.find((p) => {
      return p.id === parseInt(id, 10);
    });
  }
  updateProduct(product: Product): void {
    this.products.forEach((p) => {
      console.log(p.id, product.id);
      if (p.id === product.id) {
        p.productName = product.productName;
        p.sku = product.sku;
        p.price = product.price;
        p.quantity = product.quantity;
      }
    });
  }
}
