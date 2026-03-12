function Notification({ id, name, message, onClearOne }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <strong>{name}</strong>
          <p className="mb-0 text-muted">{message}</p>
        </div>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => onClearOne(id)}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Notification;