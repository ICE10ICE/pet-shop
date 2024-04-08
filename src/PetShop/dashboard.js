import React, { useState } from 'react';

// Profile component
function Profile({ user }) {
  const [editFullname, setEditFullname] = useState(false);
  const [editOrganization, setEditOrganization] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [editLanguage, setEditLanguage] = useState(false);
  const [editAbout, setEditAbout] = useState(false);

  const handleEdit = (field) => {
    switch (field) {
      case 'fullname':
        setEditFullname(!editFullname);
        break;
      case 'organization':
        setEditOrganization(!editOrganization);
        break;
      case 'status':
        setEditStatus(!editStatus);
        break;
      case 'language':
        setEditLanguage(!editLanguage);
        break;
      case 'about':
        setEditAbout(!editAbout);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container">
      {/* Profile Avatar */}
      <div className="row align-items-center mb-4">
        <div className="col-4">
          <img src={user.avatarUrl} className="profile-round-small" alt="Profile Avatar" />
        </div>
        <div className="col-8">
          {/* Avatar upload form */}
          <form onSubmit={handleSubmit}>
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={(e) => handleSubmit(e)} />
              <label className="custom-file-label" htmlFor="customFileLang">Change Avatar</label>
            </div>
          </form>
        </div>
      </div>

      {/* Fullname */}
      <div className="row align-items-center">
        <div className="col">
          <div className="text-xs font-weight-bold text-gray-600 text-uppercase mb-1">Full Name</div>
          <div className="text-sm mb-o text-primary">
            {editFullname ? (
              <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" defaultValue={user.fullname} />
                <button type="submit" className="btn btn-primary btn-sm mt-3">Save Changes</button>
                <button type="button" className="btn btn-danger btn-sm mt-3" onClick={() => handleEdit('fullname')}>Cancel</button>
              </form>
            ) : (
              <span>{user.fullname}</span>
            )}
          </div>
        </div>
        <div className="col-auto">
          <a className="action-item mr-2 text-decoration-none" onClick={() => handleEdit('fullname')}>
            <span className="text-gray-500 mr-2">Edit</span>
            <i className="fas fa-edit text-gray-500 edit-icon"></i>
          </a>
        </div>
      </div>

      {/* Other profile fields */}
      {/* Similar structure as Fullname */}

    </div>
  );
}

export default Profile;
