import React from 'react';

const wrapperHOC = (WrappedComponent, name) => {
  class HOC extends React.Component {
      state={
          price:20,
          name
      }
      sayHi=(name)=>{
          console.log('HI!!!!', name)
      }
    render() {
      return <WrappedComponent  {...this.props} taste='sweet' {...this.state} say={this.sayHi}  />;
    }
  }

  return HOC;
};
export default wrapperHOC;
