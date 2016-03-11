/**
 * Created by developer on 11/03/16.
 */
var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
            <h1>Comments</h1>
            <CommentList data={this.props.data} />
             <CommentForm />
        </div>
    );
  }
});

// tutorial5.js
var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.comments.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        var commentViniNodes = this.props.data.superVini;
        return (
            <div className="commentList">
                {commentNodes}
                {commentViniNodes}
            </div>
        );
    }
});


var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
        Hello, world! I am a CommentForm.
        </div>
        );
    }
});


// tutorial4.js
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {marked(this.props.children.toString())}
             </div>
        );
    }
});

// tutorial8.js
var data ={
        superVini: 'Oloko!',
        comments: [
            {id: 1, author: "Pete Hunt", text: "This is one comment"},
            {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
            ]
        };

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
