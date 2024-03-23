import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products:Array <any>=[]
  public titleVal:string = ''


  public categoriesVal: Array<string>=[]
  public currentCategory: string = ''


  public priceRange: Array<any>=[]
  public currentPriceRange: number = 0
  
  public currentRating: number = 4



  public getProducts = async():Promise<void> => {
    let url = 'https://dummyjson.com/products?limit=50'
    let res = await axios(url)
    this.products = res.data.products

    let categories  = this.products.map(el => el.category)
    this.categoriesVal = [...new Set<string>(categories)]
    
    let prices = this.products.map(el => el.price)
    this.priceRange.push(Math.min(...prices))
    this.priceRange.push(Math.max(...prices))
    this.currentPriceRange = Math.floor((this.priceRange[1]+ this.priceRange[0])/2)
    
  }
  public filteredProducts():any[]{
    let title = this.titleVal.toLowerCase()

    return this.products.filter(el => 
        el.title.toLowerCase().includes(title) &&
        el.category.includes(this.currentCategory) &&
        el.price <= this.currentPriceRange &&
        Math.floor(el.rating) == this.currentRating
      )

  }
}
