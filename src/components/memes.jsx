import Logo from "./logo"
import React,{useState,useEffect} from "react";
export default function Meme() {
  const[meme,setMeme] = useState ({
     toptext:"",
     bottomtext:"",
     randomImg:"http://i.imgflip.com/1bij.jpg"
  })
  const [allMemes,setAllMemes]=useState([])
  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemes(data.data.memes))
  },[])

   function getImage()
   {
     const randomnumber=Math.floor(Math.random()*allMemes.length);
     const url=allMemes[randomnumber].url;
     setMeme((prevMeme) =>{
       return{
        ...prevMeme,
        randomImg:url
       }
     });
      
        
      
     
   }
   function handleChange(e)          
   {
     const {name,value}=e.target;
     setMeme((prevMeme)=>{
      return {
        ...prevMeme,
        [name]:value
      }
      
      
      
     });
   }
    return(
      <>
      <Logo/>
      <div>
        <div className="mix">
        <div className="input-text">
        <input type="text" placeholder="toptext" name="toptext" value={meme.toptext} onChange={handleChange} /> 
        <input type="text" placeholder="bottomtext"  name="bottomtext" value={meme.bottomtext} onChange={handleChange}/> 
        </div>
        <button onClick={getImage}>Get a meme image</button>
        </div>
        
        <div className="meme-gen">
        <img src={meme.randomImg} height="500px" width="500px"/>
        <h2>{meme.toptext}</h2>
        <h2>{meme.bottomtext}</h2>
        
        </div>
         



      </div>

      </>
    )
}
