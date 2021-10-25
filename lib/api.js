import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`
const API_URL = 'https://my-portfolio-official.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi()
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        'Prismic-Ref': previewData?.ref || prismicAPI.masterRef.ref,
        'Content-Type': 'application/json',
        'Accept-Language': API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  )

  if (res.status !== 200) {
    console.log(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
      {
        allArticles {
          edges {
            node {
              _meta {
                uid
              }
            }
          }
        }
      }
    `)
    return data?.allArticles?.edges
  }

  export async function getAllProjects(){
    const data = await fetchAPI(`
   
    {
      allProjects {
          edges {
            node {
             title
              image
              link
              websitelink{
                _linkType
              }
             content
             isfirst
             priority
            }
          }
        }
       }
    `);
    //console.log("logging data from api", data);

    return data?.allProjects?.edges;
}


export async function getAboutPage(){
    const data = await fetchAPI(`
   
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
    //console.log("logging data from api", data);

    return data?.allAbouts?.edges[0];
}

export async function getResume(){
  const data = await fetchAPI(`
 
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
  //console.log("logging data from api", data);

  return data?.allResumes?.edges[0];
}



export async function getSkillsPage(){
  const data = await fetchAPI(`
 
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
  console.log("logging data from api", data.allSkillss.edges[0]);

  return data?.allSkillss?.edges[0];
}

export async function getArticle(slug, previewData) {
    const data = await fetchAPI(
      `
      query ArticleBySlug($slug: String!, $lang: String!) {
        article(uid: $slug, lang: $lang) {
          title
          content
          date
          _meta {
            uid
          }
        }
  }
  
    `,
      {
        previewData,
        variables: {
          slug,
          lang: API_LOCALE,
        },
      }
    )
  
    return data
  }