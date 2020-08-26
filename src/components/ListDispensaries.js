import React from 'react';

import axios from 'axios';

export default class ListDispensaries extends React.Component {
  state = {
    dispensaries: []
  }

  componentDidMount() {
    axios.get(`https://resreq.in/api/unknown`)
      .then(res => {
        const dispensaries = res.data;
        console.log(res.data)
        this.setState({ dispensaries });
      })
  }

  render() {
    return (
      <ul>
        { this.state.dispensaries.map(item => <li>{item.data[0].name}</li>)}
      </ul>
    )
  }
}
