import { React, Fragment } from "react";

export default function SectionTitle() {
  const { title, textColor } = this.props;
  return (
    <Fragment>
      <div className="section-title-default">
        <h2 className={`title ${textColor}`}>{title}</h2>
      </div>
    </Fragment>
  );
}
