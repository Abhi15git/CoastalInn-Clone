import React from 'react';
import styled from "..//../Cssmodules/Navbar.module.css";
import classNames from 'classnames';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    const Footer = classNames(styled.Footer, "width-less");
    const details=classNames(styled.details,"width-custom")
    return (
        <div   id={styled.container}>
            <div className={Footer}>
                <img src="https://webbox.imgix.net/images/uokyxzaiauezoxym/e99c22d8-07a7-4965-822a-a7db2b0cd7b2.png?auto=format,compress&fit=crop&crop=entropy&h=80&q=55" alt=""/>
            </div>
            <div className={Footer}>
             <a href="https://www.facebook.com/"><FacebookIcon color="primary" fontSize="large" cursor="pointer" style={{float:"right"}} /></a>
            </div>

            <div className={details} id={styled.detail}>
                <div>
                    <a href="/">475 North Michigan Avenue Beulah MI 49617 <br/>United States </a>
                </div>
                <div>
                    <a href="/">231-383-4295</a>
                </div>
                <div>
                    <a href="/">anna@costalsuitesresorts.com</a>
                </div>
            </div>

        </div>
    )
}

export default Footer
