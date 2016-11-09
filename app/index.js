var React = require('react');
var ReactDOM = require('react-dom');
//console.log('puchica')
function Test(){
  return(<div>Hola mundo</div>);
}
class Test2 extends React.Component{
  render(){
    return(
      <div>Hola desde una clase 2</div>
    );
  }
}

ReactDOM.render(<Test2 />, document.getElementById('app'));
