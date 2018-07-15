import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PostItem extends Component {
    constructor(props) {
        super(props);
        
    }
    ChangeToSlug = (str) => {
        str =str.toLowerCase();
    
        //Đổi ký tự có dấu thành không dấu
        str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        str = str.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        str = str.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        str = str.replace(/ /gi,"-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        str = str.replace(/\-\-\-\-\-/gi, '-');
        str = str.replace(/\-\-\-\-/gi, '-');
        str = str.replace(/\-\-\-/gi, '-');
        str = str.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        str = '@' + str + '@';
        str = str.replace(/\@\-|\-\@|\@/gi,'');
        //In slug ra textbox có id “slug”
       return str;
    }

    render() {
        return (
            <div className="col-4">
              <div className="card">
                <img className="card-img-top" src={this.props.anh} alt="" />
                <div className="card-body">
                    <a  href={"/blog-detail/" + this.ChangeToSlug(this.props.tieuDe)  + "." + this.props.tinId + ".html"}>
                        <h4 className="card-title">{this.props.tieuDe}</h4>
                    </a>
                  <p className="card-text">{this.props.trichDan}</p>
                </div>
              </div>
            </div>
        );
    }
}

export default PostItem;