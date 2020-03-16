import React from "react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import NewsArticles from "../components/news/NewsArticles"
import ContainerCentre from "../components/shared/ContainerCentre"
import GreyH3 from "../components/shared/GreyH3"

const News = () => {
  return (
    <Layout>
      <SEO title="ニュース" />
      <YellowTitle title="ニュース" />
      <ContainerCentre>
        <GreyH3>ニュース一覧</GreyH3>
        <NewsArticles />
      </ContainerCentre>
    </Layout>
  )
}

export default News
