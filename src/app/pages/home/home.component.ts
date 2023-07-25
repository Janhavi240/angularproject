import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService,private route:ActivatedRoute) {}

  foodData:any;
  ngOnInit(): void {
    this.route.params.subscribe(params =>{

      this.foodData = this.foodData.getAll()
    })

  }

}

