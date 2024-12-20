import "./pagecontent.css"; // external styling
import xyz from "../8.avif"


const PageContent = ({student}) => {
    
    return(
        <div className="row content">
           <div className="col">
                <h1 className="text-center">PageContent</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p>Image located inside src folder</p>
                        <img src={xyz} className="img-fluid" alt="Male model"/>
                    </div>

                    <div className="col-md-6">
                        <p>Image located inside public folder</p>
                        <img src="/13.avif" className="img-fluid" alt="male model"/>
                    </div>
                </div>
                <div className="row">
                    {
                        student.map((std, index)=>{
                            return(
                                <div className="col-md-3 p-3 bg-primary" >
                                    <p>{std}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div> 
        </div>
    )
}

export default PageContent;