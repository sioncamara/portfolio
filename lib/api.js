//import Prismic from "prismic-javascript";
import { getGraphQLEndpoint, graphqlFetch } from "@prismicio/client";
import { GraphQLClient } from "graphql-request";

const repoName = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${repoName}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${repoName}.prismic.io/graphql`;
const apiUrl = `https://${repoName}.cdn.prismic.io/api/v2`;
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

//export const PrismicClient = Prismic.client(REF_API_URL, {
//  accessToken: API_TOKEN,
//});

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

//async function fetchAPI(query, { previewData, variables } = {}) {
//  const prismicAPI = await PrismicClient.getApi();
//
//  const res = await fetch(
//    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
//    {
//      headers: {
//        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
//        "Content-Type": "application/json",
//        "Accept-Language": API_LOCALE,
//        Authorization: `Token ${API_TOKEN}`,
//      },
//    }
//  );
//
//  if (res.status !== 200) {
//    console.log(await res.text());
//    throw new Error("Failed to fetch API");
//  }
//
//  const json = await res.json();
//  if (json.errors) {
//    console.error(json.errors);
//    throw new Error("Failed to fetch API");
//  }
//  return json.data;
//}

export function getAllProjects() {
   return createClient()
    .then(client => {
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
    .then(data => {
      // return projects sorted by priority in ascending order
      return data.allProjects.edges.sort(
        (a, b) => a.node.priority - b.node.priority
        );
    })
    .catch(error => {
      console.error(error);
    });
 }


export function getAboutPage() {
   return createClient()
    .then(client => {
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
    .then(data => {
      return data?.allAbouts?.edges[0];
    })
    .catch(error => {
      console.error(error);
    });
 }


export function getResume() {
   return createClient()
    .then(client => {
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
    .then(data => {
      return data?.allResumes?.edges[0];
    })
    .catch(error => {
      console.error(error);
    });
 }

export function getSkillsPage() {
   return createClient()
    .then(client => {
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
    .then(data => {
      return data?.allSkillss?.edges[0];
    })
    .catch(error => {
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
