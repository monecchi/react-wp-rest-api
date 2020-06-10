import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
export class BookItems extends Component {

   state = {
       imgUrl: '',
       author: '',
       isLoaded: false
   }

   static propTypes = {
       food_menu: PropTypes.object.isRequired
   }

   componentDidMount () {
       const {featured_media, author} = this.props.food_menu;
       const getImageUrl = axios.get(`https://pizzariameurancho.com.br/wp-json/wp/v2/media/${featured_media}`);
       const getAuthor = axios.get(`https://pizzariameurancho.com.br/wp-json/wp/v2/users/${author}`);
      
       Promise.all([getImageUrl, getAuthor]).then(res => {

           console.log(res);
           this.setState({
               imgUrl: res[0].data.media_details.sizes.full.source_url,
               author: res[1].data.name,
               isLoaded: true

           });
       });
    }
 
   render() {
       const { title, excerpt } = this.props.food_menu;
       const {author, imgUrl, isLoaded} = this.state;
       return (
           <div>
              <h2>{title.rendered}</h2>
              <img src={imgUrl} alt={title.rendered}/>
              <strong>{author}</strong><br/>
              <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
           </div>
       )
   }
}

export default BookItems