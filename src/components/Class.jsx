import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'red' }
    this.myRef = React.createRef();
    this.value = ''
  }
  handelChange = (e) => {
    this.setState.value = e.target.value
  }
  focus = () => {
    this.myRef.current.focus()
  }
  //----------------
  componentDidMount() {
    console.log('oneTime from class');
  }
  componentDidUpdate(value) {
    console.log(this.value);
  }

  //--------------
  render() {
    return <div>
      <h1>class component</h1>
      <h2>State</h2>
      <h3>I am a {this.state.color} Car!</h3>
      <h2>Ref</h2>
      <div>
        <input type='text' ref={this.myRef} onChange={(e) => this.handelChange(e)} />
        <button onClick={this.focus}>Focus</button>
      </div>
      <hr /></div >
  }
}

