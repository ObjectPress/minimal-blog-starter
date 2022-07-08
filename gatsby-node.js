exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const { data } = await graphql(`
    query Post {
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
  `);

  if (data?.error) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      data.errors
    );
    return;
  }

  const posts = data.allPost.nodes;

  // Create blog posts pages
  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: require.resolve(`./src/templates/blog-post`),
      context: post,
    });
  });
};
