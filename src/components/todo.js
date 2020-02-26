import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addtodo,
  deletetodo,
  completetodo,
  edittodo,
  toggleedit
} from '../action/action';

class todo extends Component {
  state = {
    input: '',
    newtodo: ''
  };

  handelChange = e => {
    this.setState({ input: e.target.value });
  };
  handelAdd = e => {
    e.preventDefault();
    this.props.addtodo({
      title: this.state.input,
      isComplete: false,
      id: Math.random()
    });
    this.setState({ input: '' });
  };

  handelsubmit = e => {
    this.setState({ newtodo: e.target.value });
  };

  handelEdit = e => {
    e.preventDefault();
    this.props.edittodo({
      title: this.state.newtodo,
      id: Math.random()
    });
    this.setState({ newtodo: '' });
  };

  render() {
    return (
      <div className='request'>
        <div className='request-content'>
          <h1>To-Do App!</h1>
          <p>Add New To-Do</p>
          <input value={this.state.input} onChange={this.handelChange} />
          <button className='btnadd' onClick={this.handelAdd}>
            ADD
          </button>
        </div>
        <div className='response-content'>
          <div className='response-title'>
            <h3>Lets get some work done!</h3>
            <hr width='400px' />
          </div>
          <div className='respense-list'>
            {this.props.todoList.map(el => (
              <li key={el.id}>
                <input
                  className='inputtodo'
                  type='text'
                  value={el.isEdited ? this.state.newtodo : el.title}
                  onChange={this.handelsubmit}
                  style={
                    el.isComplete
                      ? { textDecoration: 'line-through' }
                      : { textDecoration: 'none' }
                  }
                  readOnly={!el.isEdited}
                />
                <button
                  type='button'
                  class='btn btn-outline-primary'
                  onClick={() => this.props.completetodo(el.id)}
                >
                  {el.isComplete ? 'undo' : 'complete'}
                </button>
                <button
                  type='button'
                  class='btn btn-outline-danger'
                  onClick={() => this.props.deletetodo(el.id)}
                >
                  delete
                </button>
                <button
                  type='button'
                  class='btn btn-outline-secondary'
                  onClick={() => {
                    this.props.toggleedit(el.id);
                    this.props.edittodo({
                      id: el.id,
                      newtodo: this.state.newtodo
                    });
                    this.setState({ newtodo: '' });
                  }}
                >
                  {el.isEdited ? 'save' : 'Edit'}
                </button>
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todoList: state };
};
const mapDispatchToProps = dispatch => {
  return {
    addtodo: payload => dispatch(addtodo(payload)),
    deletetodo: payload => dispatch(deletetodo(payload)),
    completetodo: payload => dispatch(completetodo(payload)),
    edittodo: payload => dispatch(edittodo(payload)),
    toggleedit: payload => dispatch(toggleedit(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(todo);
