// export class Image extends Component {
//     state = {
//         isModalOpen: false,
//     }

//     openModal = () => this.setState({ isModalOpen: true });
//     closeModal = () => this.setState({ isModalOpen: false });
    
//     render() {
//         const { webformatURL, tags, largeImageURL } = this.props.element;
//         const { isModalOpen } = this.state;
//         return (
//             <>
//                 <Img src={webformatURL} alt={tags} onClick={this.openModal} />
                
//                 <Modal
//                     isOpen={isModalOpen}
//                     onRequestClose={this.closeModal}
//                     style={customStyles}
//                     contentLabel="Example Modal">
//                     <img src={largeImageURL} alt={tags} />
//                 </Modal>
//             </>
//         )
//     }
// }