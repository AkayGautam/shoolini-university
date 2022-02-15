import React from 'react'
import Header  from '../../components/Header';
import  BreadcrumbBox  from '../../components/common/Breadcrumb';
import { Styles } from '../../components/common/styles/header';
import Footer from '../../components/Footer';

const HistoryPage = () => {
    return (
        <>
         <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper about-page">
 
                    {/* Header 2 */}
                    <Header/>

                    {/* Breadcroumb */}
                    <BreadcrumbBox title="History" />

                    <Footer />
                </div>
            </Styles>   
        </>
    )
}

export default HistoryPage
