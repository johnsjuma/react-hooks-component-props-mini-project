import React from 'react'
import Article from "./Article"


const ArticleList = ({posts}) => {
    const article = posts.map((item) => 
    <Article key={item.id} title={item.title} data={item.data} preview={item.preview} minutes={item.minutes} />
    )
  return (
    <main>{article}</main>
  )
}

export default ArticleList