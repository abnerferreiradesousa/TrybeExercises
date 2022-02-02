import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    const { allList } = this.props;
    return (<section>
      {allList.map((item, index) => (<p key={index}>{item}</p>))}
    </section>);
  }
}

const mapStateToProps = (state) => ({
  allList: state.saveTaskReducer.tasks,
});

export default connect(mapStateToProps, null)(List);