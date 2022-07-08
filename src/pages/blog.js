import { graphql } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layouts/Layout';
import Seo from '../components/seo';
import Article from '../components/ui/Article';
import dayjs from 'dayjs';

const BlogIndex = ({ data, location }) => {
  let blogContent = data?.allPost.nodes || [];
  blogContent = blogContent.sort((a, b) =>
    b.publishAt.localeCompare(a.publishAt)
  );

  return (
    <Layout location={location} title={'Blog'} latestPosts={false}>
      <Seo title="Blog" />

      <ol style={{ listStyle: `none` }}>
        <li>
          {blogContent.map((post) => {
            return (
              <Article
                key={post.title}
                title={post.title}
                date={dayjs(post.publishAt).format('MMM DD, YYYY')}
                excerpt={post.description}
                slug={post.slug}
              />
            );
          })}
        </li>
      </ol>
    </Layout>
  );
};

export const query = graphql`
  query blogQuery {
    allPost {
      nodes {
        title
        publishAt
        pageTitle
        slug
        content
        description
        keywords
        images
        altTags
      }
    }
  }
`;

export default BlogIndex;
