import React, { Component } from 'react';
import data from './dulieu.json';
import PostItem from './PostItem';
class Blog extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
          {
            data.map((value,key)=>{
              return (
                <PostItem key={key}
                  tinId={value.id}
                  anh={value.anh}
                  tieuDe={value.tieuDe}
                  trichDan={value.trichDan}
                ></PostItem>
              )
            })
          }
             
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;