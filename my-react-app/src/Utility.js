import workData from "./workData";

function Header(){
    return(
        <>
            <div className="wrapper container-fluid p-0">
                <img src="photos/image1.png" alt="photo" className="d-block m-auto w-25" style={{height: "200px",}}/>
            </div>
        </>
    );
}


function Content(props){
    let buttontext;
    if(props.object.isAvailable){
        buttontext = "ADD TO CART";
    }else{
        buttontext = "SOLD OUT"
    }
    return(
        <>
            <div className="card" style={{width: "20rem",marginLeft: "auto",marginRight: "auto"}}>
            <img src={props.object.img} className="card-img-top" alt="..." style={{width: "100%",height: "250px",objectFit: "cover"}} />
            <div className="card-body">
                <h5 className="card-title">{props.object.title}</h5>
                <p className="card-text">{props.object.text}</p>
                <p style={{fontWeight: "bold"}}>price: {props.object.price}</p>
                <button className="btn btn-primary">{buttontext}</button>
            </div>
            </div>
        </>
    );
}

function Main(){
    const data = workData.map(function(e){
        return(
            <>
                <Content object={e}/>
            </>
        );
    });
    return(
        <>
            <div className="container-fluid wrapper2 p-0">
                <img src="photos/image2.jpg" alt="photo" className="img-size-1 d-block" />
                <p className="content">"If my images evoke memory or <br></br>magic, then I have succeeded."</p>
            </div>

            <div className="wrapper3 container p-0">
                <h3 className="text-center p-5">RECENT WORK</h3>
                <div className="wrapper4">
                    {data}
                </div>
            </div>
        </>
    );
}

function Footer(){
    return(
        <>
            <div className="container-fluid footer-1 mt-5">
                Terms & Support
            </div>
        </>
    );
}
export { Header, Main, Footer }