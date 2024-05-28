import meme from "./meme.jpg"
export default function Logo()
{
    return (
        <>
        <div className="logo">
        <img src={meme} height="100px" width="100px"/>
        <h1>Meme generator</h1>
        </div>
         
        </>
    )
}