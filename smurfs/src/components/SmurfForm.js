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
                        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                        type='text'
                        name='name'
                        placeholder='name'
                        value={this.state.smurf.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                        type='text'
                        name='age'
                        placeholder='age'
                        value={this.state.smurf.age}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline'
                        type='text'
                        name='height'
                        placeholder='height'
                        value={this.state.smurf.height}
                        onChange={this.handleChange}
                    />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default SmurfForm; 