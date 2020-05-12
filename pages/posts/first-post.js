import Head from 'next/head'
import Link from "next/link"

//components
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
 
            <h1>FirstPost</h1>
            <h2>
                <Link href='/'><a>Home</a></Link>
            </h2>
        </Layout>
    )
}