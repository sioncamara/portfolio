import { getGraphQLEndpoint, graphqlFetch } from "@prismicio/client";
import { GraphQLClient } from "graphql-request";

const repoName = process.env.PRISMIC_REPOSITORY_NAME;
const apiUrl = `https://${repoName}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;

async function createClient() {
  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });

  const ref = (await response.json()).refs[0].ref;

  return new GraphQLClient(getGraphQLEndpoint(repoName), {
    headers: {
      "Prismic-Ref": ref,
      Authorization: `Token ${API_TOKEN}`,
    },
    fetch: graphqlFetch,
    method: "get",
  });
}

export function getAllProjects() {
  return createClient()
    .then((client) => {
      return client.request(`
        {
          allProjects {
            edges {
              node {
                title
                image
                link
                content
                isfirst
                priority
              }
            }
          }
        }
      `);
    })
    .then((data) => {
      // return projects sorted by priority in ascending order
      return data.allProjects.edges.sort(
        (a, b) => a.node.priority - b.node.priority,
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getAboutPage() {
  return createClient()
    .then((client) => {
      return client.request(`
        {
          allAbouts {
            edges {
              node {
                title
                image
                content
              }
            }
          }
        }
      `);
    })
    .then((data) => {
      return data?.allAbouts?.edges[0];
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getResume() {
  return createClient()
    .then((client) => {
      return client.request(`
        {
          allResumes{
            edges{
              node{
                resume{
                  ... on _FileLink{
                    name
                    url
                    size
                  }
                }
              }
            }
          }
        }
      `);
    })
    .then((data) => {
      return data?.allResumes?.edges[0];
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getSkillsPage() {
  return createClient()
    .then((client) => {
      return client.request(`
        {
          allSkillss {
            edges {
              node {
                title
                content
                image
              }
            }
          }
        }
      `);
    })
    .then((data) => {
      return data?.allSkillss?.edges[0];
    })
    .catch((error) => {
      console.error(error);
    });
}

//export async function getArticle(slug, previewData) {
//    const data = await fetchAPI(
//        `
//      query ArticleBySlug($slug: String!, $lang: String!) {
//        article(uid: $slug, lang: $lang) {
//          title
//          content
//          date
//          _meta {
//            uid
//          }
//        }
//  }
//
//    `,
//        {
//            previewData,
//            variables: {
//                slug,
//                lang: API_LOCALE
//            }
//        }
//    );
//
//    return data;
//}
