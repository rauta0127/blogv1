import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import siteMetadata from '@/data/siteMetadata';
import { GoogleAnalytics } from 'nextjs-google-analytics';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return (
    <>
      {isProduction && (
        <>
          {/* {siteMetadata.analytics.plausibleDataDomain && <Plausible />}
          {siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
          {siteMetadata.analytics.umamiWebsiteId && <Umami />} */}
          {siteMetadata.analytics.googleAnalytics && (
            <GoogleAnalytics
              trackPageViews
              gaMeasurementId={siteMetadata.analytics.googleAnalytics.googleAnalyticsId}
            />
          )}
        </>
      )}
    </>
  );
};

export default Analytics;