// state less conponents là component function (react function component)
//cú pháp tạo: rfc => enter
import React from 'react'

export default function DemoStateless() {

    //Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý: nôi dụng của component phải được bảo phủ bởi 1 thẻ bất kỳ
    return (
        <div className="container">
            <div className="card text-white bg-dark w-25">
                <img className="card-img-top" src="http://picsum.photos/200/200" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
            </div>
        </div>
    )
}
