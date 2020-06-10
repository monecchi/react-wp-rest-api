import React, { Component } from 'react'
import axios from 'axios';

export class FoodMenu extends Component {
   state = {
       foods: [],
       isLoaded: false
   }

 componentDidMount () {
   axios.get('https://pizzariameurancho.com.br//wp-json/wp/v2/food_menu/')
       .then(res => this.setState({
           foods: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }


   render() {
      console.log(this.state);
       return (
           <div>
              
           </div>
       )
   }
}

export default FoodMenu