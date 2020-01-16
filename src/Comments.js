import React, { Component } from 'react'
//import moment from 'moment'
import * as moment from 'moment'
const URL = 'https://ap-theory-server.herokuapp.com'
class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.commentsList || [],
      newComment: {
        name: '',
        text: '',
        topic: this.props.topic,
        parentCommentId: null,
      },
      submitting: false,
      success: false,
      error: false,
    }
  }
  async componentDidMount() {
    const { topic } = this.props

    try {
      const response = await fetch(`${URL}/comments/${topic}`)
      const comments = await response.json()
      console.log(comments);

      this.setState({ comments })
    } catch (error) {
      this.setState({ error: true })
    }
  }

  onSubmitComment = async event => {
    event.preventDefault()

    // so that the button can't be pressed repeatedly
    this.setState({ submitting: true })

    const { newComment, comments } = this.state
    const { topic } = this.props
    
    newComment.topic = topic;

    try {
      // POST to /comments
      const response = await fetch(`${URL}/comments/`, {

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(newComment),
      })
    

      // Append comment and reset newComment
      this.setState(prevState => ({
        ...prevState,
        comments: [newComment, ...comments],
        newComment: {
          name: '',
          text: '',
          topic,
          parentCommentId: null,
        },
        success: true,
        error: false,
      }))
    } catch (error) {
      this.setState({ ...this.initialState, error: true })
    }
  }

  handleChange = event => {
    const { newComment } = this.state
    const { name, value } = event.target

    this.setState({
      newComment: { ...newComment, [name]: value },
    })
  }
  render() {
    const { submitting, success, error, comments, newComment: { name, text } } = this.state

    const showError = () =>
      error && (
        <div className="error">
          <p>Comment failed to submit.</p>
        </div>
      )

    const showSuccess = () =>
      success && (
        <div className="success">
          <p>Comment submitted!</p>
        </div>
      )

    const commentForm = () => (
      <form id="new-comment" onSubmit={this.onSubmitComment}>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
          maxLength="255"
          placeholder="Name"
          required
        />
        <br></br>
        <textarea
          rows="10"
          cols="50"
          name="text"
          id="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Add a comment here"
          required
        />
        <br></br>
        <button onClick={() => this.onSubmitComment} type="submit" >
          Submit
      </button>
      </form>
    )

    return (
      <section id="comments">
        {success || error ? showError() || showSuccess() : ''}
        {commentForm()}
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.parent_comment_id)
            .map((comment, i) => {
              let child
              if (comment.id) {
                child = comments.find(c => comment.id == c.parent_comment_id)
              }

              return (
                <div className="comment" key={i}>
                  <header>
                    <p className="input-name">{comment.name}:</p>
                   {/* <div className="comment-date">{moment(comment.date).fromNow()}</div> */}
                  </header>
                  <p>{comment.text}</p>
                  {child && (
                    <div className="comment reply">
                      <header>
                        <h2>{child.name}</h2>
                        {moment().format('MMMM Do YYYY, h:mm:ss a')}
                         {/*  <div className="comment-date">{moment(child.date).fromNow()}</div>*/}
                      </header>
                      <p>{child.text}</p>
                    </div>
                  )}
                </div>
              )
            })}
      </section>
    )
  }
}

export default Comments;