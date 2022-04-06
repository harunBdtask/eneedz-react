import Link from "next/link";
import React from "react";
import { connect } from "react-redux";
import AccountQuickLinksMobile from "./AccountQuickLinksMobile";

const MobileHeaderActions = ({ auth, ecomerce }) => {
  const { cartItems } = ecomerce;
  return (
    <div className="navigation__right d-flex align-items-center">
      <Link href="/account/shopping-cart">
        <a className="header__extra" href="#">
          <i className="icon-bag2"></i>
          <span>
            <i>{cartItems ? cartItems.length : 0}</i>
          </span>
        </a>
      </Link>

      {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
        <AccountQuickLinksMobile />
      ) : (
        <div className="header__extra">
          <Link href="/account/login">
            <i className="icon-user"></i>
          </Link>
        </div>
      )}

      <Link href="/account/merchant-account/login">
        <a className="mb-0" style={{ cursor: "pointer" }}>
          Merchant
          <span className="ml-2">
            <i className="icon-user"></i>
          </span>
        </a>
      </Link>
    </div>
  );
};

export default connect((state) => state)(MobileHeaderActions);