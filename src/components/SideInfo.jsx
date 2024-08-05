import React from "react";

const SideInfo = () => {
  return (
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img
          src="./assets/images/my-avatar.png"
          alt="Richard hanrick"
          width="80"
        />
      </figure>

      <div className="info-content">
        <h1 className="name" title="Richard hanrick">
          Prasad hanrick
        </h1>

        <p className="title">Web developer</p>
      </div>

      <button className="info_more-btn btn btn-primary" data-sidebar-btn="">
        <span>Show Contacts</span>

        <ion-icon
          name="chevron-down"
          role="img"
          class="md hydrated"
          aria-label="chevron down"
        ></ion-icon>
      </button>
    </div>
  );
};

export default SideInfo;
