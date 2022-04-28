import React, { Component} from 'react'
import axios from 'axios'

class PostDelete extends Component{

    onDel = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then((data) => {
            console.log(data)
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.onDel}>Delete</button>
            </div>
        )
    }
}

export default PostDelete