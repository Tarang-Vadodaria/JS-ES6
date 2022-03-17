import React,{Component} from 'react';
class  Gallery extends Component{
render() {
  let alternate= 'https://pngset.com/images/rhino-science-book-pages-ruled-with-alternate-text-file-binder-file-folder-pottery-transparent-png-2211310.png';
  return (
    <div>{
      this.props.items.map((item,index) =>{
        let {title, imageLinks, infoLink} = item.volumeInfo;
        return(
          <a key={index} className="book"
          href={infoLink}
          target="_blank ">
          <img
            src={imageLinks !== undefined ?imageLinks.thumbnail :alternate}
               alt ="Book Image"
               className="book-img"/>
          <div className="book-text">{title}</div>
          </a>
        )
      })
    }
    </div>

  )
}
  }
export default Gallery;
