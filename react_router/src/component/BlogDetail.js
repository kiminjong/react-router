import React, { Component } from 'react';
import data from './dulieu.json';
import PostRelated from './PostRelated';
class BlogDetail extends Component {
    render() {
      console.log(this.props);
      
        return (
            <div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {
                  data.map((value,key)=>{
                    if(value.id == this.props.match.params.id){
                      return (
                        <div className="card" key={key}>
                          <img className="card-img-top" src={value.anh} alt="" />
                          <div className="card-body">
                            <h4 className="card-title">{value.tieuDe}</h4>
                            <p className="card-text">{value.noiDung}</p>
                          </div>
                        </div>
                      )
                    }
                  })
                }
                  
              </div> {/*end 1 tin */}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h4 className="card-title text-center">Tin lien quan</h4>
            <div className="row">
              <div className="col-12">
                <div className="card-deck">
                {
                  data.map((value,key)=>{
                    if(value.id != this.props.match.params.id){
                      if(key <= 4){
                        return (
                          <PostRelated key={key}
                            tinId ={value.id}
                            anh = {value.anh}
                            tieude = {value.tieuDe}
                            trichdan = {value.trichDan}
                          >
                          </PostRelated>
                        )
                      }
                    }
                    
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        );
    }
}

export default BlogDetail;