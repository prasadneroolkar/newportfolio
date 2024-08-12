import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Timeline = ({ tlTitle, data, dataEduc }) => {
  return (
    <>
      <section className="timeline">
        <div className="title_wrapper">
          <div className="icon_box">
            <MdOutlineWorkspacePremium name="book-outline" />
          </div>
          <h3 className="h3">{tlTitle}</h3>
        </div>

        <ol className="timeline_list">
          {data.map((ele) => (
            <li className="timeline_item" key={ele.id}>
              <h5 className="timeline_item_role">
                {ele.role || ele.stream}
                <span className="h4 timeline_item_title">
                  &nbsp;
                  {`@ ${ele.compTitle || ele.university}`}
                </span>
              </h5>

              <span>
                {ele.year?.fromYear &&
                  ele.year?.toYear &&
                  `${ele.year.fromYear} - ${ele.year.toYear}`}
              </span>
              <p className="timeline_text">{ele.description || ele.place}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Timeline;
