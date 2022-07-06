import React from "react";
import ReactDOM  from "react-dom";
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Are you sure you want to do this?</ApprovalCard>


            <ApprovalCard>
                <CommentDetail author="Sam" time="Today at 3:40PM" comment="Very nice post." avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Mike" time="Today at 2:13AM" comment="Amazing and helpful!"  avatar={faker.image.image()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="John" time="Yesterday at 9:34PM" comment="Best text I've ever read."  avatar={faker.image.image()}/>        
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))