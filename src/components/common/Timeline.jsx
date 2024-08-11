import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import data from "./DataTimeline";

const Timeline = ({ tlTitle }) => {
  const [
    {
      id,
      compTitle,
      year: { fromYear, toYear },
      description,
    },
  ] = data;
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
            <>
              <li className="timeline_item" key={ele.id}>
                <h4 className="h4 timeline_item_title">{ele.compTitle}</h4>
                <span>
                  {ele.year.fromYear} - {ele.year.toYear}
                </span>
                <p className="timeline_text">{ele.description}</p>
              </li>
            </>
          ))}
        </ol>
      </section>
    </>
  );
};

export default Timeline;
