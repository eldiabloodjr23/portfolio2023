import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const Projects = () => {
  return (
    <>
     <Head>
        <title>Kamil | Projects</title>
        <meta name="description" content="escription" />
      </Head>

      <main>
        <Layout>
        <AnimatedText text="Latest Projects" className="mb-20 capitalize" />
        </Layout>
      </main>

    </>
  )
}

export default Projects