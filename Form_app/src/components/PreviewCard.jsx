import React from 'react';

const PreviewCard = ({ user }) => {
  return (
    <div className="preview-simple">
      <h3>Live Preview</h3>
      <div>
        <strong>{user.name || 'Your Name'}</strong>
      </div>
      <div className="preview-email">{user.email || 'your.email@example.com'}</div>
      <div className="preview-occupation">{user.occupation || ''}</div>
      <p className="preview-bio">{user.bio || 'Your bio will appear here.'}</p>
    </div>
  );
};

export default PreviewCard;