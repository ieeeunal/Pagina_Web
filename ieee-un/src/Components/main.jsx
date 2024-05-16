import React, { useState } from 'react';

import NavBar from './Navbar';
import Footer from './Footer';

const Main = ({ children, colorBackground, siteNavLinks}) => {
    return (
        <div>
            {/*{currentChapter.instagram !== undefined && currentChapter.instagram !== null && currentChapter.instagram !== '' ? (
                <a rel="noopener noreferrer" target="blank_" href={currentChapter.instagram}>
                    {<AiFillInstagram className={`${currentChapter.colorId}-color icons`} />}
                </a>
            ) : ("")}*/}
            <NavBar chapterName={`${colorBackground}`} siteNavLinks={siteNavLinks}/>
            <main>{children}</main>
            <Footer chapterName={`${colorBackground}`} />
        </div>
    );
};

export default Main;