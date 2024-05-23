import React from 'react'

const NewsItem  = (props) => {
      let {title, desc, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card">
            <img src={imageUrl?imageUrl:"https://www.seekpng.com/png/detail/423-4235598_no-image-for-noimage-icon.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left: '50%', zIndex: '1'}}>
              {source}
            </span>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desc}...</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
