import Script from "next/script";

export const GoogleAnalyticsInit = () => {
    return(
        <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-VKGYSJX0W1`} />
        <Script id="google-analytics-script">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-VKGYSJX0W1');
        `}
        </Script>
        </>
    )
};