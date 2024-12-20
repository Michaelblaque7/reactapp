function Students({prog}){

    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                        {
                            prog.map(function(pr, index){
                                return (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{pr.name}</th>
                                        <th>{pr.score}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    

                </table>

                
            </div>
        </div>
    )
}

export default Students;