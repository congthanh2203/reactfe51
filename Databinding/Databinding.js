import React, { Component } from 'react'

export default class Databinding extends Component {
    //Thuộc tính của lớp đối tượng => Sử dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Thomas Editon'
    }


    //Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng

    renderHocVien = () => {
        return <div className="card text-white bg-primary">
            <img className="card-img-top" src={this.hocVien.avatar} alt />
            <div className="card-body">
                <h4 className="card-title">{this.hocVien.tenHocVien}</h4>
                <p className="card-text">{this.hocVien.ma}</p>
            </div>
        </div>

    }



    render() {
        //binding data là biến
        let title = 'CyberSoft';
        let imgSrc = 'https://picsum.photos/200/200';

        //binding data là hàm
        const renderImg = () => {
            //Giá trị hàm muốn render ra giao diện phải trả về chuỗi, số hoặc jsx
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>
        }
        return (
            <div className="container">
                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-25 form-control" value={title} />
                databinding
                <div className="w-25">
                    {renderImg()}
                </div>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma} </li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh: <img src={this.hocVien.avatar} width="200" heigth="200" /></li>
                </ul>
                {this.renderHocVien()};
            </div >
        )
    }
}
