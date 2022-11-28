import React from 'react';

import './index.scss';

const baseClass = 'after-dashboard';

const AfterDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <h4>After Dashboard</h4>
      <p>
        This section can be used to provide additional information to the user
      </p>
    </div>
  );
};

export default AfterDashboard;