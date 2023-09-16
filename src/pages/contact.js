import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const contact = () => {
  return (
    <>
     <Head>
        <title>Kamil | Contact</title>
        <meta name="description" content="escription" />
      </Head>

      <main>
        <Layout>
        <AnimatedText text="reach out and collaborate" className="mb-20 capitalize" />
        </Layout>
      </main>

    </>
  )
}

export default contact