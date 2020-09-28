import React, { Component } from 'react'

export default class HandleEvent extends Component {


    showTitle = () => {
        alert('Hello CyberSoft')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        return (
            <div>
                {/* Xử lý sự kiện truyền callback */}
                <button onClick={this.showTitle}>Hello World</button>


                {/* Xử lý sự kiện sử dụng hàm trung gian */}

                <button onClick={()=>{
                    this.showTitle();
                }}>Show Title</button>

                <br /> <br />

                <button onClick={this.showMess.bind(this,'CyberSoft')}>Show Mess</button>


                <button onClick={()=>{
                    this.showMess('CyberSoft 1')
                }}>Show mess</button>
            </div>
        )
    }
}
