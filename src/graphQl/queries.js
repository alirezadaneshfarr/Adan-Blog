import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {
        posts {
    author {
      name
      avatar {
        url
      }
    }
    id
    title
    slug
    coverPhoto {
      url
    }
  }
}
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
   author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        id
        url
      }
      slug
      title
    }
  }
}`;

const GET_POST_INFO = gql`
  query getPostInfo($slug: String!) { post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      field
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    slug
    title
  }
}
`;


const GET_POST_COMMENT = gql`
query getPostComment($slug: String!) {
  comments(where: {post: {slug: $slug }}) {
    id
    name
    text
  }
}
`;


export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO, GET_POST_COMMENT };