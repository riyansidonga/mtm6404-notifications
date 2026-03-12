import Notification from './Notification.jsx';

function NotificationsList({ notifications, onClearOne, onClearAll, children }) {
  const count = notifications.length;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>
          {count === 0 
            ? 'No notifications' 
            : `You have ${count} notification${count !== 1 ? 's' : ''}`}
        </h4>

        {count > 0 && (
          <button 
            className="btn btn-danger btn-sm"
            onClick={onClearAll}
          >
            Clear All
          </button>
        )}
      </div>

      {/* Using the children prop here */}
      {children}

      {count > 0 ? (
        notifications.map((notif) => (
          <Notification
            key={notif.id}
            id={notif.id}
            name={notif.name}
            message={notif.message}
            onClearOne={onClearOne}
          />
        ))
      ) : (
        <div className="alert alert-info text-center py-4">
          You're all caught up!
        </div>
      )}
    </div>
  );
}

export default NotificationsList;