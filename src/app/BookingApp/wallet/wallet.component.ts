// wallet.component.ts
import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  customerDetails: any;
  customerId: number = 1; // Assign a default value

  Money: number = 0;

  constructor(private service: WalletService) { }

  ngOnInit(): void {
    // Initialize customer details if needed
    this.customerDetails = {}; // Initialize with appropriate data
  }

  addMoneyToWallet(mon: number) {
    var res;
    var sum = this.customerDetails.customerWallet + mon;
    this.customerDetails.customerWallet = sum;

    this.service.updateWallet(this.customerDetails, this.customerId).subscribe((data) => {
      res = data;
      this.Money = 0;
      sum = 0;
      alert('Wallet updated successfully');
    });
  }
}
