import React, { Component } from 'react'

export default class Form extends Component {

    /* Form that collects users' review and updates the store */
    /* Contains 2 functions: 
     << submitReview >>     React will call this func when users submit the form
                            It will get the inputted review, number of stars and then call addReview (from the store)
                            The component is calling addReview through props
     << render >>           Uses HTML and Bootstrap to define a form with a title, input, select dropdown and
                            submit whch triggers submitReview 
                            */


    submitReview = (e) => {
        e.preventDefault();
        const review = this.review.value;
        const stars = Number(this.stars.value);
        this.props.store.addReview({review, stars})
    };

    render() {
        return (
            <div className="formSection">
                <div className="form-group">
                    <p>Submit a Review</p>
                </div>
                <form onSubmit={this.submitReview}>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <input type="text" name="review" ref={node => {
                                    this.review = node;
                                }}
                                id="review" placeholder="Write a review" className="form-control"/>
                               
                            </div>
                        </div>

            <div className="col-md-4">
                <div className="form-group">
                    <select name="stars" id="stars" className="form-control" ref={node => {
                        this.stars = node;
                    }}>

                        <option value="1" className="1 Star"></option>
                        <option value="2" className="2 Star"></option>
                        <option value="3" className="3 Star"></option>
                        <option value="4" className="4 Star"></option>
                        <option value="5" className="5 Star"></option>
                    </select>
                </div>
            </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Submit Review</button>
                        </div>
                    </div>

                    </div>
                </form>
            </div>
        )
                }
            }
