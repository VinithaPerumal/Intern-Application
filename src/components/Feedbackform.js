// import React, { Component } from 'react';

// class Feedbackform extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feedback: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ feedback: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     // You can add code here to handle the submission of feedback
//     console.log('Feedback submitted:', this.state.feedback);
//   };

//   render() {
//     return (
//       <div>
//         <h1>Feedback</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="feedbackTextarea">
//             Give Feedback to the internship program
//           </label>
//           <textarea
//             id="feedbackTextarea"
//             name="feedback"
//             value={this.state.feedback}
//             onChange={this.handleChange}
//             rows="4"
//             cols="50"
//             placeholder="Type your Feedback here"
//             required
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Feedbackform;

import React from 'react';

class FeedbackForm extends React.Component {
  render() {
    return (
      <div>
        <p>Give Feedback to the internship program</p>
        <textarea rows="20" cols="100" placeholder="Type your Feedback here"></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default FeedbackForm;
