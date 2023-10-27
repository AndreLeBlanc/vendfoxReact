import React from "react";

export default function Brand() {
  const { branstyle } = this.props;
  return (
    <React.Fragment>
      <ul className={`brand-list ${branstyle}`}>
        <li>
          <img src="/assets/images/brand/brand-01.png" alt="Logo Images" />
        </li>
        <li>
          <img src="/assets/images/brand/brand-02.png" alt="Logo Images" />
        </li>
        <li>
          <img src="/assets/images/brand/brand-03.png" alt="Logo Images" />
        </li>
        <li>
          <img src="/assets/images/brand/brand-04.png" alt="Logo Images" />
        </li>
        <li>
          <img src="/assets/images/brand/brand-05.png" alt="Logo Images" />
        </li>
        <li>
          <img src="/assets/images/brand/brand-06.png" alt="Logo Images" />
        </li>
      </ul>
    </React.Fragment>
  );
}
