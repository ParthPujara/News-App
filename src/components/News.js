import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    

    const update = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() =>{
        document.title = `${capitalize(props.category)} - NewsApp`
        update();
    }, [])
    const prevbtn = async () =>{
        setPage(page-1)
        update();
    }
    const nextbtn = async () =>{
            setPage(page+1);
            update();
    }
    const fetchMoreData = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1)
          let data = await fetch(url);
          let parsedData = await data.json();
          setArticles(articles.concat(parsedData.articles))
          setTotalResults(parsedData.totalResults)
      };
    return (
      <div>
        <>
            <h2 className='text-center' style={{margin: '70px 0 10px 0'}}>Top Headlines - {capitalize(props.category)}</h2>
            {loading && <Spinner/>}
            <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader= {<Spinner/>}>
              <div className="container">
                <div className="row" style={{paddingTop: '1%'}}>
                    {articles.map((element)=>(
                        <div className="col-md-4 abc" key={element.url} style={{marginBottom: '3%'}}>
                            <NewsItem title={element.title?element.title.slice(0, 40):""} desc={element.description?element.description.slice(0, 80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    ))}
                </div>

              </div>
            </InfiniteScroll>
        </>
      </div>
    )
}

News.defaultProps = {
    articles: [],
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    articles: PropTypes.array,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News