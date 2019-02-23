export default function AbstractModal() {
  return null;
}
// import React from "react";
// import Modal from "react-modal";
// import { purple } from "../styles/variables";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     maxWidth: "560px"
//   }
// };

// // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

// if (typeof window !== `undefined`) {
//   Modal.setAppElement("#___gatsby");
// }

// class AbstractModal extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       modalIsOpen: false
//     };

//     this.openModal = this.openModal.bind(this);
//     this.closeModal = this.closeModal.bind(this);
//   }

//   openModal() {
//     this.setState({ modalIsOpen: true });
//   }

//   closeModal() {
//     this.setState({ modalIsOpen: false });
//   }

//   render() {
//     return (
//       <div
//         css={`
//           display: inline;
//         `}
//       >
//         <a href="#">
//           <strong onClick={this.openModal}>{this.props.talkTitle}</strong>
//         </a>
//         , <span className="speaker">{this.props.speaker}</span>
//         <Modal
//           closeTimeoutMS={150}
//           isOpen={this.state.modalIsOpen}
//           onRequestClose={this.closeModal}
//           style={customStyles}
//           contentLabel={this.props.talkTitle}
//         >
//           <div>
//             <h1>Talk Abstract</h1>
//             <h3
//               css={`
//                 margin-bottom: 12px;
//               `}
//             >
//               {this.props.speaker}
//             </h3>
//             <h2>{this.props.talkTitle}</h2>
//             <div
//               css={`
//                 margin-bottom: 1rem;
//               `}
//             >
//               {this.props.description}
//             </div>
//             <button
//               onClick={this.closeModal}
//               css={`
//                 float: right;
//                 border-color: ${purple};
//                 background: ${purple};
//                 border-radius: 3px;
//                 border-style: solid;
//                 color: white;
//                 cursor: pointer;
//                 font-family: "OdudoMono-Regular", sans-serif;
//                 font-size: 24px;
//                 height: 40px;
//                 width: 100%;
//               `}
//             >
//               close
//             </button>
//           </div>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default AbstractModal;
