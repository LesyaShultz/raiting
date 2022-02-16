// import React, { useState, useEffect } from "react";
// import { fetchMovieDetail, fetchMovieVideos } from "../../../Service/service";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import { Modal, ModalBody } from "react-bootstrap";
// import ReactPlayer from "react-player";
// // import { useParams } from "react-router-dom";


// export function MovieDetail({match}) {
//   // const {id} = useParams;
//   // console.log(id);

//   let params = match.params;

//   const [isOpen, setIsOpen] = useState(false);
//   const [detail, setDetail] = useState([]);
//   const [video, setVideo] = useState([]);

//   useEffect(() => {
//     const fetchApi = async () => {
//       setDetail(await fetchMovieDetail(params.id));
//       setVideo(await fetchMovieVideos(params.id));
//     };
//     fetchApi();
//   }, [params.id]);

//   const MoviePlayerModal = (props) => {
//     const youtubeUrl = "http://www.youtube.com/watch?v=";
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title
//           id="contained-modal-title-vcenter"
//           style={{color: '#000', fontWeight: 'bolder'}}
//           >
// {detail.title}
//           </Modal.Title>
//         </Modal.Header>
//         <ModalBody style={{backgroundColor: '#000'}}>
// <ReactPlayer
// className="container-fluid"
// url={youtubeUrl = video.key}
// playing
// width="100%"
// >

// </ReactPlayer>
//         </ModalBody>
//       </Modal>
//     );
//   };

//   return (
//     <div className="container">
//       <div className="row mt-2">
//         <MoviePlayerModal
//         show={isOpen}
//         onHide={() =>{
//           setIsOpen(false);
//         }}
//         >

//         </MoviePlayerModal>
//         <div className="col text-center" style={{ width: "100%" }}>
//           <img
//             src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
//             alt={detail.title}
//             className="img-fluid"
//           ></img>
//           <div className="carousel-center">
//             <i
//               onClick={() => setIsOpen(true)}
//               className="far fa-play-circle"
//               style={{ fontSize: 90, color: "yellow", cursor: "pointer" }}
//             ></i>
//           </div>
//           <div
//             className="carousel-caption"
//             style={{ textAlign: "center", fontSize: 35 }}
//           >
//             {detail.title}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieDetail;
