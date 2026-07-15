import Modal from "react-modal";

function MovieModal({ isOpen, close, movie }) {
  return (
    <Modal className="modal" overlayClassName="modal-overlay" isOpen={isOpen} onRquesteClose={close} contentLabel={movie.Title}>
      <div className="modal-content">
        <span className="close"  onClick={close}>&times;</span>
        <div className="modal-header">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="modal-title">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
          <div className="moodal-body">
            <p>
                <strong> Genre: </strong> {movie.Genre}
            </p>
            <p>
                <strong> Rating: </strong> {movie.imdbRating}
            </p>
            <p>
                <strong> Runtime: </strong> {movie.Runtime}
            </p>
            <p>
                <strong> Cast: </strong> {movie.Actors}
            </p>
            <p>
                {movie.Plot}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
export default MovieModal
