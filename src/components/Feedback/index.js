import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  showThankyouPage = () => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="app-container">
        {isEmojiClicked ? (
          <div className="thank-you-con">
            <img
              src={loveEmojiUrl}
              className="love-emoji-img"
              alt="love emoji"
            />
            <h1 className="thank-you-heading">Thank you</h1>
            <p className="thank-you-para">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="card-container">
            <h1 className="para">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-container">
              {emojis.map(emoji => (
                <li key={emoji.id}>
                  <img
                    src={emoji.imageUrl}
                    className="url-img"
                    onClick={this.showThankyouPage}
                    alt={emoji.name}
                  />
                  <p className="name">{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
