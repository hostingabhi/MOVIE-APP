import headStyle from "./headingOne.module.css";

export default function HeadingOne(){
    return(
        <div className="wrapper">
            <h1>Heading 1</h1>
            <button className={headStyle.headbtn}>Button 1</button>
        </div>
    )
}