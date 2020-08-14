
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RichText } from "prismic-reactjs";
import Avatar from 'react-avatar';

export default function Article(props) {
    console.log(props);

    return(
    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
      style={{ display: "none" }}
    >
      <h2 className="major">{props.page?.title[0].text ?? null}</h2>
    
          

      
      <span  className="image main">
       <a  href={props.page?.link[0].text}><img  src={props.page.image?.url ?? null} alt="" /></a> 
      </span>

      <RichText render={props.page.content} />
    
      
      {props.hasTag && 
      <>
      <div style={{textAlign: "center"}} > <AnchorLink className="noDots" href={props.tag}><img src="/images/invertedArrows.png"/></AnchorLink></div>
      </>
      }

    
     
      {props.first && props.close}
    </article>
    )
}