import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentContainer extends React.Component {
  state = {
    comments: [],
    user_id: "",
    location_id: null,
    content: "",
    editComment: false,
    commentId: null
  };

  componentDidMount() {
    this.setState({
      comments: [...this.props.comments],
      location_id: this.props.location.id,
      user_id: this.props.currentUser.id
    });
  }

  handleChange = event => {
    this.setState({
      content: [event.target.value]
    });
  };

  handleFetch = event => {
    event.preventDefault();
    if (this.state.editComment) {
      fetch(`http://localhost:3000/api/v1/comments/${this.state.commentId}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Accepts: "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user_id,
          location_id: this.state.location_id,
          content: this.state.content.toString()
        })
      })
        .then(res => res.json())
        .then(json =>
          this.setState({
            comments: [...this.state.comments, json],
            // this.state.comments.slice(0, this.state.comments.indexOf(json)),
            //
            // this.state.comments.slice(this.state.comments.indexOf(json) + 1)
            content: "",
            editComment: false,
            commentId: null
          })
        );
    } else {
      fetch("http://localhost:3000/api/v1/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accepts: "application/json"
        },
        body: JSON.stringify({
          user_id: this.state.user_id,
          location_id: this.state.location_id,
          content: this.state.content.toString()
        })
      })
        .then(res => res.json())
        .then(json =>
          this.setState({
            comments: [...this.state.comments, json],
            content: ""
          })
        );
    }
  };

  editComment = comment => {
    this.setState({
      content: comment.content,
      editComment: true,
      commentId: comment.id
    });
  };

  deleteComment = comment => {
    console.log(comment);
    fetch(`http://localhost:3000/api/v1/comments/${comment.id}`, {
      method: "DELETE"
    });
  };

  render() {
    return (
      <div>
        <div>
          <CommentList
            comments={this.state.comments}
            currentUser={this.props.currentUser}
            editComment={this.editComment}
            deleteComment={this.deleteComment}
          />
        </div>
        <div>
          <CommentForm
            location={this.props.location}
            lue={this.state.content}
            handleChange={this.handleChange}
            handleFetch={this.handleFetch}
          />
        </div>
      </div>
    );
  }
}

export default CommentContainer;
