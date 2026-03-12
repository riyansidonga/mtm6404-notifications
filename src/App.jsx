import { useState } from 'react';
import notificationsData from './notifications.js';
import NotificationsList from './NotificationsList.jsx';

import './App.css';

function App() {
  const [notifications, setNotifications] = useState(notificationsData);

  function handleClearOne(id) {
    setNotifications(notifications.filter(item => item.id !== id));
  }

  function handleClearAll() {
    setNotifications([]);
  }

  return (
    <div className="container my-5">
      <h1>Notifications</h1>

      <NotificationsList
        notifications={notifications}
        onClearOne={handleClearOne}
        onClearAll={handleClearAll}
      >
        {/* children prop – required by assignment */}
        <p className="text-muted mt-3">
          Loaded from notifications.js: {notificationsData.length} items
        </p>
      </NotificationsList>
    </div>
  );
}

export default App;