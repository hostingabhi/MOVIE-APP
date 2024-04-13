export default function Student(props){
    const {stuname,marks} = props;
    return(
        <>
            <h1>Hello {stuname}</h1>
            <p>you have scored{marks}</p>
            <hr/>
        </>
    )
}