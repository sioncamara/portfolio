
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RichText } from "prismic-reactjs";

export default function Article(props) {

    return(
    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
      style={{ display: "none" }}
    >
      <h2 className="major">{props.title}</h2>
      <span  className="image main">
       <a  target="_blank" rel="noopener noreferrer" href="https://nextjs-portfolio-psi.vercel.app/"><img src={props.image} alt="" /></a> 
      </span>
      <p>
        Hi, I am a student at the University of Wisconsin Madison with a passion for full stack development. By the way, check out my <a href="#P3">awesome work</a>.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
        porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
        Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
        aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
        vehicula.
      </p>
      
      {props.hasTag && 
      <>
      <div style={{textAlign: "center"}} > <AnchorLink className="noDots" href={props.tag}><img src="/images/invertedArrows.png"/></AnchorLink></div>
      </>
      }

    
     
      {props.first && props.close}
    </article>
    )
}