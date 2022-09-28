const React = require('react');
const Show = (props) => {
  return (
    <div>
      <h1> Show Page </h1>
         {props.log.title}<br />
         {props.log.entry}<br />
        {props.log.shipIsBroken ? " Ship Broke!" : " Ship not broke!"}
    <br /> <br />
        <a href={`/logs`}> Return to Index Page</a><br />





    </div>
  )
}

module.exports = Show;