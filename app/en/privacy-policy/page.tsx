import Link from "next/link";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Nav lang="EN" />
    <header className="max-w-[700px] w-full px-2.5 mx-auto mt-12 mb-6">
      <h1 className="text-4xl mb-4 sm:mb-0">Privacy Policy</h1>
      <p className="mt-6 font-light text-neutral-200 leading-6">This Privacy Policy sets out the rules for storing and recording data on User Devices by the Service operating at the address <Link className="text-white font-regular underline" href="https://portfolio-eta-nine-50.vercel.app/">https://portfolio-eta-nine-50.vercel.app/</Link>. Krystian Kurlej Portfolio Page - the collected data is intended to be made available by the Service Administrator electronically.</p>
    </header>
    <main className="max-w-[700px] w-full px-2.5 py-5 mx-auto">
      <h4 className="mt-10 mb-4 text-2xl">1. Definitions</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Service - a portfolio website available at the address <Link className="text-white font-regular underline" href='https://portfolio-eta-nine-50.vercel.app/'>https://portfolio-eta-nine-50.vercel.app/</Link></li>
        <li className="mt-1">Administrator - Portfolio Author, who provides access to their works electronically through the Service and has the ability to store and view data saved on User Devices.</li>
        <li className="mt-1">Cookies - text data that is stored in the form of files on User Devices.</li>
        <li className="mt-1">Device - an electronic device with software that allows the User to access and use the Service.</li>
        <li className="mt-1">User - a natural person to whom the Administrator provides services through the Service.</li>
        <li className="mt-1">External Service - an internet service belonging to service providers, service recipients, or partners of the Administrator.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">2. Types of Cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Internal - cookies that are placed and read by the Service system on User Devices.</li>
        <li className="mt-1">External - cookies that are placed and read by external Service systems on User Devices.</li>
        <li className="mt-1">Persistent - cookies that are placed and read by the Service system or external Service systems on User Devices until they are manually deleted. Persistent Cookies are not automatically deleted when the browsing session ends, unless the User configures their Device to force the deletion of Cookies after the browsing session ends.</li>
        <li className="mt-1">Session - cookies that are placed and read by the Service system or external Service systems on User Devices during a single browsing session. After its conclusion, Session Cookies are removed from the User&apos;s Device.</li>
      </ol>
  
      <h4 className="mt-10 mb-4 text-2xl">3. Security</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Storage and reading mechanisms for Cookies do not retrieve any personal data or confidential information available on User Devices. It is not possible to transfer viruses, malicious software, and other threats to the User&apos;s electronic Device.</li>
        <li className="mt-1">Internal Cookies used by the Service Administrator are safe for User Devices.</li>
        <li className="mt-1">The Administrator is not responsible for External Cookies that come from External Services.</li>
      </ol>
  
      <h4 className="mt-10 mb-4 text-2xl">4. Purposes for Which the Service Uses Cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Improving access to the Service - in Cookie Files, the Administrator can store data regarding the preferences and settings of the Service for individual Users. This can lead to higher quality services provided by the Service, allowing the User to use the Service more efficiently, quickly, and easily.</li>
        <li className="mt-1">Statistics - the Administrator and External Services may use Cookies to collect and process statistical data, allowing them to monitor visitation rates, the types of Devices used by Users, and their behaviors. Thanks to this statistical data, the Administrator can analyze and improve the quality of Service operation.</li>
      </ol>

      <h4 className="mt-10 mb-4 text-2xl">5. External Services</h4>
      <p className="font-light text-neutral-200 leading-6">The following External Services, with which the Administrator cooperates, may store Cookies on the User&apos;s Devices:</p>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">Google Analytics</li>
        <li className="mt-1">Hotjar</li>
      </ol>
  
      <h4 className="mt-10 mb-4 text-2xl">6. Options for determining storage and access conditions for cookies</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">The User can independently and at any time make changes to the settings regarding access to data Cookies, as well as their storage and deletion.</li>
        <li className="mt-1">The User has the option to delete all Cookies saved on their Device up to this point.</li>
        <li className="mt-1">Information about the possibility of disabling the collection of Cookies can be found at: <Link target="_blank" className="text-white font-regular underline" href='https://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/'>https://jakwylaczyccookie.pl/jak-wylaczyc-pliki-cookies/</Link></li>
      </ol>
  
      <h4 className="mt-10 mb-4 text-2xl">7. Service Requirements</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">A User who limits the storage and access to Cookies on their Device may cause some of the Service&apos;s functions to not work properly.</li>
        <li className="mt-1">For any malfunctions in the operation of Service functions caused by limiting the storage and access to Cookies, the Administrator is not responsible.</li>
      </ol>
  
      <h4 className="mt-10 mb-4 text-2xl">8. Privacy Policy Changes</h4>
      <ol className="list-decimal pl-6 font-light text-neutral-200 leading-6">
        <li className="mt-1">The Administrator reserves the right to make changes to the Privacy Policy without informing Users about them.</li>
        <li className="mt-1">Any changes to the Privacy Policy will be published on this page.</li>
        <li className="mt-1">Changes to the Privacy Policy are effective from the date of their publication.</li>
      </ol>
  
    </main>
    <div className="max-w-[700px] w-full px-2.5 mx-auto my-12">
      <Link href='/en/' title="Portfolio" className="text-4xl flex gap-2 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
          <path d="M12.1332 14.2333L23.0666 14.2333C23.4443 14.2333 23.7612 14.3613 24.0172 14.6173C24.2732 14.8733 24.4008 15.1898 24.3999 15.5667C24.3999 15.9444 24.2719 16.2613 24.0159 16.5173C23.7599 16.7733 23.4435 16.9009 23.0666 16.9L12.1332 16.9L15.9999 20.7667C16.2443 21.0111 16.3666 21.3222 16.3666 21.7C16.3666 22.0778 16.2443 22.3889 15.9999 22.6333C15.7555 22.8778 15.4443 23 15.0666 23C14.6888 23 14.3777 22.8778 14.1332 22.6333L7.9999 16.5C7.73323 16.2333 7.5999 15.9222 7.5999 15.5667C7.5999 15.2111 7.73323 14.9 7.9999 14.6333L14.1332 8.5C14.3777 8.25555 14.6888 8.13333 15.0666 8.13333C15.4443 8.13333 15.7555 8.25555 15.9999 8.5C16.2443 8.74444 16.3666 9.05555 16.3666 9.43333C16.3666 9.81111 16.2443 10.1222 15.9999 10.3667L12.1332 14.2333Z" fill="white"/>
      </svg>
      Return to viewing portfolio
      </Link>
    </div>
    <Footer lang="EN" />
    </>
  );
};

export default PrivacyPolicy;
