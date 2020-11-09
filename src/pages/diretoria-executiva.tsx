import { GetStaticProps } from 'next'
// import ReactMarkdown from 'react-markdown'
import { Layout } from '@/components/Layout'
import { getPageBySlug } from '@/lib/pages'
import { getPosts, Post } from '@/lib/posts'

type Props = {
  executiveBoard: any
  contact: any
  lastTwoPosts: Post[]
}

const ExecutiveBoardPage: React.FC<Props> = ({ contact, lastTwoPosts, executiveBoard }) => {
  return (
    <Layout title={executiveBoard.title} contact={contact} posts={lastTwoPosts}>
      <article>
        {/* <ReactMarkdown source={executiveBoard.body} /> */}
        <h2 className="mb-40">Em construção</h2>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const lastTwoPosts = getPosts().splice(0, 2)
  const contact = getPageBySlug('contact')
  // const executiveBoard = getPageBySlug('executiveBoard')

  return {
    props: {
      lastTwoPosts,
      contact,
      // executiveBoard,
      executiveBoard: {
        title: 'Diretoria Executiva'
      },
    },
  }
}

export default ExecutiveBoardPage
