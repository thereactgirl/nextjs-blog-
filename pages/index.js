import Head from 'next/head'

// components
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'

// styles
import utilStyles from '../styles/utils.module.css'

// functions
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  const setAlert = () => {
    console.log(getSortedPostsData())
    return <Alert error />
  }
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Leslie. I’m a software engineer and a translator (English/Spanish). You can contact me on <a href='https://twitter.com/Rarrrleslie'>Twitter</a></p>
        <p onClick={setAlert}>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
         {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}