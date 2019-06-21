import React from 'react';

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    }

    addSmurf = e => {
        e.preventDefault(); 
        this.props.addSmurf(this.state.smurf)
        this.setState({
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        })
    }

    handleChange = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addSmurf}>
                    <input 
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.smurf.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='age'
                        value={this.state.smurf.age}
                        onChange={this.handleChange}
                    />
                    <input 
                        type='text'
                        name='height'
                        placeholder='height'
                        value={this.state.smurf.height}
                        onChange={this.handleChange}
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default SmurfForm; 