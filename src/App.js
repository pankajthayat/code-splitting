import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from "./component/Page1"
// import Page2 from "./component/Page2"
// import Page3 from "./component/Page3"

class App extends Component {
  constructor()
  {
    super()
    this.state={
      route:'page1',
      component:""
    }
  }
  onRouteChange=(route)=>{
    if(route=="page1")
    {
      this.setState({component:route})
    }
    else if(route=="page2")
    {
      import("./component/Page2").then((Page2)=>{
        console.log(Page2.default)
        this.setState({route:route,component:Page2.default})
      })
    }
    else{
          import("./component/Page3").then((Page3)=>{
            this.setState({route:route,component:Page3.default})
          })
    }
  }
  render(){
    if(this.state.route==='page1')
    {
      return <Page1 onRouteChange={this.onRouteChange} />
    }
    // else if(this.state.route==='page2')
    // {
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // }
    else{
      return <this.state.component onRouteChange={this.onRouteChange} />
    }
  }
}

export default App;
