const React = require('react');

const Index = (props) => {


        return (
            <div>
                <h1>Log Index Page</h1>

                <a href="/logs/new">Create a New Log!</a>


  


                <ul>
                    {props.logs.map((log, index) => {
                        return (
                            <li key={index}>
                              <a href={`/logs/${log._id}`}> {log.title}</a><br />
                              {log.entry}<br />
                              {log.shipIsBroken ? `Ship is Broken` : `Ship is not Broken`}

                                <br />
                            <a href={`/edit/${log._id}`}>Edit This Log</a>

                            <form action={`/delete/${log._id}?_method=DELETE`} method="POST" >

                                <input type="submit" value="DELETE" />
                            </form>


                                <br />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    
}

module.exports = Index;