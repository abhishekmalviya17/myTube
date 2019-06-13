import React from 'react';

class CreatePlaylist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name : '',
            type : '',
            description : ''
        }
        this.onChange=this.onChange.bind(this);
    }
    
    onChange(event){
            let name=event.target.name;
            let description=event.target.description;
            let type=event.target.type;
            this.setState({
                name : name,
                type : type,
                description : description
            })
    }
    render(){
        return(
            <div>
                <h2 className='text-info'>Create Playlist</h2>
                <hr></hr>
                <form>
                    <div className='form-group'>
                        <label>Playlist Name :
                            <input name='name' type='text' onChange={this.onChange} className='form-control'></input>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>Select Playlist Type :
                        <select name='type' onChange={this.onChange} className='form-control'>
                            <option value='public'> Public</option>
                            <option value='private'> Private</option>
                            <option value='unlisted'> unlisted</option>
                        </select>
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>Playlist Description:
                            <textarea  name='description' onChange={this.onChange} rows='4' cols='50' className='form-control'></textarea>
                        </label>
                    </div>
                    <button className='btn btn-info'>Create Playlist</button>
                </form>
            </div>
        )
    }
}
export default CreatePlaylist;